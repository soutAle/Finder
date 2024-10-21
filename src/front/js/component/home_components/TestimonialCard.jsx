import React from "react";

export const TestimonialCard = ({ image, name, role, testimony, onClick }) => {
    return (
        <div className="testimonial-card p-4 my-3" onClick={onClick}>
            <img
                src={image}
                alt={name}
                className="rounded-circle testimonial-img"
            />
            <p className="mt-3">“{testimony}”</p>
            <h5 className="mt-4">{name}, {role}</h5>
        </div>
    );
};
