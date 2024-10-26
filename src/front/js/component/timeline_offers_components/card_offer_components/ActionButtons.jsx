import React from 'react';
import { ActionButton } from '../card_offer_components/ActionButton.jsx';
import "../../../../styles/card-offer.css";

export const ActionButtons = ({ isSubscribed, onApply, onFollowOffer, onUnapply, onViewDetails }) => {
    return (
        <div className="card-offer-actions d-flex justify-content-end mx-4 d-grid gap-2 d-md-flex">
            <ActionButton label="Ver detalles" action={onViewDetails} styleType="btn-primary" />
            {isSubscribed ? (
                <ActionButton label="Desinscribirse" action={onUnapply} styleType="btn-warning" />
            ) : (
                <ActionButton label="Inscribirse" action={onApply} styleType="btn-success" />
            )}
            <ActionButton label="Guardar oferta" action={onFollowOffer} styleType="btn-secondary" />
        </div>
    );
};
