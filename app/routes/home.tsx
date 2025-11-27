import "../app.css";
import Skills from "~/components/skills/Skills";
import Hero from '../components/hero/Hero'
import Proyects from "../components/proyects/Proyects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Proyects />
    </>
  );
}
