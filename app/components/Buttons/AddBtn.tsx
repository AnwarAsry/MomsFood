interface IAddBtn {
    onClick: () => void;
    text: string;
}

export const AddBtn = ({ text, onClick }: IAddBtn) => {
    return (
        <button type="button" onClick={onClick} className="w-full mt-2 py-2 border border-black/20 rounded-md text-brand-dark cursor-pointer hover:bg-brand-light">
            + Add {text}
        </button>
    );
}