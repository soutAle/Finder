import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleOutline, IoLogOutOutline, IoHelpBuoyOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { LiaUserEditSolid } from "react-icons/lia";
import { SlCallIn } from "react-icons/sl";
import "../../../styles/navbar.css"

export const DropdownIcon = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogOutRedirect = () => {
        actions.logOut();
        navigate('/')
    };

    return (
        <>
            {store.user && (
                <li className="nav-item dropdown">
                    <Link
                        className="nav-link mt-2"
                        to={"/"}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded={false}
                    >
                        <IoPersonCircleOutline className="icon-person" />
                    </Link>

                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/">
                                <BsBell />Notificaciones
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/editprofile">
                                <LiaUserEditSolid />Editar perfil
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/help">
                                <IoHelpBuoyOutline />Ayuda
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/contactus">
                                <SlCallIn />Contactanos
                            </Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={handleLogOutRedirect}>
                                <IoLogOutOutline />
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </li>
            )}
        </>
    );
};
