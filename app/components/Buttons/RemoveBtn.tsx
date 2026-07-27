interface IRemoveBtnProps {
    onClick: () => void;
    list?: any[]
}

export const RemoveBtn = ({ onClick, list }: IRemoveBtnProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={list?.length === 1}
            className={`${list?.length === 1 ? "opacity-0" : "opacity-100"} ${list?.length === 1 ? "cursor-not-allowed" : "cursor-pointer"} w-7 h-7 flex shrink-0 items-center justify-center rounded-lg border border-black/30 text-base`}
            aria-label="Remove"
        >
            ×
        </button>
    );
}