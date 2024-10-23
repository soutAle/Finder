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
        <div className="container-fluid mt-5 login-view-container">
            <div className="row ms-5">
                <div className="col-6 col-md-8 col-sm-12">
                    <div className="card shadow">
                        <div className="card-body card-login">
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
        </div>
    );
};
