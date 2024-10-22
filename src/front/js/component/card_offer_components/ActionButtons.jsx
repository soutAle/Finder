import React from 'react';
import { ActionButton } from '../card_offer_components/ActionButton.jsx';

export const ActionButtons = ({ isSubscribed, onApply, onUnapply, onViewDetails }) => {
    return (
        <div className="card-offer-actions mt-2">
            <ActionButton label="Ver detalles" action={onViewDetails} type="info" />
            {isSubscribed ? (
                <ActionButton label="Desinscribirse" action={onUnapply} type="danger" />
            ) : (
                <ActionButton label="Inscribirse" action={onApply} type="success" />
            )}
        </div>
    );
};
