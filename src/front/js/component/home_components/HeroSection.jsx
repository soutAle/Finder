import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    const { store } = useContext(Context);

    return (
        <section className="hero-section d-flex flex-column justify-content-between text-center my-5">
            <div className="greeting-user-home text-center mb-5">
                {store?.user ? (
                    <h1 className="display-4">Bienvenido de nuevo {store?.user?.name}</h1>
                ) : (
                    <>
                        <h1 className="display-4">¡Bienvenido a Finder!</h1>
                        <h2 className="display-6">Conectamos empresas con desarrolladores, impulsamos carreras y empresas.</h2>
                    </>
                )}

                {store?.user?.profile_developer && (
                    <h2 className="display-5">Tenemos las ofertas que llevar tu carrera al siguiente nivel</h2>
                )}

                {store?.user?.profile_company && (
                    <h2 className="display-5">Encuentra a la persona que mejor se adapte a tus proyecto</h2>
                )}
                <Link to="/signup" className="btn btn-hero btn-lg rounded-pill my-5">
                    ¡Comienza Ahora!
                </Link>
            </div>
        </section>
    )
}