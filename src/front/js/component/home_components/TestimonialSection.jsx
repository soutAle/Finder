import React from "react";


export const TestimonialSection = () => {
    return (
        <section className="testimonials-section py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold mb-5">Testimonios</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="testimonial-card p-4 my-3">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwdkF8YmQNs0LS4pKdjxfHW8k1O_5aRv6vg&s"
                                alt="Juan Pérez"
                                className="rounded-circle testimonial-img"
                            />
                            <p className="mt-3">“Finder me permitió encontrar proyectos increíbles y mejorar mis habilidades como desarrollador.”</p>
                            <h5 className="mt-4">Juan Pérez, Desarrollador Full Stack</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-card p-4 my-3">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwdkF8YmQNs0LS4pKdjxfHW8k1O_5aRv6vg&s"
                                alt="María Gómez"
                                className="rounded-circle testimonial-img"
                            />
                            <p className="mt-3">“Gracias a Finder, contratamos a nuestro equipo ideal de desarrolladores para nuestro startup.”</p>
                            <h5 className="mt-4">María Gómez, CEO de TechCorp</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-card p-4 my-3">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwdkF8YmQNs0LS4pKdjxfHW8k1O_5aRv6vg&s"
                                alt="Luis Rodríguez"
                                className="rounded-circle testimonial-img"
                            />
                            <p className="mt-3">“Una plataforma que facilita la conexión entre desarrolladores y empresas de todo el mundo.”</p>
                            <h5 className="mt-4">Luis Rodríguez, CTO de Innovatech</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}