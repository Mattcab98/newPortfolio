type CardProps = {
    imgProyect: string;
    title: string;
    description: string;
    tecnologias: string[];
}

const stackTech = [
    {id: 'react', label: 'React.js'},
    {id: 'js', label: 'JavaScripts'},
    {id: 'node', label: 'Node.js'},
    {id: 'css', label: 'CSS3'},
    {id: 'tailwind', label: 'Tailwind'},
]

export default function CardProyect ({imgProyect, title, description, tecnologias}: CardProps) {
    return (
        <>
            <div className="container__card bg-gray-900 w-[250px] h-[250px] rounded-2xl border-2 border-transparent hover:border-blue-950 transition-border duracion-1000">
                <div className="container__img w-full h-[120px]">
                    <img src={imgProyect} alt="" className="w-full h-full 
                    rounded-t-2xl object-cover filter brightness-50 active:brightness-100 hover:brightness-100 transition duration-300"/>
                </div>
                <div className="container__txt flex flex-col flex-1 justify-center aling-center  text-center">
                    <h3 className="text-sm">{title}</h3>
                    <p className="text-xs">{description}</p>
                    <ul className="container__tecnologias flex justify-center gap-5">
                        {stackTech
                            .filter(t => tecnologias.includes(t.id))
                            .map(t => (
                                <li key={t.id} className="text-[.5rem] p-1 rounded bg-red-600">{t.label}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}