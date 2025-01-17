import React, { useContext } from "react";
import { CardOfferDetails } from "../timeline_offers_components/card_offer_components/CardOfferDetails.jsx";
import { Context } from "../../store/appContext.js";
import "../../../styles/card-offer.css";

export const CardOffer = ({ id }) => {
    const { store } = useContext(Context);

    const offer = store.offers.find((offer) => offer.id === id);
    if (!offer) return <div>Oferta no encontrada</div>;

    return (
        <div className="card-offer-container p-2 my-2">
            <CardOfferDetails
                image={offer.image}
                title={offer.title}
                location={offer.location}
                description={offer.description}
                modality={offer.modality}
                salary={offer.salary}
                minimun_experience={offer.minimun_experience}
                id={offer.id}
            />
        </div>

    );
};

