import React from "react";
import { useLoadOffers } from "../../../hooks/useLoadOffers.jsx";
import { OfferCardPremiumLogic } from "./LogicPremiumCard.jsx";

export const CardListOffers = () => {
    const { offers = [], loading } = useLoadOffers();
    return (
        <div className="list-offer-container mt-3 m-auto">
            {loading ? (
                <p className="loading-section text-center">Cargando ofertas...</p>
            ) : Array.isArray(offers) && offers.length > 0 ? (
                offers.map((offer) => (
                    <div key={offer.id}>
                        <OfferCardPremiumLogic offer={offer} />
                    </div>
                ))
            ) : (
                <p className="no-offers-section text-center text-secondary shadow-lg">
                    No hay ofertas disponibles
                </p>
            )}
        </div>
    );
};
