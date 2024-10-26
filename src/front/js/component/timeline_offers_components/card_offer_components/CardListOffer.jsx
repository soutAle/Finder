import React from "react";
import { useLoadOffers } from "../../../hooks/useLoadOffers.jsx";
import { OfferCardPremiumLogic } from "./LogicPremiumCard.jsx";

export const CardListOffers = ({ searchTerm, company_id }) => {
    const { offers = [], loading } = useLoadOffers();

    return (
        <div className="list-offer-container mt-3 m-auto">
            <div className="row d-flex flex-column text-start g-2">
                {loading ? (
                    <p className="loading-section text-center">Cargando ofertas...</p>
                ) : Array.isArray(offers) && offers.length > 0 ? (
                    offers.map((offer) => (
                        <div className="col list-offer-box" key={offer.id}>
                            <OfferCardPremiumLogic offer={offer} />
                        </div>
                    ))
                ) : (
                    <p className="no-offers-section text-center text-secondary shadow-lg">
                        No hay ofertas disponibles
                    </p>
                )}
            </div>
        </div>
    );
};
