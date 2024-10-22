import { useMemo } from "react";

export const useFilterOffersBySearchTerm = (offers, searchTerm) => {
    const lowerCasedSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";

    const filteredOffers = useMemo(() => {
        if (!Array.isArray(offers) || !lowerCasedSearchTerm) return offers;

        return offers.filter((offer) =>
            offer.name.toLowerCase().includes(lowerCasedSearchTerm)
        );
    }, [offers, lowerCasedSearchTerm]);

    return filteredOffers;
};
