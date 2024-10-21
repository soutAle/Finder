import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { TestimonialCard } from "./TestimonialCard.jsx";
import { NoTestimonialOption } from "./NoTestimonialOption.jsx";

export const TestimonialCardList = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profiledeveloper');
    };

    return (
        <div className="container text-center">
            <div className="row">
                {store.testimonials && store.testimonials.length > 0 ? (
                    store.testimonials.map((testimonial, index) => (
                        <div className="col-md-4" key={index}>
                            <TestimonialCard
                                image={testimonial.image}
                                name={testimonial.name}
                                role={testimonial.role}
                                testimony={testimonial.testimony}
                                onClick={handleClick}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <NoTestimonialOption />
                    </div>
                )}
            </div>
        </div>
    );
};
