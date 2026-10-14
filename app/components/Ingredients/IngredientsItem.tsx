import type { Ingredient } from "~/models/Recipe"
import { Label } from "../ui/label";

interface IIngredientsItemProps {
    ingredient: Ingredient;
}

export const IngredientsItem = ({ ingredient }: IIngredientsItemProps) => {
    return (
        <li>
            <Label htmlFor={ingredient.name} className="py-2 px-3 flex items-center border rounded-md border-black/10 hover:bg-orange-100 cursor-pointer peer-checked:line-through">
                <input id={ingredient.name} type="checkbox" className="w-5 h-5 mr-3 rounded text-[#4b5563] cursor-pointer peer" />
                <p
                    className="w-full relative flex justify-between after:content-[''] after:absolute after:left-0 after:top-1/2
                        after:w-0 after:h-px after:bg-current
                        peer-checked:after:w-full after:transition-all after:duration-200"
                >
                    {ingredient.name}
                    <span className="font-medium">{ingredient.amount} {ingredient.unit ? ' ' + ingredient.unit : ''}</span>
                </p>
            </Label>
        </li>
    )
}