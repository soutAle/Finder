import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CardOfferDetails } from "../../component/timeline_offers_components/card_offer_components/CardOfferDetails.jsx"
import { Context } from "../../store/appContext.js";
import "../../../styles/card-offerpremium.css";

export const CardOfferPremium = ({ id }) => {
    const { store } = useContext(Context);
    const navigate = useNavigate();
    const { isSubscribed, applyToJob, unapplyFromJob } = useJobApplication(id);
    const { isSaved, toggleBookmark } = useBookmarks(id);

    const offer = store.offers.find((offer) => offer.id === id);

    if (!offer) return <div>Oferta no encontrada</div>;

    const handleViewDetails = () => {
        navigate(`/singleoffer/${id}`);
    };

    const handleViewCompany = () => {
        navigate(`/Companyview/${id}`);
    };

    return (
        <div className="card-offer mt-2" onClick={handleViewCompany}>
            <CardOfferDetails
                name={offer.name}
                title={offer.title}
                location={offer.location}
                description={offer.description}
                modlity={offer.modality}
                salary={offer.salary}
                minimun_experience={offer.minimun_experience}
            />
            <ActionButtons
            />
            <div onClick={toggleBookmark} className="heart-icon" style={{ cursor: "pointer" }}>
                {isSaved ? <FaHeart /> : <FaRegHeart />}
            </div>
        </div>
    );
};
