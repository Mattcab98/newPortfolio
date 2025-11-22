export default function Hero() {
  return (
    <>
        <section className="container__hero">
        
            <div className="flex flex-col gap-5 hero w-full p-5 bg-neutral-950">
                <span className="text-xs text-gray-400">Bienvenido</span>
                <h1 className="text-7xl text-colorPrimary">Web que crece con tu negocio</h1>
                <p className="text-m text-colorPrimary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi praesentium facilis sit corporis eaque quibusdam tenetur pariatur impedit placeat id veritatis sint eius ducimus cupiditate exercitationem voluptatem natus eum, soluta saepe aut alias ratione vitae debitis. Debitis, sunt velit?</p>
                <button className="w-11/12 bg-blue-800 p-3 rounded-xl text-colorPrimary hover:bg-blue-900 active:bg-blue-900 mx-auto block">Empecemos tu proyecto</button>
                <button className="outline-1 outline-gray-400 w-11/12 rounded-xl p-3 text-colorPrimary hover:bg-gray-800 active:bg-gray-800 mx-auto block">Ver proyectos</button>
            </div>

        </section>/
    </>
  );
}