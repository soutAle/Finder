import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileDeveloper = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					
				</div>
			</div>
		</div>
	);
};

ProfileDeveloper.propTypes = {
	match: PropTypes.object
};

