import { defaultRecipe, type IRecipe } from "~/models/Recipe";
import type { ServerActionResponse } from "~/models/response/ServerAction";

// Create Recipe

// Get all Recipes


// Get Recipe
export const getRecipeById = async (id: string): Promise<ServerActionResponse<IRecipe | null>> => {
    try {
        // Method to the backend

        return { message: "Recipe retrived!", success: true, data: defaultRecipe }
    } catch (e) {
        return { message: `FAILED TO FETCH RECIPE BY ID: ${e}`, success: false, data: null }
    }
}