import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLoadUsers } from "../hooks/useLoadUsers.jsx";

export const ProfileDeveloper = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const { users, loading } = useLoadUsers();

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 w-75">
					<div className="card mt-5">
						<div className="image-dev-profile">
							<img className="image-dev" src="https://media.istockphoto.com/id/1483028687/es/foto/joven-trabajando-en-la-oficina-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=fr3VXK5zLzYHCB35f4gcT4v1QUz5H6sXtHtu3sWEj3E=" alt="" />
						</div>
						<div className="dev-profile-header">

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ProfileDeveloper.propTypes = {
	match: PropTypes.object
};

