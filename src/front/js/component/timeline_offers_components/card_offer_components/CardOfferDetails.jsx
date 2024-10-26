import React from 'react';
import '../../../../styles/card-offer.css';
import { ActionButtons } from "../card_offer_components/ActionButtons.jsx";
import { useJobApplication } from "../../../hooks/useJobApplication.jsx";
import { useBookmarks } from "../../../hooks/useBookmarks.jsx";
import { BsBookmark } from "react-icons/bs";

export const CardOfferDetails = ({ title, name, location, description, modality, salary, minimun_experience, id }) => {
    const { isSubscribed, applyToJob, unapplyFromJob } = useJobApplication(id);
    const { isSaved, toggleBookmark } = useBookmarks(id);


    const handleViewDetails = () => {
        navigate(`/singleoffer/${id}`);
    };
    return (
        <div className="card-details-container">
            <div className="row">
                <div className="col-4">
                    <div className="card-details-img-container">
                        <img
                            className='img-fluid card-details-img'
                            src="https://elalmacenfotovoltaico.com/img/leoblog/b/1/81/lg-b-companias_electricidad%20espa%C3%B1a.jpg"
                            alt="Detalles de la tarjeta"
                        />
                    </div>
                </div>
                <div className="col-7 p-0">
                    <div className="row">
                        <div className="card-details-header d-flex flex-column">
                            <span className='details-title fs-4 mt-2'>{title}</span>
                            <span className='details-location mt-1'>{location}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="details-description-container mt-2">
                            <p className="details-description">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="bookmark-icon ms-3">
                        <BsBookmark />
                    </div>
                </div>
            </div>

            {/* <div className="row d-flex me-0">
                <div className="col-4">
                    <div className="card-details-img">
                        <img
                            className='img-fluid'
                            src="https://elalmacenfotovoltaico.com/img/leoblog/b/1/81/lg-b-companias_electricidad%20espa%C3%B1a.jpg"
                            alt="Detalles de la tarjeta"
                        />
                    </div>
                </div>
                <div className="col-8 ms-2">
                    <div className="card-details-header">
                        <h5 className="card-title-details mb-2">{title}</h5>
                        <span className='card-location-details text-muted'>{location}</span>
                        <p className="card-text-details mt-3 mb-4">{description}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                        <ul className="list-unstyled d-flex">
                            <li>
                                <span className="item-details-list me-2 badge bg-secondary opacity-75">{modality}</span>
                            </li>
                            <li>
                                <span className="item-details-list me-2 badge bg-info">{salary}</span>
                            </li>
                            <li>
                                <span className="item-details-list me-2 badge bg-warning">{minimun_experience}</span>
                            </li>
                        </ul>
                        <ActionButtons
                            isSubscribed={isSubscribed}
                            onApply={applyToJob}
                            onUnapply={unapplyFromJob}
                            onViewDetails={handleViewDetails}
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
};
