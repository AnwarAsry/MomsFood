import { StepCount } from "./StepCount";

export const InstructionStep = ({ instruction, step }: { instruction: string; step: number }) => {
    return (
        <div className="flex items-center flex-start gap-3">
            <StepCount step={step + 1} />
            <p>{instruction}</p>
        </div>
    );
}