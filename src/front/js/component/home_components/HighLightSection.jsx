import React from 'react';
import HighLightCard from './highlig_section_components/HighLightCard.jsx';
import '../../../styles/home.css';

const highlightCardsData = [
    {
        img: "https://unitedstates.corriculo.co.uk/wp-content/uploads/2022/01/Software-Developer-Recruitment-Agency.jpg",
        title: "Para Desarrolladores",
        description: "Encuentra oportunidades laborales, colabora en proyectos desafiantes y desarrolla tu carrera."
    },
    {
        img: "https://www.isdi.education/es/wp-content/uploads/2024/03/4367-direccion20de20empresas.jpg",
        title: "Para Empresas",
        description: "Conecta con el mejor talento tecnológico y forma tu equipo ideal de desarrolladores."
    },
    {
        img: "https://cloudoffice.com.vn/assetmanager/liveEditer/t%C3%ADnh%20t%C6%B0%C6%A1ng%20t%C3%A1c%20v%C3%A0%20k%E1%BB%B7%20lu%E1%BA%ADt.png",
        title: "Colabora Globalmente",
        description: "Únete a una red de desarrolladores y empresas alrededor del mundo."
    }
];

const HighLightSection = () => {
    return (
        <div className="container-fluid highlight-section d-flex justify-content-center">
            {highlightCardsData.map((card, index) => (
                <HighLightCard
                    key={index}
                    img={card.img}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default HighLightSection;