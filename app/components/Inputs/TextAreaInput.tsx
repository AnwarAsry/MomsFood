interface ITextAreaInputProps {
    value: string;
    name: string;
    placeholder: string;
    onChange: (e: any) => void;
}

export const TextAreaInput = ({ value, name, placeholder, onChange }: ITextAreaInputProps) => {
    return (
        <textarea name={name} id={name} placeholder={placeholder}
            className="w-full min-h-14 p-4 border border-black/20 rounded-lg focus:border-black outline-none resize-y transition-colors"
            value={value}
            onChange={onChange}
        />
    );
}