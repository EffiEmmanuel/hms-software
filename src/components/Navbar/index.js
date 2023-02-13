import React from "react";
import homeIcon from "../../assets/icons/home-icon.png";
import accountIcon from "../../assets/icons/account-icon.png";
import patientsIcon from "../../assets/icons/patients-icon2.png";
import visitsIcon from "../../assets/icons/visits-icon.png";
import logoutIcon from "../../assets/icons/logout-white.png";
import NavItem from "./NavItem";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="app-navbar">
      <div className="overlay"></div>
      <div className="app-navbar-content">
        <h2>Internistika</h2>
        <ul>
          <NavItem icon={homeIcon} text="Home" link="/" />
          <NavItem icon={accountIcon} text="Account" link="/account" />
          <NavItem icon={patientsIcon} text="Patients" link="/patients" />
          <NavItem icon={visitsIcon} text="Visits" link="/visits" />
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
              onClick={() => {
                localStorage.removeItem("internistikaLoginToken");
              }}
            >
              <img src={logoutIcon} alt="Logout" className="nav-link-icon" />
              <span className="nav-link-text">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
