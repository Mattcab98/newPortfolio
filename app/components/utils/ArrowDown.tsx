import { HiOutlineChevronDoubleDown } from "react-icons/hi";

type ArrowDownProps = {
    className?: string; // permitir pasar clases extras
};

export default function ArrowDown({ className }: ArrowDownProps) {
    return (
        <div
            className={`
        w-5 h-5
        bg-gray-800
        rounded-full
        text-white
        grid place-content-center
        animate-bounce opacity-30
        fixed bottom-12 right-2
        md:hidden
        ${className || ""}
      `}
        >
            <HiOutlineChevronDoubleDown />
        </div>
    );
}
