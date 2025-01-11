import React from "react";

export const WhyUsAbout = ({ title, subtitle, listPhrases }) => {
    return (
        <section className="about-page">
            <div className="col-4 col-md-6 col-sm-12 p-4">
                <div className="title-box text-center">
                    <h1 className="title-hero fw-lighter">{title}</h1>
                    <h2 className="subtitle-hero fw-lighter">{subtitle}</h2>
                </div>
                <div className="text-container mt-4">
                    <ul className="list-circle">
                        {listPhrases.map((phrase, index) => (
                            <li key={index}>{phrase}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}