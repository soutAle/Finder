import React from "react";

export const TestimonialCard = ({ name, role, testimony, onClick }) => {
    return (
        <div className="card testimonial-card my-5" onClick={onClick}>
            <div className="row">
                <div className="col-md-12">
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
