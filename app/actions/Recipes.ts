import { defaultRecipe, type IRecipe } from "~/models/Recipe";
import type { ServerActionResponse } from "~/models/response/ServerAction";

// Create Recipe

// Get all Recipes
export const getAllRecipes = async (): Promise<ServerActionResponse<IRecipe[] | null>> => {
    try {
        // Method to the backend

        return { message: "Recipes retrived!", success: true, data: [defaultRecipe] }
    } catch (e) {
        return { message: `FAILED TO FETCH RECIPES: ${e}`, success: false, data: null }
    }
}

// Get Recipe
export const getRecipeById = async (id: string): Promise<ServerActionResponse<IRecipe | null>> => {
    try {
        // Method to the backend

        return { message: "Recipe retrived!", success: true, data: defaultRecipe }
    } catch (e) {
        return { message: `FAILED TO FETCH RECIPE BY ID: ${e}`, success: false, data: null }
    }
}