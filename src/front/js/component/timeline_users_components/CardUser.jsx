import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate, Link } from "react-router-dom";


export const CardUser = ({ user }) => {

    return (
        <div className="card mx-3" style={{ width: "18rem" }}>
            <img src={user.img} className="card-img-top" alt="profile image" />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h3 className="card-role">{user.role}</h3>
                <span className="card-country">{user.country}</span>
                <p className="card-text">{user.description}</p>
                <Link to={`/profiledeveloper/${user.id}`} className="btn btn-primary">
                    Ver Perfil
                </Link>
                <button className="btn btn-success">Contactar</button>
            </div>
        </div>
    )
}