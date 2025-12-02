import { Link } from "react-router";
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <>
            <hr className="border-gray-700 border-t-[0.5px] my-10" />

            <div className="flex flex-col h-70 justify-center items-center lg:p-40 text-center gap-6 w-full">

                <motion.h2 className="text-2xl md:text-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: true, }}
                >¿Tienes un proyecto en mente?</motion.h2>
                <motion.p className="md:w-8/12 lg:text-xl lg:w-7/12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: true, }}>
                    Convierte tu idea en un proyecto web real. Comparte tus objetivos y
                    hazlo realidad con soluciones digitales efectivas.
                </motion.p>
                <Link
                    to='contacto'
                    className="
                        w-full max-w-[600px]
                        mx-auto p-3 rounded-xl
                        text-colorPrimary bg-gray-900/80
                        hover:bg-gray-800 active:bg-gray-800
                        text-xs md:text-sm lg:text-lg"
                > Hagamos realidad tu idea
                </Link>

            </div>

            <hr className="border-gray-700 border-t-[0.5px] my-10" />
        </>
    )
}
