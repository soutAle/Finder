import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { TestimonialCardList } from "./TestimonialCardList.jsx";


export const TestimonialSection = () => {
    const { store, actions } = useContext(Context);

    return (
        <section className="testimonials-section py-5 my-5">
            <TestimonialCardList />
        </section>
    )
}