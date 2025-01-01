import React from "react";
import { useLoadOffers } from "../../../hooks/useLoadOffers.jsx";
import { OfferCardPremiumLogic } from "./OfferCardPremiumLogic.jsx";
import "../../../../styles/index.css";
import { Spinner } from "../../Spinner.jsx";

export const CardListOffers = () => {
    const { offers, loading } = useLoadOffers();

    if (loading) return <Spinner />
    if (!offers.length) return <p className="no-offers-section text-center text-secondary shadow-lg">No hay ofertas disponibles</p>

    return (
        <>
            <div className="mt-5">
                {offers.map((offer) => (
                    <div key={offer.id} className="m-3">
                        <OfferCardPremiumLogic offer={offer} />
                    </div>
                ))}
            </div>
        </>

    );
};
