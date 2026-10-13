import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"),
    route("new", "./routes/NewEntry.tsx"),
    route("about", "./routes/About.tsx"),
    route("recipe/:id", "./routes/RecipePage.tsx"),
    route("*", "./routes/NotFound.tsx"),
] satisfies RouteConfig;
