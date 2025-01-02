import React, { useContext, useState, useEffect } from 'react';
import "../../../../styles/card-offer.css";
import { Context } from '../../../store/appContext';
import { Link } from 'react-router-dom';

export const ActionButtons = ({ offer_id }) => {
    const { store, actions } = useContext(Context);
    const [isSubscribed, setIsSubscribed] = useState(false);


    if (store.token) {
        useEffect(() => {
            const checkSubscription = store.user?.candidates?.some((candidate) => candidate.id === offer_id);
            setIsSubscribed(checkSubscription);
        }, [offer_id, store.user?.candidates]);
    }

    const handleSubscription = async () => {
        if (!isSubscribed) {
            const result = await actions.applyToJobOffer(offer_id);
            if (result.type === 'success') {
                alert(result.msg);
            }
        } else {
            const result = await actions.unapplyFromJobOffer(offer_id);
            if (result.type === 'success') {
                alert(result.msg);
            }
        }
        setIsSubscribed(!isSubscribed);
    };

    return (
        <div className="d-flex">
            <Link to={`/singleoffer/${offer_id}`} className="btn btn-view-offer mx-2">
                Ver Oferta
            </Link>

            {store.user?.profile_developer && (
                <>
                    <button
                        className={`btn ${isSubscribed ? 'btn-unapplied' : 'btn-applied'}`}
                        onClick={handleSubscription}
                    >
                        {isSubscribed ? 'Desinscribirse' : 'Inscribirse'}
                    </button>
                </>
            )}
        </div>
    );
};
