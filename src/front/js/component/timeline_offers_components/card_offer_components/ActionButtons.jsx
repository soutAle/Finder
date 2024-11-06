import React, { useContext, useState, useEffect } from 'react';
import "../../../../styles/card-offer.css";
import { Context } from '../../../store/appContext';
import { Link } from 'react-router-dom';

export const ActionButtons = ({ offer_id }) => {
    const { store, actions } = useContext(Context);
    const [isSubscribed, setIsSubscribed] = useState(false);
    // const [isSaved, setIsSaved] = useState(false);

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

    // const handleBookmark = async (offer_id) => {
    //     const developer = store.user?.profile_developer.id;
    //     const result = isSaved
    //         ? await actions.removeBookmark(developer, null, offer_id)
    //         : await actions.addBookmark(developer, null, offer_id);

    //     if (result?.msg) setIsSaved(!isSaved);
    // };

    return (
        <div className="card-offer-actions d-flex justify-content-end mx-4 d-grid gap-2 d-md-flex">
            <ul className="list-unstyled d-flex">
                <li>
                    <Link to={`/offers/${offer_id}`} className="btn btn-view-offer">
                        Ver Oferta
                    </Link>
                </li>
                {store.user?.profile_developer && (
                    <>
                        <li>
                            <button
                                className={`btn ${isSubscribed ? 'btn-applied' : 'btn-unapplied'}`}
                                onClick={handleSubscription}
                            >
                                {isSubscribed ? 'Desinscribirse' : 'Inscribirse'}
                            </button>
                        </li>
                        {/* <li>
                            <button
                                onClick={handleBookmark}
                                className={`btn ${isSaved ? 'btn-saved' : 'btn-unsaved'}`}
                            >
                                {isSaved ? 'Oferta Guardada' : 'Guardar oferta'}
                            </button>
                        </li> */}
                    </>
                )}
            </ul>
        </div>
    );
};
