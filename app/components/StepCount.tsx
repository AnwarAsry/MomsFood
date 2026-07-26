export const StepCount = ({ step }: { step: number }) => {
    return (
        <span className="min-w-8 w-8 h-8 mt-px shrink-0 flex items-center justify-center rounded-full font-medium bg-brand-light text-brand-dark">{step}</span>
    );
}