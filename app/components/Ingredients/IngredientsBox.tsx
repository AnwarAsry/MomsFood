export const IngredientsBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="sticky top-8">
            <h3 className="mb-2.5 text-xl font-medium text-[#111827]">Ingredients</h3>
            {children}
        </section>
    )
}