// Hook para filtrar ofertas por empleador
export const useFilterOffersByCompany = (offers, company_id) => {
    if (!company_id) return offers;
    return offers.filter((offer) => offer.company_id === company_id);
};


