import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { TestimonialCard } from "./TestimonialCard.jsx";

export const TestimonialCardList = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profiledeveloper');
    };

    const testimonials = [
        {
            image: "https://ceroideas.es/wp-content/uploads/2022/04/que-hace-un-programador-de-apps-1.jpg",
            name: "Laura González",
            role: "Desarrolladora Frontend",
            testimony: "El proceso de trabajo en equipo ha sido increíble y he aprendido muchísimo en cada proyecto."
        },
        {
            image: "https://via.placeholder.com/100",
            name: "Pedro Martínez",
            role: "Diseñador UX/UI",
            testimony: "Colaborar con este equipo ha llevado mis habilidades a un nuevo nivel. ¡Altamente recomendable!"
        },
        {
            image: "https://via.placeholder.com/100",
            name: "Ana Torres",
            role: "Product Owner",
            testimony: "El enfoque en la calidad y la atención al detalle son impresionantes. Estoy muy satisfecha con los resultados."
        },

    ];

    return (
        <div className="container text-center">
            <div className="row">
                {testimonials.map((testimonial, index) => (
                    <div className="col-md-4" key={index}>
                        <TestimonialCard
                            image={testimonial.image}
                            name={testimonial.name}
                            role={testimonial.role}
                            testimony={testimonial.testimony}
                            onClick={handleClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
