import { Link } from "react-router";
import { Badge } from "../Badges/Badge";

interface ISearchItemProps {
    to: string;
    onClick?: () => void;
    text: string;
    category: string;
}

export const SearchItem = ({ to, onClick, text, category }: ISearchItemProps) => {
    return (
        <li>
            <Link
                to={to}
                onClick={onClick}
                className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors no-underline"
            >
                <span className="text-sm font-medium text-gray-900">
                    {text}
                </span>
                <Badge category={category} />
            </Link>
        </li>
    );
}