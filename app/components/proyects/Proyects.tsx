import CardProyect from "./CardProyect";
import { Link } from "react-router";

export default function Proyects() {
  return (
    <>


      <div className="">

        <div className="bg-gray-850 w-full flex flex-col gap-10">

          <div className="container__txt text-center ">

            <span className=" text-xl lg:text-3xl">Algunos de nuestros trabajos</span>

          </div>

          <div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-10 justify-items-center items-start">

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

          <Link
            to='proyects'
            className="
              w-full mx-auto max-w-[600px]
              text-center p-3 rounded-xl
              text-colorPrimary bg-gray-900/80
              hover:bg-gray-800 active:bg-gray-800
              text-xs md:text-sm lg:text-lg"
          > Ver todos los proyectos
          </Link>
        </div>


      </div>

    </>
  );
}
