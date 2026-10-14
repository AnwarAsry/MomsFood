import type React from "react";
import { FaLightbulb } from "react-icons/fa6";

export const LightBulb = ({ className }: React.ComponentProps<"svg">) => {
    return (
        <FaLightbulb className={`size-5 text-yellow-500 ${className}`} />
    );
}