import { useState } from "react";
import type { Route } from "./+types/_index";
import { Filter } from "~/components/Filter/Filter";
import { FilterPill } from "~/components/Filter/FilterPill";
import { RecipeGrid } from "~/components/Recipes/RecipeGrid";
import { RecipeCard } from "~/components/Recipes/RecipeCard";
import { Categories, type Category } from "~/models/Categories";
import { defaultRecipe, type IRecipeCard } from "~/models/Recipe";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function loader() {
	// const recipe = await fetchAllRecipes();

	return [defaultRecipe];
}

export default function Home({
	loaderData
}: Route.ComponentProps) {

	const [activeFilter, setActiveFilter] = useState<Category>("All");

	const filterData = loaderData! as IRecipeCard[];

	return <>
		<section className="max-w-4xl mx-auto mt-10 px-6">
			<Filter>
				{
					Categories.map((key, i) => <FilterPill key={i} text={key} active={activeFilter === key} onClick={() => setActiveFilter(key)} />)
				}
			</Filter >
		</section >
		<div className="max-w-176 lg:max-w-260 px-6 mx-auto mb-5">
			<RecipeGrid>
				{
					filterData.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
				}
			</RecipeGrid>
		</div>
	</>;
}
