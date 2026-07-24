interface IInputProps {
    type: string;
    name?: string
    placeholder: string;
    min?: string;
    value: string;
    onChange: (e: any) => void;
    big?: boolean;
}

export const Input = ({ big, type, name, placeholder, min, value, onChange }: IInputProps) => {

    if (big) {
        return (
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-black/20 rounded-md 
                                    focus:border-black text-xl font-bold outline-none 
                                    transition-colors"
            />
        );
    }

    return (
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            min={min}
            value={value}
            onChange={onChange}
            className="w-full px-2 py-2 border border-black/20 rounded-md 
                                    focus:border-black outline-none 
                                    transition-colors"
        />
    );
}