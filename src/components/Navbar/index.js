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
import {
  MdCalendarToday,
  MdHome,
  MdLocalHospital,
  MdLogout,
  MdPerson,
} from "react-icons/md";

function Navbar({ isNavBarVisible, page }) {
  return (
    <>
      <nav
        className={`fixed lg:inline-block hidden top-0 left-0 w-[230px] min-h-screen text-white bg-white shadow-xl`}
      >
        {/* <div className="overlay"></div> */}
        <div className="app-navbar-content">
          <h2 className="flex justify-center mt-10">
            <img
              src={internistikaLogo}
              alt="Internistika"
              style={{ maxWidth: "100px", objectFit: "contain" }}
            />
          </h2>
          <ul className="h-full flex flex-col gap-y-8 mt-20 px-16">
            <li className="">
              <Link className="flex items-center gap-x-3" to="/">
                <MdHome
                  size={18}
                  className={` ${
                    page == "home" ? "hms-blue-text font-bold" : "text-gray-500"
                  }`}
                />
                <span
                  className={`text-xs  ${
                    page == "home" ? "hms-blue-text font-bold" : "text-gray-500"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="">
              <Link className="flex items-center gap-x-3" to="/account">
                <MdPerson
                  size={18}
                  className={`  ${
                    page == "account"
                      ? "hms-blue-text font-bold"
                      : "text-gray-500"
                  }`}
                />
                <span
                  className={`text-xs  ${
                    page == "account"
                      ? "hms-blue-text font-bold"
                      : "text-gray-500"
                  }`}
                >
                  Account
                </span>
              </Link>
            </li>
            <li className="">
              <Link className="flex items-center gap-x-3" to="/patients">
                <MdLocalHospital
                  size={18}
                  className={` ${
                    page == "patients"
                      ? "hms-blue-text font-bold"
                      : "text-gray-500"
                  }`}
                />
                <span
                  className={`text-xs  ${
                    page == "patients"
                      ? "hms-blue-text font-bold"
                      : "text-gray-500"
                  }`}
                >
                  Patients
                </span>
              </Link>
            </li>
            <li className="">
              <Link className="flex items-center gap-x-3" to="/visits">
                <MdCalendarToday
                  size={18}
                  className={`${
                    page == "visits"
                      ? "hms-blue-text font-bold"
                      : "text-gray-500"
                  }`}
                />
                <span
                  className={`text-xs  ${
                    page == "visits"
                      ? "hms-blue-text font-bold"
                      : "text-gray-500"
                  }`}
                >
                  Visits
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-10 w-full px-16">
          <Link
            className="flex items-center gap-x-3"
            to="/login"
            onClick={() => {
              localStorage.removeItem("internistikaLoginToken");
            }}
          >
            <MdLogout size={18} className="hms-blue-text" />
            <span className="text-sm hms-blue-text">Log out</span>
          </Link>
        </div>
      </nav>

      {isNavBarVisible && (
        <nav
          className={`fixed lg:hidden top-0 z-20 left-0 w-[230px] min-h-screen text-white bg-white shadow-2xl`}
        >
          {/* <div className="overlay"></div> */}
          <div className="app-navbar-content">
            <h2 className="flex justify-center mt-10">
              <img
                src={internistikaLogo}
                alt="Internistika"
                style={{ maxWidth: "100px", objectFit: "contain" }}
              />
            </h2>
            <ul className="h-full flex flex-col gap-y-8 mt-20 px-16">
              <li className="">
                <Link className="flex items-center gap-x-3" to="/">
                  <MdHome
                    size={18}
                    className={` ${
                      page == "home"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-xs  ${
                      page == "home"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="">
                <Link className="flex items-center gap-x-3" to="/account">
                  <MdPerson
                    size={18}
                    className={`  ${
                      page == "account"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-xs  ${
                      page == "account"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Account
                  </span>
                </Link>
              </li>
              <li className="">
                <Link className="flex items-center gap-x-3" to="/patients">
                  <MdLocalHospital
                    size={18}
                    className={` ${
                      page == "patients"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-xs  ${
                      page == "patients"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Patients
                  </span>
                </Link>
              </li>
              <li className="">
                <Link className="flex items-center gap-x-3" to="/visits">
                  <MdCalendarToday
                    size={18}
                    className={`${
                      page == "visits"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-xs  ${
                      page == "visits"
                        ? "hms-blue-text font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Visits
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="absolute bottom-10 w-full px-16">
            <Link
              className="flex items-center gap-x-3"
              to="/login"
              onClick={() => {
                localStorage.removeItem("internistikaLoginToken");
              }}
            >
              <MdLogout size={18} className="hms-blue-text" />
              <span className="text-xs hms-blue-text">Log out</span>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
