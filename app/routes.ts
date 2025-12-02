import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('nosotros', 'routes/About.tsx'),
    route('proyects', 'routes/ProyectsAll.tsx'),
    route('contacto', 'routes/ContactForm.tsx'),

] satisfies RouteConfig;
