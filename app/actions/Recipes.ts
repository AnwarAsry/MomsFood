import { get, post } from "~/lib/ServiceBase";
import { type IRecipe, type IRecipeCard } from "~/models/Recipe";
import type { IRecipeForm } from "~/models/RecipeForm";
import type { ServerAction, ServerActionResponse } from "~/models/response/ServerAction";

// Create Recipe
export const postRecipe = async (recipe: IRecipeForm): Promise<ServerAction> => {
    try {
        const response = await post("", recipe);

        if (!response.success) {
            return { message: `FAILED TO CREATE: ${response.message}`, success: response.success }
        }

        return { message: `RECIPE CREATED! ${response.message}`, success: response.success }
    } catch (e) {
        return { message: `FAILED TO CREATE: ${e}`, success: false }
    }
}

// Get all Recipes
export const getAllRecipes = async (): Promise<ServerActionResponse<IRecipeCard[] | null>> => {
    try {
        const response = await get<ServerActionResponse<IRecipeCard[] | null>>("");

        if (!response.success) {
            return { message: `FAILED TO FETCH: ${response.message}`, success: response.success }
        }

        return { message: `RECIPES RETRIVED! ${response.message}`, success: response.success, data: response.data }
    } catch (e) {
        return { message: `FAILED TO FETCH RECIPES: ${e}`, success: false, data: null }
    }
}

// Get Recipe
export const getRecipeById = async (id: string): Promise<ServerActionResponse<IRecipe | null>> => {
    try {
        const response = await get<ServerActionResponse<IRecipe | null>>(`/${id}`);

        if (!response.success) {
            return { message: `FAILED TO FETCH: ${response.message}`, success: response.success }
        }

        return { message: `RECIPE RETRIEVED! ${response.message}`, success: response.success, data: response.data }
    } catch (e) {
        return { message: `FAILED TO FETCH RECIPE BY ID: ${e}`, success: false, data: null }
    }
}