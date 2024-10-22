import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import { IoPersonCircleOutline, IoLogOutOutline } from "react-icons/io5";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const handleLogOutRedirect = () => {
		actions.logOut();
		navigate("/");
	};

	return (
		<nav className="navbar custom-navbar">
			<div className="container-fluid">
				<Link className="navbar-brand ms-3 text-white" to="/">
					Finder
				</Link>
				<button
					className="navbar-toggler d-md-none"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDarkNavbar"
					aria-controls="offcanvasDarkNavbar"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>


				<div className="d-none d-md-flex pe-5">
					<ul className="navbar-nav-text d-flex justify-content-end align-items-end flex-grow-1 pe-5 list-unstyled mb-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Inicio
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/offers"}>
								Ofertas
							</Link>
						</li>

						{!store.user && (
							<>
								<li className="nav-item">
									<Link className="nav-link" to={"/login"}>
										Iniciar sesión
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={"/signup"}>
										Regitrarse
									</Link>
								</li>
							</>
						)}

						{store.user?.profile_developer && (
							<>
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/myoffers">
										Bookmarks
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" aria-current="page" to="/myjobapplies">
										Candidaturas
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/profildeveloper">
										Perfil
									</Link>
								</li>
							</>
						)}

						{store.user?.profile_company && (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/developers">
										Busca talento
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/myoffers">
										Mis Ofertas
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/CreateOffer">
										Publicar Oferta
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/profildeveloper">
										Perfil
									</Link>
								</li>
							</>
						)}

						{store.user && (
							<>
								<li className="nav-item dropdown">
									<Link
										className="nav-link mt-2"
										to={"/"}
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded={false}
									>
										<IoPersonCircleOutline />
									</Link>

									<ul className="dropdown-menu">
										<li>
											<Link className="dropdown-item" to="/">
												Notificaciones
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/editprofile">
												Editar perfil
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/help">
												Ayuda
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/contactus">
												Contactanos
											</Link>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<button className="dropdown-item" onClick={handleLogOutRedirect}>
												<IoLogOutOutline />
												Cerrar Sesión
											</button>
										</li>
									</ul>
								</li>
							</>
						)}
					</ul>
				</div>
				<div
					className="offcanvas offcanvas-end"
					tabIndex="-1"
					id="offcanvasDarkNavbar"
					aria-labelledby="offcanvasDarkNavbarLabel"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">
							{!store.user ? "Bienvenido a Finder!" : `Bienvenido, ${store.user.name}`}
						</h5>
						<button
							type="button"
							className="btn-close btn-close-white"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-3">
							{store.user && (
								<>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/">
											Inicio
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/offers">
											Ofertas
										</Link>
									</li>
								</>
							)}
							{!store.user && (
								<>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/">
											Inicio
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/offers">
											Ofertas
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/login">
											Iniciar sesión
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/signup">
											¡Registrate!
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/About">
											Sobre Nosotros
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/contactus">
											Contactanos
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/faqs">
											Preguntas frecuentes (FAQ's)
										</Link>
									</li>
								</>
							)}
							{store.user?.profile_developer && (
								<>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/bookmarks">
											Bookmarks
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/myjobapplies">
											Candidaturas
										</Link>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={"/"}
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded={false}
										>
											Acciones
										</Link>

										<ul className="dropdown-menu dropdown-menu-dark">
											<li>
												<Link className="dropdown-item" to="/">
													Notificaciones
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="/editprofile">
													Editar perfil
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="/help">
													Ayuda
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="/cantactus">
													Contactanos
												</Link>
											</li>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<li>
												<button className="dropdown-item" onClick={handleLogOutRedirect}>
													<IoLogOutOutline />
													Cerrar Sesión
												</button>
											</li>
										</ul>
									</li>
								</>
							)}
							{store.user?.profile_company && (
								<>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/developers">
											Busca talento
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/myoffers">
											Mis Ofertas
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/mycandidates">
											Lista de postulados
										</Link>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={"/"}
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded={false}
										>
											Acciones
										</Link>

										<ul className="dropdown-menu dropdown-menu-dark">
											<li>
												<Link className="dropdown-item" to="/">
													Notificaciones
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="/editprofile">
													Editar perfil
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="/help">
													Ayuda
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="/cantactus">
													Contactanos
												</Link>
											</li>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<li>
												<button className="dropdown-item" onClick={handleLogOutRedirect}>
													<IoLogOutOutline />
													Cerrar Sesión
												</button>
											</li>
										</ul>
									</li>
								</>
							)}
						</ul>
						<form className="d-flex mt-3" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
};
