import { Categories, type Category } from "./Categories";

export type FormErrors = {
    title?: string;
    category?: string;
    ingredients?: string | number[];
    instructions?: string;
    imgUrl?: string;
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
    imgUrl: string;
    notes?: string;
}

export const UNITS = ["", "g", "kg", "ml", "L", "tsp", "tbsp", "cup", "oz", "lb"] as const;
export type Unit = (typeof UNITS)[number];


export type CategoryForm = "" | Category;
export const CategoriesInput: CategoryForm[] = ["", ...Categories];