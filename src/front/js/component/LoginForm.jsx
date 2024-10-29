import React from "react";
import "../../styles/login-form.css"
import { Link } from "react-router-dom";

export const LoginForm = ({ onSubmit, handleChange, credentials, error }) => {
    return (
        <form onSubmit={onSubmit} className="login-form-box">
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Ingresa tu correo electrónico"
                    required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">
                    Contraseña
                </label>
                <input
                    autocomplete="current-password"
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña"
                    required
                />
            </div>
            {error && <p className="text-danger text-center">{error}</p>}
            <div className="d-grid justify-content-center">
                <button type="submit" className="btn btn-login">
                    Iniciar sesión
                </button>
                <Link to={"/reset-password"} className="reset-pass-text text-decoration-none text-black mt-3 text-center">
                    ¿has olvidado tu contraseña?
                </Link>
            </div>
        </form>
    );
};
