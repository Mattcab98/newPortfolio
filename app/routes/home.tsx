import "../app.css";
import Skills from "~/components/skills/Skills";
import Hero from '../components/hero/Hero'
import Proyects from "../components/proyects/Proyects";
import Contact from "~/components/contact/Contact";
import ArrowDown from "~/components/utils/ArrowDown";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Proyects />
      <Contact />

      <ArrowDown />
    </>
  );
}
