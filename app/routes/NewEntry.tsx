import { useState } from "react";
import { FaRocket } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { postRecipe } from "~/actions/Recipes";
import { AddBtn } from "~/components/Buttons/AddBtn";
import { RemoveBtn } from "~/components/Buttons/RemoveBtn";
import { SectionContainer } from "~/components/Containers/SectionContainer";
import { SectionHeader } from "~/components/Containers/SectionHeader";
import { SectionText } from "~/components/Containers/SectionText";
import { SectionTitle } from "~/components/Containers/SectionTitle";
import { ImageUpload } from "~/components/ImageUpload";
import { SelectInput } from "~/components/Inputs/SelectInput";
import { ErrorMsg } from "~/components/Status comp/ErrorMsg";
import { StepCount } from "~/components/StepCount";
import { TipBox } from "~/components/TipBox";
import { Button } from "~/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
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

	const handleSubmit = async (e: { preventDefault: () => void }) => {
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
			servings: servings ? parseInt(servings) : undefined,
			prepTime: prepTime ? parseInt(prepTime) : undefined,
			cookTime: cookTime ? parseInt(cookTime) : undefined,
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
			<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
				{/* Right Column */}
				<div className="lg:col-span-1 lg:col-start-3">
					<TipBox />
				</div>

				{/* Left Column */}
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
					<form onSubmit={handleSubmit}>
						{/* Basic information */}
						<SectionContainer>
							<SectionHeader>
								<SectionTitle>Recipe Details</SectionTitle>
								<SectionText>Let's start with the basics of your delicious recipe</SectionText>
							</SectionHeader>
							<FieldSet>
								{/* Title Input */}
								<Field>
									<FieldLabel htmlFor="title">
										Title <span className="text-destructive">*</span>
									</FieldLabel>
									<Input
										id="title"
										name="title"
										value={title}
										placeholder="Enter recipe title..."
										onChange={(e) => setTitle(e.target.value)}
										className="px-3 py-5 text-xl!"
									/>
									{errors.title && (
										<ErrorMsg text={errors.title} />
									)}
								</Field>
								<FieldGroup className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2.5">
									{/* Category Input */}
									<Field>
										<FieldLabel htmlFor="category">
											Category <span className="text-destructive">*</span>
										</FieldLabel>
										<SelectInput name="category" value={category} onChange={(e) => setCategory(e.target.value as Category)}>
											{CategoriesInput.map((c) => (
												<option key={c} value={c}>{c || "—"}</option>
											))}
										</SelectInput>
										{errors.category && (
											<ErrorMsg text={errors.category} />
										)}
									</Field>
									{/* Servings Input */}
									<Field>
										<FieldLabel htmlFor="servings">Servings</FieldLabel>
										<Input id="servings" name="servings" type="number" placeholder="4" min="1" value={servings} onChange={(e) => setServings(e.target.value)} />
									</Field>
									{/* Prep Input */}
									<Field>
										<FieldLabel htmlFor="prepTime">Prep (min)</FieldLabel>
										<Input id="prepTime" name="prepTime" type="number" placeholder="15" min="0" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
									</Field>
									{/* Cook Input */}
									<Field>
										<FieldLabel htmlFor="cookTime">Cook (min)</FieldLabel>
										<Input id="cookTime" name="cookTime" type="number" placeholder="60" min="0" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
									</Field>
								</FieldGroup>
							</FieldSet>
						</SectionContainer>

						{/* Ingredients */}
						<SectionContainer>
							<SectionHeader>
								<SectionTitle>Ingredients</SectionTitle>
								<SectionText>List all the ingredients needed for your recipe</SectionText>
							</SectionHeader>
							<FieldGroup className="gap-2">
								<div className="mb-1.5 grid grid-cols-[2fr_72px_96px_28px] gap-1.5">
									<FieldLabel htmlFor="name">Name</FieldLabel>
									<FieldLabel htmlFor="amount">Amount</FieldLabel>
									<FieldLabel htmlFor="unit">Unit</FieldLabel>
								</div>
								{ingredients.map((ing, i) => {
									const hasError = Array.isArray(errors.ingredients) && errors.ingredients.includes(i);

									return (
										<div key={i} className="mb-1.5 items-center grid grid-cols-[2fr_72px_96px_28px] gap-1.5">
											<Input
												id="name"
												value={ing.name}
												placeholder="e.g. garlic cloves"
												onChange={(e) => updateIngredient(i, "name", e.target.value)}
											/>
											<Input
												id="amount"
												type="number"
												value={ing.amount}
												placeholder="4"
												min="0"
												onChange={(e) => updateIngredient(i, "amount", e.target.value)}
												className={hasError && !ing.amount.trim() ? 'ring-red-500 border-red-800' : ''}
											/>
											<SelectInput className={hasError && !ing.unit.trim() ? 'border-red-800' : ''} value={ing.unit} onChange={(e) => updateIngredient(i, "unit", e.target.value)}>
												{UNITS.map((u) => (
													<option key={u} value={u}>{u || "—"}</option>
												))}
											</SelectInput>
											<RemoveBtn onClick={() => removeIngredient(i)} list={ingredients} />
										</div>
									)
								})}
							</FieldGroup>
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
									<Textarea
										name="instructions"
										value={step}
										placeholder="Describe this step..."
										onChange={(e) => updateInstruction(i, e.target.value)}
									/>
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
							<Field>
								<FieldLabel htmlFor="imageUpload">Recipe Image <span className="text-destructive">*</span></FieldLabel>
								<ImageUpload imgUrl={imgUrl} onChange={setImgUrl} error={errors.imgUrl} />
							</Field>
						</SectionContainer>

						{/* Chef's notes */}
						<SectionContainer>
							<SectionHeader>
								<SectionTitle>Chef's Notes & Tips</SectionTitle>
								<SectionText>Share additional tips, variations, or storage instructions</SectionText>
							</SectionHeader>
							<Field>
								<FieldLabel htmlFor="notes">Recipe Notes (optional)</FieldLabel>
								<Textarea
									id="notes"
									name="notes"
									value={notes}
									placeholder="Share any helpful tips, substitutions, or variations..."
									onChange={(e) => setNotes(e.target.value)}
								/>
							</Field>
						</SectionContainer>

						{/* Action Bar */}
						<section className="flex items-center justify-end gap-2 lg:col-span-2">
							<Button className="cursor-pointer" variant={"destructive"} onClick={() => navigate(-1)} size={"lg"}>
								Cancel
							</Button>
							<Button type="submit" className="cursor-pointer" size={"lg"}>
								<FaRocket />
								Save Recipe
							</Button>
						</section>
					</form>
				</div>
			</div>
		</main >
	);
}