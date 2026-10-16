import { useState, useRef, useEffect } from "react";
import { useRouteLoaderData } from "react-router";
import type { IRecipe } from "~/models/Recipe";
import { SearchItem } from "./SearchItem";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const SearchBar = () => {
    const data = useRouteLoaderData("root") as { recipes: IRecipe[] } | undefined;
    const recipes = data?.recipes ?? [];
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const results = query.trim()
        ? recipes
            .filter((r) =>
                r.title.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 6)
        : [];

    useEffect(() => {
        setOpen(query.trim().length > 0);
    }, [query]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const handleSelect = () => {
        setOpen(false);
        setQuery("");
    };

    return (
        <div className="max-w-120 relative flex-1" ref={ref}>
            <InputGroup>
                <InputGroupInput
                    name="searchInp"
                    type="text"
                    value={query}
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search recipes"
                    aria-expanded={open}
                    aria-autocomplete="list"
                />
                <InputGroupAddon>
                    <HiMiniMagnifyingGlass />
                </InputGroupAddon>
            </InputGroup>
            {open && (
                <div className="w-full mt-1.5 absolute top-full z-50 border border-gray-200 rounded-lg bg-white shadow-lg overflow-hidden">
                    {results.length === 0 ? (
                        <div className="px-4 py-5 text-center text-sm text-gray-400">
                            No recipes found for "{query}"
                        </div>
                    ) : (
                        <ul>
                            {
                                results.map((recipe) => <SearchItem key={recipe.id} to={`/${recipe.id}`} text={recipe.title} category={recipe.category} onClick={handleSelect} />)
                            }
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}