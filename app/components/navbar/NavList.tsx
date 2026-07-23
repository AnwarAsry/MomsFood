export const NavList = ({ children }: { children: React.ReactNode }) => {
    return (
        <nav className="hidden md:flex items-center space-x-6">
            {children}
        </nav>
    )
}