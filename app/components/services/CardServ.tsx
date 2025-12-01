import type { IconType } from "react-icons";

interface CardServProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function CardServ({ icon: Icon, title, description }: CardServProps) {
  return (
    <div className="md:w-130 lg:w-72 lg:h-65 bg-card-services flex flex-col gap-3 p-8 rounded-xl shadow-lg shadow-blue-950/50">
      <div className="text-blue-900">
        <Icon />
      </div>

      <h3 className="text-2xl text-gray-300">{title}</h3>

      <p className="text-base text-gray-400">{description}</p>
    </div>
  );
}
