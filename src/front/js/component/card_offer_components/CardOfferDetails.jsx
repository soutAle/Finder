import React from 'react';

export const CardOfferDetails = ({ name, empresa, localidad, descripcion, fecha, modalidad, salario, experiencia }) => {
    return (
        <div className="card-offer-content ms-3 col-12 col-md-8 col-lg-9">
            <div className="title-heart d-flex align-items-center justify-content-between mb-2">
                <h2 className="card-offer-title">{name}</h2>
            </div>
            <span className="card-offer-company mt-2">
                {empresa} - {localidad}
            </span>
            <div className="card-offer-description mt-2">
                <p className="text-description">{descripcion}</p>
            </div>
            <ul className="card-offer-details list-unstyled d-flex">
                <li className="list-footer-details me-3">Publicada el {fecha}</li>
                <li className="list-footer-details me-3">{modalidad}</li>
                <li className="list-footer-details me-3">{salario}</li>
                <li className="list-footer-details">{experiencia}</li>
            </ul>
        </div>
    );
};
