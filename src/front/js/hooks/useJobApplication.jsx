import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

export const useJobApplication = (offerId) => {
    const { actions, store } = useContext(Context);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        if (store.user && store.user.profile_developer) {
            const subscribed = store.user.inscribedOffers?.includes(offerId);
            setIsSubscribed(subscribed);
        }

    }, [store.user, offerId]);

    const applyToJob = async () => {
        if (!store.user?.profile_developer) {
            throw new Error("Solo los programadores pueden inscribirse.");
        }

        const result = await actions.applyToJobOffer(offerId);
        if (result?.msg) {
            setIsSubscribed(true);
        } else {
            throw new Error("Error al inscribirse, intente nuevamente.");
        }
    };

    const unapplyFromJob = async () => {
        const result = await actions.unapplyFromJobOffer(offerId);
        if (result?.msg) {
            setIsSubscribed(false);
        } else {
            throw new Error("Error al desinscribirse, intente nuevamente.");
        }
    };

    return { isSubscribed, applyToJob, unapplyFromJob };
};

