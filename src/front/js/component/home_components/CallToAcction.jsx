import React from "react";
import { Link } from "react-router-dom";

export const CallToAcction = () => {


    return (
        <section className="cta-section py-5 bg-dark text-white text-center">
            <h2 className="fw-bold">¿Listo para comenzar?</h2>
            <p>Regístrate hoy mismo y conecta con las mejores empresas y desarrolladores del sector.</p>
            <Link to="/signup" className="btn btn-primary btn-lg">
                ¡Regístrate Ahora!
            </Link>
        </section>
    )
}