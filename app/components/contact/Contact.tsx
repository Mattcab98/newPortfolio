export default function Contact() {
    return (
        <>
            <hr className="border-gray-700 border-t-[0.5px] mb-5" />

            <div className="flex flex-col h-70 justify-center items-center px-5 py-8 text-center gap-5">
                <h2 className="text-2xl">¿Tienes un proyecto en mente?</h2>
                <p>
                    Convierte tu idea en un proyecto web real. Comparte tus objetivos y
                    hazlo realidad con soluciones digitales efectivas.
                </p>
                <button className="w-11/12 bg-blue-900 px-6 py-3 rounded-xl text-colorPrimary hover:bg-blue-950 active:bg-blue-950 mx-auto block">
                    Empecemos tu proyecto
                </button>
            </div>

            <hr className="border-gray-700 border-t-[0.5px] mt-5" />
        </>
    )
}
