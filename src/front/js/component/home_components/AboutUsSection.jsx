import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/home.css"

export const AboutUsSection = () => {
    return (
        <div className="promote-community text-center my-5">
            <div className="row">
                <div className="col mt-5">
                    <h2 className="fw-bold fs-1">¡Únete a nuestra comunidad!</h2>
                    <p>Queremos escuchar tu experiencia. Comparte tu testimonio y ayuda a otros a encontrar su camino en el desarrollo.</p>
                    <Link to="/About" className="btn btn-no-testimonial btn-lg rounded-pill">
                        ¡Conocenos!
                    </Link>
                </div>
            </div>
        </div>
    );
};

