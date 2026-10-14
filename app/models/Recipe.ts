import type { Category } from "./Categories";

export interface Ingredient {
    name: string;
    amount: string;
    unit: string;
}

export interface IRecipe {
    id: string;
    category: Category;
    title: string;
    imgUrl: string;
    ingredients: Ingredient[];
    instructions: string[];
    servings?: number;
    cookTime?: number;
    prepTime?: number;
    notes?: string;
}

export interface IRecipeCard {
    id: string;
    category: Category;
    title: string;
    imgUrl: string;
    servings?: number;
    cookTime?: number;
    numIngredients: number;
}