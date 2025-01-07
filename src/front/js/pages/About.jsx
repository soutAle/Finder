import React from "react";
import '../../styles/about.css' // Asegúrate de tener un archivo CSS para estilos personalizados
import { HeroSectionAbout } from "../component/about_components/HeroSectionAbout.jsx";

export const About = () => {
    return (
        <div className="container-fluid py-5 about-container">
            <HeroSectionAbout />
        </div>
    );
};