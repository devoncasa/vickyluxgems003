import { Product, Material, Amulet, MaterialDetail, BlogPost, AmberColorDetail, Metal, BeadSize, AmberSpectrumDetail, NavLink, ShopCategory, Author, TesbihRosaryMaterial, TesbihRosaryGrade, PrayerBeadData, TasselShape, TasselMaterial, VisualMaterial } from './types';

export const BACKGROUND_IMAGES = [
  'https://i.postimg.cc/KYbWqJRH/vkluxgems-background-landscape-001.webp',
  'https://i.postimg.cc/52B7CLnq/vkluxgems-background-landscape-0010.webp',
  'https://i.postimg.cc/rpqhCsH6/vkluxgems-background-landscape-0011.webp',
  'https://i.postimg.cc/QMSf6sLF/vkluxgems-background-landscape-0012.webp',
  'https://i.postimg.cc/500nTG1n/vkluxgems-background-landscape-0013.webp',
  'https://i.postimg.cc/j5FZbXSK/vkluxgems-background-landscape-0014.webp',
  'https://i.postimg.cc/fyS5T9Vd/vkluxgems-background-landscape-0015.webp',
  'https://i.postimg.cc/XNZ0y1Ff/vkluxgems-background-landscape-0016.webp',
  'https://i.postimg.cc/V5ygSktV/vkluxgems-background-landscape-0016-1.webp',
  'https://i.postimg.cc/1RL100cL/vkluxgems-background-landscape-0017.webp',
  'https://i.postimg.cc/TYgMtyth/vkluxgems-background-landscape-0019.webp',
  'https://i.postimg.cc/fL2gbs5G/vkluxgems-background-landscape-002.webp',
  'https://i.postimg.cc/XYWMmVPL/vkluxgems-background-landscape-0020.webp',
  'https://i.postimg.cc/zGkm1sZr/vkluxgems-background-landscape-0021.webp',
  'https://i.postimg.cc/0N5T5VPJ/vkluxgems-background-landscape-0022.webp',
  'https://i.postimg.cc/Zqf1W65s/vkluxgems-background-landscape-0023.webp',
  'https://i.postimg.cc/C1z9kdZh/vkluxgems-background-landscape-0024.webp',
  'https://i.postimg.cc/3RVVB7pg/vkluxgems-background-landscape-0025.webp',
  'https://i.postimg.cc/dtMgZsJF/vkluxgems-background-landscape-0026.webp',
  'https://i.postimg.cc/0jS3X3dh/vkluxgems-background-landscape-0027.webp',
  'https://i.postimg.cc/ryRvp0Xg/vkluxgems-background-landscape-0028.webp',
  'https://i.postimg.cc/L6zwzcs1/vkluxgems-background-landscape-0029.webp',
  'https://i.postimg.cc/JhQ29ZX4/vkluxgems-background-landscape-003.webp',
  'https://i.postimg.cc/XY4hxsZD/vkluxgems-background-landscape-0030.webp',
  'https://i.postimg.cc/t4kccFWR/vkluxgems-background-landscape-0031.webp',
  'https://i.postimg.cc/R00YxqL7/vkluxgems-background-landscape-0032.webp',
  'https://i.postimg.cc/qRhZgYYg/vkluxgems-background-landscape-0033.webp',
  'https://i.postimg.cc/tgmMqyBL/vkluxgems-background-landscape-0034.webp',
  'https://i.postimg.cc/j5p3fc0c/vkluxgems-background-landscape-0035.webp',
  'https://i.postimg.cc/6qCjfZBX/vkluxgems-background-landscape-0036.webp',
  'https://i.postimg.cc/v8nNsJfN/vkluxgems-background-landscape-0037.webp',
  'https://i.postimg.cc/jdrkdMhd/vkluxgems-background-landscape-0038.webp',
  'https://i.postimg.cc/MKb3c1s0/vkluxgems-background-landscape-0039.webp',
  'https://i.postimg.cc/FRsBmzbb/vkluxgems-background-landscape-004.webp',
  'https://i.postimg.cc/x1fxLq7w/vkluxgems-background-landscape-0040.webp',
  'https://i.postimg.cc/1X87ndjf/vkluxgems-background-landscape-005.webp',
  'https://i.postimg.cc/dtTSJzCf/vkluxgems-background-landscape-006.webp',
  'https://i.postimg.cc/5yD7wmhp/vkluxgems-background-landscape-007.webp',
  'https://i.postimg.cc/VshVQYJM/vkluxgems-background-landscape-008.webp',
  'https://i.postimg.cc/Mp23Hdbp/vkluxgems-background-landscape-009.webp'
];

export const HERO_SLIDESHOW_IMAGES = [
    'https://i.postimg.cc/cLNN457q/hero-section-background-vicky-001.jpg',
    'https://i.postimg.cc/90rcZR0v/hero-section-background-vicky-0010.jpg',
    'https://i.postimg.cc/FRP9Ygry/hero-section-background-vicky-0011.jpg',
    'https://i.postimg.cc/V6sfsH8s/hero-section-background-vicky-0012.jpg',
    'https://i.postimg.cc/Qd5xfTmD/hero-section-background-vicky-0013.jpg',
    'https://i.postimg.cc/nLJVghSD/hero-section-background-vicky-0014.jpg',
    'https://i.postimg.cc/vHCZ7zWX/hero-section-background-vicky-0015.jpg',
    'https://i.postimg.cc/CLRKftfz/hero-section-background-vicky-0016.jpg',
    'https://i.postimg.cc/02Ssvqwd/hero-section-background-vicky-002.jpg',
    'https://i.postimg.cc/2jMDg5VS/hero-section-background-vicky-003.jpg',
    'https://i.postimg.cc/kG0PSTkb/hero-section-background-vicky-004.jpg',
    'https://i.postimg.cc/RFbBSSdG/hero-section-background-vicky-005.jpg',
    'https://i.postimg.cc/76L4rG3f/hero-section-background-vicky-006.jpg',
    'https://i.postimg.cc/PqyH7z8g/hero-section-background-vicky-007.jpg',
    'https://i.postimg.cc/JzwRHhL2/hero-section-background-vicky-008.jpg',
    'https://i.postimg.cc/44SfZ5FZ/hero-section-background-vicky-009.jpg',
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { 
    name: 'About Us & Policies',
    submenus: [
      { name: 'Our Story', path: '/about' },
      { name: 'Our Guarantee', path: '/our-guarantee' },
      { name: 'How to Take Care', path: '/policies/care-guide' },
      { name: 'Pre-Order Policy', path: '/policies/pre-order' },
      { name: 'Shipping & Delivery Policy', path: '/policies/shipping' },
      { name: 'Warranty Policy', path: '/policies/warranty' },
      { name: 'Return Policy', path: '/policies/returns' },
      { name: 'Privacy Policy', path: '/policies/privacy' },
    ]
  },
  { name: 'Blogs', path: '/blog' },
  { name: 'Shop', path: '/collection' },
  { 
    name: 'Custom Jewelry',
    submenus: [
      { name: 'Custom Juzu', path: '/prayer-bead-builder/Juzu' },
      { name: 'Custom Tesbih', path: '/prayer-bead-builder/Tesbih' },
      { name: 'Custom Rosary', path: '/prayer-bead-builder/Rosary' },
      { name: 'Build Amber Set', path: '/build-your-set' },
    ]
  },
  { name: 'Get to Know GIT', path: '/git-info' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact Us', path: '/contact' }
];

export const SHOP_CATEGORIES: ShopCategory[] = [
    { name: 'Bracelets', slug: 'bracelets' },
    { 
        name: 'Prayer Beads', 
        slug: 'prayer-beads',
        subCategories: [
            { name: '27 Beads', slug: 'prayer-beads-27' },
            { name: '54 Beads', slug: 'prayer-beads-54' },
            { name: '108 Beads', slug: 'prayer-beads-108' },
        ]
    },
    { name: 'Amber Pendants', slug: 'pendants' },
    { name: 'Amber Rings', slug: 'rings' },
    { name: 'Amber Necklaces', slug: 'necklaces' },
    { 
        name: 'Decorative Stones', 
        slug: 'decorative-stones',
        subCategories: [
            { name: 'Fossil Coral', slug: 'decorative-stones-fossil-coral' },
            { name: 'Agate', slug: 'decorative-stones-agate' },
            { name: 'Jade', slug: 'decorative-stones-jade' },
        ]
    },
];

const generateBeadSpecs = (): { size: BeadSize; weight: number }[] => {
    const specs = [];
    const density = 1.08; // g/cm³ for Burmese Amber

    for (let size_mm = 8; size_mm <= 14; size_mm += 0.25) {
        // Convert diameter in mm to radius in cm
        const radius_cm = (size_mm / 10) / 2;
        // Calculate volume of a sphere in cm³: V = (4/3) * PI * r^3
        const volume_cm3 = (4 / 3) * Math.PI * Math.pow(radius_cm, 3);
        // Calculate weight in grams: Weight = Volume * Density
        const weight_g = volume_cm3 * density;
        
        specs.push({
            size: size_mm,
            weight: parseFloat(weight_g.toFixed(4)) // Round to 4 decimal places for precision
        });
    }
    return specs;
};

export const BEAD_SPECS: { size: BeadSize; weight: number }[] = generateBeadSpecs();


export const PRODUCTS: Product[] = [
  {
    id: 'p1-mila-108',
    sku: 'VAG-MLA-8-108',
    name: "Emperor's Gold 'Mila' Mala",
    category: 'prayer-beads-108',
    material: Material.Amber,
    price: 277344,
    bestseller: true,
    isNewArrival: true,
    story: 'Crafted from the rarest Mila amber, this 108-bead mala embodies imperial elegance. Its semi-liquid, semi-solid texture creates a dimension of unparalleled richness, making it a highly collectible, investment-grade piece.\n\n**A Meaningful Gift:** This mala is more than just jewelry; it is a profound tool for mindfulness and a symbol of enlightenment. It makes a meaningful gift for a spiritual friend, a cherished anniversary gift, or a powerful addition to your own meditation practice. As a piece of heirloom quality jewelry, it carries an energy that can be passed down through generations.',
    energyProperties: ['Prosperity', 'Enlightenment', 'Royal Power'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/C8A97E/2a2a2a?text=Mila+Amber',
      gallery: ['https://placehold.co/600x600/C8A97E/2a2a2a?text=Mila+Amber+View+1', 'https://placehold.co/600x600/C8A97E/2a2a2a?text=Mila+Amber+View+2', 'https://placehold.co/600x600/FBF9F6/2a2a2a?text=On+Display']
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 108,
      totalWeight_grams: 86.4,
      clarityLevel: "Premium Grade - High Clarity",
      patterns: "Contains distinctive 3D 'Swirl Cloud' patterns.",
      finish: "Machine-rounded and precisely cut.",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIA',
      certificateNumber: 'GIA-123456789'
    },
    amberDetails: {
      colorTier: "Mila (Emperor Gold)",
      colorSlug: "mila",
      description: "A luxurious golden candle-like color, with a semi-liquid and semi-solid texture blended in one piece.",
      rarity: "Extremely rare and visually stunning.",
      specialNote: "Highly collectible grade.",
      basePricePerGram: 3210,
      richnessScore: 9, // High tier
    },
    tierExplanations: {
      "Mila": "This piece exhibits the coveted 'Mila' characteristic—a semi-liquid and semi-solid texture blended into one, giving it unparalleled depth. This is a sign of its extreme rarity."
    },
    inventory: {
      stock: 2,
      isAvailable: true
    }
  },
   {
    id: 'p3-spinel-bracelet',
    sku: 'VAG-SPN-BR-8',
    name: 'Spinel Guardian Bracelet',
    category: 'bracelets',
    material: Material.Spinel,
    price: 7078,
    bestseller: true,
    story: 'Spinel is a powerful protective stone, historically mistaken for ruby. This bracelet features dark, shimmering beads used to ward off negative energy and ground the spirit.',
    energyProperties: ['Protection', 'Grounding', 'Clarity'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/3D4054/FBF9F6?text=Spinel',
      gallery: []
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 27,
      totalWeight_grams: 29.7,
      clarityLevel: "A Grade",
      finish: "Machine-rounded and polished.",
      origin: 'Pein Pyit, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'In-house'
    },
    inventory: {
      stock: 8,
      isAvailable: true
    }
  },
  {
    id: 'new-red-brown-bracelet',
    sku: 'VAG-RDB-10-27',
    name: 'Red-Brown Amber Bracelet',
    category: 'bracelets',
    material: Material.Amber,
    price: 10390,
    isNewArrival: true,
    story: 'This bracelet features a rich, earthy red-brown amber, combining the grounding properties of brown amber with the vitality of red. A stone of stability and strength.',
    energyProperties: ['Stability', 'Strength', 'Grounding'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/9F5C46/FBF9F6?text=Red-Brown+Amber',
      gallery: []
    },
    specifications: {
      beadSize_mm: 10,
      beadCount: 27,
      totalWeight_grams: 32.4,
      clarityLevel: "A Grade",
      finish: "Machine-rounded and polished.",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'In-house'
    },
    amberDetails: {
      colorTier: 'Red-Brown Amber',
      colorSlug: 'red_brown',
      description: 'A deep, warm blend of red and brown tones.',
      rarity: 'Uncommon',
      specialNote: 'Rich, earthy coloration.',
      basePricePerGram: 321,
    },
    inventory: {
      stock: 10,
      isAvailable: true
    }
  },
  {
    id: 'new-multicolor-necklace',
    sku: 'VAG-MLT-N-1',
    name: 'Multicolor Burmese Amber Necklace',
    category: 'necklaces',
    material: Material.Amber,
    price: 69550,
    isNewArrival: true,
    story: 'A celebration of diversity, this necklace showcases a spectrum of natural Burmese amber colors, from light honey to deep cherry red. Each bead is a unique piece of history.',
    energyProperties: ['Harmony', 'Balance', 'Joy', 'Prosperity'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/C8A97E/2a2a2a?text=Multicolor+Amber',
      gallery: []
    },
    specifications: {
      beadSize_mm: 10,
      totalWeight_grams: 65,
      clarityLevel: "Mixed Grades",
      finish: "Machine-rounded and polished.",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: false,
    },
    amberDetails: {
      colorTier: 'Multicolor Amber',
      colorSlug: 'multicolor',
      description: 'A collection of various natural amber colors.',
      rarity: 'Varies per bead',
      specialNote: 'Highlights the natural diversity of Burmite.',
      basePricePerGram: 1070,
    },
    inventory: {
      stock: 3,
      isAvailable: true
    }
  },
    {
    id: 'new-root-amber-pendant',
    sku: 'VAG-ROOT-P-1',
    name: 'Root Amber Pendant with Silver Setting',
    category: 'pendants',
    material: Material.Amber,
    price: 39911,
    isNewArrival: true,
    story: 'This one-of-a-kind pendant features a stunning piece of Root Amber, known for its wood-like organic patterns. Set in 925 Sterling Silver.',
    energyProperties: ['Grounding', 'Connection to Nature', 'Stability'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/6B4F3A/FBF9F6?text=Root+Pendant',
      gallery: []
    },
    specifications: {
      pendantMetal: Metal.Silver,
      totalWeight_grams: 25,
      finish: "Polished cabochon",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'In-house'
    },
    amberDetails: {
      colorTier: 'Root Amber',
      colorSlug: 'root',
      description: 'Opaque amber with wood-like patterns.',
      rarity: 'Uncommon',
      specialNote: 'Pattern is unique to each piece.',
      basePricePerGram: 1605,
    },
    inventory: {
      stock: 7,
      isAvailable: true
    }
  },
  {
    id: 'new-cherry-ring',
    sku: 'VAG-CHY-R-1',
    name: 'Pure Cherry Red Amber Ring',
    category: 'rings',
    material: Material.Amber,
    price: 23005,
    isNewArrival: false,
    story: 'Carved from a single piece of rare, translucent Cherry Red amber, this ring is a statement of pure, vibrant energy. Its glassy clarity is truly exceptional.',
    energyProperties: ['Passion', 'Joy', 'Artistic Inspiration'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/941C20/FBF9F6?text=Cherry+Ring',
      gallery: []
    },
    specifications: {
      ringSize: 'US 7 (customizable)',
      totalWeight_grams: 10,
      finish: "Polished",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIT'
    },
    amberDetails: {
      colorTier: 'Cherry Red Amber',
      colorSlug: 'cherry',
      description: 'Translucent, cherry-like red.',
      rarity: 'Very Rare',
      specialNote: 'Carved from a solid piece.',
      basePricePerGram: 2301,
    },
    inventory: {
      stock: 4,
      isAvailable: true
    }
  },
    {
    id: 'decorative-fossil-coral',
    sku: 'VAG-DFC-1',
    name: 'Fossil Coral Decorative Sphere',
    category: 'decorative-stones-fossil-coral',
    material: Material.FossilCoral,
    price: 9095,
    isNewArrival: true,
    story: 'A beautiful decorative sphere polished from fossil coral, showcasing ancient marine life patterns. A perfect piece for adding natural elegance to any space.',
    energyProperties: ['Grounding', 'Change', 'Peace'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/D1CFCB/4C433C?text=Fossil+Coral',
      gallery: []
    },
    specifications: {
      totalWeight_grams: 350,
      finish: "Polished Sphere",
      origin: 'Indonesia'
    },
    certification: {
      isCertified: false
    },
    inventory: {
      stock: 10,
      isAvailable: true
    }
  },
    {
    id: 'decorative-agate-slice',
    sku: 'VAG-DAS-1',
    name: 'Banded Agate Decorative Slice',
    category: 'decorative-stones-agate',
    material: Material.Agate,
    price: 4494,
    isNewArrival: false,
    story: 'A stunning, polished slice of banded agate on a custom stand. Its intricate layers reveal a story of geological time, bringing balance and harmony.',
    energyProperties: ['Balance', 'Harmony', 'Stability'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/7E6B64/FBF9F6?text=Agate+Slice',
      gallery: []
    },
    specifications: {
      totalWeight_grams: 500,
      finish: "Polished Slice",
      origin: 'Brazil'
    },
    certification: {
      isCertified: false
    },
    inventory: {
      stock: 12,
      isAvailable: true
    }
  },
  {
    id: 'p2-ruby-54',
    sku: 'VAG-RBY-8-54',
    name: 'Mogok Ruby Vitality Prayer Beads',
    category: 'prayer-beads-54',
    material: Material.Ruby,
    price: 20223,
    bestseller: true,
    story: 'Known as the "Valley of Rubies," Mogok produces gemstones of unparalleled color. This 54-bead mala is believed to invigorate the life force, promoting courage and passion.',
    energyProperties: ['Vitality', 'Courage', 'Passion'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/A72643/FBF9F6?text=Mogok+Ruby',
      gallery: []
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 54,
      totalWeight_grams: 54.0,
      clarityLevel: "A+ Grade",
      finish: "Machine-rounded and polished.",
      origin: 'Mogok, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIT'
    },
    inventory: {
      stock: 15,
      isAvailable: true
    }
  },
  {
    id: 'p4-sapphire-108',
    sku: 'VAG-SPH-8-108',
    name: 'Celestial Sapphire Wisdom Mala',
    category: 'prayer-beads-108',
    material: Material.Sapphire,
    price: 101115,
    bestseller: false,
    story: 'Prized by royalty for centuries, the blue sapphire is a symbol of wisdom and divine favor. These beads are ideal for deepening spiritual practice and seeking higher knowledge.',
    energyProperties: ['Wisdom', 'Spirituality', 'Prosperity'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/2A4C88/FBF9F6?text=Sapphire',
      gallery: []
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 108,
      totalWeight_grams: 151.2,
      clarityLevel: "A+ Grade",
      finish: "Faceted and polished.",
      origin: 'Mogok, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIA'
    },
    inventory: {
      stock: 5,
      isAvailable: true
    }
  },
   {
    id: 'p7-dark-honey-27',
    sku: 'VAG-DHK-12-27',
    name: 'Classic Dark Honey Amber Hand Mala',
    category: 'prayer-beads-27',
    material: Material.Amber,
    price: 5980,
    bestseller: false,
    story: 'A beautiful and classic example of Burmese amber, this 27-bead hand mala showcases the desirable "cloud swirl" patterns. A perfect piece for daily mindfulness practice.',
    energyProperties: ['Grounding', 'Warmth', 'Balance'],
    media: {
        mainImageUrl: 'https://placehold.co/600x600/B27732/FBF9F6?text=Dark+Honey',
        gallery: []
    },
    specifications: {
        beadSize_mm: 12,
        beadCount: 27,
        totalWeight_grams: 48.6,
        clarityLevel: "B Grade (visible inclusions)",
        finish: "Machine-rounded and precisely polished.",
        origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
        isCertified: true,
        authority: 'In-house'
    },
    amberDetails: {
        colorTier: "Dark Honey Amber (Cognac)",
        colorSlug: "dark_honey",
        description: 'Deep golden-brown, commonly referred to as “Mekhong Whisky” color in Thailand.',
        rarity: "Very Common",
        specialNote: "Hand-selected for clarity and beautiful swirl patterns.",
        basePricePerGram: 123,
    },
    inventory: {
        stock: 20,
        isAvailable: true
    }
  }
];

export const AMBER_COLOR_DETAILS: AmberColorDetail[] = [
    {
        id: 'mila',
        name: 'Mila Amber (Milky)',
        priceRange: '฿2,000 – ฿4,000 per gram',
        description: 'A luxurious golden candle-like color, with a semi-liquid and semi-solid texture blended in one piece. Rich in dimension.',
        rarity: 'Extremely rare and visually stunning.',
        specialNote: 'Highly collectible grade.',
        imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp',
        basePricePerGram: 3210
    },
    {
        id: 'cherry',
        name: 'Cherry Red Amber',
        priceRange: '฿1,800 – ฿2,500 per gram',
        description: 'Translucent, cherry-like red. Even, pure tone without black undertones.',
        rarity: 'Very Rare',
        appearance: 'Glassy clarity resembling red marbles or young cherries.',
        specialNote: 'Considered one of the purest red ambers.',
        imageUrl: 'https://i.postimg.cc/tC51r3Ls/cherry-red-amber.webp',
        basePricePerGram: 2301
    },
    {
        id: 'pigeon',
        name: 'Pigeon Blood Red',
        priceRange: '฿800 – ฿1,200 per gram',
        description: 'Transparent red with black hues.',
        rarity: 'Uncommon',
        appearance: 'Similar to the gemstone *pigeon blood ruby*.',
        specialNote: 'Gem-like tone, dramatic elegance.',
        imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp',
        basePricePerGram: 1070
    },
    {
        id: 'orange',
        name: 'Orange Amber',
        priceRange: '฿600 – ฿800 per gram',
        description: 'Vivid orange, brighter than golden amber.',
        rarity: 'One of the rarer Burmese amber colors.',
        specialNote: 'Striking and vibrant.',
        imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange-amber.webp',
        basePricePerGram: 749
    },
    {
        id: 'golden',
        name: 'Golden Yellow Amber',
        priceRange: '฿400 – ฿600 per gram',
        description: 'Radiant gold with brilliant shine under sunlight.',
        rarity: 'Common',
        qualityNote: 'Price increases based on clarity and lack of impurities.',
        specialNote: 'Classic Burmese amber tone.',
        imageUrl: 'https://i.postimg.cc/t44s81j2/golden-yellow.webp',
        basePricePerGram: 535
    },
    {
        id: 'light_honey',
        name: 'Light Honey Amber',
        priceRange: '฿180 – ฿250 per gram',
        description: 'A blend between orange and golden yellow hues.',
        rarity: 'Common',
        qualityNote: 'The clearer and purer the piece, the higher the price.',
        specialNote: 'Smooth color spectrum, elegant lightness.',
        imageUrl: 'https://i.postimg.cc/MZ1fB25b/light-cognac-amber.webp',
        basePricePerGram: 230
    },
    {
        id: 'dark_honey',
        name: 'Deep Honey Amber',
        priceRange: '฿80 – ฿150 per gram',
        description: 'Deep golden-brown, commonly referred to as “Mekhong Whisky” color in Thailand.',
        rarity: 'Very Common',
        selectionCriteria: 'Only pieces with no internal cracks and distinct “cloud swirl” patterns are selected.',
        specialNote: 'Though widely available, this filtered grade is hand-selected for clarity and beauty.',
        imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep-cognac-amber.webp',
        basePricePerGram: 123
    },
    {
        id: 'root',
        name: 'Root Amber (Wood-like Pattern)',
        priceRange: '฿1,500 per gram',
        description: 'An opaque amber with wood-like patterns and textures, created by tree resin mixing with soil and plant debris.',
        rarity: 'Uncommon',
        specialNote: 'Highly prized for its unique organic patterns.',
        imageUrl: 'https://i.postimg.cc/hvRJYpDd/root-amber.webp',
        basePricePerGram: 1605,
    }
];

export const AMULETS: Amulet[] = [
  { id: 'a1', name: 'Golden stupa', price: 1873, material: 'Gold-plated brass', imageUrl: 'https://placehold.co/200/C8A97E/2a2a2a?text=Stupa' },
  { id: 'a2', name: 'Silver Dharma Wheel', price: 1685, material: '925 Sterling Silver', imageUrl: 'https://placehold.co/200/BDC3C7/2a2a2a?text=Dharma+Wheel' },
  { id: 'a3', name: 'Carved Jade Buddha', price: 4494, material: 'Natural Jadeite', imageUrl: 'https://placehold.co/200/90B89C/2a2a2a?text=Jade+Buddha' }
];

export const METAL_PRICES: { [key in Metal]: number } = {
  [Metal.None]: 0,
  [Metal.Gold]: 7490,
  [Metal.Silver]: 2996,
  [Metal.Gold18K]: 5992,
  [Metal.Gold14K]: 4494,
  [Metal.Gold9K]: 3371,
  [Metal.Copper]: 749,
  [Metal.Brass]: 562,
};

export const MATERIAL_DETAILS: MaterialDetail[] = [
    {
        name: Material.Amber,
        description: "Burmese Amber, or Burmite, is a rare fossilized resin over 99 million years old. Its immense age connects it to the primordial energy of the Earth, making it a vessel of ancient wisdom. It feels warm to the touch and is remarkably lightweight.",
        significance: "A symbol of ancient wisdom, natural healing, and protection. In many traditions, it is believed to calm the mind, clarify thoughts, and aid in achieving a meditative state by dispelling negativity.",
        imageUrl: "https://placehold.co/800x600/C8A97E/2a2a2a?text=Burmese+Amber"
    },
    {
        name: Material.Ruby,
        description: "Known as the 'King of Gems', ruby from the famed Mogok Valley in Myanmar is prized for its deep, vibrant red hue. It is a variety of the mineral corundum and is one of the four traditional precious gemstones.",
        significance: "Represents vitality, passion, and protection. It stimulates the root and heart chakras, boosting life-force energy (prana), courage, and a zest for life. It is believed to protect the wearer from misfortune.",
        imageUrl: "https://placehold.co/800x600/A72643/FBF9F6?text=Mogok+Ruby"
    },
    {
        name: Material.Sapphire,
        description: "A precious gemstone, typically blue, but also occurring in other colors. Like ruby, it is a variety of corundum. Sapphires from Myanmar are known for their rich, velvety blue tones.",
        significance: "A stone of wisdom, clarity, and divine connection. It is believed to calm the mind, release unwanted thoughts, and bring peace and serenity. Sapphire is associated with the throat and third-eye chakras, enhancing spiritual insight.",
        imageUrl: "https://placehold.co/800x600/2A4C88/FBF9F6?text=Burmese+Sapphire"
    }
];

const VICKY_AUTHOR: Author = {
    name: "Vicky Sinchoury",
    title: "Founder & Certified Gemologist",
    imageUrl: "https://placehold.co/100x100/7E746A/FFFFFF?text=VS",
    bio: "Vicky Sinchoury is a certified gemologist and the founder of Vicky Lux Gems. With over a decade of experience in sourcing and authenticating rare Burmese amber, she is passionate about bridging the gap between ancient gemological wisdom and modern scientific verification."
};

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'article-1',
        category: 'Soul',
        title: "The 100-Million-Year Journey of Burmite Amber",
        summary: "Delve into the ancient history of Burmese Amber, from prehistoric resin in the Cretaceous period to a treasured gemstone today. Discover the timeline of this incredible natural wonder.",
        author: VICKY_AUTHOR,
        date: "October 12, 2023",
        featuredImage: "https://placehold.co/1200x675/8A5E3C/FBF9F6?text=Amber's+Journey",
        readingTime: 6
    },
    {
        id: 'article-2',
        category: 'Science',
        title: "A Buyer's Guide: 3 Methods to Identify Fake Amber",
        summary: "In a market flooded with imitations, knowing how to spot real Burmite is essential. Learn simple, lab-proven tests you can perform, from the saltwater method to observing its unique fluorescence under UV light.",
        author: VICKY_AUTHOR,
        date: "October 05, 2023",
        featuredImage: "https://placehold.co/1200x675/88929B/FFFFFF?text=Amber+Authentication",
        readingTime: 8
    },
    {
        id: 'article-3',
        category: 'Soul',
        title: "Mindful Objects: Using Amber in Modern Wellness",
        summary: "Color and texture are energy, and the properties of your gemstone can profoundly influence your practice. Discover how the warmth and ancient history of amber can ground your modern wellness journey.",
        author: VICKY_AUTHOR,
        date: "September 28, 2023",
        featuredImage: "https://placehold.co/1200x675/C8A97E/2a2a2a?text=Mindful+Objects",
        readingTime: 5
    },
    {
        id: 'article-4',
        category: 'Science',
        title: "Inside the Lab: How We Certify Our Burmese Amber",
        summary: "Transparency is key to trust. This article details the scientific processes we use, including spectroscopy and microscopic analysis, to verify the authenticity and origin of every piece of amber we sell.",
        author: VICKY_AUTHOR,
        date: "September 20, 2023",
        featuredImage: "https://placehold.co/1200x675/88929B/FFFFFF?text=Lab+Certification",
        readingTime: 7
    },
    {
        id: 'article-5',
        category: 'Science',
        title: "Gemstone Identification | Burmese Amber & Gemological Tools",
        summary: "Explore how Burmese amber and gemstones are identified using gemological tools like FTIR, UV light, and Raman spectroscopy. Learn more about authentic testing techniques.",
        author: VICKY_AUTHOR,
        date: "October 20, 2023",
        featuredImage: "https://placehold.co/1200x675/2a2a2a/FBF9F6?text=Gemological+Tools",
        readingTime: 12
    },
    {
        id: 'article-6-tesbih-materials',
        category: 'Craftsmanship',
        title: "The Art of Tasbih: Choosing the Right Materials for Your Prayer Beads",
        summary: "A deep dive into the spiritual and physical properties of popular materials used for Tesbih (Tasbih), such as Agarwood (Oud), Jade, and Lapis Lazuli. Understand how material choice can enhance your devotional practice.",
        author: VICKY_AUTHOR,
        date: "July 19, 2025",
        featuredImage: "https://placehold.co/1200x675/6B4F3A/FFFFFF?text=Tasbih+Materials",
        readingTime: 7
    },
    {
        id: 'article-7-rosary-guide',
        category: 'Soul',
        title: "A Guide to the Rosary: More Than Just Beads",
        summary: "Explore the profound history and structure of the Catholic Rosary. This guide explains the significance of the Crucifix, Centerpiece, and the meaning behind the decades of beads, helping you create a more meaningful custom piece.",
        author: VICKY_AUTHOR,
        date: "July 22, 2025",
        featuredImage: "https://placehold.co/1200x675/C0C0C0/3D352E?text=Rosary+Guide",
        readingTime: 8
    },
    {
        id: 'article-8-amber-vs-agarwood',
        category: 'Craftsmanship',
        title: "Burmese Amber vs. Agarwood: Which is Right for Your Prayer Beads?",
        summary: "A comparative guide for connoisseurs of fine spiritual objects. We compare the ancient, grounding energy of Burmese Amber with the sacred, aromatic tranquility of Agarwood (Oud) for use in prayer beads.",
        author: VICKY_AUTHOR,
        date: "July 25, 2025",
        featuredImage: "https://placehold.co/1200x675/B27732/2a2a2a?text=Amber+vs+Oud",
        readingTime: 6
    },
    {
        id: 'article-9-choose-gemstone-energy',
        category: 'Soul',
        title: "How to Choose the Right Gemstone: Matching Your Energy with Ruby, Sapphire, and Amber",
        summary: "This guide helps you make a personal choice by discussing the metaphysical properties of key gems. We explore how to select gemstones for prosperity and wealth, chakra balancing, and personal intentions.",
        author: VICKY_AUTHOR,
        date: "July 28, 2025",
        featuredImage: "https://placehold.co/1200x675/9FB8AD/3D352E?text=Gemstone+Energy",
        readingTime: 9
    },
    {
        id: 'article-10-spiritual-significance-mala',
        category: 'Soul',
        title: "Beyond the Beads: The Spiritual Significance of Mala and Prayer Beads",
        summary: "What are prayer beads used for? This article explores the rich history of Mala and Tesbih beads. Learn how materials in crystal healing jewelry impact their use in meditation and mindfulness.",
        author: VICKY_AUTHOR,
        date: "August 01, 2025",
        featuredImage: "https://placehold.co/1200x675/A56C50/FFFFFF?text=Spiritual+Beads",
        readingTime: 7
    },
    {
        id: 'article-11-pigeon-blood-ruby-guide',
        category: 'Science',
        title: "The Connoisseur's Guide to Pigeon's Blood Rubies from Mogok",
        summary: "A deep dive into one of the world's most legendary gems. This post solidifies our expertise by discussing what defines a 'pigeon's blood ruby,' the legacy of the Mogok mines, and what makes it a piece of heirloom quality jewelry.",
        author: VICKY_AUTHOR,
        date: "August 05, 2025",
        featuredImage: "https://placehold.co/1200x675/A72643/FBF9F6?text=Pigeon's+Blood+Ruby",
        readingTime: 10
    }
];

export const AMBER_SPECTRUM_DATA: AmberSpectrumDetail[] = [
    {
        id: 'mila',
        title: 'Mila Amber (Milky)',
        subtitle: 'The Royal Flame of Spiritual Power',
        visual: 'A luxurious golden hue resembling semi-melted wax—bright, luminous, and complex in texture. Its three-dimensional glow seems to shift between liquid and solid.',
        science: 'Formed under shallow burial with a precise balance of oxidation and tree oil preservation, this amber maintains its honey-golden essence without darkening over time.',
        rarity: 'Ultra-rare; often referred to as the "King’s Amber" due to its regal appearance.',
        symbolism: 'Royalty, enlightenment, divine clarity. Traditionally worn by monks, sages, and high priests.',
        suits: 'Those on a spiritual journey, leaders with a sense of responsibility, and individuals seeking clarity in moral decisions.',
        element: 'Fire & Air / Leo, Sagittarius, Libra',
        why: 'It is ideal for individuals seeking deep insight, radiance in leadership, and connection to higher wisdom. Mila amber doesn’t just decorate—it inspires reverence.',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-400',
        imageUrl: 'https://i.postimg.cc/QMG39vnT/mila.webp'
    },
    {
        id: 'cherry',
        title: 'Cherry Red Amber',
        subtitle: 'The Pure Flame of Youth and Vitality',
        visual: 'Vibrant, ruby-like transparency with a juicy cherry hue. Glassy and evenly colored.',
        science: 'A result of stable oxygen-rich resin oxidation over time. The rich red tones are preserved due to a rare balance in environmental exposure.',
        rarity: 'Very Rare',
        symbolism: 'Passion, youth, joy, artistic inspiration.',
        suits: 'Artists, performers, those drawn to romance, beauty, and emotional growth.',
        element: 'Fire / Aries, Gemini, Libra',
        why: 'For anyone wishing to reconnect with their inner fire, explore their sensuality, or express themselves freely, this amber is an energetic match.',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-400',
        imageUrl: 'https://i.postimg.cc/tC51r3Ls/cherry-red-amber.webp'
    },
    {
        id: 'pigeon',
        title: 'Pigeon Blood Red',
        subtitle: 'The Warrior’s Heart – Deep Love and Loyalty',
        visual: 'A darker red with deep maroon undertones, resembling the shade of fine pigeon blood rubies.',
        science: 'Formed from partially oxidized resin with natural iron impurities, giving it its distinctive richness and complexity.',
        rarity: 'Uncommon',
        symbolism: 'Devotion, courage, strength through emotional intensity.',
        suits: 'Loyal partners, spiritual protectors, warriors of love and faith.',
        element: 'Fire & Water / Cancer, Scorpio, Aries',
        why: 'It resonates with emotional resilience, spiritual strength, and devotion. Excellent for those who serve others or guard spiritual communities.',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-400',
        imageUrl: 'https://i.postimg.cc/4NZ7bLFC/pigeon-blood-red.webp'
    },
    {
        id: 'orange',
        title: 'Orange Amber',
        subtitle: 'The Spark of Creative Fire',
        visual: 'Bold, warm orange hue with radiant clarity and playful light reflections.',
        science: 'Derived from resin with a balanced oil content, stabilized under mild heat and pressure, which preserves its bright tone.',
        rarity: 'Uncommon',
        symbolism: 'Creativity, enthusiasm, spontaneity.',
        suits: 'Innovators, entrepreneurs, expressive personalities.',
        element: 'Fire / Leo, Sagittarius, Gemini',
        why: 'It inspires action, joy, and fresh ideas. Orange amber is excellent for breaking through emotional stagnation and launching new beginnings.',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-400',
        imageUrl: 'https://i.postimg.cc/W1YdV2pj/orange-amber.webp'
    },
    {
        id: 'golden',
        title: 'Golden Yellow Amber',
        subtitle: 'The Light of Inner Riches',
        visual: 'Glowing golden color with radiant, almost sunlight-like brilliance. High clarity.',
        science: 'Fossilized in stable, low-heat, low-pressure environments. Its warm glow comes from preserved terpenes and resin oils.',
        rarity: 'Common',
        symbolism: 'Prosperity, confidence, balance.',
        suits: 'Thinkers, teachers, peacemakers, those seeking harmony and success.',
        element: 'Air / Taurus, Virgo, Libra',
        why: 'It promotes peace of mind, balance in relationships, and magnetism in social or business settings.',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-400',
        imageUrl: 'https://i.postimg.cc/t44s81j2/golden-yellow.webp'
    },
    {
        id: 'light_honey',
        title: 'Light Honey Amber',
        subtitle: 'The Gentle Healer of the Heart',
        visual: 'A blend of golden and light orange tones. Translucent, soft, and fluid in appearance.',
        science: 'Developed under partial exposure to oxidation with slow molecular changes, allowing for a semi-clear, warm tone.',
        rarity: 'Common',
        symbolism: 'Nurturing, emotional healing, family energy.',
        suits: 'Caregivers, empaths, family-oriented individuals, and teachers.',
        element: 'Earth & Water / Pisces, Cancer, Taurus',
        why: 'It comforts the spirit and balances emotional imbalances. A perfect gift for those going through transition or building meaningful relationships.',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-300',
        imageUrl: 'https://i.postimg.cc/MZ1fB25b/light-cognac-amber.webp'
    },
    {
        id: 'dark_honey',
        title: 'Deep Honey Amber',
        subtitle: 'The Ancient Memory Keeper',
        visual: 'Deep amber-brown color, resembling aged cognac or Mekhong liquor. Rich with internal "swirl cloud" textures.',
        science: 'Highly matured resin subjected to a long aging process, often containing micro-fragments of ancient plant life.',
        rarity: 'Very Common',
        symbolism: 'Wisdom, maturity, ancestral connection.',
        suits: 'Elders, philosophers, people working with heritage or legacy.',
        element: 'Earth / Aquarius, Capricorn, Sagittarius',
        why: 'This is the amber of reflection and maturity. It helps access inner wisdom, supports memory, and is often used in ancestral rituals.',
        bgColor: 'bg-yellow-900/10',
        borderColor: 'border-yellow-800/20',
        imageUrl: 'https://i.postimg.cc/90P4HZ0N/deep-cognac-amber.webp'
    },
    {
        id: 'root',
        title: 'Root Amber (Wood-like Pattern)',
        subtitle: 'The Earth’s Tapestry',
        visual: 'Opaque amber featuring organic, wood-like patterns and swirling textures of brown, tan, and cream.',
        science: 'Formed when tree resin mixed with soil, plant debris, and other organic matter before fossilizing. Its unique patterns are a direct record of the forest floor.',
        rarity: 'Uncommon',
        symbolism: 'Grounding, stability, connection to nature.',
        suits: 'Nature lovers, those seeking stability, and individuals who appreciate organic, one-of-a-kind patterns.',
        element: 'Earth / Taurus, Virgo, Capricorn',
        why: 'It connects the wearer to the raw, untamed energy of the earth. Its patterns are a reminder of the beauty in natural imperfections.',
        bgColor: 'bg-yellow-900/10',
        borderColor: 'border-yellow-800/20',
        imageUrl: 'https://i.postimg.cc/hvRJYpDd/root-amber.webp'
    }
];

/** @deprecated Use BLOG_POSTS instead */
export const KNOWLEDGE_ARTICLES = BLOG_POSTS;


// --- New Constants for Tesbih & Rosary Builder ---
export const TESBIH_ROSARY_MATERIALS: TesbihRosaryMaterial[] = [
    {
        id: 'baltic_amber',
        name: 'Amber (Baltic)',
        description: 'Classic, lightweight, and warm to the touch, prized for its golden hues.',
        imageUrl: 'https://placehold.co/100x100/FBBF24/3D352E?text=Baltic+Amber',
        prices: {
            [TesbihRosaryGrade.Standard]: 120.75,
            [TesbihRosaryGrade.Premium]: 120.75,
            [TesbihRosaryGrade.Exceptional]: 120.75,
        }
    },
    {
        id: 'burmese_amber',
        name: 'Burmese Amber',
        description: 'The world\'s oldest and hardest amber, a 99-million-year-old treasure.',
        imageUrl: 'https://i.postimg.cc/t44s81j2/golden-yellow.webp',
        prices: { // This is a base price for 'Golden', will be adjusted by type.
            [TesbihRosaryGrade.Standard]: 727.95,
            [TesbihRosaryGrade.Premium]: 1091.93,
            [TesbihRosaryGrade.Exceptional]: 1455.90,
        }
    },
    {
        id: 'agarwood',
        name: 'Agarwood (Oud)',
        description: 'A deeply aromatic and sacred wood, revered for its tranquil and spiritual energy.',
        imageUrl: 'https://placehold.co/100x100/5C3A21/FFFFFF?text=Oud',
        prices: {
            [TesbihRosaryGrade.Standard]: 276.00,
            [TesbihRosaryGrade.Premium]: 396.75,
            [TesbihRosaryGrade.Exceptional]: 517.50,
        }
    },
    {
        id: 'black_onyx',
        name: 'Black Onyx',
        description: 'A powerful grounding stone, providing strength and protection.',
        imageUrl: 'https://placehold.co/100x100/262626/FFFFFF?text=Onyx',
        prices: {
            [TesbihRosaryGrade.Standard]: 178.02,
            [TesbihRosaryGrade.Premium]: 178.02,
            [TesbihRosaryGrade.Exceptional]: 178.02,
        }
    },
    {
        id: 'jade',
        name: 'Jade (Green/White)',
        description: 'The "Stone of Heaven," symbolizing purity, wisdom, and harmony.',
        imageUrl: 'https://placehold.co/100x100/34D399/3D352E?text=Jade',
        prices: {
            [TesbihRosaryGrade.Standard]: 138.00,
            [TesbihRosaryGrade.Premium]: 241.50,
            [TesbihRosaryGrade.Exceptional]: 345.00,
        }
    },
    {
        id: 'tigers_eye',
        name: 'Tiger’s Eye',
        description: 'A stone of courage and motivation, known for its captivating chatoyancy.',
        imageUrl: 'https://placehold.co/100x100/B45309/FFFFFF?text=Tiger\'s+Eye',
        prices: {
            [TesbihRosaryGrade.Standard]: 86.25,
            [TesbihRosaryGrade.Premium]: 129.38,
            [TesbihRosaryGrade.Exceptional]: 172.50,
        }
    },
    {
        id: 'hematite',
        name: 'Hematite',
        description: 'A grounding and protective stone with a distinctive metallic luster.',
        imageUrl: 'https://placehold.co/100x100/4B5563/FFFFFF?text=Hematite',
        prices: {
            [TesbihRosaryGrade.Standard]: 51.75,
            [TesbihRosaryGrade.Premium]: 77.63,
            [TesbihRosaryGrade.Exceptional]: 103.50,
        }
    },
    {
        id: 'lapis_lazuli',
        name: 'Lapis Lazuli',
        description: 'A celestial blue stone of wisdom, truth, and spiritual enlightenment.',
        imageUrl: 'https://placehold.co/100x100/2563EB/FFFFFF?text=Lapis',
        prices: {
            [TesbihRosaryGrade.Standard]: 207.00,
            [TesbihRosaryGrade.Premium]: 310.50,
            [TesbihRosaryGrade.Exceptional]: 414.00,
        }
    },
    {
        id: 'turquoise',
        name: 'Turquoise',
        description: 'A sacred stone of healing, protection, and communication.',
        imageUrl: 'https://placehold.co/100x100/14B8A6/3D352E?text=Turquoise',
        prices: {
            [TesbihRosaryGrade.Standard]: 276.00,
            [TesbihRosaryGrade.Premium]: 396.75,
            [TesbihRosaryGrade.Exceptional]: 517.50,
        }
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        description: 'A volcanic glass known for its powerful protective and truth-enhancing properties.',
        imageUrl: 'https://placehold.co/100x100/171717/FFFFFF?text=Obsidian',
        prices: {
            [TesbihRosaryGrade.Standard]: 34.50,
            [TesbihRosaryGrade.Premium]: 69.00,
            [TesbihRosaryGrade.Exceptional]: 103.50,
        }
    },
    {
        id: 'clear_quartz',
        name: 'Clear Quartz',
        description: 'The "Master Healer," known for amplifying energy and intention.',
        imageUrl: 'https://placehold.co/100x100/F3F4F6/4B5563?text=Quartz',
        prices: {
            [TesbihRosaryGrade.Standard]: 51.75,
            [TesbihRosaryGrade.Premium]: 94.88,
            [TesbihRosaryGrade.Exceptional]: 138.00,
        }
    },
    {
        id: 'amethyst',
        name: 'Amethyst',
        description: 'A stone of spiritual awareness, tranquility, and sobriety.',
        imageUrl: 'https://placehold.co/100x100/8B5CF6/FFFFFF?text=Amethyst',
        prices: {
            [TesbihRosaryGrade.Standard]: 103.50,
            [TesbihRosaryGrade.Premium]: 172.50,
            [TesbihRosaryGrade.Exceptional]: 241.50,
        }
    },
    {
        id: 'rose_quartz',
        name: 'Rose Quartz',
        description: 'The stone of unconditional love, compassion, and emotional healing.',
        imageUrl: 'https://placehold.co/100x100/FBCFE8/831843?text=Rose+Quartz',
        prices: {
            [TesbihRosaryGrade.Standard]: 86.25,
            [TesbihRosaryGrade.Premium]: 146.63,
            [TesbihRosaryGrade.Exceptional]: 207.00,
        }
    },
    {
        id: 'malachite',
        name: 'Malachite',
        description: 'A powerful stone of transformation, protection, and positive change.',
        imageUrl: 'https://placehold.co/100x100/10B981/14532D?text=Malachite',
        prices: {
            [TesbihRosaryGrade.Standard]: 138.00,
            [TesbihRosaryGrade.Premium]: 207.00,
            [TesbihRosaryGrade.Exceptional]: 276.00,
        }
    },
    {
        id: 'lava_stone',
        name: 'Lava Stone',
        description: 'A grounding stone that strengthens one\'s connection to Mother Earth.',
        imageUrl: 'https://placehold.co/100x100/404040/FFFFFF?text=Lava',
        prices: {
            [TesbihRosaryGrade.Standard]: 34.50,
            [TesbihRosaryGrade.Premium]: 60.38,
            [TesbihRosaryGrade.Exceptional]: 86.25,
        }
    },
    {
        id: 'howlite',
        name: 'Howlite/Magnesite',
        description: 'A calming stone used to relieve stress and aid insomnia.',
        imageUrl: 'https://placehold.co/100x100/E5E7EB/57534E?text=Howlite',
        prices: {
            [TesbihRosaryGrade.Standard]: 41.40,
            [TesbihRosaryGrade.Premium]: 72.45,
            [TesbihRosaryGrade.Exceptional]: 103.50,
        }
    },
];

// --- New Constants for Interactive Prayer Bead Customizer ---
export const PRAYER_BEAD_DATA: PrayerBeadData = {
  rosary: {
    name: "Catholic Rosary",
    imageUrl: "https://i.imgur.com/6m3iS1s.png",
    components: [
      {
        name: "Crucifix",
        options: ["Sterling Silver", "Gold", "Pewter", "Bronze", "Olivewood", "Walnut", "Resin"]
      },
      {
        name: '"Hail Mary" Beads',
        options: ["Wood", "Glass", "Crystal", "Jade", "Onyx", "Rose Quartz", "Pearl", "Polymer Clay", "Metal"]
      },
      {
        name: '"Our Father" Beads',
        options: ["Ornate Metal", "Carved Wood", "Cloisonné", "Lampwork Glass", "Large Semi-Precious Stones"]
      },
      {
        name: "Centerpiece / Medal",
        options: ["Sterling Silver", "Gold", "Pewter", "Bronze", "Enamel", "Resin with Image"]
      },
      {
        name: "Chain / Cord",
        options: ["Silver Metal Chain", "Steel Metal Chain", "Nylon Cord", "Paracord"]
      }
    ]
  },
  tasbih: {
    name: "Islamic Tasbih / Misbaha",
    imageUrl: "https://i.imgur.com/L5a2aHk.png",
    components: [
      {
        name: "Main Beads (99)",
        options: ["Kokka Wood", "Sandalwood", "Amber", "Agate", "Lapis Lazuli", "Tiger's Eye", "Bone", "Horn", "Silver"]
      },
      {
        name: "Disks / Separators",
        options: ["Silver", "Copper", "Wood", "Bone"]
      },
      {
        name: "Imame / Head Bead",
        options: ["Carved Matching Wood", "Carved Matching Stone", "Ornate Silver"]
      },
      {
        name: "Tepelik / Tassel Head",
        options: ["Matching Material", "Custom Silver Piece"]
      },
      {
        name: "Tassel Cord",
        options: ["Silk", "Nylon", "Cotton Thread"]
      }
    ]
  }
};


// --- New Constants for Unified Prayer Bead Builder ---
export const PRAYER_BEAD_VISUAL_MATERIALS: VisualMaterial[] = [
  { id: 'burmese_amber', name: 'Burmese Amber', imageUrl: 'https://i.postimg.cc/vHrJ4mRr/vkgems-info-amber-flipping-card.webp', mapsTo: 'Burmese Amber' },
  { id: 'agarwood', name: 'Agarwood (Oud)', imageUrl: 'https://i.postimg.cc/BnN5wSLW/Agarwood.webp', mapsTo: 'Agarwood (Oud)' },
  { id: 'amethyst', name: 'Amethyst', imageUrl: 'https://i.postimg.cc/fTcfmjMR/Amethyst.webp', mapsTo: 'Amethyst' },
  { id: 'baltic_amber', name: 'Amber (Baltic)', imageUrl: 'https://i.postimg.cc/VN6qxxnJ/baltic-amber.webp', mapsTo: 'Amber (Baltic)' },
  { id: 'black_onyx', name: 'Black Onyx', imageUrl: 'https://i.postimg.cc/zGqSjbfS/black-onyx.webp', mapsTo: 'Black Onyx' },
  { id: 'clear_quartz', name: 'Clear Quartz', imageUrl: 'https://i.postimg.cc/zfcC8xF0/Clear-Quartz.webp', mapsTo: 'Clear Quartz' },
  { id: 'hematite', name: 'Hematite', imageUrl: 'https://i.postimg.cc/Fzj3bN5B/Hematite.webp', mapsTo: 'Hematite' },
  { id: 'green_jade', name: 'Green Jade', imageUrl: 'https://i.postimg.cc/zvmTR3Mh/jade-green.webp', mapsTo: 'Green Jade' },
  { id: 'white_jade', name: 'White Jade', imageUrl: 'https://i.postimg.cc/bJSQJ168/jade-white.webp', mapsTo: 'White Jade' },
  { id: 'lapis_lazuli', name: 'Lapis Lazuli', imageUrl: 'https://i.postimg.cc/8kWRgBJm/Lapis-Lazuli.webp', mapsTo: 'Lapis Lazuli' },
  { id: 'lava_stone', name: 'Lava Stone', imageUrl: 'https://i.postimg.cc/x1jMmws6/Lava-Stone.webp', mapsTo: 'Lava Stone' },
  { id: 'howlite_magnesite', name: 'Howlite/Magnesite', imageUrl: 'https://i.postimg.cc/kXvWBJyV/Magnesite.webp', mapsTo: 'Howlite/Magnesite' },
  { id: 'malachite', name: 'Malachite', imageUrl: 'https://i.postimg.cc/m2sQLz7f/Malachite.webp', mapsTo: 'Malachite' },
  { id: 'obsidian', name: 'Obsidian', imageUrl: 'https://i.postimg.cc/RZPfLgy4/Obsidian.webp', mapsTo: 'Obsidian' },
  { id: 'rose_quartz', name: 'Rose Quartz', imageUrl: 'https://i.postimg.cc/wB7NfhYJ/Rose-Quartz.webp', mapsTo: 'Rose Quartz' },
  { id: 'tigers_eye', name: 'Tiger\'s Eye', imageUrl: 'https://i.postimg.cc/KYwMdRmW/Tiger-s-Eye.webp', mapsTo: 'Tiger\'s Eye' },
  { id: 'turquoise', name: 'Turquoise', imageUrl: 'https://i.postimg.cc/zBhg58BG/Turquoise.webp', mapsTo: 'Turquoise' },
];

export const PRAYER_BEAD_SIZES = Array.from({ length: (14 - 6) / 0.5 + 1 }, (_, i) => 6 + i * 0.5);

export const calculateBeadWeightGemstone = (size_mm: BeadSize): number => {
    const density = 2.8; // g/cm³, average for common gemstones
    const radius_cm = (size_mm / 10) / 2;
    const volume_cm3 = (4 / 3) * Math.PI * Math.pow(radius_cm, 3);
    return volume_cm3 * density;
};

export const JUZU_MATERIAL_PRICES: Record<string, Record<number, number>> = {
  'Amber (Baltic)': { 6.0: 120.75, 6.5: 126.79, 7.0: 133.13, 7.5: 139.78, 8.0: 146.77, 8.5: 154.11, 9.0: 161.82, 9.5: 169.91, 10.0: 178.40, 10.5: 187.32, 11.0: 196.69, 11.5: 206.52, 12.0: 216.85, 12.5: 227.69, 13.0: 239.08, 13.5: 251.03, 14.0: 263.58 },
  'Agarwood (Oud)': { 6.0: 276.00, 6.5: 289.80, 7.0: 304.29, 7.5: 319.50, 8.0: 335.48, 8.5: 352.25, 9.0: 369.87, 9.5: 388.36, 10.0: 407.78, 10.5: 428.17, 11.0: 449.57, 11.5: 472.05, 12.0: 495.66, 12.5: 520.44, 13.0: 546.46, 13.5: 573.78, 14.0: 602.47 },
  'Black Onyx': { 6.0: 178.02, 6.5: 186.92, 7.0: 196.27, 7.5: 206.08, 8.0: 216.38, 8.5: 227.20, 9.0: 238.56, 9.5: 250.49, 10.0: 263.02, 10.5: 276.17, 11.0: 289.98, 11.5: 304.47, 12.0: 319.70, 12.5: 335.68, 13.0: 352.47, 13.5: 370.09, 14.0: 388.60 },
  'Green Jade': { 6.0: 138.00, 6.5: 144.90, 7.0: 152.15, 7.5: 159.75, 8.0: 167.74, 8.5: 176.13, 9.0: 184.93, 9.5: 194.18, 10.0: 203.89, 10.5: 214.08, 11.0: 224.79, 11.5: 236.03, 12.0: 247.83, 12.5: 260.22, 13.0: 273.23, 13.5: 286.89, 14.0: 301.24 },
  'White Jade': { 6.0: 138.00, 6.5: 144.90, 7.0: 152.15, 7.5: 159.75, 8.0: 167.74, 8.5: 176.13, 9.0: 184.93, 9.5: 194.18, 10.0: 203.89, 10.5: 214.08, 11.0: 224.79, 11.5: 236.03, 12.0: 247.83, 12.5: 260.22, 13.0: 273.23, 13.5: 286.89, 14.0: 301.24 },
  'Tiger\'s Eye': { 6.0: 86.25, 6.5: 90.56, 7.0: 95.09, 7.5: 99.85, 8.0: 104.84, 8.5: 110.08, 9.0: 115.58, 9.5: 121.36, 10.0: 127.43, 10.5: 133.80, 11.0: 140.49, 11.5: 147.52, 12.0: 154.89, 12.5: 162.64, 13.0: 170.77, 13.5: 179.31, 14.0: 188.27 },
  'Hematite': { 6.0: 51.75, 6.5: 54.34, 7.0: 57.05, 7.5: 59.91, 8.0: 62.90, 8.5: 66.05, 9.0: 69.35, 9.5: 72.82, 10.0: 76.46, 10.5: 80.28, 11.0: 84.30, 11.5: 88.51, 12.0: 92.94, 12.5: 97.58, 13.0: 102.46, 13.5: 107.58, 14.0: 112.96 },
  'Lapis Lazuli': { 6.0: 207.00, 6.5: 217.35, 7.0: 228.22, 7.5: 239.63, 8.0: 251.61, 8.5: 264.19, 9.0: 277.40, 9.5: 291.27, 10.0: 305.83, 10.5: 321.12, 11.0: 337.18, 11.5: 354.04, 12.0: 371.74, 12.5: 390.33, 13.0: 409.85, 13.5: 430.34, 14.0: 451.86 },
  'Turquoise': { 6.0: 276.00, 6.5: 289.80, 7.0: 304.29, 7.5: 319.50, 8.0: 335.48, 8.5: 352.25, 9.0: 369.87, 9.5: 388.36, 10.0: 407.78, 10.5: 428.17, 11.0: 449.57, 11.5: 472.05, 12.0: 495.66, 12.5: 520.44, 13.0: 546.46, 13.5: 573.78, 14.0: 602.47 },
  'Obsidian': { 6.0: 34.50, 6.5: 36.23, 7.0: 38.04, 7.5: 39.94, 8.0: 41.93, 8.5: 44.03, 9.0: 46.23, 9.5: 48.54, 10.0: 50.97, 10.5: 53.52, 11.0: 56.20, 11.5: 59.01, 12.0: 61.96, 12.5: 65.05, 13.0: 68.31, 13.5: 71.72, 14.0: 75.31 },
  'Clear Quartz': { 6.0: 51.75, 6.5: 54.34, 7.0: 57.05, 7.5: 59.91, 8.0: 62.90, 8.5: 66.05, 9.0: 69.35, 9.5: 72.82, 10.0: 76.46, 10.5: 80.28, 11.0: 84.30, 11.5: 88.51, 12.0: 92.94, 12.5: 97.58, 13.0: 102.46, 13.5: 107.58, 14.0: 112.96 },
  'Amethyst': { 6.0: 103.50, 6.5: 108.68, 7.0: 114.11, 7.5: 119.81, 8.0: 125.80, 8.5: 132.10, 9.0: 138.70, 9.5: 145.63, 10.0: 152.92, 10.5: 160.56, 11.0: 168.59, 11.5: 177.02, 12.0: 185.87, 12.5: 195.16, 13.0: 204.92, 13.5: 215.17, 14.0: 225.93 },
  'Rose Quartz': { 6.0: 86.25, 6.5: 90.56, 7.0: 95.09, 7.5: 99.85, 8.0: 104.84, 8.5: 110.08, 9.0: 115.58, 9.5: 121.36, 10.0: 127.43, 10.5: 133.80, 11.0: 140.49, 11.5: 147.52, 12.0: 154.89, 12.5: 162.64, 13.0: 170.77, 13.5: 179.31, 14.0: 188.27 },
  'Malachite': { 6.0: 138.00, 6.5: 144.90, 7.0: 152.15, 7.5: 159.75, 8.0: 167.74, 8.5: 176.13, 9.0: 184.93, 9.5: 194.18, 10.0: 203.89, 10.5: 214.08, 11.0: 224.79, 11.5: 236.03, 12.0: 247.83, 12.5: 260.22, 13.0: 273.23, 13.5: 286.89, 14.0: 301.24 },
  'Lava Stone': { 6.0: 34.50, 6.5: 36.23, 7.0: 38.04, 7.5: 39.94, 8.0: 41.93, 8.5: 44.03, 9.0: 46.23, 9.5: 48.54, 10.0: 50.97, 10.5: 53.52, 11.0: 56.20, 11.5: 59.01, 12.0: 61.96, 12.5: 65.05, 13.0: 68.31, 13.5: 71.72, 14.0: 75.31 },
  'Howlite/Magnesite': { 6.0: 41.40, 6.5: 43.47, 7.0: 45.64, 7.5: 47.93, 8.0: 50.32, 8.5: 52.84, 9.0: 55.48, 9.5: 58.25, 10.0: 61.17, 10.5: 64.22, 11.0: 67.44, 11.5: 70.81, 12.0: 74.35, 12.5: 78.07, 13.0: 81.97, 13.5: 86.07, 14.0: 90.37 },
};

export const TASSEL_OPTIONS = {
    shapes: Object.values(TasselShape),
    materials: [
        { name: TasselMaterial.Rayon, price: 500 },
        { name: TasselMaterial.PureSilk, price: 1500 },
    ]
};

export const METAL_COMPONENT_PRICES: Record<string, { [key in TesbihRosaryGrade]: number }> = {
    'Sterling Silver (925)': {
        [TesbihRosaryGrade.Standard]: 1035.00,
        [TesbihRosaryGrade.Premium]: 1200.00,
        [TesbihRosaryGrade.Exceptional]: 1380.00,
    },
    'Brass/Bronze': {
        [TesbihRosaryGrade.Standard]: 69.00,
        [TesbihRosaryGrade.Premium]: 120.00,
        [TesbihRosaryGrade.Exceptional]: 172.50,
    },
    'Gold-Plated (over Silver)': {
        [TesbihRosaryGrade.Standard]: 345.00,
        [TesbihRosaryGrade.Premium]: 517.50,
        [TesbihRosaryGrade.Exceptional]: 690.00,
    },
    'Silver-Plated (Thai Style)': {
        [TesbihRosaryGrade.Standard]: 172.50,
        [TesbihRosaryGrade.Premium]: 258.75,
        [TesbihRosaryGrade.Exceptional]: 345.00,
    },
    'Pewter/Resin': { // For Crucifix etc.
        [TesbihRosaryGrade.Standard]: 69.00,
        [TesbihRosaryGrade.Premium]: 172.50,
        [TesbihRosaryGrade.Exceptional]: 276.00,
    },
};

export const METAL_COMPONENT_MATERIALS = Object.keys(METAL_COMPONENT_PRICES);

export const TESBIH_COMPONENT_WEIGHTS = {
    tepelik: 2.0
};

export const ROSARY_COMPONENT_WEIGHTS = {
    centerpiece: 3.0,
    crucifix: 5.0
};