import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import "../../../styles/card-user.css"
import { CiLocationOn } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";


export const CardUser = ({ user }) => {
    const { store } = useContext(Context);
    return (
        <div className="card card-user-container">
            <img src="https://media.istockphoto.com/id/1152447561/es/foto/empresario-sentado-en-su-escritorio-y-el-uso-de-la-computadora-port%C3%A1til-en-la-oficina.jpg?s=612x612&w=0&k=20&c=yupSG4Xwurwy65tkuDpUOttlz2AOH4kA6SMWts_bIBE=" className="card-img-top-user" alt="profile image" />
            <div className="card-user-body p-2">
                <h5 className="card-user-title">{user.name}</h5>
                <h2 className="card-user-country"><CiLocationOn /> {user.country}</h2>
                <h3 className="card-user-role">{user.role}</h3>
                <span className="card-user-email"><MdAlternateEmail /> {user.email}</span>
                <p className="card-user-text">{user.description}</p>
                <ul class="list-group ">
                    <li class="list-group-user">Languages</li>
                    <li class="list-group-user">Last project/work</li>
                    <li class="list-group-user">experience</li>
                </ul>
                <Link to={`/profiledeveloper/${user.id}`} className="btn btn-sm btn-primary m-1 mt-2">
                    Ver Perfil
                </Link>
                {store.user && (
                    <>
                        <button className="btn btn-sm btn-success m-1 mt-2">Contactar</button>
                    </>
                )}
            </div>
        </div>
    )
}