import { useRef, useState } from "react";
import { ErrorMsg } from "./Status comp/ErrorMsg";
import { Attachment, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription, AttachmentActions, AttachmentAction } from "./ui/attachment";
import { RxCross2 } from "react-icons/rx";
import { FaImage, FaRegFileImage } from "react-icons/fa6";
import { Input } from "./ui/input";

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
                <Attachment className="w-full">
                    <AttachmentMedia>
                        <FaRegFileImage />
                    </AttachmentMedia>
                    <AttachmentContent>
                        <AttachmentTitle>{fileName}</AttachmentTitle>
                        <AttachmentDescription>Image</AttachmentDescription>
                    </AttachmentContent>
                    <AttachmentActions>
                        <AttachmentAction onClick={handleClear}>
                            <RxCross2 />
                        </AttachmentAction>
                    </AttachmentActions>
                </Attachment>
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
                            ? "border-orange-600 bg-brand-light"
                            : "border-black/20 hover:border-orange-600 hover:bg-brand-light/30"
                        }
                    `}
                >
                    <FaImage className="size-9 mb-3 inline-block text-orange-600" />
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        {isDragging ? "Drop it!" : "Drop your image here or click to browse"}
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                    <Input
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