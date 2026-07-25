import type { Category } from "./Categories";

export interface IngredientField {
    name: string;
    amount: string;
    unit: string;
}

export interface IRecipeForm {
    category: Category;
    title: string;
    ingredients: string;
    instructions: string;
    imageFile: File;
    notes: string;
}

export type Unit = "" | "g" | "kg" | "ml" | "L" | "tsp" | "tbsp" | "cup" | "oz" | "lb";
export const Units: Unit[] = ["", "g", "kg", "ml", "L", "tsp", "tbsp", "cup", "oz", "lb"];