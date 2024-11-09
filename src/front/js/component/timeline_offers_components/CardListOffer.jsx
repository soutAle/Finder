import React from "react";
import { useLoadOffers } from "../../hooks/useLoadOffers.jsx";
import { OfferCardPremiumLogic } from "./card_offer_components/LogicPremiumCard.jsx";
import "../../../styles/index.css";

export const CardListOffers = () => {
    const { offers = [], loading } = useLoadOffers();

    // Mostrar el spinner si está cargando
    if (loading) {
        return (
            <div className="svg-box">
                <svg className="svg-load-icon" fill="hsl(228, 97%, 42%)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="12" r="3" opacity="1">
                        <animate id="spinner_qYjJ" begin="0;spinner_t4KZ.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                    </circle>
                    <circle cx="12" cy="12" r="3" opacity=".4">
                        <animate begin="spinner_qYjJ.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                    </circle><circle cx="20" cy="12" r="3" opacity=".3">
                        <animate id="spinner_t4KZ" begin="spinner_qYjJ.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
                    </circle>
                </svg>
            </div>
        );
    }

    // Verificar si no hay ofertas
    if (!offers.length) {
        return (
            <div className="container">
                <p className="no-offers-section text-center text-secondary shadow-lg">
                    No hay ofertas disponibles
                </p>
            </div>
        );
    }

    // Mostrar las ofertas cuando ya están cargadas
    return (
        <div className="list-offer-container mt-3 m-auto">
            {offers.map((offer) => (
                <div key={offer.id}>
                    <OfferCardPremiumLogic offer={offer} />
                </div>
            ))}
        </div>
    );
};
