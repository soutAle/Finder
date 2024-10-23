import React from 'react';

export const CardOfferDetails = ({ title, name, location, description, modalaity, salary, minimun_experience }) => {
    return (
        <div className="card-offer-content ms-3 col-12 col-md-8 col-lg-9">
            <div className="title-heart d-flex align-items-center justify-content-between mb-2">
                <h2 className="card-offer-title">{title}</h2>
            </div>
            <span className="card-offer-company mt-2">
                {name} - {location}
            </span>
            <div className="card-offer-description mt-2">
                <p className="text-description">{description}</p>
            </div>
            <ul className="card-offer-details list-unstyled d-flex">
                <li className="list-footer-details me-3">{modalaity}</li>
                <li className="list-footer-details me-3">{salary}</li>
                <li className="list-footer-details">{minimun_experience}</li>
            </ul>
        </div>
    );
};
