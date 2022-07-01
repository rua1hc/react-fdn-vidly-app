import React from "react";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <NavLink
                            className="nav-link "
                            aria-current="page"
                            to="/movies"
                        >
                            Movies
                        </NavLink>
                        <NavLink className="nav-link" to="/customers">
                            Customers
                        </NavLink>
                        <NavLink className="nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                        <NavLink className="nav-link" to="/login">
                            Login
                        </NavLink>
                        <NavLink className="nav-link" to="/register">
                            Register
                        </NavLink>
                        {/* <a className="nav-link disabled">Disabled</a> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
