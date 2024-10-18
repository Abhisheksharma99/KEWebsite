import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "./WHITE-LOGO-1.png";
import ScrollToAnchor from "./ScrollToAnchor";
import "./index.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <div>
      <ScrollToAnchor />
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarbg">
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand rounded-3">
            <img src={WhiteLogo} alt="Logo" height="80" width="250" />
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar Content */}
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 fw-bold">
              <NavItem to="/" label="Home" onClick={toggleNavbar} />
              <NavItem to="/aboutus" label="About Us" onClick={toggleNavbar} />

              {/* Dropdown for Products */}
              <li className="nav-item dropdown">
                <Link
                  to="/products"
                  className="nav-link dropdown-toggle fs-5"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <DropdownItem to="/products" icon="fa-globe" label="All Products" onClick={toggleNavbar} />
                  <DropdownItem to="/products#defoamers" icon="fa-hand-o-right" label="Defoamer" flameIcon onClick={toggleNavbar} />
                  <DropdownItem to="/products#siliconeemulsions" icon="fa-hand-o-right" label="Silicone Emulsions" onClick={toggleNavbar} />
                  <DropdownItem to="/products#paperandpulp" icon="fa-hand-o-right" label="Paper and Pulp Chemicals" onClick={toggleNavbar} />
                  <DropdownItem to="/products#carcare" icon="fa-hand-o-right" label="Car Care Products" onClick={toggleNavbar} />
                  <DropdownItem to="/products#watertreatment" icon="fa-hand-o-right" label="Water Treatment Chemicals" onClick={toggleNavbar} />
                </ul>
              </li>

              <NavItem to="/contactus" label="Contact Us" onClick={toggleNavbar} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Reusable NavItem Component
const NavItem = ({ to, label, onClick }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link fs-5" onClick={onClick}>
      {label}
    </Link>
  </li>
);

// Reusable DropdownItem Component
const DropdownItem = ({ to, icon, label, onClick, flameIcon }) => (
  <li>
    <Link to={to} className="dropdown-item productsubhead" onClick={onClick}>
      <i className={`fa ${icon}`} aria-hidden="true"></i>&nbsp;{label}
      {flameIcon && <i className="fa fa-fire float-end mt-2" aria-hidden="true"></i>}
    </Link>
  </li>
);

export default Navbar;
