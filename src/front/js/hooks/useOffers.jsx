import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useLoadOffers } from "./useLoadOffers";
import { useFilterOffersByCompany } from "./useFilterOffersByCompany.jsx";

// Hook principal para cargar y filtrar ofertas
export const useOffers = (searchTerm, company_id) => {
    const { store, actions } = useContext(Context);
    const loading = useLoadOffers(actions.loadAllJobOffers);
    const filteredByCompany = useFilterOffersByCompany(store.jobOffers || [], company_id);
    const offers = useFilterOffersBySearchTerm(filteredByCompany, searchTerm);

    return { offers, loading };
};