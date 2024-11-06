import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CardOfferDetails } from "../../component/timeline_offers_components/card_offer_components/CardOfferDetails.jsx"
import { Context } from "../../store/appContext.js";
import "../../../styles/card-offerpremium.css";

export const CardOfferPremium = ({ id }) => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

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
            <ActionButtons offer_id={id}
            />
        </div>
    );
};
