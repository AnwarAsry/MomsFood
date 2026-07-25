import type { Ingredient } from "~/models/Recipe"

interface IIngredientsItemProps {
    ingredient: Ingredient;
    className?: string;
}

export const IngredientsItem = ({ ingredient, className }: IIngredientsItemProps) => {
    return (
        <li className={`py-2 px-3.5 flex items-center ${className || ''}`}>
            <input type="checkbox" className="w-5 h-5 mr-3 rounded text-[#4b5563]" />
            <div className="w-full flex justify-between">
                <span className="text-base">{ingredient.name}</span>
                <span className="text-base font-medium">{ingredient.amount}{ingredient.unit ? ' ' + ingredient.unit : ''}</span>
            </div>
        </li>
    )
}