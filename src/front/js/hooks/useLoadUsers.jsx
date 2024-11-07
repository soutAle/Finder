import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

export const useLoadUsers = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            await actions.getAllUsers();
            setLoading(false);
        };
        load();
    }, []);

    return { users: store.users, loading };
};
