// @ts-nocheck
import React, { useContext } from "react";
import { FaHamburger, FaSignOutAlt } from "react-icons/fa";
import { MdClose, MdLogout, MdMenu, MdMenuOpen } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function MainContentTop(props) {
  const navigator = useNavigate();
  const { doctor } = useContext(UserContext);

  return (
    <div className="main-content-top border-b-[0.5px] border-gray-300 pb-5">
      <h3>
        Welcome back,{" "}
        <span className="doctor-name hms-blue-text">
          Doctor {doctor?.firstName}.
        </span>
      </h3>
      {!props?.isNavBarVisible && (
        <MdMenu
          size={25}
          className="lg:hidden inline-block"
          style={{
            cursor: "pointer",
          }}
          onClick={() => props?.setIsNavBarVisible(true)}
        />
      )}
      {props?.isNavBarVisible && (
        <MdClose
          size={25}
          className="lg:hidden inline-block"
          style={{
            cursor: "pointer",
          }}
          onClick={() => props?.setIsNavBarVisible(false)}
        />
      )}
      <MdLogout
        size={22}
        className="hidden lg:inline-block"
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
