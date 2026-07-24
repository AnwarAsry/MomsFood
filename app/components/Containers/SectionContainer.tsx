export const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mb-8 p-8 rounded-xl border border-black/20">
            {children}
        </div>
    );
}