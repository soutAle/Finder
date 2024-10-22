import React from 'react';

export const CardOfferImage = ({ src, alt, inscritos }) => {
    return (
        <div className="card-offer-logo-container col-12 col-md-4 col-lg-3">
            <img className="card-offer-logo img-fluid" src={src} alt={alt} />
        </div>
    );
};
