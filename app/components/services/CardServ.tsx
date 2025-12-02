import type { IconType } from "react-icons";
import {motion} from 'framer-motion'

interface CardServProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function CardServ({ icon: Icon, title, description }: CardServProps) {
  return (
    <motion.div className="md:w-100 lg:w-70 lg:h-70 bg-card-services flex flex-col gap-3 p-8 rounded-xl shadow-lg shadow-blue-950/50"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, }}
    >
      <div className="text-blue-900">
        <Icon />
      </div>

      <h3 className="text-2xl text-gray-300">{title}</h3>

      <p className="text-base text-gray-400">{description}</p>
    </motion.div>
  );
}
