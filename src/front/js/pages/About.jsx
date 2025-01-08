import React from "react";
import '../../styles/about.css' // Asegúrate de tener un archivo CSS para estilos personalizados
import { HeroSectionAbout } from "../component/about_components/HeroSectionAbout.jsx";

export const About = () => {
    return (
        <div className="container-fluid py-5 about-container">
            <HeroSectionAbout
                title='¿Quiénes somos?'
                subtitle={'Finder es mucho más que una plataforma...'}
                phrases={[
                    "Es el puente que conecta a los mejores talentos del sector tecnológico con las empresas que buscan innovadores y visionarios para llevar sus proyectos al siguiente nivel.",
                    "Sabemos que encontrar al candidato perfecto o la oportunidad ideal puede ser un desafío, por eso, nuestra misión es simplificar ese proceso al máximo.",
                    "En Finder, los profesionales tienen acceso a ofertas de trabajo exclusivas que se ajustan a sus habilidades y aspiraciones."
                ]}
            />
        </div>
    );
};