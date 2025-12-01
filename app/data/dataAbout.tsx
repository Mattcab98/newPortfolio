// app/data/dataAbout.ts
import { FaLightbulb, FaHandshake, FaUsers, FaMedal } from "react-icons/fa";
import type { IconType } from "react-icons";

export type AboutItem = {
  icon: IconType;
  title: string;
  description: string;
};

export const aboutValues: AboutItem[] = [
  {
    icon: FaLightbulb,
    title: "Innovación",
    description:
      "Comprometidos con empujar los límites y el pensamiento creativo.",
  },
  {
    icon: FaHandshake,
    title: "Integridad",
    description:
      "Creemos en la transparencia, la honestidad y la conducta ética.",
  },
  {
    icon: FaUsers,
    title: "Colaboración",
    description:
      "Fomentamos el trabajo en equipo y valoramos el esfuerzo colectivo.",
  },
  {
    icon: FaMedal,
    title: "Excelencia",
    description:
      "Dedicados a la calidad y a superar las expectativas del cliente.",
  },
];
