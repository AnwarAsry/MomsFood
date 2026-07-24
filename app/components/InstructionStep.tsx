import { StepCount } from "./StepCount";

export const InstructionStep = ({ step, index }: { step: string; index: number }) => {
    return (
        <div className="flex items-center flex-start gap-3">
            <StepCount step={index + 1} />
            <p>{step}</p>
        </div>
    );
}