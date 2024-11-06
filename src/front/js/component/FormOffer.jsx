import React, { useState, useContext } from "react";
import "../../styles/form-offer.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const FormOffer = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        modality: "",
        salary: "",
        minimun_requirements: "",
        education_level: "",
        contract_type: "",
        languages: "",
        minimun_experience: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, description, location } = formData;

        if (!title || !description || !location) {
            setError('Por favor, completa los campos requeridos.');
        } else {
            const updatedFormData = {
                ...formData,
                modality: formData.modality,
                salary: formData.salary,
                minimun_requirements: formData.minimun_requirements,
                education_level: formData.education_level,
                contract_type: formData.contract_type,
                minimun_experience: formData.minimun_experience,
                languages: formData.languages

            };

            try {
                const resp = await actions.createJobOffer(updatedFormData);
                navigate('/offers');
            } catch (error) {
                console.log(error)
                setError('Ocurrió un error al crear la oferta.');
            }
        }
    };

    return (
        <>
            <div className="form-container">
                <div className="mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-header text-center">
                                <h2 className="display-4 fw-bold my-3">
                                    ¡Lleva Tu Equipo al Siguiente Nivel!
                                </h2>
                                <span className="fw-bold my-3">Completa el formulario para publicar tu oferta de empleo y conecta con profesionales cualificados.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-box my-5 shadow-lg">
                    <form onSubmit={e => handleSubmit(e)}>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="row my-3 text-secondary fw-bold">
                            <div className="col-6 d-flex flex-column">
                                <label htmlFor="title" className="form-label my-3">Titulo de la oferta</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    id="title"
                                    placeholder="Software ing full-stack"
                                    maxLength="30"
                                    onChange={handleChange}
                                    value={formData.title}
                                    required
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="minimun_experience" className="form-label text-secondary fw-bold my-3">Experiencia mínima</label>
                                <select
                                    className="form-select"
                                    name="minimun_experience"
                                    id="minimun_experience"
                                    onChange={handleChange}
                                    value={formData.minimun_experience}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="0-6 meses">0-6 meses</option>
                                    <option value="1-3 años">1-3 años</option>
                                    <option value="+5 años">+5 años</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <label htmlFor="salary" className="form-label text-secondary fw-bold my-3">Salario base</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="40k-50k"
                                    name="salary"
                                    id="salary"
                                    onChange={handleChange}
                                    value={formData.salary}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="modality" className="form-label text-secondary fw-bold my-3">Modalidad</label>
                                <select
                                    className="form-select"
                                    name="modality"
                                    id="modality"
                                    onChange={handleChange}
                                    value={formData.modality}
                                    required
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Teletrabajo">Teletrabajo</option>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Híbrido">Híbrido</option>
                                </select>
                            </div>
                            <div className="col-4 d-flex flex-column">
                                <label htmlFor="location" className="form-label text-secondary fw-bold my-3">Localidad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    id="location"
                                    placeholder="Barcelona, Madrid, Sevilla..."
                                    maxLength="30"
                                    onChange={handleChange}
                                    value={formData.location}
                                />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <label htmlFor="languages" className="form-label text-secondary fw-bold my-3">Idiomas</label>
                                <input
                                    type="text"
                                    name="languages"
                                    id="languages"
                                    className="form-control"
                                    placeholder="Ingles - Nivel intermedio..."
                                    onChange={handleChange}
                                    value={formData.languages}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="education_level" className="form-label text-secondary fw-bold my-3">Estudios Minimos</label>
                                <select
                                    className="form-select"
                                    name="education_level"
                                    id="education_level"
                                    onChange={handleChange}
                                    value={formData.education_level}
                                >
                                    <option value="opcion">Seleccione una opccion</option>
                                    <option value="Sin estudios">Sin estudios</option>
                                    <option value="Primaria">Educacion primaria</option>
                                    <option value="ESO">Educacion Secundaria Obligatoria</option>
                                    <option value="Bachillerato">Bachillerato</option>
                                    <option value="Ciclo Formativo de Grado Medio">Ciclo Formativo de Grado Medio</option>
                                    <option value="Ciclo Formativo de Grado Superior">Ciclo Formativo de Grado Superior</option>
                                    <option value="Grado Universidad">Grado Universitario</option>
                                    <option value="Licenciatura">Licenciatura</option>
                                    <option value="Doctorado">Doctorado</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="contract_type" className="form-label text-secondary fw-bold my-3">Tipo de contrato</label>
                                <input
                                    type="text"
                                    name="contract_type"
                                    id="contract_type"
                                    className="form-control"
                                    placeholder="Indefinido, fijo, no disponible..."
                                    onChange={handleChange}
                                    value={formData.contract_type}
                                />
                            </div>
                        </div>
                        <div className=" row mt-3">
                            <div className="col-12">
                                <label htmlFor="requirements" className="form-label text-secondary fw-bold my-3">Requisitos minimos</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="minimun_requirements"
                                    id="requirements"
                                    placeholder="impresindible..."
                                    onChange={handleChange}
                                    value={formData.minimun_requirements}
                                />
                            </div>
                        </div>

                        <div className="row last-row mt-3">
                            <div className="col-12 box-description">
                                <label htmlFor="description" className="form-label text-secondary fw-bold my-3">Descripción</label>
                                <textarea
                                    className="form-control text-area mt-2"
                                    name="description"
                                    id="description"
                                    placeholder="Describe la oferta lo más detalladamente posible..."
                                    onChange={handleChange}
                                    value={formData.description}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end me-3 button-box">
                            <button type="submit" className="btn btn-submit mx-3 my-3">
                                Enviar
                            </button>
                            <button type="reset" className="btn btn-reset my-3">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
