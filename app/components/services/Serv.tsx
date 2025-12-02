import CardServ from "./CardServ";
import { servicesData } from "../../data/dataServ";

export default function Serv() {
  return (
    <div className="relative">
  
        <div className="flex flex-col gap-10 py-10 md:py-20">
        <div className="flex flex-col gap-3 justify-center text-center">
          <h2 className="text-2xl lg:text-3xl">Servicios</h2>
          <p className="w-[75%] mx-auto md:w-full text-md lg:text-2xl">
            Ofreciendo soluciones digitales modernas,<br />
            a medida para llevar tus ideas al siguiente nivel.
          </p>
        </div>

        {/* GRID */}
        <div
          className="card__service grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-15 place-items-center"
        >
          {servicesData.map((service, index) => (
            <CardServ
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
