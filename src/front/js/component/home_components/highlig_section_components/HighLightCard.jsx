import React from "react";

const HighLightCard = ({ img, title, description }) => {
    return (
        <div className="col-md-4 container-fluid highlight-section d-flex justify-content-center">
            <div className="card highlight-cards mt-4">
                <div className="card-img-container">
                    <img src={img} alt={title} className="card-img-top-highlight" />
                </div>
                <div className="card-body-highlight text-center">
                    <h3 className="mt-3">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default HighLightCard;
