import React from 'react';

export const ActionButton = ({ label, action, type = "primary", disabled = false }) => {
    return (
        <button className={`btn btn-${type} btn-sm`} onClick={action} disabled={disabled}>
            {label}
        </button>
    );
};
