import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

export const useBookmarks = (offer_id, user) => {
    const { actions, store } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorite = store.favorites?.some((fav) => fav.offer_id === offer_id);
        setIsFavorite(favorite);
    }, [store.favorites, offer_id]);

    const toggleBookmark = async () => {
        const developer_id = user.profile_developer?.id || null;
        const company_id = user.profile_company?.id || null;
        const offer_id = offer_id;

        try {
            if (isFavorite) {
                await actions.removeFavorite(developer_id, company_id, offer_id);
            } else {
                await actions.addFavorite(developer_id, company_id, offer_id);
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            // Manejo de errores
        }
    };

    return { isFavorite, toggleFavorite };
};
