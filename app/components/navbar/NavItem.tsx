import { Link } from "react-router";

interface NavItemProps {
    title: string
    href: string
}

export const NavItem = ({ title, href }: NavItemProps) => {
    return (
        <Link
            className="text-[#374151] hover:text-[#111827] cursor-pointer"
            to={href}
        >
            {title}
        </Link>
    );
}