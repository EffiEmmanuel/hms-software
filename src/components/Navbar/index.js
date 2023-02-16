import React from "react";
import internistikaLogo from "../../assets/images/logo.png";
import "./index.css";
import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaDoorOpen,
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaUsb,
  FaUser,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="app-navbar">
      <div className="overlay"></div>
      <div className="app-navbar-content">
        <h2 style={{ backgroundColor: "#fff" }}>
          <img
            src={internistikaLogo}
            alt="Internistika"
            style={{ maxWidth: "100px", objectFit: "contain" }}
          />
        </h2>
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FaHome size={25} style={{ margin: "0 20px" }} />
              <span className="nav-link-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account">
              <FaUser size={25} style={{ margin: "0 20px" }} />
              <span className="nav-link-text">Account</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/patients">
              <FaPlus size={25} style={{ margin: "0 20px" }} />
              <span className="nav-link-text">Patients</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/visits">
              <FaCalendar size={25} style={{ margin: "0 20px" }} />
              <span className="nav-link-text">Visits</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
              onClick={() => {
                localStorage.removeItem("internistikaLoginToken");
              }}
            >
              <FaSignOutAlt size={25} style={{ margin: "0 20px" }} />
              <span className="nav-link-text">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
