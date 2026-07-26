import { useState } from "react";
import type { Route } from "./+types/_index";
import { Filter } from "~/components/Filter/Filter";
import { FilterPill } from "~/components/Filter/FilterPill";
import { RecipeGrid } from "~/components/Recipes/RecipeGrid";
import { RecipeCard } from "~/components/Recipes/RecipeCard";
import { Categories, type Category } from "~/models/Categories";
import { type IRecipeCard } from "~/models/Recipe";
import { getAllRecipes } from "~/actions/Recipes";
import { data, Link } from "react-router";
import { AddNewRecipeBtn } from "~/components/Buttons/AddNewRecipeBtn";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function loader() {
	const recipes = await getAllRecipes();

	if (!recipes.success) {
		throw data("Not found", { status: 404 })
	}

	return recipes.data;
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
			{filterData.length === 0 ? (
				<div className="py-16 text-center text-gray-500">
					<p className="mb-1 font-medium">No recipes yet</p>
					<p className="mb-4 text-sm text-gray-400">Start building your collection</p>
					<AddNewRecipeBtn />
				</div>
			) : (
				<RecipeGrid>
					{filterData.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
				</RecipeGrid>
			)}
		</div>
	</>;
}
