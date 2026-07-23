import { Link } from "react-router"
import { Badge } from "../Badge"
import { FaList } from "react-icons/fa6"

export const RecipeCard = ({ recipe }: {
    recipe: {
        id: string,
        image_url: string,
        category: string, title: string,
        ingredients: { name: string, amount: number, unit: string }[],
        instructions: string[],
        notes: string,
        servings: number, prepTime: number, cookTime: number,
    },
}) => {
    return (
        <div className="w-full max-w-80 border border-black/10 rounded-xl cursor-pointer overflow-hidden transition-border-color duration-120 hover:border-black">
            <div className="h-30 relative">
                {/* Image */}
                <img
                    className="w-full h-full object-cover"
                    src={recipe.image_url}
                    alt="Recipe Image"
                />
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
                    <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                        <span>{recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg>
                        <span>{recipe.servings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaList className="w-3.5 h-3.5" />
                        <span>{recipe.ingredients.length} items</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
