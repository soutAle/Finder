import { useState } from "react";

export const useLoginForm = () => {
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

    const resetForm = () => {
        setCredentials({ email: '', password: '' });
        setError("");
    };

    return {
        credentials,
        error,
        setError,
        handleChange,
        resetForm
    };
};
