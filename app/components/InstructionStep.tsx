export const InstructionStep = ({ step, index }: { step: string; index: number }) => {
    return (
        <div className="flex items-center flex-start gap-3">
            <span className="min-w-8 w-8 h-8 mt-px shrink-0 flex items-center justify-center rounded-full font-medium bg-[#4b5563] text-white">{index + 1}</span>
            <p>{step}</p>
        </div>
    );
}