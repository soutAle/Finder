import React, { useContext } from "react";
import { Context } from "../../store/appContext.js";
import { OffcanvasUserLinks } from "./OffcanvasUserLinks.jsx";
import { OffcanvasOptions } from "./OffcanvasOptions.jsx";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { GoSearch } from "react-icons/go";



export const OffCanvasNav = () => {
    const { store } = useContext(Context);

    return (
        <>
            <button
                className="navbar-toggler d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"><GoSearch /></span>
            </button>
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
                        <OffcanvasUserLinks />
                        <OffcanvasOptions />
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
        </>
    )
}