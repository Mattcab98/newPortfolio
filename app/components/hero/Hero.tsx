import { Link } from "react-router";

export default function Hero() {
  return (
    <>
      <section className="container__hero">
        <div className="grid gap-5 w-full py-10 bg-primaryColor">

          <span className="text-xs md:text-lg text-gray-400">Bienvenido</span>

          <h1 className="text-7xl text-colorPrimary text-center md:w-[80%] md:text-8xl mx-auto">
            Web que crece con tu negocio
          </h1>

          <h2 className="text-base text-colorPrimary text-center md:w-[70%] md:mx-auto lg:text-2xl lg:w-[80%]">
            En <span className="text-xl lg:text-2xl text-blue-800">mat.</span> transformamos ideas en soluciones digitales completas, optimizadas y listas para potenciar tu presencia en internet
          </h2>

          <div className="container_buttonHero grid grid-cols-1 grid-rows-2 lg:flex gap-3 w-full place-content-center py-5 lg:py-8">

            <Link to='/contacto' className="
                w-full
                md:w-8/12
                lg:w-5/12
                mx-auto lg:mx-0
                justify-self-end
                text-center
                bg-blue-800 p-3 rounded-xl text-colorPrimary
                hover:bg-blue-900 active:bg-blue-900"
            >
              Empecemos tu proyecto
            </Link>

            <Link to='proyects' className="
                w-full md:w-8/12 lg:w-3/12
                text-center
                mx-auto lg:mx-0
                outline-1 outline-gray-400 rounded-xl p-3 text-colorPrimary
                hover:bg-gray-800 active:bg-gray-800"
            >
              Ver proyectos
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
