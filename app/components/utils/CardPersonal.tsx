export default function CardPersonal() {
    return (
        <>
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="w-30 h-30 bg-gray-950 rounded-full grid place-content-center">
                        <img className="scale-80 rounded-full" src="/logoMat.png" alt="" />
                    </div>
                    <p>Nombre Persona</p>
                    <p className="text-blue-900">Puesto trabajo</p>
                    <p className=" w-[80%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nesciunt natus beatae, culpa laudantium ipsam!</p>
                </div>
            </div>
        </>
    )
}