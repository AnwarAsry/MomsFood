import type { CategoryForm, IngredientField } from "~/models/RecipeForm";

export type FormErrors = {
    title?: string;
    category?: string;
    ingredients?: string | number[];
    instructions?: string;
};

export const validate = ({
    title,
    category,
    ingredients,
    instructions,
}: {
    title: string;
    category: CategoryForm;
    ingredients: IngredientField[];
    instructions: string[];
}): FormErrors => {
    const errors: FormErrors = {};

    if (!title.trim())
        errors.title = "Title is required";
    if (!category)
        errors.category = "Category is required";
    if (ingredients.every((ing) => !ing.name.trim())) {
        errors.ingredients = "Add at least one ingredient";
    } else {
        const incomplete = ingredients.some(
            (ing) => ing.name.trim() && (!ing.amount.trim() || !ing.unit.trim())
        );
        if (incomplete)
            errors.ingredients = "Every ingredient needs an amount and a unit";
    }
    if (instructions.every((s) => !s.trim()))
        errors.instructions = "Add at least one step";

    return errors;
};