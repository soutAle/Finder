import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const useLoginForm = () => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

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

    const resetForm = () => {
        setCredentials({ email: '', password: '' });
        setError("");
    };

    return {
        credentials,
        error,
        setError,
        handleChange,
        handleLogin,
        resetForm
    };
};
