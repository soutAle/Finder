import React from "react";
import "../../styles/form-offer.css";
import { useFormOffer } from "../hooks/useOfferForm.jsx";

export const FormOffer = () => {
    const { register, handleSubmit, onSubmit, errors } = useFormOffer();

    return (
        <div className="container mt-5">
            <h2 className="display-6 mb-4">Miles de candidatos te esperan!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container row g-3 my-5">
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Título de la oferta</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Software ing full-stack"
                        {...register("title", { required: "Este campo es obligatorio", maxLength: { value: 30, message: "Máximo 30 caracteres" } })}
                    />
                    {errors.title && <div className="alert alert-danger">{errors.title.message}</div>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="minimun_experience" className="form-label">Experiencia mínima</label>
                    <select
                        className="form-select"
                        id="minimun_experience"
                        {...register("minimun_experience", { required: "Este campo es obligatorio" })}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="0-6 meses">0-6 meses</option>
                        <option value="1-3 años">1-3 años</option>
                        <option value="+5 años">+5 años</option>
                    </select>
                    {errors.minimun_experience && <div className="alert alert-danger">{errors.minimun_experience.message}</div>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="salary" className="form-label">Salario base</label>
                    <input
                        type="text"
                        className="form-control"
                        id="salary"
                        placeholder="40k-50k"
                        {...register("salary", { maxLength: { value: 10, message: "Máximo 10 caracteres" } })}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="modality" className="form-label">Modalidad</label>
                    <select
                        className="form-select"
                        id="modality"
                        {...register("modality", { required: "Este campo es obligatorio" })}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="Remoto">Remoto</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Híbrido">Híbrido</option>
                    </select>
                    {errors.modality && <div className="alert alert-danger">{errors.modality.message}</div>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="location" className="form-label">Localidad</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Barcelona, Madrid, Sevilla..."
                        {...register("location", { required: "Este campo es obligatorio" })}
                    />
                    {errors.location && <div className="alert alert-danger">{errors.location.message}</div>}
                </div>
                <div className="col-md-4">
                    <label htmlFor="languages" className="form-label">Idiomas</label>
                    <input
                        type="text"
                        className="form-control"
                        id="languages"
                        placeholder="Ingles - Nivel intermedio..."
                        {...register("languages")}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="education_level" className="form-label">Estudios Mínimos</label>
                    <select
                        className="form-select"
                        id="education_level"
                        {...register("education_level")}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="Sin estudios">Sin estudios</option>
                        <option value="Primaria">Educación Primaria</option>
                        <option value="ESO">Educación Secundaria</option>
                        <option value="Bachillerato">Bachillerato</option>
                        <option value="Ciclo Formativo de Grado Medio">Ciclo Formativo de Grado Medio</option>
                        <option value="Ciclo Formativo de Grado Superior">Ciclo Formativo de Grado Superior</option>
                        <option value="Grado Universidad">Grado Universitario</option>
                        <option value="Licenciatura">Licenciatura</option>
                        <option value="Doctorado">Doctorado</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="contract_type" className="form-label">Tipo de Contrato</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contract_type"
                        placeholder="tipo de contrato"
                        {...register("contract_type")}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="requirements" className="form-label">Requisitos Mínimos</label>
                    <input
                        type="text"
                        className="form-control"
                        id="requirements"
                        placeholder="Imprescindible... (120 caracteres)"
                        {...register("minimun_requirements", { maxLength: { value: 120, message: "Máximo 120 caracteres" } })}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        id="description"
                        placeholder="Describe la oferta lo más detalladamente posible... Max 500 caracteres"
                        {...register("description", { required: "Este campo es obligatorio", maxLength: { value: 500, message: "Máximo 500 caracteres" } })}
                    />
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="btn btn-primary mx-3">Enviar</button>
                    <button type="button" className="btn btn-secondary" onClick={() => reset()}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default FormOffer;