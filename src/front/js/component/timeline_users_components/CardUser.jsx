import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import "../../../styles/card-user.css"


export const CardUser = ({ user }) => {

    return (
        <div className="card m-3 card-user-container">
            <img src="https://media.istockphoto.com/id/1152447561/es/foto/empresario-sentado-en-su-escritorio-y-el-uso-de-la-computadora-port%C3%A1til-en-la-oficina.jpg?s=612x612&w=0&k=20&c=yupSG4Xwurwy65tkuDpUOttlz2AOH4kA6SMWts_bIBE=" className="card-img-top-user" alt="profile image" />
            <div className="card-user-body p-2">
                <h5 className="card-user-title">{user.name} {user.last_name}</h5>
                <span className="card-user-country">{user.country}</span>
                <h3 className="card-user-role">{user.role}</h3>
                <span className="card-user-telephone">{user.telephone}</span>
                <p className="card-user-text">{user.description}</p>
                <Link to={`/profiledeveloper/${user.id}`} className="btn btn-sm btn-primary me-2">
                    Ver Perfil
                </Link>
                <button className="btn btn-sm btn-success">Contactar</button>
            </div>
        </div>
    )
}