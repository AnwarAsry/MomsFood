export const IngredientsItem = ({ name, amount, unit, className }: { name: string, amount: number, unit: string, className?: string }) => {
    return (
        <li className={`py-2 px-3.5 flex items-center ${className || ''}`}>
            <input type="checkbox" className="w-5 h-5 mr-3 rounded text-[#4b5563]" />
            <div className="w-full flex justify-between">
                <span className="text-base">{name}</span>
                <span className="text-base font-medium">{amount}{unit ? ' ' + unit : ''}</span>
            </div>
        </li>
    )
}