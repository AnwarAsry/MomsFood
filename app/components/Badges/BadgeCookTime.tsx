import { FaFire } from "react-icons/fa6";

export const BadgeCookTime = ({ cookTime, full }: { cookTime: string, full?: boolean }) => {
    return (
        <div className="flex items-center gap-1 text-brand">
            <FaFire />
            <span className="text-gray-600">{full ? `Cook time: ${cookTime} min` : `${cookTime}`} min</span>
        </div>
    );
}