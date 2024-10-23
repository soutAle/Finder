import React from "react";
import "../../../styles/home.css"



export const HighlightSection = () => {
    return (
        <section className="highlights-section mt-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 col-sm-12 mt-3">
                        <div className="card highlight-cards">
                            <div className="card-img-container">
                                <img src="https://unitedstates.corriculo.co.uk/wp-content/uploads/2022/01/Software-Developer-Recruitment-Agency.jpg" alt="Para Desarrolladores" className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <h3 className="mt-3 fw-bold">Para Desarrolladores</h3>
                                <p>Encuentra oportunidades laborales, colabora en proyectos desafiantes y desarrolla tu carrera.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-3">
                        <div className="card highlight-cards">
                            <div className="card-img-container">
                                <img src="https://www.isdi.education/es/wp-content/uploads/2024/03/4367-direccion20de20empresas.jpg" alt="Para Empresas" className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <h3 className="mt-3">Para Empresas</h3>
                                <p>Conecta con el mejor talento tecnológico y forma tu equipo ideal de desarrolladores.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-3">
                        <div className="card highlight-cards">
                            <div className="card-img-container">
                                <img src="https://cloudoffice.com.vn/assetmanager/liveEditer/t%C3%ADnh%20t%C6%B0%C6%A1ng%20t%C3%A1c%20v%C3%A0%20k%E1%BB%B7%20lu%E1%BA%ADt.png" alt="Colabora Globalmente" className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <h3 className="mt-3">Colabora Globalmente</h3>
                                <p>Únete a una red de desarrolladores y empresas alrededor del mundo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}