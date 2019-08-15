import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand nav-custom" to="">
          My Note
        </NavLink>
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
              <NavLink className="nav-link nav-custom" to={"/today"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link nav-custom" to={"/addexercise"}>
                Notes
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link nav-custom" to={"/addweight"}>
                Manage
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
