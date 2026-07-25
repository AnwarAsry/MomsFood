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
    image_url: string;
    ingredients: Ingredient[];
    instructions: string[];
    notes: string;
    servings: string;
    cookTime: string;
    prepTime: string;
}

export interface IRecipeCard {
    id: string;
    category: Category;
    title: string;
    image_url: string;
    servings: number;
    cookTime: number;
    ingredients: Ingredient[];
}

export const defaultRecipe: IRecipe = {
    id: '2',
    category: 'Soup',
    title: 'Lentil Vegetable Soup',
    image_url: '',
    ingredients: [{ name: 'red lentils', amount: "250", unit: 'g' }, { name: 'carrots', amount: "2", unit: '' }, { name: 'celery stalks', amount: "2", unit: '' }, { name: 'onion', amount: "1", unit: '' }, { name: 'vegetable stock', amount: "1.5", unit: 'L' }, { name: 'cumin', amount: "1", unit: 'tsp' }],
    instructions: ['Sauté onion, carrots, and celery in olive oil for 5 minutes.', 'Add cumin and cook 1 more minute.', 'Add lentils and stock. Bring to a boil.', 'Reduce heat and simmer 25 minutes. Blend half for creaminess.'],
    notes: 'Freezes well. A squeeze of lemon before serving lifts the whole dish.',
    servings: "6",
    prepTime: "10",
    cookTime: "30"
}