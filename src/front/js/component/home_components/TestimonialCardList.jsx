import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { TestimonialCard } from "./TestimonialCard.jsx";
import { useLoadUsers } from "../../hooks/useLoadUsers.jsx";

export const TestimonialCardList = () => {
    const { store } = useContext(Context);
    const { users, loading } = useLoadUsers();

    // const usersTestimony = users.filter((users) => users.testimony != null);

    const testimonials = [
        {
            image: "https://ceroideas.es/wp-content/uploads/2022/04/que-hace-un-programador-de-apps-1.jpg",
            name: "Laura González",
            role: "Desarrolladora Frontend",
            testimony: "El proceso de trabajo en equipo ha sido increíble y he aprendido muchísimo en cada proyecto."
        },
        {
            image: "https://media.licdn.com/dms/image/v2/D4E12AQFYgwDhv6-BZQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704587612317?e=2147483647&v=beta&t=e3vBVOpBXXWtlqlsrr79wWpVCQCuQN89RpmhcnzAtHE",
            name: "Pedro Martínez",
            role: "Diseñador UX/UI",
            testimony: "Colaborar con este equipo ha llevado mis habilidades a un nuevo nivel. ¡Altamente recomendable!"
        },
        {
            image: "https://img.freepik.com/fotos-premium/sonriente-joven-mujer-profesional-mujer-negocios-gerente-banco-usando-tab-pad-computadora-oficina_709689-1325.jpg",
            name: "Ana Torres",
            role: "Product Owner",
            testimony: "El enfoque en la calidad y la atención al detalle son impresionantes. Estoy muy satisfecha con los resultados."
        },

    ];

    return (
        <div className="container text-center">
            <div className="row">
                {testimonials.map((usersTestimony, index) => (
                    <div className="col-md-4" key={index}>
                        <TestimonialCard
                            image={usersTestimony.image}
                            name={usersTestimony.name}
                            role={usersTestimony.role}
                            testimony={usersTestimony.testimony}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
