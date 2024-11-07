import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export const ProfileOptionLinks = () => {
    const { store } = useContext(Context);
    return (
        <>
            {store.user?.profile_developer && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/bookmarks">Bookmarks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/myjobapplies">Candidaturas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/profiledeveloper">Perfil</Link>
                    </li>
                </>
            )}
            {store.user?.profile_company && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/users">Busca talento</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/myoffers">Mis Ofertas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/createoffer">
                            Publicar Oferta
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/profilecompany">Perfil</Link>
                    </li>
                </>
            )}
        </>
    )
}
