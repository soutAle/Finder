import React from "react";
import '../../../styles/about.css' // Asegúrate de tener un archivo CSS para estilos personalizados


export const HeroSectionAbout = () => {
    return (
        <section className="container-fluid about-page text-center">
            <div className="row">
                <div className="col-4 col-md-6 col-sm-12 p-4 about-hero">
                    <div className="title-box">
                        <h1 className="title-hero fw-lighter">¿Quienes somos?</h1>
                        <h2 className="subtitle-hero fw-lighter">Finder es mucho más que una plataforma...</h2>
                    </div>
                    <div className="text-container mt-4">
                        <p>Es el puente que conecta a los mejores talentos del sector tecnológico con las empresas que buscan innovadores y visionarios para llevar sus proyectos al siguiente nivel.</p>
                        <p>
                            Sabemos que encontrar al candidato perfecto o la oportunidad ideal puede ser un desafío, por eso, nuestra misión es simplificar ese proceso al máximo.
                            En Finder, los profesionales tienen acceso a ofertas de trabajo exclusivas que se ajustan a sus habilidades y aspiraciones,
                            mientras que las empresas pueden descubrir talentos altamente cualificados y apasionados por la tecnología.
                        </p>
                        <p>
                            Creemos firmemente que las conexiones profesionales deben ser más que solo un intercambio de habilidades;
                            deben ser oportunidades para crecer, aprender y colaborar en proyectos que transformen la industria.
                            ¡Con Finder, el futuro del trabajo está al alcance de un clic!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}