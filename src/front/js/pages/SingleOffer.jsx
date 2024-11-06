import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single-offer.css"


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
                            <div className="text-muted mt-2 d-flex justify-content-center">
                                <span className="single-offer-candidates">15 Inscritos</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <h2 className="single-offer-title display-4">{offer.title}</h2>
                            <p className="single-offer-namelocation">
                                { } - {offer.location}
                            </p>
                            <p className="single-offer-date">Publicado el </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <ul className="single-offer-details">
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
                            <h3 className="single-offer-minimun-req display-2">Requisitos Mínimos</h3>
                            <p className="requirements-minimun">{offer.minimun_requirements}</p>
                            <hr />
                            <h3 className="single-description-title display-2 fw-4">Descripción</h3>
                            <p className="offer-description">{offer.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}