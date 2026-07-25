export interface IngredientField {
    name: string;
    amount: string;
    unit: string;
}

// export interface IRecipeForm {
//     category: Category;
//     title: string;
//     ingredients: string;
//     instructions: string;
//     imageFile: File;
//     notes: string;
// }

export type Unit = "" | "g" | "kg" | "ml" | "L" | "tsp" | "tbsp" | "cup" | "oz" | "lb";
export const Units: Unit[] = ["", "g", "kg", "ml", "L", "tsp", "tbsp", "cup", "oz", "lb"];

export type Category = "Chicken" | "Soup" | "Meat" | "Dessert" | "Pasta";
export const CategoriesInput: Category[] = ["Chicken", "Soup", "Meat", "Dessert", "Pasta"];