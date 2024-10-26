import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardOfferDetails } from "../timeline_offers_components/card_offer_components/CardOfferDetails.jsx";
import { Context } from "../../store/appContext.js";
import "../../../styles/card-offer.css";

export const CardOffer = ({ id }) => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    const handleViewCompany = () => {
        navigate(`/companyprofile/${id}`);
    };

    const offer = store.offers.find((offer) => offer.id === id);
    if (!offer) return <div>Oferta no encontrada</div>;

    return (
        <div className="card-offer-container mt-4" onClick={handleViewCompany}>
            <CardOfferDetails
                image={offer.image}
                name={store.user.name}
                title={offer.title}
                location={offer.location}
                description={offer.description}
                modality={offer.modality}
                salary={offer.salary}
                minimun_experience={offer.minimun_experience}
            />
        </div>
    );
};

