interface ISelectInputProps {
    value: string | number | string[] | undefined;
    className?: string;
    name?: string;
    onChange: (e: any) => void;
    children?: React.ReactNode
}

export const SelectInput = ({ value, className, name, onChange, children }: ISelectInputProps) => {
    return (
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={`${className || ''} w-full px-2 py-2 border border-black/20 rounded-md 
                                            focus:border-black outline-none 
                                            transition-colors`}
        >
            {children}
        </select>
    );
}