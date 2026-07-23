export const RecipeGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid place-items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {children}
        </div>
    )
}