import React, { useContext, useEffect, useState } from 'react';
import "../../../../styles/card-offer.css";
import { Context } from '../../../store/appContext';
import { useNavigate } from 'react-router-dom';

export const ActionButtons = ({ id }) => {
    const { store, actions } = useContext(Context);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        if (store.user && store.user.profile_developer) {
            const subscribed = store.user.inscribedOffers?.includes(id);
            setIsSubscribed(subscribed);
        }
    }, [store.user])

    const handleApplyClick = async () => {
        let result;
        if (isSubscribed) {
            result = await actions.unapplyFromJobOffer(id);
        }
    }

    const handleNavigate = (link) => {
        navigate(link);
    };

    return (
        <div className="card-offer-actions d-flex justify-content-end mx-4 d-grid gap-2 d-md-flex">
            <Link to={`/offers/${id}`}>Ver Oferta</Link>
            <Link to={`/companyprofile/${id}`}>Ver Perfil de la Compañía</Link>
            {/* <ActionButton label="Ver detalles" action={onViewDetails} styleType="btn-primary" />
            {isSubscribed ? (
                <ActionButton label="Desinscribirse" action={onUnapply} styleType="btn-warning" />
            ) : (
                <ActionButton label="Inscribirse" action={onApply} styleType="btn-success" />
            )}
            <ActionButton label="Guardar oferta" action={onFollowOffer} styleType="btn-secondary" /> */}
        </div>
    );
};
