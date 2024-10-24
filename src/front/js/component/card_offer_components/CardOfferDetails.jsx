import React from 'react';
import "../../../styles/card-offer.css"

export const CardOfferDetails = ({ title, name, location, description, modality, salary, minimun_experience }) => {
    return (
        <div className="card-offer-content ms-3">
            {/* <div className="title-heart d-flex align-items-center justify-content-between mb-2">
                <h2 className="card-offer-title">{title}</h2>
            </div> */}
            <span className="card-offer-company mt-2">
                {name} - {location}
            </span>
            <div className="card-offer-description mt-2">
                <p className="text-description">{description}</p>
            </div>
            <ul className="card-offer-details list-unstyled d-flex">
                <li className="list-footer-details me-3">{modality}</li>
                <li className="list-footer-details me-3">{salary}</li>
                <li className="list-footer-details">{minimun_experience}</li>
            </ul>
        </div>
    );
};
