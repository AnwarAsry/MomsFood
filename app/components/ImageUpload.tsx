import { useRef, useState } from "react";
import { ErrorMsg } from "./Status comp/ErrorMsg";
import { RemoveBtn } from "./Buttons/RemoveBtn";

interface ImageUploadProps {
    imgUrl: string;
    onChange: (url: string) => void;
    error?: string;
}

export const ImageUpload = ({ imgUrl, onChange, error }: ImageUploadProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [filePreview, setFilePreview] = useState("");
    const [fileName, setFileName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File) => {
        if (!file.type.startsWith("image/")) return;
        const objectUrl = URL.createObjectURL(file);
        setFilePreview(objectUrl);
        setFileName(file.name);
        onChange(objectUrl);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    };

    const handleClear = () => {
        setFilePreview("");
        setFileName("");
        onChange("");
        if (inputRef.current) inputRef.current.value = "";
    };

    const preview = filePreview || imgUrl;

    return (
        <div className="space-y-3">
            {preview ? (
                <div className="px-3 py-2 relative flex justify-between border border-black/20 rounded-lg overflow-hidden">
                    <div className="min-w-0 flex items-center gap-2">
                        <svg className="size-4 shrink-0 text-brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                        </svg>
                        <span className="text-sm text-gray-700 truncate">{fileName}</span>
                    </div>
                    <RemoveBtn onClick={handleClear} />
                </div>
            ) : (
                <div
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragEnter={() => setIsDragging(true)}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`
                        p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
                        ${isDragging
                            ? "border-brand bg-brand-light"
                            : "border-black/20 hover:border-brand hover:bg-brand-light/30"
                        }
                    `}
                >
                    <svg className="size-9 mb-3 inline-block text-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                    </svg>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        {isDragging ? "Drop it!" : "Drop your image here or click to browse"}
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                    <input
                        id="imageUpload"
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFile(file);
                        }}
                    />
                </div>
            )}

            {error && <ErrorMsg text={error} />}
        </div>
    );
};