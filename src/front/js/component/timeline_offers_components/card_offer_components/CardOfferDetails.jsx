import React from 'react';
import '../../../../styles/card-offer.css';
import { ActionButtons } from './ActionButtons.jsx';

export const CardOfferDetails = ({ title, description, location, modality, salary, minimun_experience, id }) => {
    return (
        <div className="d-flex">
            <div className="col img-offer-container">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiwNZOWWU_5snwjBWULhLyjSjuVLyJw1SQg&s"
                    className="img-fluid rounded-start img-offer"
                    alt={title}
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <div className="row row-header">
                        <h4 className="card-details-title">{title}</h4>
                        <span className="card-details-location">{location}</span>
                    </div>
                    <div className="card-details-description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="card-footer-list d-flex justify-content-between align-items-end">
                    <ul className="list-unstyled d-flex justify-content-start align-items-end m-0 details-list">
                        <li className="mx-3 details-list">{modality}</li>
                        <li className="mx-3 details-list">{salary}</li>
                        <li className="mx-3 details-list">{minimun_experience}</li>
                    </ul>
                    <ActionButtons offer_id={id} />
                </div>
            </div>
        </div>
    );
};
