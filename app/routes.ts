import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("new", "./routes/NewEntry.tsx"),
    route(":id", "./routes/_index.$id.tsx"),
] satisfies RouteConfig;
