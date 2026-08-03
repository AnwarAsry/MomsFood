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
    servings: string;
    cookTime: string;
    prepTime: string;
    notes: string;
}

export interface IRecipeCard {
    id: string;
    category: Category;
    title: string;
    imgUrl: string;
    servings: string;
    cookTime: string;
    numIngredients: number;
}