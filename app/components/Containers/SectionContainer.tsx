export const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mb-6 py-6 px-6 flex flex-col gap-5 rounded-xl ring-1 ring-foreground/10 bg-white">
            {children}
        </div>
    );
}