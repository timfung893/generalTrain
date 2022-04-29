import React, { Component } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="/">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <li className="nav-item">
                  <NavLink activeClassName="selected" to="/"></NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/services">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Porfolios</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
