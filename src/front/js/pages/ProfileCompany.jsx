import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileCompany = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">

		</div>
	);
};

ProfileCompany.propTypes = {
	match: PropTypes.object
};
