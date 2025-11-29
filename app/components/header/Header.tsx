import { navbarLinks } from "../../data/dataNavbar";
import { Link } from "react-router";
import { useState } from "react";
import NavbarMobile from "./NavbarMobile";

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="w-full bg-primary fixed top-0 h-auto z-50 shadow-md">
                <nav className="w-[90%] h-24 mx-auto flex justify-between items-center border-b border-gray-900 px-4 z-50">

                    {/* logo section */}
                    <div className="text-colorPrimary flex items-center">
                        <img src="/logoMat.png" alt="" className="scale-90"/>
                    </div>

                    {/* menu section desktop*/}
                    <ul className="hidden lg:flex items-center">
                        {navbarLinks.map((link) => (
                            <Link
                                to={link.link}
                                key={link.id}
                                className="text-colorPrimary inline-block py-2 px-3 hover:text-blue-950 active:text-blue-950 transition-colors duration-400  font-semibold"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </ul>

                    {/* icons section */}
                    <div className="hidden lg:flex justify-center gap-4 ">

                        <button className="bg-blue-950 text-colorPrimary hover:bg-blue-900 hover:text-white active:bg-blue-900 transition-colors duration-300 rounded-md p-1.5 w-[70px]">
                            Login
                        </button>

                    </div>

                    {/* mobile menu component */}
                    <NavbarMobile />
                </nav>
            </header>
        </>
    );
}
