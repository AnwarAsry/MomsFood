import { Link } from "react-router"
import { Badge } from "../Badges/Badge"
import { BadgeCookTime } from "../Badges/BadgeCookTime"
import { BadgeServings } from "../Badges/BadgeServings"
import { BadgeNumIngredients } from "../Badges/BadgeNumIngredient"
import type { IRecipeCard } from "~/models/Recipe"
import { getCategoryStyle } from "~/models/Categories"

export const RecipeCard = ({ recipe }: { recipe: IRecipeCard }) => {
    const s = getCategoryStyle(recipe.category);

    return (
        <div className="w-full max-w-80 border border-black/10 rounded-xl cursor-pointer overflow-hidden transition-border-color duration-120 hover:border-black">
            <div className="h-50 relative">
                {/* Image */}
                {recipe.image_url ? <img
                    className="w-full h-full object-cover"
                    src={recipe.image_url}
                    alt="Recipe Image"
                /> : <div className="h-full flex items-center justify-center" style={{ background: s.bg, color: s.text }}>
                    <span className="text-5xl font-medium text-black">{recipe.title[0]}</span>
                </div>
                }
            </div>

            {/* Content */}
            <div className="pt-3 px-3.5 pb-3.5">
                {/* Category */}
                <div className="mb-2">
                    <Badge category={recipe.category} />
                </div>
                {/* Title */}
                <Link to={`/${recipe.id}`} className="hover:underline">
                    <h3 className="mb-2.5 text-lg font-medium text-[#111827]">{recipe.title}</h3>
                </Link>
                {/* Short info */}
                <div className="flex gap-4 text-xs text-[#6b7280]">
                    <BadgeCookTime cookTime={recipe.cookTime} />
                    <BadgeServings servings={recipe.servings} />
                    <BadgeNumIngredients numIngredients={recipe.ingredients.length} />
                </div>
            </div>
        </div>
    )
}
