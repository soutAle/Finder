import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

export const useLoadOffers = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            await actions.getAllOffers();
            setLoading(false);
        };

        load();
    }, []);

    return { offers: store.offers, loading };
};
