// @ts-nocheck
import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function MainContentTop() {
  const navigator = useNavigate();
  const { doctor } = useContext(UserContext);

  return (
    <div className="main-content-top">
      <h3>
        Welcome back,{" "}
        <span className="doctor-name hms-blue-text">{doctor?.username}.</span>
      </h3>
      <FaSignOutAlt
        size={25}
        className="nav-link-icon logout-icon"
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          localStorage.removeItem("internistikaLoginToken");
          localStorage.removeItem("doctor");
          navigator("/login");
        }}
      />
    </div>
  );
}

export default MainContentTop;
