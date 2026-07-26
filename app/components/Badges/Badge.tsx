import { getCategoryStyle } from "~/models/Categories";

export const Badge = ({ category }: { category: string }) => {
    const s = getCategoryStyle(category);

    return (
        <span
            className="px-3 py-1 inline-block rounded-full font-medium text-xs"
            style={{ color: s.text, background: s.bg }}
        >
            {category}
        </span>
    );
}