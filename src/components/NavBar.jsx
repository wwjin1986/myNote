import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand nav-brand-custom" to="">
          My Note
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link nav-custom" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link nav-custom" to={"/addexercise"}>
                Notes
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link nav-custom" to={"/addnote"}>
                Manage
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
