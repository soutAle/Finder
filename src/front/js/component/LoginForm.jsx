import React from "react";
import "../../styles/login-form.css"
import { Link } from "react-router-dom";
import { useLoginForm } from "../hooks/useLoginForm.jsx";



export const LoginForm = () => {
    const { register, handleSubmit, errors } = useLoginForm();

    return (
        <form onSubmit={handleSubmit} className="login-form-box">
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                    Correo electrónico
                </label>
                <input {...register('email', { required: true })} className="form-control bg-transparent" placeholder="Email" />
                {errors.email && <span>Este campo es requerido</span>}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                    Contraseña
                </label>
                <input {...register('password', { required: true })} className="form-control bg-transparent" placeholder="Contraseña" type="password" />
                {errors.password && <span>Este campo es requerido</span>}
            </div>
            {errors && <p className="text-danger text-center">{errors.message}</p>}
            <div className="d-grid justify-content-center mt-5">
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
