interface FilterPillProps {
    text: string
    active?: boolean
    onClick?: () => void
}

export const FilterPill = ({ text, active, onClick }: FilterPillProps) => {
    return (
        <span
            className={`
                ${active ?
                    "bg-brand hover:bg-brand-dark text-white" :
                    "border border-[#d1d5db] hover:bg-brand-light bg-white text-[#374151]"}
                px-4 py-2 rounded-xl
                text-sm
                cursor-pointer
                select-none
            `}
            onClick={onClick}
        >
            {text}
        </span>
    )
}