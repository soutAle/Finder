import React, { useContext, useState, useEffect } from 'react';
import "../../../../styles/card-offer.css";
import { Context } from '../../../store/appContext';
import { Link } from 'react-router-dom';

export const ActionButtons = ({ offer_id }) => {
    const { store, actions } = useContext(Context);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const checkSubscription = store.user?.candidates?.map((candidate) => candidate.id === offer_id);
        setIsSubscribed(checkSubscription);
    }, [offer_id, store.user?.candidates]);

    const handleSubscription = async () => {
        if (!isSubscribed) {
            const result = await actions.applyToJobOffer(offer_id);
            if (result.type === 'success') {
                setIsSubscribed(true);
                alert(result.msg);
            }
        } else {
            const result = await actions.unapplyFromJobOffer(offer_id);
            if (result.type === 'success') {
                setIsSubscribed(false);
                alert(result.msg);
            }
        }
    };

    return (

        <div className="list-unstyled d-flex">

            <Link to={`/singleoffer/${offer_id}`} className="btn btn-view-offer">
                Ver Oferta
            </Link>

            {store.user?.profile_developer && (
                <>

                    <button
                        className={`btn ${isSubscribed ? 'btn-applied' : 'btn-unapplied'}`}
                        onClick={handleSubscription}
                    >
                        {isSubscribed ? 'Desinscribirse' : 'Inscribirse'}
                    </button>

                </>
            )}
        </div>

    );
};
