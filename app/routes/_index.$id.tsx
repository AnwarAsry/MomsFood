import { data } from "react-router";
import type { Route } from "./+types/_index.$id";

export async function loader({ params }: Route.LoaderArgs) {
    const recipe = await getRecipeById(params.id);

    if (!recipe) {
        throw data("Not found", { status: 404 });
    }

    return { recipe };
}

export function ErrorBoundary() {
    return <h1>Recipe not found</h1>;
}

export default function RecipePage({
    loaderData,
}: Route.ComponentProps) {
    return <h1>dummy Page</h1>;
}
