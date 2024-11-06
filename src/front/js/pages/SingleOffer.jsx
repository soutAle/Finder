import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleOffer = () => {
    const { id } = useParams();
    const { store } = useContext(Context);

    const offer = store.offers?.find((offer) => offer.id === parseInt(id));

    return (
        <>
            <div className="container my-4 p-0">
                <div className="card single-offer-box shadow-sm p-3 shadow-lg">
                    <div className="row">
                        <div className="col-3">
                            <img
                                src="https://img.freepik.com/vector-premium/concepto-pequena-empresa-fachada-cafeteria-tiendas-ventas_654623-1161.jpg"
                                alt="Company Logo"
                                className="img-fluid rounded-circle"
                            />
                            <div className="text-muted mt-2">
                                <span className="num-postulados">15</span> Inscritos
                            </div>
                        </div>
                        <div className="col-9">
                            <h2 className="single-offer-title">{offer.title}</h2>
                            <p className="company-info">
                                {offer.name} - {offer.location}
                            </p>
                            <p className="date-posted">Publicado el </p>
                            {store.user?.profile_developer && (
                                <button className="btn btn-apply mt-2">
                                    {isSubscribed ? "Desinscribirse" : "Inscribirse"}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <ul className="offer-details">
                                <li>{offer.languages}</li>
                                <li>{offer.salary}</li>
                                <li>{offer.education_level}</li>
                                <li>{offer.modality}</li>
                                <li>{offer.contract_type}</li>
                                <li>{offer.location}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <hr />
                            <h3>Requisitos Mínimos</h3>
                            <p className="requisitos-minimos">{offer.minimun_requirements}</p>
                            <hr />
                            <h3>Descripción</h3>
                            <p className="offer-description">{offer.description}</p>
                            {store.user?.profile_developer && (
                                <div className="text-end mt-3">
                                    <button className="btn btn-apply btn-lg">
                                        {isSubscribed ? "Desinscribirse" : "Inscribirse"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}