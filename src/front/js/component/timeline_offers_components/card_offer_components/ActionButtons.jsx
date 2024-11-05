import React, { useContext, useEffect, useState } from 'react';
import "../../../../styles/card-offer.css";
import { Context } from '../../../store/appContext';
import { Link } from 'react-router-dom';

export const ActionButtons = ({ offerId }) => {
    const { store, actions } = useContext(Context);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const offer = store.Offers.find((offer) => offer.id === offerId);

    useEffect(() => {
        if (store.user?.profile_developer) {
            setIsSubscribed(store.user.inscribedOffers?.includes(offerId));
            setIsSaved(store.favorites?.some(fav => fav.offer_id === offerId));
        }
    }, [store.user, store.favorites, offerId]);

    const handleSubscription = async (offerId) => {
        if (isSubscribed) {
            const result = await actions.unapplyFromJobOffer(offerId);
            if (result?.msg) setIsSubscribed(false);
        } else {
            const result = await actions.applyToJobOffer(offerId);
            if (result?.msg) setIsSubscribed(true);
        }
    };

    const handleBookmark = async (offerId) => {
        const developer = store.user?.profile_developer;
        const result = isSaved
            ? await actions.removeBookmark(developer, null, offerId)
            : await actions.addBookmark(developer, null, offerId);

        if (result?.msg) setIsSaved(!isSaved);
    };

    return (
        <div className="card-offer-actions d-flex justify-content-end mx-4 d-grid gap-2 d-md-flex">
            <ul className="list-unstyled d-flex">
                <li>
                    <Link to={`/offers/${offerId}`} className="btn btn-view-offer">
                        Ver Oferta
                    </Link>
                </li>
                {store.user?.profile_developer && (
                    <>

                        <li>
                            <button
                                onClick={handleSubscription}
                                className={`btn ${isSubscribed ? 'btn-applied' : 'btn-unapplied'}`}
                            >
                                {isSubscribed ? 'Desinscribirse' : 'Inscribirse'}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleBookmark}
                                className={`btn ${isSaved ? 'btn-saved' : 'btn-unsaved'}`}
                            >
                                {isSaved ? 'Oferta Guardada' : 'Guardar oferta'}
                            </button>
                        </li>
                    </>

                )}
            </ul>
        </div>
    );
};
