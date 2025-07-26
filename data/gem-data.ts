import { GemData } from '../types';

const burmeseAmberColors = [
    "Mila Amber (Milky)",
    "Cherry Red Amber",
    "Pigeon Blood Red",
    "Orange Amber",
    "Golden Yellow Amber",
    "Light Honey Amber",
    "Deep Honey Amber",
    "Root Amber (Wood-like Pattern)",
    "Black Amber"
];

export const clarityGrades = ["IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1", "I2", "I3"];
export const certifications = [
    "AIGS – Asian Institute of Gemological Sciences",
    "BGL – Bangkok Gemological Laboratory",
    "DGL – Diamond Grading Laboratory",
    "GIA Bangkok – Gemological Institute of America (Thailand)",
    "GIT – Gem and Jewelry Institute of Thailand",
    "GRS Thailand – GemResearch Swisslab",
    "Lotus Gemology",
    "NGI – National Gem Institute",
    "SSEF – Swiss Gemmological Institute (via partner labs)",
    "TGL – Thai Gemological Laboratory",
    "Other"
];

export const GEM_DATA: GemData = {
  cuts: {
    standard: [
      "Asscher", "Baguette", "Cabochon", "Cushion", "Emerald", "Heart", "Marquise", 
      "Oval", "Pear", "Princess", "Radiant", "Rose Cut", "Round", "Step Cut", "Trillion"
    ],
    jade: [
      "Bangle", "Bead", "Buddha", "Carving", "Coin", "Donut", "Drop", 
      "Figurine", "Gua Sha", "Pendant", "Ring"
    ],
  },
  origins: {
    standard: [
      "Afghanistan", "Australia", "Botswana", "Brazil", "Cambodia", "Canada", "China", "Colombia", "Ethiopia", "Indonesia", "Kashmir", "Kenya", "Madagascar", "Mexico", "Mozambique", 
      "Myanmar", "Namibia", "Nigeria", "Pakistan", "Philippines", "Russia", "South Africa", "Sri Lanka", 
      "Tajikistan", "Tanzania", "Thailand", "USA", "Vietnam", "Zambia"
    ],
  },
  categories: {
    "Precious Gemstones": {
        "Ruby": {
            colors: ["Pigeon Blood Red", "Vivid Red", "Deep Red", "Pure Red", "Pinkish Red", "Orangey Red", "Purplish Red", "Brownish Red", "Light Red"],
            origins: ["Myanmar", "Mozambique", "Thailand", "Sri Lanka", "Tanzania"],
        },
        "Sapphire": {
            colors: ["Royal Blue", "Cornflower Blue", "Deep Blue", "Medium Blue", "Light Blue", "Greenish Blue", "Violetish Blue", "Steel Blue", "Ceylon Blue", "Kashmir Blue", "Pink", "Padparadscha", "Violet", "Purple", "Yellow (Canary, Golden)", "Orange", "Green", "White (Colorless)", "Gray", "Black", "Parti-colored", "Color-change"],
            origins: ["Myanmar", "Sri Lanka", "Madagascar", "Thailand", "Australia", "Kashmir"],
        },
        "Emerald": {
            colors: ["Vivid Green", "Deep Green", "Bluish Green", "Yellowish Green", "Medium Green", "Light Green", "Dark Green", "Colombian Green", "Zambian Green"],
            origins: ["Colombia", "Zambia", "Brazil", "Afghanistan"]
        },
        "Diamond": {
            colors: ["(D-F) Colorless", "(G-J) Near-colorless", "(K-M) Faint yellow", "(N-R) Very light yellow", "(S-Z) Light yellow", "Fancy Yellow", "Fancy Blue", "Fancy Pink", "Fancy Green", "Fancy Brown", "Fancy Orange", "Fancy Red", "Fancy Gray", "Fancy Black", "Salt and Pepper"],
            origins: ["Russia", "Botswana", "Canada", "South Africa", "Australia"]
        },
        "Spinel": {
            colors: ["Red (Blood Red, Deep Red)", "Pink (Light Pink, Fuchsia, Hot Pink)", "Purple (Lavender, Violet)", "Blue (Cobalt Blue, Electric Blue)", "Gray", "Orange", "Peach", "Brown", "Black", "White (Colorless)", "Green", "Mahenge Spinel"],
            origins: ["Myanmar", "Tajikistan", "Tanzania", "Sri Lanka", "Vietnam"],
        },
        "Jadeite": {
            colors: ["Imperial Green", "Apple Green", "Moss Green", "Olive Green", "Yellow-Green", "White", "Lavender", "Gray", "Black", "Reddish Brown", "Yellow", "Blue"],
            cuts: ["Bangle", "Bead", "Buddha", "Carving", "Coin", "Donut", "Drop", "Figurine", "Gua Sha", "Pendant", "Ring"],
            origins: ["Myanmar"]
        }
    },
    "Semi-Precious Gemstones": {
        "Agate": {
            colors: ["Banded", "Blue Lace", "Botswana", "Dendritic", "Fire", "Moss", "White"],
        },
        "Alexandrite": {
            colors: ["Bluish Green (Daylight)", "Purplish Red (Incandescent)"],
            origins: ["Russia", "Sri Lanka", "Brazil", "Tanzania"]
        },
        "Aquamarine": {
            colors: ["Light Blue", "Greenish Blue", "Sky Blue", "Santa Maria Blue"],
            origins: ["Brazil", "Nigeria", "Madagascar", "Pakistan"]
        },
        "Citrine": {
            colors: ["Light Yellow", "Golden Yellow", "Madeira Red", "Orange-Brown"],
            origins: ["Brazil", "Madagascar", "Russia", "USA"]
        },
        "Garnet": {
            colors: ["Red (Almandine, Pyrope)", "Green (Tsavorite, Demantoid)", "Orange (Spessartite)", "Pink/Purple (Rhodolite)", "Color-Change"],
            origins: ["Tanzania", "Namibia", "Sri Lanka", "Russia", "USA"]
        },
        "Lapis Lazuli": {
            colors: ["Deep Blue", "Royal Blue (with Pyrite)", "Greenish Blue"],
            origins: ["Afghanistan", "Chile", "Russia"]
        },
        "Morganite": {
            colors: ["Pink", "Peach", "Salmon", "Magenta"],
            origins: ["Brazil", "Madagascar", "Afghanistan", "USA"]
        },
        "Onyx": {
            colors: ["Black", "Banded (White/Black)", "Sardonyx (Red/White)"]
        },
        "Opal": {
            colors: ["White", "Black", "Fire", "Boulder", "Crystal", "Water"],
            origins: ["Australia", "Ethiopia", "Mexico", "Brazil"]
        },
        "Pearl": {
            colors: ["White", "Cream", "Pink", "Black (Tahitian)", "Golden (South Sea)", "Blue (Akoya)"],
            origins: ["Japan", "Australia", "Tahiti", "China", "Philippines"]
        },
        "Peridot": {
            colors: ["Olive Green", "Lime Green", "Yellowish Green"],
            origins: ["Myanmar", "Pakistan", "USA", "China"]
        },
        "Tanzanite": {
            colors: ["Violetish Blue", "Bluish Violet", "Deep Blue"],
            origins: ["Tanzania"]
        },
        "Topaz": {
            colors: ["Blue", "Yellow", "Pink", "Sherry", "Colorless (White)", "Imperial", "Mystic"],
            origins: ["Brazil", "Pakistan", "Russia", "USA"]
        },
        "Tourmaline": {
            colors: ["Pink (Rubellite)", "Green (Verdelite)", "Blue (Indicolite)", "Watermelon", "Black (Schorl)", "Paraíba"],
            origins: ["Brazil", "Nigeria", "Afghanistan", "USA", "Mozambique"]
        },
        "Zircon": {
            colors: ["Blue", "Red", "Brown", "Green", "Colorless (White)", "Yellow"],
            origins: ["Cambodia", "Sri Lanka", "Thailand", "Myanmar"]
        },
        "Fossil Coral": {
            colors: ["Patterned White", "Patterned Pink", "Patterned Brown"],
            cuts: ["Sphere", "Slab", "Cabochon", "Carving"],
            origins: ["Indonesia", "USA"]
        }
    },
    "Burmese Amber": {
        "Burmese Amber": {
            colors: burmeseAmberColors,
            origins: ["Hukawng Valley, Myanmar"],
            cuts: [
                "Cabochon",
                "Facet Cut (Emerald Shape)",
                "Facet Cut (Cushion Shape)",
                "Perfectly Rounded Bead",
                "Bangle",
                "Ring",
                "Pendant",
                "Earrings",
                "108 Prayer Beads (Chinese Style)",
                "108 Prayer Beads (Buddhist Style)",
                "Setting (Silver Ring)",
                "Setting (Silver Pendant)",
                "Setting (Silver Earrings)"
            ]
        }
    }
  }
};