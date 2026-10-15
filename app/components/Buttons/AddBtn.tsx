import { FaPlus } from "react-icons/fa6";
import { Button } from "../ui/button";

interface IAddBtn {
    onClick: () => void;
    text: string;
}

export const AddBtn = ({ text, onClick }: IAddBtn) => {
    return (
        <Button className="cursor-pointer" variant={"secondary"} onClick={onClick}>
            <FaPlus className="size-3" /> Add {text}
        </Button>
    );
}