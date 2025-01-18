import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await actions.login(data);
            if (result.token) {
                navigate('/');
                reset();
            } else
                setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    return {
        register,
        errors,
        handleSubmit: handleSubmit(onSubmit)
    };
};
