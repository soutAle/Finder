import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    const { store } = useContext(Context);

    return (
        <section className="hero-section d-flex justify-content-center align-items-center my-5">
            <div className="text-center m-0 my-5">
                {store?.user && (
                    <>
                        <h1 className="greeting-user-home display-4 mb-4">Bienvenido de nuevo {store?.user?.name}</h1>
                    </>
                )}
                <h1 className="display-4">Conecta Desarrolladores con Empresas</h1>
                <h2 className="lead mb-5">Encuentra tu próximo proyecto o el talento ideal para tu equipo</h2>
                <Link to="/signup" className="btn btn-hero btn-lg mt-3 rounded-pill">
                    ¡Comienza Ahora!
                </Link>
            </div>
        </section>
    )
}