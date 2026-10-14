import { useState } from "react";
import type { Route } from "./+types/Home";
import { Filter } from "~/components/Filter/Filter";
import { FilterPill } from "~/components/Filter/FilterPill";
import { RecipeGrid } from "~/components/Recipes/RecipeGrid";
import { RecipeCard } from "~/components/Recipes/RecipeCard";
import { CategoriesFilter, type CategoryFilter } from "~/models/Categories";
import { type IRecipeCard } from "~/models/Recipe";
import { getAllRecipes } from "~/actions/Recipes";
import { data } from "react-router";
import { AddNewRecipeBtn } from "~/components/Buttons/AddNewRecipeBtn";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "~/components/ui/empty";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Moms Food - Home" },
		{ name: "description", content: "Home page for Moms Food" },
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

	const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

	const filterData = loaderData! as IRecipeCard[];

	const filteredRecipes = activeFilter === "All" ? filterData : filterData.filter((r) => r.category === activeFilter);

	return <>
		<section className="max-w-4xl mx-auto mt-10 px-6">
			<Filter>
				{
					CategoriesFilter.map((cat, i) => <FilterPill key={i} text={cat} active={activeFilter === cat} onClick={() => setActiveFilter(cat)} />)
				}
			</Filter>
		</section >
		<div className="max-w-176 lg:max-w-260 px-6 mx-auto mb-5">
			{filterData.length === 0 ? (
				// No recipes
				<Empty>
					<EmptyHeader>
						<EmptyTitle>No recipes yet</EmptyTitle>
						<EmptyDescription>Start building your collection</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<AddNewRecipeBtn />
					</EmptyContent>
				</Empty>
			) : filteredRecipes.length === 0 ? (
				// No recipes for the selected filter
				<Empty>
					<EmptyHeader>
						<EmptyDescription>No {activeFilter} recipes found</EmptyDescription>
					</EmptyHeader>
				</Empty>
			) : (
				<RecipeGrid>
					{filteredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
				</RecipeGrid>
			)}
		</div>
	</>;
}
