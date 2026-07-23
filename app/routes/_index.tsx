import { useState } from "react";
import type { Route } from "./+types/home";
import { Filter } from "~/components/Filter/Filter";
import { FilterPill } from "~/components/Filter/FilterPill";
import { RecipeGrid } from "~/components/Recipes/RecipeGrid";
import { RecipeCard } from "~/components/Recipes/RecipeCard";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

const RECIPES = [
	{
		id: '1', category: 'Chicken', title: "Mom's Roast Chicken",
		image_url: 'https://images.unsplash.com/photo-1604908177520-1f3e5c8b6d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		ingredients: [{ name: 'whole chicken', amount: 1.5, unit: 'kg' }, { name: 'garlic cloves', amount: 4, unit: '' }, { name: 'olive oil', amount: 3, unit: 'tbsp' }, { name: 'fresh rosemary', amount: 2, unit: 'tsp' }, { name: 'lemon', amount: 1, unit: '' }],
		instructions: ['Preheat oven to 200°C.', 'Pat chicken dry and rub all over with olive oil.', 'Mix garlic, rosemary, salt and pepper. Rub under and over the skin.', 'Stuff the cavity with halved lemon.', 'Roast 1 hr 20 min, basting halfway. Rest 15 min before carving.'],
		notes: 'Best served with roasted potatoes and pan drippings gravy.',
		servings: 4, prepTime: 15, cookTime: 80,
	},
	{
		id: '2', category: 'Soup', title: 'Lentil Vegetable Soup',
		image_url: 'https://images.unsplash.com/photo-1617196038820-1f3e5c8b6d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		ingredients: [{ name: 'red lentils', amount: 250, unit: 'g' }, { name: 'carrots', amount: 2, unit: '' }, { name: 'celery stalks', amount: 2, unit: '' }, { name: 'onion', amount: 1, unit: '' }, { name: 'vegetable stock', amount: 1.5, unit: 'L' }, { name: 'cumin', amount: 1, unit: 'tsp' }],
		instructions: ['Sauté onion, carrots, and celery in olive oil for 5 minutes.', 'Add cumin and cook 1 more minute.', 'Add lentils and stock. Bring to a boil.', 'Reduce heat and simmer 25 minutes. Blend half for creaminess.'],
		notes: 'Freezes well. A squeeze of lemon before serving lifts the whole dish.',
		servings: 6, prepTime: 10, cookTime: 30,
	},
	{
		id: '3', category: 'Pasta', title: 'Classic Spaghetti Carbonara',
		image_url: 'https://images.unsplash.com/photo-1604908177520-1f3e5c8b6d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		ingredients: [{ name: 'spaghetti', amount: 400, unit: 'g' }, { name: 'pancetta', amount: 150, unit: 'g' }, { name: 'egg yolks', amount: 4, unit: '' }, { name: 'pecorino romano', amount: 80, unit: 'g' }, { name: 'black pepper', amount: 1, unit: 'tsp' }],
		instructions: ['Cook pasta in heavily salted boiling water until al dente.', 'Fry pancetta until crispy. Remove from heat.', 'Whisk yolks with grated cheese and pepper.', 'Toss hot pasta with pancetta off the heat.', 'Add egg mix with a splash of pasta water. Toss quickly and serve.'],
		notes: 'Never add cream! Creaminess comes from eggs and pasta water alone.',
		servings: 4, prepTime: 5, cookTime: 20,
	},
	{
		id: '4', category: 'Dessert', title: 'Chocolate Lava Cake',
		image_url: 'https://images.unsplash.com/photo-1604908177520-1f3e5c8b6d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		ingredients: [{ name: 'dark chocolate', amount: 200, unit: 'g' }, { name: 'butter', amount: 100, unit: 'g' }, { name: 'eggs', amount: 4, unit: '' }, { name: 'sugar', amount: 100, unit: 'g' }, { name: 'flour', amount: 50, unit: 'g' }],
		instructions: ['Preheat oven to 200°C. Butter and flour 4 ramekins.', 'Melt chocolate and butter together, cool slightly.', 'Whisk eggs and sugar until pale and thick.', 'Fold chocolate into eggs, then fold in flour.', 'Bake 10–12 minutes until edges set but centre wobbles.'],
		notes: 'Can be prepared ahead and chilled. Add 2 extra minutes if baking from cold.',
		servings: 4, prepTime: 15, cookTime: 12,
	},
	{
		id: '5', category: 'Meat', title: 'Slow-Cooked Beef Stew',
		image_url: 'https://images.unsplash.com/photo-1604908177520-1f3e5c8b6d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		ingredients: [{ name: 'beef chuck', amount: 800, unit: 'g' }, { name: 'potatoes', amount: 3, unit: '' }, { name: 'carrots', amount: 2, unit: '' }, { name: 'red wine', amount: 200, unit: 'ml' }, { name: 'beef stock', amount: 500, unit: 'ml' }, { name: 'tomato paste', amount: 2, unit: 'tbsp' }],
		instructions: ['Season beef chunks and brown in batches. Set aside.', 'Sauté onion and garlic. Stir in tomato paste.', 'Deglaze with wine, scraping up the browned bits.', 'Return beef, add stock, potatoes, and carrots.', 'Cover and simmer 2 hours until beef is very tender.'],
		notes: 'Even better the next day. Serve with crusty bread.',
		servings: 6, prepTime: 20, cookTime: 120,
	},
	{
		id: '6', category: 'Chicken', title: 'Moroccan Chicken Tagine',
		image_url: 'https://images.unsplash.com/photo-1604908177520-1f3e5c8b6d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		ingredients: [{ name: 'chicken thighs', amount: 8, unit: '' }, { name: 'preserved lemons', amount: 2, unit: '' }, { name: 'green olives', amount: 100, unit: 'g' }, { name: 'ras el hanout', amount: 2, unit: 'tsp' }, { name: 'onion', amount: 1, unit: '' }, { name: 'chicken stock', amount: 300, unit: 'ml' }],
		instructions: ['Season chicken with ras el hanout, salt, and pepper.', 'Brown chicken on all sides. Set aside.', 'Soften sliced onion in the same pan.', 'Return chicken, add stock, olives, and preserved lemon strips.', 'Cover and simmer 45 minutes. Garnish with fresh coriander.'],
		notes: 'Serve over couscous. Preserved lemons are the secret ingredient.',
		servings: 4, prepTime: 15, cookTime: 55,
	},
];

const CATEGORIES = ['All', 'Chicken', 'Soup', 'Meat', 'Dessert', 'Pasta'];

let state = { view: 'list', category: 'All', search: '', recipe: null };

export default function Home() {

	const [activeFilter, setActiveFilter] = useState('All');

	return <>
		<section className="max-w-4xl mx-auto mt-10 px-6">
			<Filter>
				{
					CATEGORIES.map((key, i) => <FilterPill key={i} text={key} active={activeFilter === key} onClick={() => setActiveFilter(key)} />)
				}
			</Filter>
		</section>
		<div className="max-w-176 lg:max-w-260 px-6 mx-auto mb-5">
			<RecipeGrid>
				{
					RECIPES!.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
				}
			</RecipeGrid>
		</div>
	</>;
}
