import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
    HiOutlineClock
} from "react-icons/hi";


export default function ContactForm() {
    return (
        <>

            <div className="pb-20">
                <div className="flex flex-col gap-20 py-10">

                    <div className="flex flex-col gap-5">
                        <div className="text-3xl text-center">Contact Us</div>
                        <p className="text-center">
                            Nos encantaría saber de ti. Completa el formulario a continuación y te responderemos lo antes posible.
                        </p>
                    </div>

                    <form className="max-w-md mx-auto">

                        {/* Email */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>

                        {/* Nombre / Apellido */}
                        <div className="grid md:grid-cols-2 md:gap-6">

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nombre
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Apellido
                                </label>
                            </div>

                        </div>

                        {/* Teléfono + Mensaje */}
                        <div className="grid md:grid-cols-1 md:gap-6">

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="tel"
                                    id="floating_phone"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_phone"
                                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Número de teléfono
                                </label>
                            </div>

                            {/* Textarea */}
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea
                                    id="floating_message"
                                    className="block w-full h-40 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer resize-none"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_message"
                                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Mensaje
                                </label>
                            </div>

                        </div>

                        {/* Enviar */}
                        <button
                            type="submit"
                            className="
                        w-full
                        text-center mx-auto lg:mx-0
                        bg-gray-800/50 outline-gray-400 rounded-xl p-3 text-colorPrimary
                        hover:bg-gray-800 active:bg-gray-900
                    "
                        >
                            Enviar
                        </button>

                    </form>

                </div>

                <div className="w-[90%] mx-auto bg-gray-900 flex flex-col gap-6 p-6 rounded-2xl md:grid md:grid-cols-2">

                    <div className="w-full flex items-center gap-4">
                        <div className="text-2xl text-blue-800">
                            <HiOutlineMail />
                        </div>
                        <div className="flex flex-col text-sm">
                            <h3 className="font-semibold">Email</h3>
                            <p>matiasalvarezbustos@gmail.com</p>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-4">
                        <div className="text-2xl text-blue-800">
                            <HiOutlinePhone />
                        </div>
                        <div className="flex flex-col text-sm">
                            <h3 className="font-semibold">Tel</h3>
                            <p>+54 9 351 7543408</p>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-4">
                        <div className="text-2xl text-blue-800">
                            <HiOutlineLocationMarker />
                        </div>
                        <div className="flex flex-col text-sm">
                            <h3 className="font-semibold">Dirección</h3>
                            <p>5125, Córdoba, Argentina</p>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-4">
                        <div className="text-2xl text-blue-800">
                            <HiOutlineClock />
                        </div>
                        <div className="flex flex-col text-sm">
                            <h3 className="font-semibold">Horario</h3>
                            <p>Lunes - Viernes</p>
                            <p>9:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
