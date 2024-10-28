import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { IoLogOutOutline } from "react-icons/io5";

export const OffcanvasOptions = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogOutRedirect = () => {
        actions.logOut();
        navigate("/");
    };

    return (
        <>
            {store.user?.profile_developer && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/myoffers">
                            Tus Ofertas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/bookmarks">
                            Bookmarks
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/myjobapplies">
                            Candidaturas
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            to={"/"}
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded={false}
                        >
                            Acciones
                        </Link>

                        <ul className="dropdown-menu dropdown-menu-dark">
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
                                <Link className="dropdown-item" to="/cantactus">
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
                </>
            )}
            {store.user?.profile_company && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/profiledeveloper">
                            Perfil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/developers">
                            Busca talento
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/myoffers">
                            Mis Ofertas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/mycandidates">
                            Lista de postulados
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            to={"/"}
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded={false}
                        >
                            Acciones
                        </Link>

                        <ul className="dropdown-menu dropdown-menu-dark">
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
                                <Link className="dropdown-item" to="/cantactus">
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
                </>
            )}
        </>
    )
}