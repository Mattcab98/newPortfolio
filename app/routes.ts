import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Route, Routes } from "react-router";

export default [
    index("routes/home.tsx"),
    route('nosotros', 'routes/About.tsx'),
    route('proyects', 'routes/ProyectsAll.tsx'),
    route('contacto', 'routes/ContactForm.tsx'),
    route('servicios', 'routes/Service.tsx'),

] satisfies RouteConfig;
