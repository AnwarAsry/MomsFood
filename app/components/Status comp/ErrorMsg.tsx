import { PiWarningCircleBold } from "react-icons/pi";

export const ErrorMsg = ({ text }: { text: string }) => {
    return (
        <p className="mt-1 px-3 py-1.5 flex items-center gap-2 border border-red-500 rounded-sm text-sm text-red-500 bg-red-50">
            <PiWarningCircleBold className="size-4" />
            {text}
        </p>
    );
}