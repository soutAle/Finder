import React from "react";
import { LoginForm } from "../component/LoginForm.jsx";
import { useLoginForm } from "../hooks/useLoginForm.jsx";
import "../../styles/login-form.css";

export const LogIn = () => {
    const { register, handleSubmit, errors } = useLoginForm();

    return (
        <div className="container-fluid login-view-container">
            <div className="row m-1">
                <div className="col mt-5">
                    <div className="card card-login">
                        <div className="title-login text-center">
                            <h2 className="display-5">Finder</h2>
                            <h3 className="my-4 fw-light">Aqui empieza todo, inicia sesión y abrete las puertas al mundo</h3>
                        </div>
                        <LoginForm
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};