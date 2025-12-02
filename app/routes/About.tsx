import CardServ from "../components/services/CardServ";
import { aboutValues } from "../data/dataAbout";
import CardPersonal from "../components/utils/CardPersonal";
import ArrowDown from "~/components/utils/ArrowDown";

export default function About() {
    return (
        <>
            <div className="flex flex-col gap-10 pt-10 pb-15">

                <div className="w-[90%] mx-auto flex flex-col gap-10">

                <div className="text-white w-full flex flex-col gap-5">
                    <h2 className="text-3xl">Quiénes Somos</h2>
                    <p className="text-sm">
                        Somos una empresa dedicada a crear soluciones digitales innovadoras, enfocadas en diseño, desarrollo web y experiencias centradas en el usuario. Nuestro objetivo es transformar ideas en productos funcionales, modernos y de alto rendimiento, utilizando tecnologías actuales y una visión estratégica orientada al crecimiento.
                    </p>
                </div>

                <div>
                    <img className="rounded-xl opacity-70" src="/img-about.jpg" alt="" />
                </div>

                <p className="text-white text-sm">
                    Nuestro compromiso es acompañar a cada cliente en la construcción de una presencia digital sólida y escalable, ofreciendo soluciones digitales y desarrollo web que se adapten a sus objetivos y al crecimiento de su marca. Implementamos metodologías ágiles, procesos eficientes y una comunicación transparente para garantizar resultados de alta calidad en cada etapa del proyecto. Creemos en las relaciones a largo plazo y en el valor de un diseño centrado en el usuario, entregando productos digitales que realmente marquen la diferencia. Cada desarrollo es una oportunidad para innovar, optimizar y crear experiencias digitales que generen impacto real en quienes confían en nuestro trabajo.
                </p>

                {/* GRID DE VALORES */}
                <div className="w-[90%] mx-auto scale-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
                    {aboutValues.map((item, index) => (
                        <CardServ
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>


            </div>

            <div className="w-full bg-gray-900 overflow-x-auto flex snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 py-15">
                
                <div className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center">
                    <CardPersonal />
                </div>
                
                <div className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center">
                    <CardPersonal />
                </div>
                
                <div className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center">
                    <CardPersonal />
                </div>

            </div>



            </div>
        </>
    );
}
