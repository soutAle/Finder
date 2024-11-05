import React, { useContext } from 'react';
import '../../../../styles/card-offer.css';
import { ActionButtons } from './ActionButtons.jsx';
export const CardOfferDetails = ({ title, description, location, modality, salary, minimun_experience }) => {

    return (
        <div className="d-flex">
            <div className="img-offer-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiwNZOWWU_5snwjBWULhLyjSjuVLyJw1SQg&s" className='img-offer' alt="" />
            </div>
            <div className="card-body">
                <div className="row row-header">
                    <h4 className="card-details-title">{title}</h4>
                    <span className='card-details-location'>{location}</span>
                </div>
                <div className="card-details-description">
                    <p>{description}</p>
                </div>
                <div className="card-footer-list d-flex justify-content-between">
                    <ul className="list-unstyled d-flex justify-content-start m-0 details-list">
                        <li className="mx-2 details-list">{modality}</li>
                        <li className="mx-2 details-list">{salary}</li>
                        <li className='mx-2 details-list'>{minimun_experience}</li>
                    </ul>
                    <ActionButtons />
                </div>
            </div>
        </div>
    );
};
