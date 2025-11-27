import CardProyect from "./CardProyect";


export default function Proyects () {
    return (
        <>
            <div className="bg-gray-850 w-full flex flex-col ">
                <div className="container__txt text-center">
                    <h2>Proyectos Destacados</h2>
                    <span>Algunos de nuestros trabajos</span>
                </div>
                <div className="w-100 grid grid-cols-1 lg:grid-cols-3 auto-rows-auto place-items-center">
                    <CardProyect
                        imgProyect="/siteVicArroche.png"
                        title="Porfolio Profesional Fotografia"
                        description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                        tecnologias={['react', 'tailwind', 'node']}
                    />
                    <CardProyect
                        imgProyect="/siteVicArroche.png"
                        title="Porfolio Profesional Fotografia"
                        description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                        tecnologias={['react', 'tailwind', 'node']}
                    />
                    <CardProyect
                        imgProyect="/siteVicArroche.png"
                        title="Porfolio Profesional Fotografia"
                        description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                        tecnologias={['react', 'tailwind', 'node']}
                    />
                    <CardProyect
                        imgProyect="/siteVicArroche.png"
                        title="Porfolio Profesional Fotografia"
                        description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                        tecnologias={['react', 'tailwind', 'node']}
                    />
                </div>

            </div>
        </>
    )
}