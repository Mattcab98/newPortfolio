import CardProyect from '../components/proyects/CardProyect'

export default function ProyectsAll () {
    return (
        <>
            <div className='w-[90%] mx-auto flex flex-col gap-10 py-10'>
                <div className="flex flex-col justify-center items-center gap-5">
                
                    <h2 className='text-3xl'>Proyectos</h2>
                    <p className='text-sm text-center'>Descubre nuestros proyectos realizados, desarrollados con enfoque estratégico y altos estándares de calidad. Hemos trabajado con empresas de distintos sectores, ofreciendo soluciones personalizadas que generan resultados reales. Explora nuestro portafolio y conoce cómo ayudamos a nuestros clientes a impulsar su crecimiento y optimizar sus procesos.</p>
                </div>

                <div className='grid grid-col-1 grid-row-4 place-content-center gap-10'>
                    <CardProyect 
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link=''/>

                        <CardProyect 
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link=''/>

                        <CardProyect 
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link=''/>

                        <CardProyect 
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link=''/>

                </div>

            </div>
        </>
    )
}