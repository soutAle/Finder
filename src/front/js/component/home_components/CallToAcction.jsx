import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/home.css"

export const CallToAcction = () => {


    return (
        <section className="row cta-section py-5 text-white text-center my-5">
            <di className="col-12">
                <h2 className="display-4">¿Listo para impulsar tu carrera?</h2>
                <p>Regístrate hoy mismo y conecta con las mejores empresas y desarrolladores del sector.</p>
                <Link to="/signup" className="btn btn-call-to btn-lg rounded-pill">
                    ¡Regístrate Ahora!
                </Link>
            </di>
        </section>
    )
}