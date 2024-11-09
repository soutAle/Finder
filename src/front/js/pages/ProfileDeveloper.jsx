import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useLoadUsers } from "../hooks/useLoadUsers.jsx";
import { Context } from "../store/appContext.js";
import "../../styles/profile-dev.css"

export const ProfileDeveloper = () => {
	const { store } = useContext(Context);
	const { users = [], loading } = useLoadUsers();

	const current = users.find((user) => user.id === store.user.id);

	if (loading) {
		return (
			<div className="svg-box">
				<svg className="svg-load-icon" fill="hsl(228, 97%, 42%)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<circle cx="4" cy="12" r="3" opacity="1">
						<animate id="spinner_qYjJ" begin="0;spinner_t4KZ.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
					</circle>
					<circle cx="12" cy="12" r="3" opacity=".4">
						<animate begin="spinner_qYjJ.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
					</circle><circle cx="20" cy="12" r="3" opacity=".3">
						<animate id="spinner_t4KZ" begin="spinner_qYjJ.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" />
					</circle>
				</svg>
			</div>
		);
	};

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
								<p className="text-description">{current.description}</p>
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
