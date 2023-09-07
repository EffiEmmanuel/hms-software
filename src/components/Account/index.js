// @ts-nocheck
import React, { useContext, useState } from "react";
import "./index.css";
import logoutIcon from "../../assets/icons/logout-black.png";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { UserContext } from "../../App";
import MainContentTop from "../MainContentTop";
import Navbar from "../Navbar";

function Account() {
  useDocumentTitle("Internistika | Account");
  const [username, setUsername] = useState();
  const { doctor, updateDoctor } = useContext(UserContext);

  const [firstName, setFirstName] = useState(doctor?.firstName);
  const [lastName, setLastName] = useState(doctor?.lastName);
  const [email, setEmail] = useState(doctor?.email);
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  return (
    <>
      <Navbar isNavBarVisible={isNavBarVisible} page="account" />

      <div
        className="pt-[30px] pr-[35px] pb-[15px] lg:pl-[21%] px-10 w-full"
        id="main"
      >
        <MainContentTop
          setIsNavBarVisible={setIsNavBarVisible}
          isNavBarVisible={isNavBarVisible}
        />

        <main className="main account">
          <h4 className="text-xl font-semibold">My Account</h4>

          <form
            className="form-container mt-7"
            onSubmit={(e) => {
              e.preventDefault();
              updateDoctor({ firstName, lastName, email });
            }}
          >
            <div className="w-full relative my-2">
              <label
                htmlFor="firstName"
                className="text-xs absolute text-gray-500 left-0 text-solyntaYellow"
              >
                First Name
              </label>
              <input
                className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
                id="firstName"
                type="text"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>

            <div className="w-full relative my-2">
              <label
                htmlFor="lastName"
                className="text-xs absolute text-gray-500 left-0 text-solyntaYellow"
              >
                Last Name
              </label>
              <input
                className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
                id="lastName"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>

            <div className="w-full relative my-2">
              <label
                htmlFor="email"
                className="text-xs absolute text-gray-500 left-0 text-solyntaYellow"
              >
                Email Address
              </label>
              <input
                className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1e64af] text-white text-xs h-10 w-32 rounded-lg mt-3"
            >
              Save
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Account;
