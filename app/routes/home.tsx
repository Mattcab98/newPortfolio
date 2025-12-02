import "../app.css";
import Skills from "~/components/skills/Skills";
import Hero from '../components/hero/Hero'
import Proyects from "../components/proyects/Proyects";
import Contact from "~/components/contact/Contact";
import Serv from '../components/services/Serv'
import ArrowDown from "~/components/utils/ArrowDown";

import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <div className="">

        <div className="w-[90%] mx-auto">
          <Hero />
        </div>

        <div className="w-full bg-gray-900">
          <div className="w-[90%] mx-auto">
            <Skills />
          </div>
        </div>

        <div className="w-[90%] mx-auto">
            <Serv/>
        </div>

        <div className="w-[90%] mx-auto">
          <Proyects />
        </div>

        <div className="w-[90%] mx-auto">
          <Contact />
        </div>

        <ArrowDown />
      </div>
    </>
  );
}
