import { navbarLinks } from "../../data/dataNavbar";
import { Link } from "react-router";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";



//icons
import { FaDumbbell } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="bg-gray-500 w-full h-auto">
                <nav className="w-[90%] h-24 mx-auto flex justify-between items-center ">

                    {/* logo section */}
                    <div className="text-colorPrimary flex items-center">
                        <FaDumbbell className="text-3xl text-white" />
                        <p className="font-semibold">Astraeus</p>
                        <p className="text-orange-500 font-semibold">Gym</p>
                    </div>

                    {/* menu section */}
                    <ul className="hidden lg:flex items-center">
                        {navbarLinks.map((link) => (
                            <Link
                                to={link.link}
                                key={link.id}
                                className="text-colorPrimary inline-block py-2 px-3 hover:text-orange-500 font-semibold"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </ul>

                    {/* icons section */}
                    <div className="flex items-center">
                        <button className="text-colorPrimary text-2xl hover:bg-orange-500 active:bg-orange-500 rounded-full transition-colors duration-300 p-1.5">
                            <CiSearch />
                        </button>

                        <button className="text-colorPrimary text-2xl hover:bg-orange-500 active:bg-orange-500 rounded-full transition-colors duration-300 p-1.5">
                            <PiShoppingCartThin />
                        </button>

                        <button className="text-orange-400 hover:bg-orange-400 hover:text-white active:bg-orange-500 transition-colors duration-300 rounded-md p-1.5">
                            Login
                        </button>
                    </div>

                    <div className="lg:hidden text-black">
                        <Hamburger
                            toggled={open}
                            toggle={setOpen}
                            size={26}
                            color='currentColor'
                        />
                    </div>

                </nav>
            </header>
        </>
    );
}
