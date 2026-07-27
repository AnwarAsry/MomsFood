export const ErrorMsg = ({ text }: { text: string }) => {
    return (
        <p className="mt-1 px-3 py-2 rounded-md text-sm text-red-800 bg-red-100">{text}</p>
    );
}