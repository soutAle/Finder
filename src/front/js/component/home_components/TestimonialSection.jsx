import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { TestimonialCardList } from "./TestimonialCardList.jsx";


export const TestimonialSection = () => {
    const { store, actions } = useContext(Context);

    return (
        <section className="testimonials-section my-5">
            <TestimonialCardList />
        </section>
    )
}