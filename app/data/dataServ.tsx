import type { IconType } from "react-icons";
import { LuCode } from "react-icons/lu";
import { FaPalette, FaRocket } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";

export interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: LuCode,
    title: "Desarrollo Web Full Stack",
    description:
      "Creación de aplicaciones web completas, desde la lógica del servidor hasta la interfaz de usuario.",
  },
  {
    icon: FaPalette,
    title: "Diseño de Interface (UI/UX)",
    description:
      "Diseño de experiencias de usuario intuitivas y atractivas que cautivan a tu audiencia.",
  },
  {
    icon: FaRocket,
    title: "Optimizacion y Performance",
    description:
      "Mejora la velocidad de carga, SEO y rendimiento general para una experiencia superior.",
  },
  {
    icon: TbBracketsAngle,
    title: "Integraciones y Automatizaciones",
    description:
      "Conexión de sistemas y automatización de flujos de trabajo para maximizar la eficiencia.",
  },
];
