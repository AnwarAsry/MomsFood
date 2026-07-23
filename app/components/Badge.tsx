export const Badge = ({ category }: { category: string }) => {
    return (
        <span className="px-3 py-1 inline-block rounded-full text-white font-medium text-xs bg-[#4b5563]">
            {category}
        </span>
    );
}