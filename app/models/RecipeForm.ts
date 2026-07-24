export interface IngredientField {
    name: string;
    amount: string;
    unit: string;
}

export type Unit = "" | "g" | "kg" | "ml" | "L" | "tsp" | "tbsp" | "cup" | "oz" | "lb";
export const Units: Unit[] = ["", "g", "kg", "ml", "L", "tsp", "tbsp", "cup", "oz", "lb"];