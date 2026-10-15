import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";

interface IRemoveBtnProps {
    onClick: () => void;
    list?: any[]
}

export const RemoveBtn = ({ onClick, list }: IRemoveBtnProps) => {
    return (
        <Button
            type="button"
            variant={"outline"}
            onClick={onClick}
            disabled={list?.length === 1}
            className={`${list?.length === 1 ? "opacity-0!" : ""} ${list?.length === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
            <RxCross2 />
        </Button>
    );
}