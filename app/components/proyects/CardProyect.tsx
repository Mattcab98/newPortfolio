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
            <div className="container__card bg-gray-500 w-[250px] h-[250px] rounded-2xl hover:border hover:border-color-red-600">
                <div className="container__img w-full h-[120px]">
                    <img src={imgProyect} alt="" className="w-full h-full 
                    rounded-t-xl object-cover filter brightness-50 active:brightness-100 hover:brightness-100 transition duration-300"/>
                </div>
                <div className="container__txt w-full h-full flex flex-col justify-center">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul className="container__tecnologias">
                        {stackTech
                            .filter(t => tecnologias.includes(t.id))
                            .map(t => (
                                <li key={t.id}>{t.label}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}