import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate, Link } from "react-router-dom";


export const CardUser = ({ img, name, role, country, description, id }) => {
    const navigate = useNavigate();

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="profile image" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h3 className="card-role">{role}</h3>
                <span className="card-country">{country}</span>
                <p className="card-text">
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