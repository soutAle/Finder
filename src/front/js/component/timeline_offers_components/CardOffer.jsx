import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobApplication } from "../../hooks/useJobApplication.jsx";
import { useBookmarks } from "../../hooks/useBookmarks.jsx";
import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { formatDate } from "../helpers/dateHelper";
import { CardOfferImage } from "../card_offer_components/CardOfferImage.jsx";
import { CardOfferDetails } from "../card_offer_components/CardOfferDetails.jsx"
import { ActionButtons } from "../card_offer_components/ActionButtons.jsx";
import "../../../styles/card-offer.css";

export const CardOffer = ({ id }) => {
    const navigate = useNavigate();
    const { isSubscribed, applyToJob, unapplyFromJob } = useJobApplication(id);
    const { isSaved, toggleBookmark } = useBookmarks(id);


    const handleViewDetails = () => {
        navigate(`/singleoffer/${id}`);
    };

    const handleViewCompany = () => {
        navigate(`/companyprofile/${id}`);
    };

    const offer = store.jobOffers.find((offer) => offer.id === id);
    if (!offer) return <div>Oferta no encontrada</div>;

    return (
        <div className="card-offer mt-2" onClick={handleViewCompany}>
            <CardOfferImage
                src="https://img.freepik.com/vector-premium/concepto-pequena-empresa-fachada-cafeteria-tiendas-ventas_654623-1161.jpg"
                alt="Company Logo"
            />
            <CardOfferDetails
                name={offer.name}
                empresa={offer.nombre_empresa}
                localidad={offer.localidad}
                descripcion={offer.descripcion}
                fecha={formatDate(offer.fecha_publicacion)}
                modalidad={offer.modalidad}
                salario={offer.salario}
                experiencia={offer.experiencia_minima}
            />
            <ActionButtons
                isSubscribed={isSubscribed}
                onApply={handleApplyClick}
                onUnapply={handleApplyClick}
                onViewDetails={handleViewDetails}
            />
            <div onClick={handleSavedClick} className="heart-icon" style={{ cursor: "pointer" }}>
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </div>
        </div>
    );
};
