import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useLoadUsers } from "../hooks/useLoadUsers.jsx";
import { useParams } from "react-router-dom";
import "../../styles/profile-dev.css";
import { Spinner } from "../component/Spinner.jsx";

export const ProfileDeveloper = () => {
	const { users = [], loading } = useLoadUsers();
	const { id } = useParams();

	const current = users.find((user) => user.id === parseInt(id));

	if (loading) {
		return <Spinner />;
	}

	if (!current) {
		return <div className="container text-center text-info">Usuario no encontrado</div>;
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-8 col-lg-6">
					<div className="card mt-5 border-light rounded">
						<div className="header-wrapper d-flex align-items-center p-4">
							<div className="image-dev-profile me-4">
								<img
									className="image-dev rounded-circle border border-3 border-secondary"
									src="https://media.istockphoto.com/id/1483028687/es/foto/joven-trabajando-en-la-oficina-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=fr3VXK5zLzYHCB35f4gcT4v1QUz5H6sXtHtu3sWEj3E="
									alt="Profile"
								/>
							</div>
							<div className="dev-profile-header">
								<h2 className="fs-1">{current.name}</h2>
								<h3 className="text-muted">{current.country}</h3>
								<p className="text-secondary">{current.email}</p>
								<span className="badge bg-info">{current.role}</span>
							</div>
						</div>
						<div className="card-body">
							<div className="description-dev">
								<p className="text-description">Descripcion{current.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ProfileDeveloper.propTypes = {
	match: PropTypes.object,
};
