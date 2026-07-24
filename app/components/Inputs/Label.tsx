interface ILabelProps {
    htmlFor: string;
    children: React.ReactNode
}
export const Label = ({ htmlFor, children }: ILabelProps) => {
    return (
        <label htmlFor={htmlFor} className="mb-1 block text-sm font-semibold text-[#374151]">{children}</label>
    );
}