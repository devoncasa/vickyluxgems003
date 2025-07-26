import React, { useState, useEffect, useMemo, useRef } from 'react';
import { clarityGrades, certifications, GEM_DATA } from '../data/gem-data';
import { CloseIcon } from './IconComponents';
import { useAppContext } from '../context/AppContext';
import { Product, Material } from '../types';
import ProductCard from './ProductCard';

const categoryCodes: { [key: string]: string } = {
    "Precious Gemstones": "PR",
    "Semi-Precious Gemstones": "SP",
    "Burmese Amber": "AM"
};

const gemTypeCodes: { [key: string]: string } = {
    "Ruby": "RU", "Sapphire": "SA", "Emerald": "EM", "Diamond": "DI", "Spinel": "SPN", "Jadeite": "JD",
    "Agate": "AG", "Alexandrite": "AX", "Aquamarine": "AQ", "Citrine": "CT", "Garnet": "GN", "Lapis Lazuli": "LL",
    "Morganite": "MG", "Onyx": "ON", "Opal": "OP", "Pearl": "PL", "Peridot": "PD", "Tanzanite": "TA",
    "Topaz": "TP", "Tourmaline": "TR", "Zircon": "ZC", "Fossil Coral": "FC", "Burmese Amber": "AMB"
};

const countryCodes: { [key: string]: string } = {
    "Myanmar": "MY", "Tanzania": "TZ", "Colombia": "CO", "Afghanistan": "AF", "Australia": "AU", "Botswana": "BW",
    "Brazil": "BR", "Cambodia": "KH", "Canada": "CA", "China": "CN", "Ethiopia": "ET", "Indonesia": "ID",
    "Kashmir": "KSH", "Kenya": "KE", "Madagascar": "MG", "Mexico": "MX", "Mozambique": "MZ", "Namibia": "NA",
    "Nigeria": "NG", "Pakistan": "PK", "Philippines": "PH", "Russia": "RU", "South Africa": "ZA", "Sri Lanka": "LK",
    "Tajikistan": "TJ", "Thailand": "TH", "USA": "US", "Vietnam": "VN", "Zambia": "ZM"
};

const certAcronyms: { [key: string]: string } = {
    "GIA Bangkok – Gemological Institute of America (Thailand)": "GIA",
    "GRS Thailand – GemResearch Swisslab": "GRS",
    "AIGS – Asian Institute of Gemological Sciences": "AIGS",
    "Lotus Gemology": "LOTUS"
};

const getAcronym = (input: string = '', exceptions: { [key: string]: string } = {}): string => {
    if (!input) return '';
    if (exceptions[input]) return exceptions[input];
    return input.split(/[\s-]+/).map(word => word.charAt(0)).join('').toUpperCase();
};

interface AdminPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
    const { products, addProduct, deleteProduct, gemini } = useAppContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'add' | 'manage'>('add');
    const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

    const initialFormData = useMemo(() => ({
        gemCategory: '', gemType: '', gemColors: [] as string[], gemOrigins: [] as string[],
        gemClarity: '', gemCuts: [] as string[], gemCutOther: '',
        gemCerts: [] as string[], gemCertOther: '',
        gemDimension: '', gemWeight: '', gemWeightUnit: 'carats' as 'carats' | 'grams',
        gemPrice: '', gemDescription: '', gemSKU: ''
    }), []);

    const [formData, setFormData] = useState(initialFormData);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    
    const [productToPreview, setProductToPreview] = useState<Product | null>(null);
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const [formIsDirty, setFormIsDirty] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const runningNumberRef = useRef<string | null>(null);

    useEffect(() => {
        if (isOpen && sessionStorage.getItem('vlg-admin-auth') === 'true') {
            setIsLoggedIn(true);
        } else if (!isOpen) {
            setIsLoggedIn(false);
            setPassword('');
            setError('');
            resetAllState();
        }
    }, [isOpen]);

    const resetAllState = () => {
        resetForm();
        setActiveTab('add');
        setConfirmDeleteId(null);
        setShowExitConfirm(false);
        setProductToPreview(null);
    };

    useEffect(() => {
        const isDirty = JSON.stringify(formData) !== JSON.stringify(initialFormData) || uploadedFiles.length > 0;
        setFormIsDirty(isDirty);
    }, [formData, uploadedFiles, initialFormData]);
    
    const resetForm = () => {
        setFormData(initialFormData);
        setUploadedFiles([]);
        setImagePreviews([]);
        setIsGenerating(false);
        runningNumberRef.current = null;
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === '0007') {
            setIsLoggedIn(true);
            setError('');
            sessionStorage.setItem('vlg-admin-auth', 'true');
        } else {
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSkuInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const sanitizedValue = value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
        setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    };

    const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name } = e.target;
        const selected = Array.from(e.target.selectedOptions, option => option.value);
        setFormData(prev => ({ ...prev, [name]: selected }));
    };

    const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (/^\d*\.?\d*$/.test(value)) {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const handleDimensionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (/^[0-9.]*$/.test(value)) {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const formattedDimension = useMemo(() => {
        if (!formData.gemDimension) return '';
        return `${formData.gemDimension.replace(/\./g, ' x ')} mm`;
    }, [formData.gemDimension]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value;
        const gemTypes = Object.keys(GEM_DATA.categories[newCategory] || {});
        const newGemType = gemTypes.length === 1 ? gemTypes[0] : '';
        const newWeightUnit = newCategory === 'Burmese Amber' ? 'grams' : 'carats';
        
        setFormData({
            ...initialFormData,
            gemSKU: '',
            gemCategory: newCategory,
            gemType: newGemType,
            gemWeightUnit: newWeightUnit
        });
        runningNumberRef.current = null;
    };
    
    const generatedProductName = useMemo(() => {
        if (!formData.gemType || formData.gemColors.length === 0) return '';
        const parts = ["High Grade"];
        parts.push(formData.gemColors[0]);
        parts.push(formData.gemType);

        let cutPart = '';
        if (formData.gemCuts.length > 0) {
            const firstCut = formData.gemCuts[0];
            if (firstCut === 'Other') cutPart = formData.gemCutOther;
            else if (firstCut) {
                const noCutSuffix = ["Cabochon", "Bangle", "Bead", "Buddha", "Carving", "Coin", "Donut", "Drop", "Figurine", "Gua Sha", "Pendant", "Ring"];
                cutPart = noCutSuffix.includes(firstCut) ? firstCut : `${firstCut} Cut`;
            }
        }
        if(cutPart) parts.push(cutPart);
        return parts.join(' ').replace(/\s+/g, ' ').trim();
    }, [formData.gemColors, formData.gemType, formData.gemCuts, formData.gemCutOther]);

    const generatedSKU = useMemo(() => {
        if (!formData.gemCategory || !formData.gemType) {
            if (runningNumberRef.current) runningNumberRef.current = null;
            return 'Fill required fields...';
        }
    
        if (!runningNumberRef.current) {
            runningNumberRef.current = Math.floor(10000 + Math.random() * 90000).toString();
        }

        const parts = [];
        parts.push(categoryCodes[formData.gemCategory]);
        parts.push(gemTypeCodes[formData.gemType]);
        if (formData.gemColors.length > 0) parts.push(getAcronym(formData.gemColors[0]));
        if (formData.gemOrigins.length > 0) parts.push(countryCodes[formData.gemOrigins[0]]);
        const cutInput = formData.gemCuts.includes('Other') ? formData.gemCutOther : formData.gemCuts[0];
        if (cutInput) parts.push(getAcronym(cutInput, { "Round": "RD", "Cushion": "CU", "Cabochon": "CB" }));
        if (formData.gemClarity) parts.push(formData.gemClarity);
        if (formData.gemDimension) parts.push(formData.gemDimension);
        if (formData.gemWeight) parts.push(`${formData.gemWeight}${formData.gemWeightUnit === 'grams' ? 'g' : 'ct'}`);
        const certInput = formData.gemCerts.includes('Other') ? formData.gemCertOther : formData.gemCerts[0];
        if (certInput) parts.push(getAcronym(certInput, certAcronyms));
        parts.push(runningNumberRef.current);

        return parts.filter(Boolean).join('-').toUpperCase();
    }, [formData]);

    const availableGemTypes = useMemo(() => formData.gemCategory ? Object.keys(GEM_DATA.categories[formData.gemCategory] || {}) : [], [formData.gemCategory]);
    const gemData = useMemo(() => (formData.gemCategory && formData.gemType) ? GEM_DATA.categories[formData.gemCategory]?.[formData.gemType] || null : null, [formData.gemCategory, formData.gemType]);
    
    const availableCuts = useMemo(() => {
        if (!gemData) return [];
        let cuts = [...GEM_DATA.cuts.standard];
        if (formData.gemType === 'Jadeite') cuts.push(...GEM_DATA.cuts.jade);
        if (gemData.cuts) cuts.push(...gemData.cuts);
        cuts.push('Other');
        return [...new Set(cuts)].sort();
    }, [gemData, formData.gemType]);

    const processImage = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return reject('Canvas context not available');

                    const targetAspectRatio = 3 / 4;
                    const targetWidth = 600;
                    const targetHeight = 800;

                    canvas.width = targetWidth;
                    canvas.height = targetHeight;

                    let sourceX = 0, sourceY = 0;
                    let sourceWidth = img.width;
                    let sourceHeight = img.height;
                    const sourceAspectRatio = img.width / img.height;

                    if (sourceAspectRatio > targetAspectRatio) {
                        sourceWidth = img.height * targetAspectRatio;
                        sourceX = (img.width - sourceWidth) / 2;
                    } else {
                        sourceHeight = img.width / targetAspectRatio;
                        sourceY = (img.height - sourceHeight) / 2;
                    }
                    
                    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, targetWidth, targetHeight);
                    resolve(canvas.toDataURL('image/jpeg', 0.85));
                };
                img.onerror = reject;
                img.src = e.target?.result as string;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length + uploadedFiles.length > 5) { alert('You can only upload a maximum of 5 images.'); return; }
        
        const processedImageUrls = await Promise.all(files.map(processImage));
        
        setUploadedFiles(prev => [...prev, ...files]);
        setImagePreviews(prev => [...prev, ...processedImageUrls]);
    };

    const removeImage = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const canGenerateDescription = useMemo(() => (formData.gemCategory && formData.gemType && formData.gemWeight && formData.gemPrice && uploadedFiles.length > 0 && formData.gemColors.length > 0), [formData, uploadedFiles.length]);
    const canPreviewProduct = useMemo(() => (canGenerateDescription && formData.gemDescription.trim() !== ''), [canGenerateDescription, formData.gemDescription]);

    const generateDescription = async () => {
        if (!canGenerateDescription || isGenerating) return;
        if (!gemini) {
             alert("Error: AI features are disabled. Please configure the API key in the environment.");
             return;
        }
        setIsGenerating(true); setFormData(prev => ({...prev, gemDescription: ''}));
        try {
            let cutString = formData.gemCuts.filter(c => c !== 'Other').join(', ');
            if (formData.gemCutOther) { cutString += (cutString ? ', ' : '') + formData.gemCutOther; }
            
            let certString = formData.gemCerts.filter(c => c !== 'Other').join(', ');
            if (formData.gemCertOther) { certString += (certString ? ', ' : '') + formData.gemCertOther; }

            const prompt = `Act as an expert gemologist and luxury copywriter for "VickyLuxGems". Write a compelling, SEO-optimized product description for the following gemstone, under 750 characters. Weave the details into an elegant narrative focusing on beauty, rarity, history, and emotional resonance. Highlight key selling points to convince a customer to buy.
                - Product Name: ${generatedProductName}
                - SKU: ${formData.gemSKU || generatedSKU}
                - Type: ${formData.gemType}
                - Color(s): ${formData.gemColors.join(', ')}
                - Origin(s): ${formData.gemOrigins.join(', ')}
                - Clarity: ${formData.gemClarity}
                - Cut/Shape(s): ${cutString}
                - Dimensions: ${formattedDimension || 'Not specified'}
                - Weight: ${formData.gemWeight} ${formData.gemWeightUnit}
                - Price: THB ${parseInt(formData.gemPrice).toLocaleString()}
                - Certifications: ${certString}
                Provide only the product description text.`;
            
            const response = await gemini.models.generateContent({ 
                model: 'gemini-2.5-flash', 
                contents: prompt,
                config: {
                    maxOutputTokens: 250,
                    thinkingConfig: { thinkingBudget: 50 },
                }
            });
            setFormData(prev => ({...prev, gemDescription: response.text.trim()}));
        } catch (error) {
            console.error("Gemini API Error:", error);
            setFormData(prev => ({...prev, gemDescription: "Error generating description."}));
        } finally {
            setIsGenerating(false);
        }
    };

    const createProductFromState = (): Product => {
        const weightInGrams = formData.gemWeightUnit === 'carats' ? Number(formData.gemWeight) * 0.2 : Number(formData.gemWeight);
        let certString = formData.gemCerts.filter(c => c !== 'Other').join(', ');
        if (formData.gemCertOther) { certString += (certString ? ', ' : '') + formData.gemCertOther; }

        return {
            id: `prod_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            sku: formData.gemSKU || generatedSKU,
            name: generatedProductName,
            category: formData.gemType.toLowerCase().replace(/\s/g, '-'),
            material: formData.gemType as Material,
            price: Number(formData.gemPrice),
            story: formData.gemDescription,
            energyProperties: ['Clarity', 'Prosperity', 'Protection'],
            media: {
                mainImageUrl: imagePreviews[0] || 'https://placehold.co/600x800',
                gallery: imagePreviews.slice(1),
            },
            specifications: {
                totalWeight_grams: weightInGrams,
                origin: formData.gemOrigins.join(', '),
                clarityLevel: formData.gemClarity,
                finish: [ ...formData.gemCuts.filter(c => c !== 'Other'), formData.gemCutOther ].filter(Boolean).join(', '),
                dimensions_mm: formattedDimension,
            },
            certification: {
                isCertified: formData.gemCerts.length > 0,
                authority: certString || undefined,
            },
            inventory: { stock: 1, isAvailable: true },
            isNewArrival: true,
        };
    };

    const handlePreview = () => {
        if (!canPreviewProduct) return;
        setProductToPreview(createProductFromState());
    };
    
    const handleSaveAndPost = () => {
        if (!canPreviewProduct) {
            alert("Please fill all required fields and generate a description before submitting.");
            return;
        }
        const newProduct = createProductFromState();
        addProduct(newProduct);
        setShowSuccessNotification(true);
        setProductToPreview(null);
        setTimeout(() => setShowSuccessNotification(false), 3000);
        resetForm();
    };

    const handleDelete = (productId: string) => {
        deleteProduct(productId);
        setConfirmDeleteId(null);
    };

    const handleCloseAttempt = () => {
        if (formIsDirty) {
            setShowExitConfirm(true);
        } else {
            onClose();
        }
    };
    
    const handleConfirmExit = () => {
        setShowExitConfirm(false);
        onClose();
    };

    if (!isOpen) return null;

    if (!isLoggedIn) {
        return (
            <div className="admin-modal-overlay">
                <div className="admin-modal-content admin-login-view">
                    <div className="admin-modal-body">
                        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="admin-form-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="admin-input" required autoFocus />
                            </div>
                            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                            <button type="submit" className="admin-button-primary w-full">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-modal-overlay">
            {showExitConfirm && (
                <div className="admin-confirm-modal">
                    <div className="admin-confirm-modal-content">
                        <h3 className="text-xl font-bold mb-2">Unsaved Changes</h3>
                        <p className="mb-4">You have unsaved changes. Are you sure you want to exit?</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setShowExitConfirm(false)} className="px-6 py-2 rounded-md bg-gray-200">Cancel</button>
                            <button onClick={handleConfirmExit} className="admin-delete-btn">Exit Anyway</button>
                        </div>
                    </div>
                </div>
            )}
            {productToPreview && (
                <div className="admin-modal-overlay" onClick={() => setProductToPreview(null)}>
                    <div className="admin-modal-content admin-preview-modal" onClick={e => e.stopPropagation()}>
                         <button onClick={() => setProductToPreview(null)} className="admin-modal-close-btn" aria-label="Close preview"><CloseIcon className="w-6 h-6"/></button>
                         <div className="admin-modal-body">
                            <h2 className="text-2xl font-bold mb-4">Product Card Preview</h2>
                            <ProductCard product={productToPreview} onAddToCart={() => {}} />
                             <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <button onClick={() => setProductToPreview(null)} className="flex-1 admin-button-primary bg-gray-600 hover:bg-gray-700">Edit</button>
                                <button onClick={handleSaveAndPost} className="flex-1 admin-button-primary">Save & Post to Shop</button>
                            </div>
                         </div>
                    </div>
                </div>
            )}
            <div className="admin-modal-content">
                <button onClick={handleCloseAttempt} className="admin-modal-close-btn" aria-label="Close admin panel"><CloseIcon className="w-8 h-8"/></button>
                <div className="p-6 border-b border-[var(--c-border)]">
                    <h1 className="text-3xl font-bold text-[var(--c-heading)]">Inventory & Content Management</h1>
                    <div className="admin-tabs flex items-center mt-4">
                        <button onClick={() => setActiveTab('add')} className={`admin-tab ${activeTab === 'add' ? 'active' : ''}`}>Add Product</button>
                        <button onClick={() => setActiveTab('manage')} className={`admin-tab ${activeTab === 'manage' ? 'active' : ''}`}>Manage Inventory</button>
                    </div>
                </div>

                <div className="admin-modal-body">
                    {activeTab === 'add' ? (
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            {showSuccessNotification && (
                                <div className="mb-4 p-3 bg-green-100 text-green-800 border border-green-200 rounded-md text-center">Product successfully added!</div>
                            )}
                            <div className="admin-form-section">
                                <h2>Category</h2>
                                <div className="admin-form-field">
                                    <label htmlFor="gemCategory">Gemstone Category</label>
                                    <select id="gemCategory" name="gemCategory" value={formData.gemCategory} onChange={handleCategoryChange} className="admin-select" required>
                                        <option value="">Select a category...</option>
                                        {Object.keys(GEM_DATA.categories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="admin-form-section">
                                <h2>Specification</h2>
                                <div className="admin-form-field">
                                    <label htmlFor="gemSKU">SKU</label>
                                    <div className="flex items-center gap-2">
                                        <input type="text" id="gemSKU" name="gemSKU" value={formData.gemSKU} onChange={handleSkuInputChange} className="admin-input flex-grow" placeholder="Manually enter or generate" />
                                        <button type="button" onClick={() => setFormData(prev => ({...prev, gemSKU: generatedSKU}))} className="btn-primary btn--compact">Generate</button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Auto-suggestion: <span className="font-mono">{generatedSKU}</span></p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="admin-form-field">
                                        <label htmlFor="gemType">Material</label>
                                        <select id="gemType" name="gemType" value={formData.gemType} onChange={handleInputChange} className="admin-select" required disabled={availableGemTypes.length === 0}>
                                            <option value="">Select a material...</option>
                                            {availableGemTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                        </select>
                                    </div>
                                    <div className="admin-form-field">
                                        <label htmlFor="gemColors">Color (select one or more)</label>
                                        <select id="gemColors" name="gemColors" multiple value={formData.gemColors} onChange={handleMultiSelectChange} className="admin-select admin-multi-select" required disabled={!gemData}>
                                            {gemData?.colors.map(color => <option key={color} value={color}>{color}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="admin-form-field">
                                        <label htmlFor="gemOrigins">Origin (select one or more)</label>
                                        <select id="gemOrigins" name="gemOrigins" multiple value={formData.gemOrigins} onChange={handleMultiSelectChange} className="admin-select admin-multi-select" disabled={!gemData}>
                                            {(gemData?.origins || GEM_DATA.origins.standard).map(origin => <option key={origin} value={origin}>{origin}</option>)}
                                        </select>
                                    </div>
                                    <div className="admin-form-field">
                                        <label htmlFor="gemClarity">Clarity</label>
                                        <select id="gemClarity" name="gemClarity" value={formData.gemClarity} onChange={handleInputChange} className="admin-select">
                                            <option value="">Select clarity...</option>
                                            {clarityGrades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="admin-form-field">
                                    <label htmlFor="gemCuts">Finish/Cut (select one or more)</label>
                                    <select id="gemCuts" name="gemCuts" multiple value={formData.gemCuts} onChange={handleMultiSelectChange} className="admin-select admin-multi-select" disabled={!gemData}>
                                        {availableCuts.map(cut => <option key={cut} value={cut}>{cut}</option>)}
                                    </select>
                                     {formData.gemCuts.includes('Other') && (
                                        <input type="text" name="gemCutOther" value={formData.gemCutOther} onChange={handleInputChange} className="admin-input mt-2" placeholder="Specify other cut/finish" />
                                    )}
                                </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="admin-form-field">
                                        <label htmlFor="gemDimension">Dimension (e.g., 10.12.8)</label>
                                        <input type="text" id="gemDimension" name="gemDimension" value={formData.gemDimension} onChange={handleDimensionInput} className="admin-input" />
                                        {formattedDimension && (
                                            <p className="text-xs text-gray-500 mt-1">Formatted: {formattedDimension}</p>
                                        )}
                                    </div>
                                    <div className="admin-form-field">
                                        <label htmlFor="gemWeight">Weight</label>
                                        <div className="flex gap-2">
                                            <input type="text" id="gemWeight" name="gemWeight" value={formData.gemWeight} onChange={handleNumericInput} className="admin-input" required />
                                            <select name="gemWeightUnit" value={formData.gemWeightUnit} onChange={handleInputChange} className="admin-select">
                                                <option value="carats">carats</option>
                                                <option value="grams">grams</option>
                                            </select>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                            
                            <div className="admin-form-section">
                                <h2>Pricing, Certification & Media</h2>
                                <div className="admin-form-field">
                                    <label htmlFor="gemPrice">Total Price (THB)</label>
                                    <input type="text" id="gemPrice" name="gemPrice" value={formData.gemPrice} onChange={handleNumericInput} className="admin-input" required />
                                </div>
                                <div className="admin-form-field">
                                    <label htmlFor="gemCerts">Certification (select one or more)</label>
                                    <select id="gemCerts" name="gemCerts" multiple value={formData.gemCerts} onChange={handleMultiSelectChange} className="admin-select admin-multi-select">
                                        {certifications.map(cert => <option key={cert} value={cert}>{cert}</option>)}
                                    </select>
                                    {formData.gemCerts.includes('Other') && (
                                        <input type="text" name="gemCertOther" value={formData.gemCertOther} onChange={handleInputChange} className="admin-input mt-2" placeholder="Specify other certification" />
                                    )}
                                </div>
                                <div className="admin-form-field">
                                    <label>Media (First image is main, max 5, auto-cropped to 3:4)</label>
                                    <input type="file" onChange={handleImageUpload} multiple accept="image/*" className="admin-input" />
                                    <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-4">
                                        {imagePreviews.map((src, index) => (
                                            <div key={index} className="relative group aspect-[3/4] bg-gray-100 rounded-md">
                                                <img src={src} alt={`Preview ${index}`} className="w-full h-full object-cover rounded-md" />
                                                <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-600/80 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">&times;</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="admin-form-section">
                                <h2>Description</h2>
                                <div className="admin-form-field">
                                    <label htmlFor="gemDescription">Product Story & Description</label>
                                    <textarea id="gemDescription" name="gemDescription" rows={6} value={formData.gemDescription} onChange={handleInputChange} className="admin-textarea" required></textarea>
                                    <button type="button" onClick={generateDescription} disabled={!canGenerateDescription || isGenerating} className="admin-button-primary mt-2 disabled:bg-gray-400">
                                        {isGenerating ? <><span className="loader mr-2"></span> Generating...</> : '✨ Generate with AI'}
                                    </button>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-[var(--c-border)] flex flex-col sm:flex-row gap-4">
                                <button type="button" onClick={resetForm} className="admin-button-primary bg-stone-500 hover:bg-stone-600">+ Add New Product</button>
                                <button type="button" onClick={handlePreview} disabled={!canPreviewProduct} className="flex-1 admin-button-primary bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400">Preview</button>
                                <button type="button" onClick={handleCloseAttempt} className="admin-button-primary bg-red-700 hover:bg-red-800">Exit</button>
                            </div>
                        </form>
                    ) : (
                        <div>
                            {confirmDeleteId && (
                                <div className="admin-confirm-modal">
                                    <div className="admin-confirm-modal-content">
                                        <h3 className="text-xl font-bold mb-2">Confirm Deletion</h3>
                                        <p className="mb-4">Are you sure you want to delete "{products.find(p => p.id === confirmDeleteId)?.name}"? This action cannot be undone.</p>
                                        <div className="flex justify-center gap-4">
                                            <button onClick={() => setConfirmDeleteId(null)} className="px-6 py-2 rounded-md bg-gray-200">Cancel</button>
                                            <button onClick={() => handleDelete(confirmDeleteId)} className="admin-delete-btn">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="admin-inventory-list space-y-3">
                                {products.map(product => (
                                    <div key={product.id} className="admin-inventory-item">
                                        <img src={product.media.mainImageUrl} alt={product.name} className="admin-inventory-item-img" />
                                        <span className="admin-inventory-item-name">{product.name}</span>
                                        <button onClick={() => setConfirmDeleteId(product.id)} className="admin-delete-btn">Delete</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
