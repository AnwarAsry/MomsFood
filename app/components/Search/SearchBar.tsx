import { useState, useRef, useEffect } from "react";
import { useRouteLoaderData } from "react-router";
import type { IRecipe } from "~/models/Recipe";
import { SearchItem } from "./SearchItem";

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
        <div className="max-w-120 flex-1 relative" ref={ref}>
            <i className="px-3 absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <svg className="h-3 text-[#9ca3af]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </i>
            <input
                className="w-full h-10 pl-8 text-sm border border-[#d1d5db] rounded-md focus:ring-2 focus:ring-[#6b7280a1] focus:border-none focus:outline-none"
                name="searchInp"
                type="text"
                placeholder="Search for recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search recipes"
                aria-expanded={open}
                aria-autocomplete="list"
            />

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