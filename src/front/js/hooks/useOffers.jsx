import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useLoadOffers } from "./useLoadOffers.jsx";

export const useOffers = () => {
    const { actions } = useContext(Context);
    const loading = useLoadOffers(actions.loadAllOffers);

    return { loading };
};