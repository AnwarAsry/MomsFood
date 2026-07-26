import { FaFire } from "react-icons/fa6";

export const BadgeCookTime = ({ cookTime, full }: { cookTime: string, full?: boolean }) => {

    if (full) {
        return (
            <div className="flex items-center gap-1">
                <FaFire />
                <span>Cook time: {cookTime} min</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1">
            <FaFire />
            <span>{cookTime} min</span>
        </div>
    );
}