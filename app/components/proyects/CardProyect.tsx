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
            <div className="container__card">
                <div className="container__img">
                    <img src={imgProyect} alt="" />
                </div>
                <div className="container__txt">
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