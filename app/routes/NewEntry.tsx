import { useState } from "react";
import { useNavigate } from "react-router";
import { postRecipe } from "~/actions/Recipes";
import { AddBtn } from "~/components/Buttons/AddBtn";
import { RemoveBtn } from "~/components/Buttons/RemoveBtn";
import { SectionContainer } from "~/components/Containers/SectionContainer";
import { SectionHeader } from "~/components/Containers/SectionHeader";
import { SectionText } from "~/components/Containers/SectionText";
import { SectionTitle } from "~/components/Containers/SectionTitle";
import { CheckMark } from "~/components/Icons/CheckMark";
import { LightBulb } from "~/components/Icons/LightBulb";
import { ImageUpload } from "~/components/ImageUpload";
import { Input } from "~/components/Inputs/Input";
import { Label } from "~/components/Inputs/Label";
import { SelectInput } from "~/components/Inputs/SelectInput";
import { TextAreaInput } from "~/components/Inputs/TextAreaInput";
import { ErrorMsg } from "~/components/Status comp/ErrorMsg";
import { StepCount } from "~/components/StepCount";
import { validate } from "~/lib/FormHelpers";
import { type Category } from "~/models/Categories";
import { CategoriesInput, UNITS, type CategoryForm, type FormErrors, type IngredientField, type IRecipeForm } from "~/models/RecipeForm";

export default function NewEntry() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState<FormErrors>({});

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState<CategoryForm>("");
    const [servings, setServings] = useState<string>("");
    const [prepTime, setPrepTime] = useState<string>("");
    const [cookTime, setCookTime] = useState<string>("");
    const [ingredients, setIngredients] = useState<IngredientField[]>([
        { name: "", amount: "", unit: "" }
    ]);
    const [instructions, setInstructions] = useState<string[]>([""]);
    const [imgUrl, setImgUrl] = useState("");
    const [notes, setNotes] = useState<string>("");

    const updateIngredient = (i: number, field: keyof IngredientField, value: string) => {
        setIngredients((prev) =>
            prev.map((ing, idx) => (idx === i ? { ...ing, [field]: value } : ing))
        );
    }
    const removeIngredient = (i: number) => {
        setIngredients((prev) => prev.filter((_, idx) => idx !== i));
    }
    const addIngredient = () => {
        setIngredients((prev) => [...prev, { name: "", amount: "", unit: "" }]);
    }

    const updateInstruction = (i: number, value: string) => {
        setInstructions((prev) => prev.map((s, idx) => (idx === i ? value : s)));
    }
    const addInstruction = () => {
        setInstructions((prev) => [...prev, ""]);
    }
    const removeInstruction = (i: number) => {
        setInstructions((prev) => prev.filter((_, idx) => idx !== i));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate({ title, category, ingredients, instructions, imgUrl });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        const payload: IRecipeForm = {
            title: title.trim(),
            imgUrl: imgUrl.trim(),
            category,
            servings,
            prepTime,
            cookTime,
            ingredients: ingredients
                .filter((ing) => ing.name.trim())
                .map((ing) => ({
                    name: ing.name.trim(),
                    amount: ing.amount.trim(),
                    unit: ing.unit.trim(),
                })),
            instructions: instructions.filter((s) => s.trim()),
            notes: notes.trim(),
        };

        await postRecipe(payload);

        setTitle("");
        setCategory("");
        setServings("");
        setPrepTime("");
        setCookTime("");
        setIngredients([{ name: "", amount: "", unit: "" }]);
        setInstructions([""]);
        setNotes("");

        navigate("/");
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-8 pb-15">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        {/* Basic information */}
                        <SectionContainer>
                            <SectionHeader>
                                <SectionTitle>Recipe Details</SectionTitle>
                                <SectionText>Let's start with the basics of your delicious recipe</SectionText>
                            </SectionHeader>
                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="title">
                                        Title *
                                    </Label>
                                    <Input big name="title" type="text" value={title} placeholder="Enter your recipe title..." onChange={(e) => setTitle(e.target.value)} />
                                    {errors.title && (
                                        <ErrorMsg text={errors.title} />
                                    )}
                                </div>
                                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2.5">
                                    <div>
                                        <Label htmlFor="category">
                                            Category *
                                        </Label>
                                        <SelectInput name="category" value={category} onChange={(e) => setCategory(e.target.value as Category)}>
                                            {CategoriesInput.map((c) => (
                                                <option key={c} value={c}>{c || "—"}</option>
                                            ))}
                                        </SelectInput>
                                        {errors.category && (
                                            <ErrorMsg text={errors.category} />
                                        )}
                                    </div>
                                    <div>
                                        <Label htmlFor="servings">
                                            Servings
                                        </Label>
                                        <Input name="servings" type="number" placeholder="4" min="1" value={servings} onChange={(e) => setServings(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label htmlFor="prepTime">
                                            Prep (min)
                                        </Label>
                                        <Input name="prepTime" type="number" placeholder="15" min="0" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label htmlFor="cookTime">
                                            Cook (min)
                                        </Label>
                                        <Input name="cookTime" type="number" placeholder="60" min="0" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </SectionContainer>

                        {/* Ingredients */}
                        <SectionContainer>
                            <SectionHeader>
                                <SectionTitle>Ingredients</SectionTitle>
                                <SectionText>List all the ingredients needed for your recipe</SectionText>
                            </SectionHeader>
                            <div className="mb-1.5 grid grid-cols-[2fr_72px_96px_28px] gap-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Label htmlFor="amount">Amount</Label>
                                <Label htmlFor="unit">Unit</Label>
                            </div>
                            {ingredients.map((ing, i) => {
                                const hasError = Array.isArray(errors.ingredients) && errors.ingredients.includes(i);

                                return (
                                    <div key={i} className="mb-1.5 items-center grid grid-cols-[2fr_72px_96px_28px] gap-1.5">
                                        <Input type="text" placeholder="e.g. garlic cloves" value={ing.name} onChange={(e) => updateIngredient(i, "name", e.target.value)} />
                                        <Input className={hasError && !ing.amount.trim() ? 'ring-red-500 border-red-800' : ''} type="number" placeholder="3" min="0" value={ing.amount} onChange={(e) => updateIngredient(i, "amount", e.target.value)} />
                                        <SelectInput className={hasError && !ing.unit.trim() ? 'border-red-800' : ''} value={ing.unit} onChange={(e) => updateIngredient(i, "unit", e.target.value)}>
                                            {UNITS.map((u) => (
                                                <option key={u} value={u}>{u || "—"}</option>
                                            ))}
                                        </SelectInput>
                                        <RemoveBtn onClick={() => removeIngredient(i)} list={ingredients} />
                                    </div>
                                )
                            })}
                            {errors.ingredients && (
                                <ErrorMsg text={typeof errors.ingredients === "string"
                                    ? errors.ingredients
                                    : "Every ingredient needs an amount and a unit"} />
                            )}
                            <AddBtn text="ingredient" onClick={addIngredient} />
                        </SectionContainer>

                        {/* Instruction */}
                        <SectionContainer>
                            <SectionHeader>
                                <SectionTitle>Instructions</SectionTitle>
                                <SectionText>Provide step-by-step instructions for your recipe</SectionText>
                            </SectionHeader>
                            {instructions.map((step, i) => (
                                <div key={i} className="mb-2.5 flex flex-start gap-2.5">
                                    <StepCount step={i + 1} />
                                    <TextAreaInput placeholder="Describe this step..." value={step} name="instructions" onChange={(e) => updateInstruction(i, e.target.value)} />
                                    <RemoveBtn onClick={() => removeInstruction(i)} list={instructions} />
                                </div>
                            ))}
                            {errors.instructions && (
                                <ErrorMsg text={errors.instructions} />
                            )}
                            <AddBtn text="step" onClick={addInstruction} />
                        </SectionContainer>

                        {/* Image Upload */}
                        <SectionContainer>
                            <SectionHeader>
                                <SectionTitle>Visual Content</SectionTitle>
                                <SectionText>Add photos to make your recipe more appealing</SectionText>
                            </SectionHeader>
                            <Label htmlFor="imageUpload">Recipe Image *</Label>
                            <ImageUpload imgUrl={imgUrl} onChange={setImgUrl} error={errors.imgUrl} />
                        </SectionContainer>

                        {/* Chef's notes */}
                        <SectionContainer>
                            <SectionHeader>
                                <SectionTitle>Chef's Notes & Tips</SectionTitle>
                                <SectionText>Share additional tips, variations, or storage instructions</SectionText>
                            </SectionHeader>
                            <div className="space-y-6">
                                <Label htmlFor="notes">Recipe Notes (optional)</Label>
                                <TextAreaInput placeholder="Share any helpful tips, substitutions, or variations..." value={notes} name="notes" onChange={(e) => setNotes(e.target.value)} />
                            </div>
                        </SectionContainer>
                    </div>
                    {/* Right Column */}
                    <div className="lg:col-span-1">
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
                    </div>
                </div>

                {/* Action Bar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                    <section className="flex items-center justify-end gap-2 lg:col-span-2">
                        <button className="w-fit px-6 py-2 flex items-center gap-1.5 border border-black/30 rounded-md font-medium text-brand-dark hover:bg-brand-light transition-colors cursor-pointer" onClick={() => navigate(-1)}>
                            Cancel
                        </button>
                        <button className="w-fit px-8 py-2 flex items-center rounded-md font-medium text-white bg-brand hover:bg-brand-dark transition-colors cursor-pointer" type="submit">
                            <svg className="mr-2 size-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
                            Save Recipe
                        </button>
                    </section>
                </div>
            </form>
        </main>
    );
}