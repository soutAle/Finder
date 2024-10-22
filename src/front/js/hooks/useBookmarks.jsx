import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

export const useBookmarks = (offer_id, user) => {
    const { actions, store } = useContext(Context);
    const [isSaved, setIsSaved] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const favorite = store.favorites?.some((fav) => fav.offer_id === offer_id);
        setIsSaved(favorite);
    }, [store.favorites, offer_id]);

    const toggleBookmark = async () => {
        const developer_id = user.profile_developer?.id || null;
        const company_id = user.profile_company?.id || null;

        try {
            if (isSaved) {
                await actions.removeBookmark(developer_id, company_id, offer_id);
            } else {
                await actions.addBookmark(developer_id, company_id, offer_id);
            }
            setIsSaved((prev) => !prev);
        } catch (error) {
            console.error(error);
            setError("Error al guardar la oferta");
        }
    };
    return { isSaved: isSaved, toggleBookmark, error };
};
