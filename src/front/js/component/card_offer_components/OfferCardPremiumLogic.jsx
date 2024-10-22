import React from "react";

// Componente encargado de seleccionar el tipo de tarjeta (SRP)
export const OfferCardPremiumLogic = ({ offer }) => {
    return offer.premium ? (
        <CardOfferPremium title={offer.name} id={offer.id} />
    ) : (
        <CardOffer title={offer.name} id={offer.id} />
    );
};