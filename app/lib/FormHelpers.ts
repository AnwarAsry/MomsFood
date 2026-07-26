import type { CategoryForm, FormErrors, IngredientField } from "~/models/RecipeForm";

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
        const incompleteIndices = ingredients
            .map((ing, i) =>
                ing.name.trim() && (!ing.amount.trim() || parseFloat(ing.amount) <= 0 || !ing.unit.trim()) ? i : -1
            )
            .filter((i) => i !== -1);

        if (incompleteIndices.length > 0)
            errors.ingredients = incompleteIndices;
    }
    if (instructions.every((s) => !s.trim()))
        errors.instructions = "Add at least one step";

    return errors;
};