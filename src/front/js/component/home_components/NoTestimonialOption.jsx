import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/home.css"

export const NoTestimonialOption = () => {
    return (
        <div className="promote-community text-center">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold fs-1">¡Únete a nuestra comunidad!</h2>
                    <p>Queremos escuchar tu experiencia. Comparte tu testimonio y ayuda a otros a encontrar su camino en el desarrollo.</p>
                    <Link to="/signup" className="btn btn-no-testimonial btn-lg rounded-pill">
                        ¡Deja tu Testimonio!
                    </Link>
                </div>
            </div>
        </div>
    );
};

