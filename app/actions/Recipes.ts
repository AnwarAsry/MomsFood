import { type IRecipe } from "~/models/Recipe";
import type { IRecipeForm } from "~/models/RecipeForm";
import type { ServerAction, ServerActionResponse } from "~/models/response/ServerAction";

// Create Recipe
export const postRecipe = async (recipe: IRecipeForm): Promise<ServerAction> => {
    try {
        // Method to the backend

        return { message: `RECIPE CREATED!`, success: true }
    } catch (e) {
        return { message: `FAILED TO CREATE: ${e}`, success: false }
    }
}

// Get all Recipes
export const getAllRecipes = async (): Promise<ServerActionResponse<IRecipe[] | null>> => {
    try {
        // Method to the backend

        return { message: "Recipes retrived!", success: true, data: [] }
    } catch (e) {
        return { message: `FAILED TO FETCH RECIPES: ${e}`, success: false, data: null }
    }
}

// Get Recipe
export const getRecipeById = async (id: string): Promise<ServerActionResponse<IRecipe | null>> => {
    try {
        // Method to the backend

        return { message: "Recipe retrived!", success: true, data: null }
    } catch (e) {
        return { message: `FAILED TO FETCH RECIPE BY ID: ${e}`, success: false, data: null }
    }
}