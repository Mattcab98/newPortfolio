import { LuCode } from "react-icons/lu";
import { TbVectorBezier } from "react-icons/tb";
import { FaRocket } from "react-icons/fa";
import { TbBracketsAngle } from "react-icons/tb";

export default function Serv () {
    return (
        <>
            <div className="pt-15">
                <div className="flex flex-col gap-3 justify-center text-center">
                    <h2>Servicios</h2>
                    <p>Ofreciendo soluciones digitales modernas y a medida para llevar tus ideas al siguiente nivel.</p>
                </div>
                
                <div className="gap-3 pt-15">    
                    <div className="w-[90%] mx-auto bg-blue-950 flex flex-col justify-center gap-5 p-8 rounded-xl">
                        <div>                               <LuCode/>
                        </div>
                        <h3 className="text-2xl">Desarrollo Web Full Stack</h3>
                        <p className="md:text-xl lg:text-2xl">Creación de aplicaciones web completas y robustas, desde el front-end hasta el back-end.</p>
                    </div>

                    <div className="w-[90%] mx-auto bg-blue-950 flex flex-col justify-center gap-5 p-8 rounded-xl">
                        <div>                               <LuCode/>
                        </div>
                        <h3 className="text-2xl">Desarrollo Web Full Stack</h3>
                        <p className="md:text-xl lg:text-2xl">Creación de aplicaciones web completas y robustas, desde el front-end hasta el back-end.</p>
                    </div>

                    <div className="w-[90%] mx-auto bg-blue-950 flex flex-col justify-center gap-5 p-8 rounded-xl">
                        <div>                               <LuCode/>
                        </div>
                        <h3 className="text-2xl">Desarrollo Web Full Stack</h3>
                        <p className="md:text-xl lg:text-2xl">Creación de aplicaciones web completas y robustas, desde el front-end hasta el back-end.</p>
                    </div>

                    <div className="w-[90%] mx-auto bg-blue-950 flex flex-col justify-center gap-5 p-8 rounded-xl">
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