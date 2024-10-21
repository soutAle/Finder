import React from 'react';
import { Link } from 'react-router-dom';

export const NoTestimonialOption = () => {
    return (
        <div className="promote-community text-center my-5">
            <h2 className="fw-bold">¡Únete a nuestra comunidad!</h2>
            <p>Queremos escuchar tu experiencia. Comparte tu testimonio y ayuda a otros a encontrar su camino en el desarrollo.</p>
            <Link to="/signup" className="btn btn-primary btn-lg">
                ¡Deja tu Testimonio!
            </Link>
        </div>
    );
};

