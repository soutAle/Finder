import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export const UserLinks = () => {
    const { store } = useContext(Context);
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/offers">Ofertas</Link>
            </li>
            {!store.user && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/login"}>
                            Iniciar sesión
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/signup"}>
                            Regitrarse
                        </Link>
                    </li>
                </>
            )}
        </>
    )
}

