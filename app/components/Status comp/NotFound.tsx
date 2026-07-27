import { Link } from "react-router";

export const NotFound = () => {
    return (
        <div className="min-h-[calc(100vh-72px)] flex items-center justify-center text-center">
            <div>
                <h1 className="text-[10rem] font-black text-brand leading-none tracking-tight select-none">
                    404
                </h1>
                <h2 className="mt-2 mb-3 text-2xl font-bold text-gray-900">
                    Page not found
                </h2>
                <p className="max-w-xs mb-6 mx-auto text-sm leading-relaxed text-slate-800">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="w-fit px-3.5 py-2 inline-flex items-center gap-1.5 rounded-md text-sm text-white bg-brand hover:bg-brand-dark transition-colors cursor-pointer"
                >
                    ← Back to recipes
                </Link>
            </div>
        </div>
    );
}