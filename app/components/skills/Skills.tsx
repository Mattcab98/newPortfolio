export default function SKills () {
    return (
        <>
        
            <section className=" flex flex-col gap-4 
                                bg-gray-900 py-8
                                md:flex-row md:gap-30 lg:py-20">

                <div className="skill flex flex-col gap-2 lg:text-xl">
                    <span className="text-xs text-gray-500">FRONTEND</span>
                    <h3>React, Next.js, TypeScript con enfoque en rendimiento y UX.</h3>
                </div>

                <div className="skill flex flex-col gap-2 lg:text-xl text-center">
                    <span className="text-xs text-gray-500">BACKEND</span>
                    <h3>APIs robustas, bases de datos, autenticacion y seguridad</h3>
                </div>

                <div className="skill flex flex-col gap-2 lg:text-xl text-end">
                    <span className="text-xs text-gray-500">DISEÑO</span>
                    <h3>Interfaces modernas, accesibles y optimizadas para conversion</h3>
                </div>
                                                  
            </section>

        </>
    )
}