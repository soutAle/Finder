import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/home.css"

export const AboutUsSection = () => {
    return (
        <div className="text-center pt-5 my-5">
            <div className="promote-community row justify-content-center">
                <div className="col-md-8 col-lg-6 my-5">
                    <h2 className="display-4">¡Únete a nuestra comunidad!</h2>
                    <div>
                        <p className="text-break">
                            Conecta con el mejor talento tecnológico o encuentra la
                            oportunidad ideal para ti. En Finder, unimos desarrolladores y empresas para crear el futuro.
                            ¡Descubre más sobre nosotros y únete a la comunidad!
                        </p>
                    </div>
                    <Link to="/about" className="btn btn-no-testimonial btn-lg rounded-pill">
                        ¡Conócenos!
                    </Link>
                </div>
            </div>
        </div>
    );
};

