import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

export const useJobApplication = (offerId, user) => {
    const { actions, store } = useContext(Context);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [numeroInscritos, setNumeroInscritos] = useState(0);

    useEffect(() => {
        if (user && user.profile_programador) {
            const subscribed = user.subscribedOffers?.includes(offerId);
            setIsSubscribed(subscribed);
        }
    }, [user, offerId]);

    return { isSubscribed, numeroInscritos, applyToJob, unapplyFromJob };
};
