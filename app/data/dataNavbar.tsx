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
    id: 3,
    title: "Contacto",
    link: "/contacto",
  },
  {
    id: 4,
    title: "Servicios",
    link: "/servicios",
  },
];
