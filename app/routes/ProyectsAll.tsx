import CardProyect from '../components/proyects/CardProyect'

import {
    FiCheckCircle,  // +10 proyectos completados
    FiAward,        // 4 años de experiencia
    FiStar,         // 100% enfoque en calidad
    FiCpu           // Stack moderno
} from "react-icons/fi";


export default function ProyectsAll() {
    return (
        <>
            <div className='w-[90%] mx-auto flex flex-col gap-10 pt-10 pb-20'>
                <div className="flex flex-col justify-center items-center gap-5">

                    <h2 className='text-3xl lg:text-4xl'>Proyectos</h2>
                    <p className='md:w-[70%] lg:w-[90%] text-sm text-center lg:text-xl'>Descubre nuestros proyectos realizados, desarrollados con enfoque estratégico y altos estándares de calidad. Hemos trabajado con empresas de distintos sectores, ofreciendo soluciones personalizadas que generan resultados reales. Explora nuestro portafolio y conoce cómo ayudamos a nuestros clientes a impulsar su crecimiento y optimizar sus procesos.</p>
                </div>

                <div className='grid grid-cols-1 mx-auto md:grid-cols-3 place-content-center gap-10'>
                    <CardProyect
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link='' />

                    <CardProyect
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link='' />

                    <CardProyect
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link='' />

                    <CardProyect
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link='' />

                    <CardProyect
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link='' />
                        
                    <CardProyect
                        imgProyect='siteVicArroche.png'
                        title='proyecto x'
                        description='este es un ejemplo de un proyecto creado para una empresa de venta de comida' tecnologias={['react', 'javascript', 'tailwind', 'node']}
                        link='' />
                </div>


            </div>

            <div className="md:pb-20 md:pt-10 md:w-[90%] md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-15 text-gray-400 drop-shadow-2xl drop-shadow-gray-500">

                <div className='container__metric flex flex-col items-center gap-2 text-center hover:scale-105 transition-all duration-500'>
                    <div className='text-blue-800'>
                        <FiCheckCircle className="text-4xl" />
                    </div>
                    <p className="text-2xl font-semibold">+10 Proyectos</p>
                    <p className="text-sm opacity-80">
                        Desarrollo web <br /> a medida
                    </p>
                </div>

                <div className='container__metric flex flex-col items-center gap-2 text-center hover:scale-105 transition-all duration-500'>
                    <div className='text-blue-800'> 
                        <FiAward className="text-4xl" />
                    </div>
                    <p className="text-2xl font-semibold">4+ Años</p>
                    <p className="text-sm opacity-80">
                        Experiencia en <br /> desarrollo digital
                    </p>
                </div>

                <div className='container__metric flex flex-col items-center gap-2 text-center hover:scale-105 transition-all duration-500'>
                    <div className='text-blue-800'>
                        <FiStar className="text-4xl" />
                    </div>
                    <p className="text-2xl font-semibold">100% Calidad</p>
                    <p className="text-sm opacity-80">
                        Procesos optimizados <br /> y código limpio
                    </p>
                </div>

                <div className='container__metric flex flex-col items-center gap-2 text-center hover:scale-105 transition-all duration-500'>
                    <div className='text-blue-800'>
                        <FiCpu className="text-4xl" />
                    </div>
                    <p className="text-2xl font-semibold">Stack Moderno</p>
                    <p className="text-sm opacity-80">
                        Tecnologías actuales <br /> y alto rendimiento
                    </p>
                </div>

            </div>

        </>
    )
}