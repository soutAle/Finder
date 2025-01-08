import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    const { store } = useContext(Context);

    return (
        <section className="hero-section d-flex flex-column justify-content-center text-center my-5">

            {store?.user ? (
                <>
                    <h1 className="greeting-user-home display-4 mb-5">Bienvenido de nuevo {store?.user?.name}</h1>
                </>
            ) : (
                <>
                    <h1 className="greeting-user-home display-4 mb-5">¡Bienvenido a Finder!</h1>
                </>
            )}

            <div className="title-container text-center mb-5">
                <h2 className="first-title-home display-5">Conecta Desarrolladores con Empresas</h2>
                <h3 className="lead mb-5">Encuentra tu próximo proyecto o el talento ideal para tu equipo</h3>
                <Link to="/signup" className="btn btn-hero btn-lg mt-3 rounded-pill">
                    ¡Comienza Ahora!
                </Link>
            </div>
        </section>
    )
}