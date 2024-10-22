import React, { useContext } from "react";
import { useOffers } from "../hooks/useOffers";
import { OfferCardPremiumLogic } from "./OfferCardPremiumLogic";
import { Context } from "../store/appContext.js";
import "../../styles/CardListOffer.css";

export const CardListOffers = ({ searchTerm, company_id }) => {
    const { store } = useContext(Context);
    const { offers, loading } = useOffers(searchTerm, company_id);

    return (
        <div className="list-offer-container mt-3 m-auto">
            <div className="row d-flex flex-column text-start g-2">
                {loading ? (
                    <p className="loading-section text-center">Cargando ofertas...</p>
                ) : offers.length > 0 ? (
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
