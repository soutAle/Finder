import React, { useContext } from "react";
import { Link } from "react-router-dom";


export const CardUserPremium = ({ img, name, role, country, description, id }) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="profile image" />
            <div className="card-premium-body">
                <h5 className="card-premium-title">{name}</h5>
                <h3 className="card-premium-role">{role}</h3>
                <span className="card-premium-country">{country}</span>
                <p className="card-premium-text">
                    {description}
                </p>
                <Link to={'/profiledeveloper' + { id }} className="btn btn-primary">
                    Ver Perfil
                </Link>
                <button className="btn btn-success">Contactar</button>
            </div>
        </div>
    )
}