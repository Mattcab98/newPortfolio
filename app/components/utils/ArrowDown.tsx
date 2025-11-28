import { HiOutlineChevronDoubleDown } from "react-icons/hi";


export default function ArrowDown() {
    return (
        <>
            <div
                className="
                w-5 h-5
                bg-gray-800
                rounded-full
                text-white
                text-xs
                grid place-content-center
                animate-bounce opacity-30 transition-opacity duration-2000
                fixed bottom-45 right-2"
            >
                <HiOutlineChevronDoubleDown />
            </div>
        </>
    );
}
