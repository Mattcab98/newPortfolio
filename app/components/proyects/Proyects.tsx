import CardProyect from "./CardProyect";


export default function Proyects () {
    return (
        <>
            <h2>Proyectos Destacados</h2>
            <span>Algunos de nuestros trabajos</span>
            <div className="bg-red-400 p-5">
                <CardProyect
                imgProyect="/siteVicArroche.png"
                title="Porfolio Profesional Fotografia"
                description="Este es un proyecto de ejemplo que muestra las capacidades de React."
                tecnologias={['react']}
            />
            </div>

        </>
    )
}