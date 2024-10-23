import React from "react";
import { CardOfferPremium } from "../timeline_offers_components/CardOfferPremium.jsx";
import { CardOffer } from "../timeline_offers_components/CardOffer.jsx"

// Componente encargado de seleccionar el tipo de tarjeta (SRP)
export const OfferCardPremiumLogic = ({ offer }) => {
    return offer.premium ? (
        <CardOfferPremium title={offer.name} id={offer.id} />
    ) : (
        <CardOffer title={offer.name} id={offer.id} />
    );
};