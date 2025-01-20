import React from "react";
import '../../styles/about.css'
import { HeroSectionAbout } from "../component/about_components/HeroSectionAbout.jsx";
import { WhyUsAbout } from "../component/about_components/WhyUsAbout.jsx";

export const About = () => {
    return (
        <div className="container-fluid about-container">
            <div className="row d-flex align-content-center my-5">
                <div className="col-md-6">
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
                <div className="col-md-6">
                    <WhyUsAbout
                        title={"¿Por qué Finder?"}
                        subtitle={"Te ayudamos a avanzar en tu carrera."}
                        listPhrases={[
                            "Finder es un servicio de búsqueda de candidatos que ayuda a las empresas a encontrar talentos de alta calidad.",
                            "Con Finder, las empresas pueden buscar candidatos de manera rápida y fácil, sin tener que preocuparse por la disponibilidad de los candidatos.",
                            "Finder es una plataforma que ayuda a las empresas a encontrar candidatos de manera rápida y fácil, sin tener que preocuparse por la disponibilidad de los candidatos."
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};