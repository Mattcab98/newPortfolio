import SKills from "~/components/skills/Skills";
import "../app.css";
import Header from "../components/header/Header";
import Hero from '../components/hero/Hero'

export default function Home() {
  return (
    <>
        <div>
          <Hero/>
          <SKills/>
        </div>
    </>
  );
}
