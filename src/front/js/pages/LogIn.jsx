import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../component/LoginForm.jsx";
import { useLoginForm } from "../hooks/useLoginForm.jsx";
import { Context } from "../store/appContext.js";
import "../../styles/login-form.css"

export const LogIn = () => {
    const { actions } = useContext(Context);
    const { credentials, error, setError, handleChange, resetForm } = useLoginForm();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await actions.login(credentials);
        if (result.token) {
            navigate("/");
            resetForm();
        } else {
            setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
        }
    };

    return (
        <div className="container-fluid login-view-container">
            <div className="row ms-5">
                <div className="col mt-5">
                    <div className="card card-login">
                        <div className="title-login text-center">
                            <h2 className="display-5">Finder</h2>
                            <h3 className="my-4 fw-light">Aqui empieza todo, inicia sesión y abrete las puertas al mundo</h3>
                        </div>
                        <LoginForm
                            onSubmit={handleLogin}
                            handleChange={handleChange}
                            credentials={credentials}
                            error={error}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
