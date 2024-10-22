import React, { useState, useContext, useEffect } from "react";
import "../../styles/CardOffer.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ModalJobApply } from "./ModalJobApply.jsx";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { StarsRating } from "./StarsRating.jsx";
import { useFavorites } from "./useFavorites"; // Un nuevo hook para manejar favoritos
import { useJobApplication } from "./useJobApplication"; // Un nuevo hook para manejar inscripciones

export const CardOffer = ({ id }) => {
    const { store } = useContext(Context);
    const offer = store.jobOffers.find((offer) => offer.id === id);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState("");

    // Lógica para favoritos
    // const { isFavorite, toggleFavorite } = useFavorites(id, store.user);

    // Lógica para la inscripción
    const {
        isSubscribed,
        numeroInscritos,
        applyToJob,
        unapplyFromJob
    } = useJobApplication(id, store.user);

    if (!offer) return <div>Oferta no encontrada</div>;

    const handleViewDetails = () => {
        navigate(`/singleoffer/${id}`);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long' };
        return date.toLocaleDateString('es-ES', options);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="container">
                <div className="row card-offer mt-2">
                    <div className="col-2 img-box">
                        <img
                            className="card-offer-logo"
                            src="https://img.freepik.com/vector-premium/concepto-pequena-empresa-fachada-cafeteria-tiendas-ventas_654623-1161.jpg"
                            alt="Company Logo"
                        />
                        <span className="num-postulados text-muted">
                            ({numeroInscritos}) Se han inscrito
                        </span>
                    </div>
                    <div className="col-9 header-box d-flex flex-column">
                        <div className="title-heart d-flex justify-content-between">
                            <h2 className="card-offer-title">{offer.name}</h2>
                            {/* <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
                                {isFavorite ? (
                                    <FaHeart className="heart-icon" />
                                ) : (
                                    <FaRegHeart className="heart-icon" />
                                )}
                            </div> */}
                        </div>
                        <span className="card-offer-company">
                            {offer.nombre_empresa} - {offer.localidad}
                        </span>
                        <StarsRating offerId={id} />
                        <div className="card-offer-description text-muted">
                            <p className="text-description">{offer.descripcion}</p>
                        </div>
                        <div className="data-footer">
                            <ul className="card-offer-details d-flex text-muted">
                                <li className="list-footer-details">
                                    Publicada el {formatDate(offer.fecha_publicacion)}
                                </li>
                                <li className="list-footer-details">
                                    {offer.modalidad + " | "}
                                </li>
                                <li className="list-footer-details mx-2">
                                    {offer.salario + " | "}
                                </li>
                                <li className="list-footer-details">
                                    {offer.experiencia_minima}
                                </li>
                            </ul>
                            <div className="card-offer-actions">
                                <button
                                    onClick={handleViewDetails}
                                    className="btn btn-details btn-sm text-decoration-none me-3"
                                >
                                    Ver detalles
                                </button>
                                <button
                                    className={`btn ${isSubscribed ? "btn-desinscribirse" : "btn-inscribirse"} btn-sm`}
                                    onClick={isSubscribed ? unapplyFromJob : applyToJob}
                                >
                                    {isSubscribed ? "Desinscribirse" : "Inscribirse"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <ModalJobApply
                    message={modalMessage}
                    type={modalType}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};
