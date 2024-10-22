import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useLoadOffers } from "./useLoadOffers.jsx";
// import { useFilterOffersByCompany } from "./useFilterOffersByCompany.jsx";
// import { useFilterOffersBySearch } from "./useFilterOffersBySearch.jsx";

// Hook principal para cargar y filtrar ofertas
export const useOffers = (searchTerm, company_id) => {
    const { actions } = useContext(Context);
    const loading = useLoadOffers(actions.loadAllOffers);

    return { loading };
};