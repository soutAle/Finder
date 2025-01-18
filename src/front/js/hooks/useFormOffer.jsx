import { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const useFormOffer = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await actions.createJobOffer(data);
            navigate("/offers");
        } catch (error) {
            console.error("Error al crear la oferta:", error);
        }
    };

    return {
        register,
        errors,
        handleSubmit,
        onSubmit
    };
}