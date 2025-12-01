import { LuCode } from "react-icons/lu";
import { TbVectorBezier } from "react-icons/tb";
import { FaRocket } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";

export default function Serv () {
    return (
        <>
            <div className="py-10">

                <div className="flex flex-col gap-3 justify-center text-center">
                    <h2 className="text-2xl lg:text-3xl">Servicios</h2>
                    <p className="w-[75%] mx-auto md:w-full text-md lg:text-2xl">Ofreciendo soluciones digitales modernas,<br/>a medida para llevar tus ideas al siguiente nivel.</p>
                </div>
                
                <div className="grid 
                                grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                gap-3 pt-15"
                >

                    <div className="bg-card-services flex flex-col justify-center gap-5 p-8 rounded-xl text-gray-300">
                        <div>                               <LuCode/>
                        </div>
                        <h3 className="text-2xl">Desarrollo Web Full Stack</h3>
                        <p className="md:text-xl lg:text-2xl">Creación de aplicaciones web completas y robustas, desde el front-end hasta el back-end.</p>
                    </div>

                    <div className="bg-card-services flex flex-col justify-center gap-5 p-8 rounded-xl text-gray-300">
                        <div>                               <LuCode/>
                        </div>
                        <h3 className="text-2xl">Desarrollo Web Full Stack</h3>
                        <p className="md:text-xl lg:text-2xl">Creación de aplicaciones web completas y robustas, desde el front-end hasta el back-end.</p>
                    </div>

                    <div className="bg-card-services flex flex-col justify-center gap-5 p-8 rounded-xl text-gray-300">
                        <div>                               <LuCode/>
                        </div>
                        <h3 className="text-2xl">Desarrollo Web Full Stack</h3>
                        <p className="md:text-xl lg:text-2xl">Creación de aplicaciones web completas y robustas, desde el front-end hasta el back-end.</p>
                    </div>

                    <div className="bg-card-services flex flex-col justify-center gap-5 p-8 rounded-xl text-gray-300">
                        <div>                               <LuCode/>
                        </div>
                        <h3 className="text-2xl">Desarrollo Web Full Stack</h3>
                        <p className="md:text-xl lg:text-2xl">Creación de aplicaciones web completas y robustas, desde el front-end hasta el back-end.</p>
                    </div>
                </div>

            </div>
            
        </>
    )
}