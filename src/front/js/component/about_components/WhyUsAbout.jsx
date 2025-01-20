import React from "react";
import "../../../styles/about.css"

export const WhyUsAbout = ({ title, subtitle, listPhrases }) => {
    return (
        <section className="why-us-container">
            <div className="about-hero">
                <div className="title-why-box text-center">
                    <h1 className="title-why-hero fw-lighter">{title}</h1>
                    <h2 className="subtitle-why-hero fw-lighter">{subtitle}</h2>
                </div>
                <div className="text-why-container mt-4">
                    <ul className="list-unstyled">
                        {listPhrases.map((phrase, index) => (
                            <li key={index}>{phrase}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}