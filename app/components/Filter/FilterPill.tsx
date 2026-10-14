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
                    "bg-orange-600 text-white" :
                    "border border-[#d1d5db] hover:bg-orange-100 bg-white text-[#374151]"}
                px-3 py-1 rounded-md
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