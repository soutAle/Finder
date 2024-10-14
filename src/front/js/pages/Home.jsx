import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home-container">
			{/* Hero Section */}
			<section className="hero-section d-flex justify-content-center align-items-center">
				<div className="text-center text-white">
					<h1 className="display-4 fw-bold">Conecta Desarrolladores con Empresas</h1>
					<p className="lead">Encuentra tu próximo proyecto o el talento ideal para tu equipo</p>
					<Link to="/signup" className="btn btn-primary btn-lg mt-3">
						¡Comienza Ahora!
					</Link>
				</div>
			</section>

			{/* Highlights Section */}
			<section className="highlights-section py-5">
				<div className="container">
					<div className="row text-center">
						<div className="col-md-4">
							<h3 className="mt-3">Para Desarrolladores</h3>
							<p>Encuentra oportunidades laborales, colabora en proyectos desafiantes y desarrolla tu carrera.</p>
						</div>
						<div className="col-md-4">
							<h3 className="mt-3">Para Empresas</h3>
							<p>Conecta con el mejor talento tecnológico y forma tu equipo ideal de desarrolladores.</p>
						</div>
						<div className="col-md-4">
							<h3 className="mt-3">Colabora Globalmente</h3>
							<p>Únete a una red de desarrolladores y empresas alrededor del mundo.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="testimonials-section py-5 bg-light">
				<div className="container text-center">
					<h2 className="fw-bold mb-5">Testimonios</h2>
					<div className="row">
						<div className="col-md-4">
							<div className="testimonial-card p-4">
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
							<div className="testimonial-card p-4">
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
							<div className="testimonial-card p-4">
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

			{/* Call to Action */}
			<section className="cta-section py-5 bg-dark text-white text-center">
				<h2 className="fw-bold">¿Listo para comenzar?</h2>
				<p>Regístrate hoy mismo y conecta con las mejores empresas y desarrolladores del sector.</p>
				<Link to="/signup" className="btn btn-primary btn-lg">
					¡Regístrate Ahora!
				</Link>
			</section>
		</div>
	);
};
