import React from "react";
import { useLoadOffers } from "../../hooks/useLoadOffers.jsx";
import "../../../styles/index.css";
import { Spinner } from "../Spinner.jsx";
import { CardOffer } from "./CardOffer.jsx";

export const CardListOffers = () => {
    const { offers, loading } = useLoadOffers();

    if (loading) return <Spinner />
    if (!offers.length) return <p className="no-offers-section text-center text-secondary shadow-lg">No hay ofertas disponibles</p>

    return (
        <>
            {
                offers.map((offer) => (
                    <CardOffer title={offer.name} id={offer.id} />
                ))
            }
        </>

    );
};
