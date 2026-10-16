import { Link } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu"

const navLinks: { label: string, href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" }
];

export const Nav = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {
                        navLinks.map(item => <NavigationMenuLink key={item.label} className={navigationMenuTriggerStyle()} render={<Link to={item.href}>{item.label}</Link>} />)
                    }
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}