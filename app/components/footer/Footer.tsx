import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { navbarLinks } from "../../data/dataNavbar";
import { Link } from "react-router";


export default function Footer() {
    return (
        <footer className="w-full flex flex-col gap-5 pb-10 text-center text-sm text-gray-600 bg-gray-900/50">

            <ul className="flex justify-cente flex-col gap-2 md:gap-10 md:flex-row justify-center pt-10">
                {navbarLinks.map((link) => (
                    <Link
                        to={link.link}
                        key={link.id}
                        className="text-colorPrimary hover:text-blue-950 active:text-blue-950 transition-colors duration-400 text-sm lg:text-lg"
                    >
                        {link.title}
                    </Link>
                ))}
            </ul>

            <div className="container__txtDerechos text-xs">
                <span className="text-xl text-blue-900">mat. </span>
                {new Date().getFullYear()}
                © Todos los derechos reservados.
            </div>

            <div className="container__icon flex justify-center gap-5 text-xl lg:text-3xl text-blue-900">

                <div className='hover:text-gray-100 active:text-gray-100'>
                    <a href="https://github.com/Mattcab98" target='_blank' rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>

                <div className='hover:text-gray-100 active:text-gray-100'>
                    <a href="https://www.linkedin.com/in/mat-alvarez/" target='_blank' rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>

                <div className="hover:text-gray-100 active:text-gray-100 transition-all duration-300">
                    <a href="mailto:matiasalvarezbustos@gmail.com" target="_blank" rel="noopener noreferrer">
                        <HiOutlineMail />
                    </a>
                </div>

            </div>


        </footer>
    )
}