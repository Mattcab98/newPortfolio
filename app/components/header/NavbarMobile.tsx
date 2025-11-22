import { useState } from "react";
import { Link } from "react-router";
import { Turn as Hamburger } from "hamburger-react";
import { navbarLinks } from "../../data/dataNavbar";

// icons
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

export default function NavbarMobile() {

    const [open, setOpen] = useState(false);

    return (
        <div className="lg:hidden text-black">

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
            <div className={`${open ? 'flex flex-col' : 'hidden'} bg-primary z-10 fixed top-0 right-0 w-[200px] h-screen items-center justify-center`}>

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

                {/* icons section */}
                <div className="flex justify-center gap-4 w-full absolute bottom-6">

<button
  className="
    relative 
    w-[90%]
    p-1.5 
    rounded-md
    overflow-hidden
    text-colorPrimary
    bg-blue-950
    transition-colors duration-300

    before:absolute 
    before:inset-0
    before:bg-blue-900 
    before:content-['']
    before:scale-x-0
    before:origin-left
    before:transition-transform 
    before:duration-500
    before:z-0

    hover:before:scale-x-100
    hover:text-white
  "
>
  <span className="relative z-10">Login</span>
</button>




                </div>

            </div>

        </div>
    );
}
