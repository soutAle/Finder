import React from 'react';
import '../../../../styles/card-offer.css';
import { ActionButtons } from "../card_offer_components/ActionButtons.jsx";
import { useJobApplication } from "../../../hooks/useJobApplication.jsx";
import { useBookmarks } from "../../../hooks/useBookmarks.jsx";
import { useNavigate } from "react-router-dom";

export const CardOfferDetails = ({ title, description, location, modality, salary, minimun_experience, id }) => {
    const { isSubscribed, applyToJob, unapplyFromJob } = useJobApplication(id);
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/singleoffer/${id}`);
    };

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
                <ul className="list-unstyled d-flex justify-content-start m-0 details-list">
                    <li className="mx-2 details-list">{modality}</li>
                    <li className="mx-2 details-list">{salary}</li>
                    <li className='mx-2 details-list'>{minimun_experience}</li>
                </ul>
                <ActionButtons
                    isSubscribed={isSubscribed}
                    onApply={applyToJob}
                    onUnapply={unapplyFromJob}
                    onViewDetails={handleViewDetails}
                />
            </div>
        </div>
    );
};
