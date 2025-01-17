import React from 'react';
import '../../../../styles/card-offer.css';
import { ActionButtons } from './ActionButtons.jsx';
import { CiBookmark } from "react-icons/ci";


export const CardOfferDetails = ({ title, description, location, modality, salary, minimun_experience, id }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-3 img-offer-container" style={{ padding: 0 }}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiwNZOWWU_5snwjBWULhLyjSjuVLyJw1SQg&s"
                    className="img-fluid img-offer"
                    alt={title}
                />

            </div>
            <div className="col-md-9">
                <div className="card-body">
                    <div className="row-header">
                        <div className="card-details-title d-flex justify-content-between">
                            <h2>{title}</h2>
                            <CiBookmark className='bookmark-icon' />
                        </div>
                        <span className="card-details-subtitle">Company name - {location}</span>
                    </div>
                    <div className="card-details-description">
                        <p className='text-secondary'>{description}</p>
                    </div>
                </div>
                <div className="card-footer-list d-flex justify-content-between align-items-end">
                    <ul className="list-unstyled d-flex align-items-end m-0 details-list">
                        <li className="mx-3 details-list-item">{modality}</li>
                        <li className="mx-3 details-list-item">{salary}</li>
                        <li className="mx-3 details-list-item">{minimun_experience}</li>
                    </ul>
                    <ActionButtons offer_id={id} />
                </div>
            </div>
        </div>
    );
};
