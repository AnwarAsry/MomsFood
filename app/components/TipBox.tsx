import { CheckMark } from "./Icons/CheckMark"
import { LightBulb } from "./Icons/LightBulb"

export const TipBox = () => {
    return (
        <section id="recipe-tips" className="p-6 mb-8 border rounded-xl bg-linear-to-br from-green-50 to-blue-50 border-green-200">
            <div className="mb-4 flex items-center space-x-3">
                <LightBulb />
                <h3 className="font-bold text-[#111827]">Pro Tips</h3>
            </div>
            <div className="space-y-3 text-sm text-[#4b5563]">
                <p className="flex items-start space-x-2">
                    <CheckMark />
                    <span>Use high-quality photos to make your recipe more appealing</span>
                </p>
                <p className="flex items-start space-x-2">
                    <CheckMark />
                    <span>Be specific with measurements and cooking times</span>
                </p>
                <p className="flex items-start space-x-2">
                    <CheckMark />
                    <span>Include helpful tips and substitutions in your notes</span>
                </p>
                <p className="flex items-start space-x-2">
                    <CheckMark />
                    <span>Test your recipe before publishing</span>
                </p>
            </div>
        </section>
    )
}