const CATEGORY_CONFIG = {
    Chicken: { bg: "#FAEEDA", text: "#633806" },
    Soup: { bg: "#E1F5EE", text: "#085041" },
    Meat: { bg: "#FAECE7", text: "#4A1B0C" },
    Dessert: { bg: "#FBEAF0", text: "#4B1528" },
    Pasta: { bg: "#EEEDFE", text: "#26215C" },
    Seafood: { bg: "#E3F2FD", text: "#0D3B6E" },
    Vegetarian: { bg: "#E8F5E9", text: "#1B5E20" },
    Breakfast: { bg: "#FFFDE7", text: "#5D4037" },
    Salad: { bg: "#F1F8E9", text: "#33691E" },
    Bread: { bg: "#FFF3E0", text: "#4E342E" },
} as const;

export type Category = keyof typeof CATEGORY_CONFIG;

export const Categories: Category[] = Object.keys(CATEGORY_CONFIG) as Category[];

export const CategoriesFilter = ["All", ...Categories] as const;
export type CategoryFilter = (typeof CategoriesFilter)[number];

export const getCategoryStyle = (category: string) => CATEGORY_CONFIG[category as Category] ?? { bg: "#F3F4F6", text: "#374151" };