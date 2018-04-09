const compost = [
    {
        "terms": ["bread", "grains", "pasta"],
        "desc": "Bread, grains and pasta",
    },
    {
        "terms": ["coffee grounds"],
        "desc": "Coffee grounds with paper filter",
    },
    {
        "terms": ["dairy", "cheese", "yoghurt"],
        "desc": "Dairy",
    },
    {
        "terms": ["eggshells", "eggs"],
        "desc": "Eggshells and eggs",
    },
    {
        "terms": ["fruit", "apple", "pear"],
        "desc": "Fruit (pits and peels)",
    },
    {
        "terms": [
            "leftovers",
            "food",
            "spoiled food",
        ],
        "desc": "Leftovers and spoiled food",
    },
    {
        "terms": [
            "Meat",
            "bones",
        ],
        "desc": "Meat (including bones)",
    },
    {
        "terms": [
            "Seafood",
            "shellfish",
        ],
        "desc": "Seafood (including shellfish)",
    },
    {
        "terms": [
            "Tea",
            "tea bags",
        ],
        "desc": "Tea and tea bags",
    },
    {
        "terms": [
            "Vegetables",
        ],
        "desc": "Vegetables",
    },
    {
        "terms": [
            "Coffee filters",
        ],
        "desc": "Coffee filters",
    },
    {
        "terms": [
            "pizza boxes",
        ],
        "desc": "Greasy pizza boxes",
    },
    {
        "terms": [
            "Paper plates",
        ],
        "desc": "Paper plates",
    },
    {
        "terms": [
            "Paper bags", "napkins", "paper napkins", "tissues", "paper tissues", "paper towels",
        ],
        "desc": "Paper bags, napkins, tissues and towels",
    },
    {
        "terms": [
            "take-out boxes", "Paper take-out boxes", "paper containers",
        ],
        "desc": "Paper take-out boxes and containers (metal handle OK)",
    },
    {
        "terms": [
            "Tissues",
        ],
        "desc": "Tissues",
    },
    {
        "terms": [
            "Branches", "brush",
        ],
        "desc": "Branches and brush",
    },
    {
        "terms": [
            "Flowers", "floral trimmings",
        ],
        "desc": "Flowers and floral trimmings",
    },
    {
        "terms": [
            "Grasses", "weeds",
        ],
        "desc": "Grasses and weeds",
    },
    {
        "terms": [
            "Leaves",
        ],
        "desc": "Leaves",
    },
    {
        "terms": [
            "Tree trimmings",
        ],
        "desc": "Tree trimmings (less than 6 inches in diameter and 4 feet long)",
    },
    {
        "terms": [
            "Cotton balls", "cotton swabs",
        ],
        "desc": "Cotton balls and cotton swabs",
    },
    {
        "terms": [
            "Hair", "fur", "feathers",
        ],
        "desc": "Hair, fur, and feathers (non-synthetic)",
    },
    {
        "terms": [
            "Compostable Plastic", "cutlery", "compostable cutlery",
        ],
        "desc": "Plastic and cutlery clearly labeled “Compostable” (green stripe or sticker to allow for easy identification)",
    },
    {
        "terms": [
            "Vegetable wood crates", "wood crates", "Vegetable crates", "wooden crates"
        ],
        "desc": "Vegetable wood crates (metal wire is okay)",
    },
    {
        "terms": [
            "Waxed cardboard",
        ],
        "desc": "Waxed cardboard",
    },
    {
        "terms": [
            "lumber", "sawdust",
        ],
        "desc": "Wood – small pieces of lumber or sawdust from clean wood only (no plywood, press board, painted, stained or treated wood)",
    },
    {
        "terms": [
            "chop sticks", "wooden chop sticks",
        ],
        "desc": "Wooden chop sticks",
    },
    {
        "terms": [
            "Corks",
        ],
        "desc": "Corks – natural (drop in barrels at Whole Foods)",
    },
];
const recycling = [
    {
        "terms": [
            "cans", "Aluminum cans",
        ],
        "desc": "Aluminum cans",
    },
    {
        "terms": [
            "foil", "Aluminum foil",
            "trays", "Aluminum trays",
        ],
        "desc": "Aluminum foil and trays (ball foil up to softball size)",
    },
    {
        "terms": [
            "lids", "Caps",
        ],
        "desc": "Caps and lids from bottles, jars and steel (tin) cans",
    },
    {
        "terms": [
            "Paint cans",
        ],
        "desc": "Paint cans (must be empty or dry)",
    },
    {
        "terms": [
            "Spray cans",
        ],
        "desc": "Spray cans (must be empty)",
    },
    {
        "terms": [
            "Steel cans", "tin cans",
        ],
        "desc": "Steel (tin) cans",
    },
    {
        "terms": [
            "plastic bags", "bags",
        ],
        "desc": "Clean, dry, empty plastic bags inside a clear plastic bag (the size roughly of a basketball)",
    },
    {
        "terms": [
            "Bottles",
        ],
        "desc": "Bottles (leave caps on)",
    },
    {
        "terms": [
            "Buckets",
        ],
        "desc": "Buckets (metal handle ok)",
    },
    {
        "terms": [
            "CDs", "DVDs", "CDROMs", "CD Cases",
        ],
        "desc": "CD’s, DVD’s, CDROM and Cases (remove paper insert)",
    },
    {
        "terms": [
            "Coffee cup lids",
        ],
        "desc": "Coffee cup lids",
    },
    {
        "terms": [
            "Containers", "clamshells",
        ],
        "desc": "Containers and clamshells",
    },
    {
        "terms": [
            "plastic Corks",
        ],
        "desc": "Corks – plastic",
    },
    {
        "terms": [
            "Cups", "plates", "plastic cups", "plastic plates",
        ],
        "desc": "Cups and plates (plastic only, no Styrofoam)",
    },
    {
        "terms": [
            "Flower pots", "flower trays", "plastic flower pots", "plastic flower trays",
        ],
        "desc": "Flower pots and trays – plastic",
    },
    {
        "terms": [
            "Laundry detergent bottles",
        ],
        "desc": "Laundry detergent bottles",
    },
    {
        "terms": [
            "plastic packaging",
        ],
        "desc": "Molded plastic packaging",
    },
    {
        "terms": [
            "Toys",
        ],
        "desc": "Toys (no electronics, metal or batteries)",
    },
    {
        "terms": [
            "Tubs", "lids", "yogurt containers", "Tupperware",
        ],
        "desc": "Tubs and lids (i.e.,: yogurt containers and Tupperware)",
    },
    {
        "terms": [
            "Utensils", "plastic utensils",
        ],
        "desc": "Utensils – plastic",
    },
    {
        "terms": [
            "Linens", "Towels", "curtains",
        ],
        "desc": "Linens – Clean and placed in clear bag. Towels, curtains okay.",
    },
    {
        "terms": [
            "Fabric",
        ],
        "desc": "Fabric – Clean and placed in clear bag. Rips, holes, single socks okay. No sneakers, boots, belts, or purses.",
    },
    {
        "terms": [
            "Rags",
        ],
        "desc": "Rags – Clean and placed in clear bag. Towels, curtains okay.",
    },
    {
        "terms": [
            "Clothes", "socks",
        ],
        "desc": "Clothes – Rips, holes, single socks okay. Place clean clothes in clear bag. If clothes are in good condition, please donate them to a thrift store.",
    },
    {
        "terms": [
            "paper cups", "coffee cups",
        ],
        "desc": "Empty, clean coffee cups",
    },
    {
        "terms": [
            "ice cream containers",
        ],
        "desc": "Empty, clean ice cream containers",
    },
    {
        "terms": [
            "Soup cartons", "juice boxes",
        ],
        "desc": "Soup cartons and juice boxes",
    },
    {
        "terms": [
            "Paper cartons", "milk cartons", "juice cartons", "beverage cartons",
        ],
        "desc": "Paper milk, juice and other beverage cartons",
    },
    {
        "terms": [
            "Bags", "paper bags",
        ],
        "desc": "Bags (paper only)",
    },
    {
        "terms": [
            "Cardboard",
        ],
        "desc": "Cardboard (non-waxed)",
    },
    {
        "terms": [
            "Cereal boxes", "Paperboard",
        ],
        "desc": "Cereal boxes and Paperboard (remove plastic liner)",
    },
    {
        "terms": [
            "Computer paper", "office paper",
        ],
        "desc": "Computer and office paper",
    },
    {
        "terms": [
            "Egg cartons", "paper egg cartons",
        ],
        "desc": "Egg cartons (paper)",
    },
    {
        "terms": [
            "Envelopes",
        ],
        "desc": "Envelopes (windows okay)",
    },
    {
        "terms": [
            "Junk mail", "magazines",
        ],
        "desc": "Junk mail and magazines",
    },
    {
        "terms": [
            "Newspapers",
        ],
        "desc": "Newspapers",
    },
    {
        "terms": [
            "Packing paper", "Kraft paper",
        ],
        "desc": "Packing or Kraft paper",
    },
    {
        "terms": [
            "Phonebooks",
        ],
        "desc": "Phonebooks",
    },
    {
        "terms": [
            "Sticky notes",
        ],
        "desc": "Sticky notes",
    },
    {
        "terms": [
            "Shredded paper",
        ],
        "desc": "Shredded paper (place in sealed paper bag and label “Shredded Paper”)",
    },
    {
        "terms": [
            "Wrapping paper",
        ],
        "desc": "Wrapping paper (non-metallic)",
    },
    {
        "terms": [
            "Glass bottles", "Glass jars", "bottles", "jars",
        ],
        "desc": "Glass bottles and jars only (metal caps and lids too)",
    },
];
const landfill = [
    {
        "terms": [
            "cat litter",
        ],
        "desc": "your kitty's doodoo",
    },
];

module.exports = {
    compost: compost,
    recycling: recycling,
    landfill: landfill,
};