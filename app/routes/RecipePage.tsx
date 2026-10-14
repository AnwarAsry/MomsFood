import { data, Link } from "react-router";
import type { Route } from "./+types/RecipePage";
import { Badge } from "~/components/Badges/Badge";
import { BadgeCookTime } from "~/components/Badges/BadgeCookTime";
import { BadgeServings } from "~/components/Badges/BadgeServings";
import { BadgeNumIngredients } from "~/components/Badges/BadgeNumIngredient";
import { IngredientsBox } from "~/components/Ingredients/IngredientsBox";
import { BadgePrepTime } from "~/components/Badges/BadgePrepTime";
import { IngredientsItem } from "~/components/Ingredients/IngredientsItem";
import { InstructionStep } from "~/components/InstructionStep";
import { getRecipeById } from "~/actions/Recipes";
import { LightBulb } from "~/components/Icons/LightBulb";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import type { IRecipe } from "~/models/Recipe";

export async function loader({ params }: Route.LoaderArgs) {
    const recipe = await getRecipeById(params.id);

    if (!recipe.success) {
        throw data("Not found", { status: 404 });
    }

    return recipe.data;
}

export default function RecipePage({
    loaderData,
}: Route.ComponentProps) {
    const recipe = loaderData as IRecipe;

    return (
        <div className="max-w-6xl min-h-screen mx-auto pt-7 px-5 pb-12">
            <Breadcrumb className="mb-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{recipe.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <section>
                <h1 className="mb-4 text-2xl font-medium text-gray-900">{recipe.title}</h1>

                {/* Badges info */}
                <div className="mb-4 flex items-center space-x-4 text-sm text-[#4b5563]">
                    <Badge category={recipe.category || ""} />
                    <BadgeNumIngredients numIngredients={recipe.ingredients.length} />
                    {recipe.servings !== undefined && <BadgeServings full servings={recipe.servings} />}
                    {recipe.prepTime !== undefined && <BadgePrepTime full prepTime={recipe.prepTime} />}
                    {recipe.cookTime !== undefined && <BadgeCookTime full cookTime={recipe.cookTime} />}
                </div>

                {/* Image Gallery */}
                {recipe.imgUrl && (
                    <div className="h-96 mb-8 rounded-xl overflow-hidden">
                        <img src={recipe.imgUrl} alt="image of food"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    {/* Ingredients */}
                    <IngredientsBox>
                        <ul className="flex flex-col gap-2 overflow-hidden">
                            {
                                recipe.ingredients.map((ingredient, index) => (
                                    <IngredientsItem key={index} ingredient={ingredient} />
                                ))
                            }
                        </ul>
                    </IngredientsBox>
                </div>
                <div className="lg:col-span-2">
                    {/* Instructions */}
                    <section>
                        <h3 className="mb-3 text-xl font-medium text-[#111827]">Instructions</h3>
                        <div className="flex flex-col gap-3.5">
                            {
                                recipe.instructions.map((instruction, index) => (
                                    <InstructionStep key={index} instruction={instruction} step={index} />
                                ))
                            }
                        </div>
                    </section>
                    {recipe.notes && (
                        <section className="mt-12 p-6 rounded-xl border border-[#e5e7eb] bg-[#f9fafb]">
                            <h4 className="mb-3 flex items-center text-[#111827]">
                                <LightBulb className="mr-2" />
                                Chef's Notes &amp; Tips
                            </h4>
                            <p className="text-[#374151]">{recipe.notes}</p>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
