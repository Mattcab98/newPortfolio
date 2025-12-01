import { LuCode } from "react-icons/lu";
import { FaPalette } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";

export default function Serv() {
    return (
        <>
            <div className="relative">
                <div className="absolute top-100 right-35 md:top-70 md:right-100 z-[-1] w-0.5 h-50 bg-blue-950 opacity-50 lg:hidden"></div>
                <div className="absolute top-190 right-35 md:top-120 md:right-60 z-[-1] w-0.5 h-50 bg-blue-950 lg:hidden" opacity-50></div>
                <div className="absolute top-250 right-35 md:top-200 md:right-100 z-[-1] w-0.5 h-50 bg-blue-950 lg:hidden" opacity-50></div>

                <div className="flex flex-col gap-10 py-10">

                    <div className="flex flex-col gap-3 justify-center text-center">
                        <h2 className="text-2xl lg:text-3xl">Servicios</h2>
                        <p className="w-[75%] mx-auto md:w-full text-md lg:text-2xl">Ofreciendo soluciones digitales modernas,<br />a medida para llevar tus ideas al siguiente nivel.</p>
                    </div>

                    <div className="grid 
                                grid-cols-1 md:grid-cols-1 lg:grid-cols-2
                                gap-15
                                place-items-center"
                    >

                        <div className="md:w-130 lg:w-72 lg:h-65 bg-card-services flex flex-col gap-3 p-8 rounded-xl shadow-lg shadow-blue-950/50 justify-self-end">

                            <div className="text-blue-900">
                                <LuCode />
                            </div>
                            <h3 className="text-2xl text-gray-300">Desarrollo Web Full Stack</h3>
                            <p className="text-base text-gray-400">Creación de aplicaciones web completas, desde la lógica del servidor hasta la interfaz de usuario.</p>
                        </div>

                        <div className="md:w-130 lg:w-72 lg:h-65 lg:items-start bg-card-services flex flex-col gap-3 p-8 rounded-xl shadow-lg shadow-blue-950/50 justify-self-start">
                            <div className="text-blue-900">
                                <FaPalette />
                            </div>
                            <h3 className="text-2xl text-gray-300">Diseño de Interface (UI/UX)</h3>
                            <p className="text-base text-gray-400">Diseño de experiencias de usuario intuitivas y atractivas que cautivan a tu audiencia.</p>
                        </div>

                        <div className="md:w-130 lg:w-72 lg:h-65  bg-card-services flex flex-col gap-3 p-8 rounded-xl shadow-lg shadow-blue-950/50 justify-self-end">
                            <div className="text-blue-900">
                                <FaRocket />
                            </div>
                            <h3 className="text-2xl text-gray-300">Optimizacion y Performance</h3>
                            <p className="text-base text-gray-400">Mejora la velocidad de carga, SEO y rendimiento general para una experiencia superior.</p>
                        </div>

                        <div className="md:w-130 lg:w-72 lg:h-65 bg-card-services flex flex-col gap-3 p-8 rounded-xl shadow-lg shadow-blue-950/50 justify-self-start">
                            <div className="text-blue-900">
                                <TbBracketsAngle />
                            </div>
                            <h3 className="text-2xl text-gray-300">Integraciones y Automatizaciones</h3>
                            <p className="text-base text-gray-400">Conexión de sistemas y automatización de flujos de trabajo para maximizar la eficiencia.</p>
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}