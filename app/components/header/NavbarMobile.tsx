import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Turn as Hamburger } from "hamburger-react";
import { navbarLinks } from "../../data/dataNavbar";

// icons

export default function NavbarMobile() {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }) 

    return (
        <div className="lg:hidden">

            {/* hamburger icon section */}
            <div className="relative z-100 text-colorPrimary">
                <Hamburger
                    toggled={open}
                    toggle={setOpen}
                    size={26}
                    color='currentColor'
                />
            </div>

            {/* mobile menu section */}
            <div className={`
                ${open ? 'flex' : 'hidden'}
                flex-col
                bg-primary
                fixed inset-0
                z-50
                items-center
                justify-center`}
            >

                {/* menu links section */}
                <ul className="flex flex-col w-ful justify-center items-center">

                    {navbarLinks.map((link) => (
                        <Link
                            to={link.link}
                            key={link.id}
                            className="text-colorPrimary inline-block py-2 px-3 hover:text-blue-950 active:text-blue-950 transition-colors duration-400 font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}

                </ul>

                {/* icons login mobile */}
                <div className="flex justify-center gap-4 w-full absolute bottom-6">

                    <button className="w-[80%] bg-blue-950 text-colorPrimary hover:bg-blue-900 hover:text-white active:bg-blue-900 transition-colors duration-300 rounded-md p-1.5">
                        <span className="relative z-10">Login</span>
                    </button>

                </div>

            </div>

        </div>
    );
}
