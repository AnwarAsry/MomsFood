import { Link } from "react-router"
import { Badge } from "../Badges/Badge"
import { BadgeCookTime } from "../Badges/BadgeCookTime"
import { BadgeServings } from "../Badges/BadgeServings"
import { BadgeNumIngredients } from "../Badges/BadgeNumIngredient"
import type { IRecipeCard } from "~/models/Recipe"
import { getCategoryStyle } from "~/models/Categories"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "../ui/card"

export const RecipeCard = ({ recipe }: { recipe: IRecipeCard }) => {
    const s = getCategoryStyle(recipe.category);

    return (
        <Link to={`/recipe/${recipe.id}`} className="w-full max-w-80 group">
            <Card size="sm" className=" pt-0 relative">
                <div className="z-30 absolute inset-0 flex items-center justify-center aspect-video" style={{ background: s.bg, color: s.text }}>
                    <span className="text-5xl font-medium">{recipe.title[0]}</span>
                </div>
                <img
                    className="z-20 w-full object-cover aspect-video"
                    src={recipe.imgUrl}
                    alt="Recipe Image"
                />
                <CardHeader>
                    <CardAction>
                        <Badge category={recipe.category} />
                    </CardAction>
                    <CardTitle className="text-lg! font-medium! group-hover:underline">
                        {recipe.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4 text-xs text-[#6b7280]">
                        <BadgeNumIngredients numIngredients={recipe.numIngredients} />
                        {recipe.cookTime && <BadgeCookTime cookTime={recipe.cookTime} />}
                        {recipe.servings && <BadgeServings servings={recipe.servings} />}
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
