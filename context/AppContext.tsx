import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { GoogleGenAI } from '@google/genai';

// Centralized AI instance creation for secure and efficient use of the API key from environment variables.
// The API key MUST be provided as `process.env.API_KEY` in the execution environment.
const API_KEY = process.env.API_KEY;
let geminiInstance: GoogleGenAI | null = null;

if (API_KEY) {
    try {
        geminiInstance = new GoogleGenAI({ apiKey: API_KEY });
    } catch (error) {
        console.error("Failed to initialize GoogleGenAI:", error);
    }
} else {
    console.warn("Vicky LuxGems AI Features Disabled: API_KEY environment variable not set.");
}

interface AppContextType {
    isAdminPanelOpen: boolean;
    setIsAdminPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
    products: Product[];
    addProduct: (newProduct: Product) => void;
    deleteProduct: (productId: string) => void;
    gemini: GoogleGenAI | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>(PRODUCTS);
    
    const addProduct = (newProduct: Product) => {
        setProducts(prevProducts => [newProduct, ...prevProducts]);
    };
    
    const deleteProduct = (productId: string) => {
        setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
    };

    return (
        <AppContext.Provider value={{ 
            isAdminPanelOpen, 
            setIsAdminPanelOpen,
            products,
            addProduct,
            deleteProduct,
            gemini: geminiInstance
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};