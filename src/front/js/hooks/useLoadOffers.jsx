import React, { useState, useEffect, useContext } from "react";

// Hook para cargar ofertas
export const useLoadOffers = (loadOffers) => {
    const { actions } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            await actions.loadAllOffers();
            setLoading(false);
        };

        load();
    }, [loadOffers]);

    return loading;
};
