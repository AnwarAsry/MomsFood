import { data, Link } from "react-router";
import type { Route } from "./+types/_index.$id";
import { FaArrowLeft } from "react-icons/fa6";
import { HiSlash } from "react-icons/hi2";
import { Badge } from "~/components/Badges/Badge";
import { BadgeCookTime } from "~/components/Badges/BadgeCookTime";
import { BadgeServings } from "~/components/Badges/BadgeServings";
import { BadgeNumIngredients } from "~/components/Badges/BadgeNumIngredient";
import { IngredientsBox } from "~/components/Ingredients/IngredientsBox";
import { BadgePrepTime } from "~/components/Badges/BadgePrepTime";
import { IngredientsItem } from "~/components/Ingredients/IngredientsItem";
import { InstructionStep } from "~/components/InstructionStep";
import { getRecipeById } from "~/actions/Recipes";
import { NotFound } from "~/components/Status comp/NotFound";
import { LightBulb } from "~/components/Icons/LightBulb";

export async function loader({ params }: Route.LoaderArgs) {
    const recipe = await getRecipeById(params.id);

    if (!recipe.success) {
        throw data("Not found", { status: 404 });
    }

    return recipe.data;
}

export function ErrorBoundary() {
    return <NotFound />;
}

export default function RecipePage({
    loaderData,
}: Route.ComponentProps) {
    return (
        <div className="max-w-6xl min-h-screen mx-auto pt-7 px-5 pb-12">
            <section className="mb-4 flex items-center gap-2">
                <Link to=".." className="w-fit py-1.5 px-3 flex items-center gap-1.5 border border-black/30 rounded-md text-sm hover:bg-gray-100 ">
                    <FaArrowLeft />
                    Back
                </Link>
                <HiSlash className="text-[20px] font-extralight text-gray-600" />
                <span className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    {loaderData!.title}
                </span>
            </section>
            <section>
                <h1 className="mb-4 text-2xl font-medium text-gray-900">{loaderData!.title}</h1>

                {/* Badges info */}
                <div className="mb-4 flex items-center space-x-4 text-sm text-[#4b5563]">
                    <Badge category={loaderData?.category || ""} />
                    <BadgePrepTime full prepTime={loaderData!.prepTime} />
                    <BadgeCookTime full cookTime={loaderData!.cookTime} />
                    <BadgeServings full servings={loaderData!.servings} />
                    <BadgeNumIngredients numIngredients={loaderData!.ingredients.length} />
                    {/* <div className="flex items-center">
                        <i className="mr-1"><svg className="w-3.5 h-3.5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="signal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path></svg></i>
                        Easy
                    </div> */}
                </div>

                {/* Image Gallery */}
                <div className="mb-8">
                    <div className="h-96 mb-4 flex items-center justify-center rounded-xl text-white text-2xl bg-[#d1d5db] overflow-hidden">
                        <img src={loaderData!.image_url} alt="image of food"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* <div className="grid grid-cols-4 gap-4">
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Step 1</div>
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Step 2</div>
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Step 3</div>
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Final</div>
                </div> */}
                </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    {/* Ingredients */}
                    <IngredientsBox>
                        <ul className="border border-black/10 rounded-xl overflow-hidden">
                            {
                                loaderData!.ingredients.map((ingredient, index) => (
                                    <IngredientsItem className={index < loaderData!.ingredients.length - 1 ? 'border-b border-black/10' : ''} key={index} ingredient={ingredient} />
                                ))
                            }
                        </ul>
                    </IngredientsBox>
                </div>
                <div className="lg:col-span-2">
                    {/* Instructions */}
                    <h3 className="mb-3 text-xl font-medium text-[#111827]">Instructions</h3>
                    <div className={`${loaderData!.notes ? 'mb-7' : ''} flex flex-col gap-3.5`}>
                        {
                            loaderData!.instructions.map((step, index) => (
                                <InstructionStep key={index} step={step} index={index} />
                            ))
                        }
                    </div>
                    {loaderData!.notes && (
                        <div className="mt-12 p-6 rounded-xl border border-[#e5e7eb] bg-[#f9fafb]">
                            <h4 className="mb-3 flex items-center text-[#111827]">
                                <i className="mr-2">
                                    <LightBulb />
                                </i>
                                Chef's Notes &amp; Tips
                            </h4>
                            <p className="text-[#374151]">{loaderData!.notes}</p>
                            {/* <ul className="pl-5 space-y-2 list-disc text-[#374151]">
                                <li>For chewier cookies, slightly underbake them and let them finish cooking on the hot pan</li>
                                <li>Room temperature ingredients mix better - take eggs and butter out 30 minutes before baking</li>
                                <li>Don't skip the parchment paper - it prevents sticking and ensures even browning</li>
                                <li>Store in an airtight container for up to one week, or freeze dough balls for later</li>
                            </ul> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
