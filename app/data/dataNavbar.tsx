export interface NavbarLink {
  id: number;
  title: string;
  link: string;
}

export const navbarLinks: NavbarLink[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    link: "/nosotros",
  },
  {
    id: 4,
    title: "Servicios",
    link: "/servicios",
  },
  {
    id: 5,
    title: "Proyectos",
    link: "/proyects",
  },
  {
    id: 3,
    title: "Contacto",
    link: "/contacto",
  },
];
