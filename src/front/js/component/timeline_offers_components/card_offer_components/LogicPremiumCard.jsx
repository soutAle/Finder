import React from "react";
import { CardOfferPremium } from "../CardOfferPremium.jsx";
import { CardOffer } from "../CardOffer.jsx"

export const OfferCardPremiumLogic = ({ offer }) => {
    return offer.premium ? (
        <CardOfferPremium title={offer.name} id={offer.id} />
    ) : (
        <CardOffer title={offer.name} id={offer.id} />
    );
};