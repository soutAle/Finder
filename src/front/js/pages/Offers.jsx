import React from "react";
import { CardListOffers } from "../component/timeline_offers_components/CardListOffer.jsx";

export const Offers = () => {


    return (
        <div className="container-fluid list-offers-container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6">
                    <CardListOffers />
                </div>
            </div>
        </div>
    );
};