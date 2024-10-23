import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

// Hook para cargar ofertas
export const useLoadOffers = () => {
    const { store, actions } = useContext(Context); // Extraer 'store' para acceder a las ofertas
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            await actions.loadAllOffers(); // Asume que esta acción llena 'store.offers'
            setLoading(false);
        };

        load();
    }, []);

    return { offers: store.offers, loading }; // Devolver las ofertas y el estado de carga
};
