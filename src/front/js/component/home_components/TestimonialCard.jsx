import React from "react";

export const TestimonialCard = ({ image, name, role, testimony, onClick }) => {
    return (
        <div className="card testimonial-card my-5 d-flex" onClick={onClick}>
            <div className="row g-0">
                <div className="col-md-4 testimonial-img-container">
                    <img
                        src={image}
                        alt={name}
                        className="img-fluid testimonial-img"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body testimonial-content">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-role">{role}</h6>
                        <p className="card-text">“{testimony}”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
