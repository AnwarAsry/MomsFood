import { FaList } from "react-icons/fa6";

export const BadgeNumIngredients = ({ numIngredients }: { numIngredients: number }) => {
    return (
        <div className="flex items-center gap-1">
            <FaList className="w-3.5 h-3.5" />
            <span>{numIngredients} items</span>
        </div>
    );
}