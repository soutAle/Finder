import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const HeroSection = () => {
    const { store } = useContext(Context);

    return (
        <section className="hero-section d-flex justify-content-center align-items-center my-5">
            <div className="text-center">
                <h1 className="display-4 fw-bold">Conecta Desarrolladores con Empresas</h1>
                <p className="lead">Encuentra tu próximo proyecto o el talento ideal para tu equipo</p>
                {store?.user ? (
                    <>
                        <h1 className="greeting-user-home">Bienvenido de nuevo {store?.user?.name}</h1>
                    </>
                ) : (
                    <>
                        <Link to="/signup" className="btn btn-primary btn-lg mt-3">
                            ¡Comienza Ahora!
                        </Link>
                    </>
                )}

            </div>
        </section>
    )
}