import CardProyect from "./CardProyect";
import { Link } from "react-router";

export default function Proyects() {
  return (
    <>


      <div className="pb-10">

        <div className="bg-gray-850 w-full flex flex-col gap-10">

          <div className="container__txt text-center pt-10">

            <h2 className="text-gray-400">Proyectos Destacados</h2>
            <span className="text-gray-400">Algunos de nuestros trabajos</span>

          </div>

          <div className="px-4 md:px-10 mb-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center items-start">
              <CardProyect
                imgProyect="/siteVicArroche.png"
                title="Porfolio Profesional Fotografia"
                description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                tecnologias={['react', 'tailwind', 'node']}
                link="https://victoria-arroche.vercel.app/"
              />
              <CardProyect
                imgProyect="/siteVicArroche.png"
                title="Porfolio Profesional Fotografia"
                description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                tecnologias={['react', 'tailwind', 'node']}
                link="https://victoria-arroche.vercel.app/"
              />
              <CardProyect
                imgProyect="/siteVicArroche.png"
                title="Porfolio Profesional Fotografia"
                description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                tecnologias={['react', 'tailwind', 'node']}
                link="https://victoria-arroche.vercel.app/"
              />
              <CardProyect
                imgProyect="/siteVicArroche.png"
                title="Porfolio Profesional Fotografia"
                description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                tecnologias={['react', 'tailwind', 'node']}
                link="https://victoria-arroche.vercel.app/"
              />

            </div>

          </div>


        </div>

        <div className="text-center
            pointer-events-auto
            w-5/8 rounded-xl mx-auto p-3 text-colorPrimary 
            bg-gray-900/80 backdrop-blur-sm
            hover:bg-gray-800 active:bg-gray-800 text-xs">
          <Link to='proyectos'> Ver todos los proyectos</Link>
        </div>

      </div>

    </>
  );
}
