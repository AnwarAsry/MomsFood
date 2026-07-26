export type FormErrors = {
    title?: string;
    category?: string;
    ingredients?: string | number[];
    instructions?: string;
};

export interface IngredientField {
    name: string;
    amount: string;
    unit: string;
}

export interface IRecipeForm {
    title: string;
    category: CategoryForm;
    servings?: string;
    prepTime?: string;
    cookTime?: string;
    ingredients: IngredientField[]
    instructions: string[];
    notes?: string;
}

export type Unit = "" | "g" | "kg" | "ml" | "L" | "tsp" | "tbsp" | "cup" | "oz" | "lb";
export const Units: Unit[] = ["", "g", "kg", "ml", "L", "tsp", "tbsp", "cup", "oz", "lb"];

export type CategoryForm = "" | "Chicken" | "Soup" | "Meat" | "Dessert" | "Pasta";
export const CategoriesInput: CategoryForm[] = ["", "Chicken", "Soup", "Meat", "Dessert", "Pasta"];