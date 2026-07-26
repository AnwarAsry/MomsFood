import { FaList } from "react-icons/fa6";

export const BadgeNumIngredients = ({ numIngredients }: { numIngredients: number }) => {
    return (
        <div className="flex items-center gap-1 text-brand">
            <FaList className="w-3.5 h-3.5" />
            <span className="text-gray-600">{numIngredients} items</span>
        </div>
    );
}