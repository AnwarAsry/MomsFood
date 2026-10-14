import { FaClock } from "react-icons/fa6";

export const BadgePrepTime = ({ prepTime, full }: { prepTime: number, full?: boolean }) => {
    return (
        <div className="flex items-center gap-1 text-orange-600">
            <FaClock />
            <span className="text-gray-600">{full ? `Prep time: ${prepTime} min` : `${prepTime} min`}</span>
        </div>
    );
}