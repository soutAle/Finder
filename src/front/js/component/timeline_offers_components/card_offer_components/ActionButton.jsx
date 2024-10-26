import React from 'react';
import "../../../../styles/card-offer.css";

export const ActionButton = ({ label, action, styleType = '' }) => {
    return (
        <button
            className={`btn btn-sm btn-offer me-2 ${styleType}`}
            onClick={action}
        >
            {label}
        </button>
    );
};
