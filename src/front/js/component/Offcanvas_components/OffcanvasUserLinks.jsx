import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const OffcanvasUserLinks = () => {
    const { store } = useContext(Context);

    return (
        <>
            {store.user && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/offers">
                            Ofertas
                        </Link>
                    </li>
                </>
            )}
            {!store.user && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/offers">
                            Ofertas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/login">
                            Iniciar sesión
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/signup">
                            ¡Registrate!
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus">
                            Contactanos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/faqs">
                            Preguntas frecuentes (FAQ's)
                        </Link>
                    </li>
                </>
            )}
        </>
    )
}