import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleOutline, IoLogOutOutline } from "react-icons/io5";

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
                        <IoPersonCircleOutline />
                    </Link>

                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/">
                                Notificaciones
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/editprofile">
                                Editar perfil
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/help">
                                Ayuda
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/contactus">
                                Contactanos
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
