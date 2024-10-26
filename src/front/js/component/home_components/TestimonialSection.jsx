import React, { useContext } from "react";
import { TestimonialCardList } from "./TestimonialCardList.jsx";


export const TestimonialSection = () => {
    return (
        <section className="testimonials-section my-5">
            <TestimonialCardList />
        </section>
    )
}