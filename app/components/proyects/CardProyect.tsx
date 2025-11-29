import { useState } from 'react';

type CardProps = {
  imgProyect: string;
  title: string;
  description: string;
  tecnologias: string[];
  link: string;
};

const stackTech = [
  { id: 'react', label: 'React.js' },
  { id: 'js', label: 'JavaScripts' },
  { id: 'node', label: 'Node.js' },
  { id: 'css', label: 'CSS3' },
  { id: 'tailwind', label: 'Tailwind' },
];

export default function CardProyect({ imgProyect, title, description, tecnologias, link }: CardProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleTouch = () => {
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 3000);
  };

  return (
    <div className={`
    relative group w-full max-w-[250px] transform transition-transform duration-300
    ${showOverlay ? '-rotate-1' : 'group-hover:-rotate-1'}
  `} onTouchStart={handleTouch}>
      {/* Card */}
      <div
        className={`
          flex flex-col bg-gray-900 rounded-2xl
          outline-1 outline-gray-900 shadow-2xl shadow-blue-950
          min-h-[250px] h-auto overflow-hidden
          transition-all duration-300
          ${showOverlay ? 'opacity-40 blur-[1px]' : 'group-hover:opacity-40 group-hover:blur-[1px]'}
          `
        }
        tabIndex={-1}
      >
        <div className="w-full h-[150px] lg:h-[200px] lg:max-h-[200px]">
          <img
            src={imgProyect}
            alt={title}
            className="
              w-full h-full object-cover rounded-t-2xl
              brightness-50 transition group-hover:brightness-75
            "
          />
        </div>

        <div className="flex flex-col text-center justify-evenly flex-1 p-4 rounded-b-2xl gap-3">
          <h3 className="text-base lg:text-lg">{title}</h3>
          <p className="text-xs lg:text-sm">{description}</p>

          <ul className="flex flex-wrap justify-center gap-2 w-full">
            {stackTech
              .filter(t => tecnologias.includes(t.id))
              .map(t => (
                <li key={t.id} className="text-xs lg:text-sm p-1 rounded bg-blue-950">
                  {t.label}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Botón overlay absoluto */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-300
          ${showOverlay ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'}
        `}
      >
        <button
          className="
            pointer-events-auto
            w-8/12 text-xs rounded-xl p-3 text-colorPrimary 
            bg-gray-900/80 backdrop-blur-sm outline-1 outline-gray-800
            hover:bg-gray-800 active:bg-gray-800
          "
        >
          Ver proyecto
        </button>
      </a>
    </div>
  );
}
