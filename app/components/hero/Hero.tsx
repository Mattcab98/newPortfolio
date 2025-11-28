export default function Hero() {
  return (
    <>

      <section className="container__hero">

        <div className="flex flex-col gap-5 hero w-full p-5 bg-primaryColor">
          <span className="text-xs text-gray-400">Bienvenido</span>
          <h1 className="text-7xl text-colorPrimary text-center">Web que crece con tu negocio</h1>
          <h2 className="text-m text-colorPrimary text-center">En <span className="text-xl text-blue-800">mat.</span> transformamos ideas en soluciones digitales completas, optimizadas y listas para potenciar tu presencia en internet</h2>
          <button className="w-11/12 bg-blue-800 p-3 rounded-xl text-colorPrimary hover:bg-blue-900 active:bg-blue-900 mx-auto block">Empecemos tu proyecto</button>
          <button className="outline-1 outline-gray-400 w-11/12 rounded-xl p-3 text-colorPrimary hover:bg-gray-800 active:bg-gray-800 mx-auto block">Ver proyectos</button>
        </div>

      </section>
    </>
  );
}