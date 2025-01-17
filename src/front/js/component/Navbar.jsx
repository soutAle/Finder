import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { UserLinks } from "./navbar_components/UserLinks.jsx";
import { ProfileOptionLinks } from "./navbar_components/ProfileOptionLinks.jsx";
import { DropdownIcon } from "./navbar_components/DropdownIcon.jsx";
import { OffCanvasNav } from "./Offcanvas_components/OffCanvasNav.jsx";
import { GoSearch } from "react-icons/go";

export const Navbar = () => {
	return (
		<nav className="navbar custom-navbar">
			<div className="container-fluid mt-4">
				<Link className="navbar-brand ms-3 text-white" to="/">Finder <GoSearch /></Link>
				<div className="d-none d-md-flex pe-5">
					<ul className="navbar-nav-text d-flex justify-content-end align-items-end flex-grow-1 pe-5 list-unstyled mb-0">
						<UserLinks />
						<ProfileOptionLinks />
						<DropdownIcon />
					</ul>
				</div>
				<OffCanvasNav />
			</div>
		</nav>
	);
};
