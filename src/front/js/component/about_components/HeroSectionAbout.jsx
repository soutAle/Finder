import React from "react";
import '../../../styles/about.css' // Asegúrate de tener un archivo CSS para estilos personalizados


export const HeroSectionAbout = ({ title, subtitle, phrases }) => {
    return (
        <section className="about-page d-flex">
            <div className="col-12 p-4 about-hero">
                <div className="title-box">
                    <h1 className="title-hero fw-lighter">{title}</h1>
                    <h2 className="subtitle-hero fw-lighter">{subtitle}</h2>
                </div>
                <div className="text-container mt-4">
                    {phrases.map((phrase, index) => (
                        <p key={index}>{phrase}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}