// @ts-nocheck
import React, { useContext, useState } from "react";
import "./index.css";
import styled from "styled-components";
import logoutIcon from "../../assets/icons/logout-black.png";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import RegisterPatient from "./RegisterPatient";
import ViewPatients from "./ViewPatients";
import Appointments from "./Appointments";
import { UserContext } from "../../App";
import MainContentTop from "../MainContentTop";
import Navbar from "../Navbar";

function Patients() {
  useDocumentTitle("Internistika | Patients");

  const [currentTab, setCurrentTab] = useState(true);
  const [registerTab, setRegisterTab] = useState(true);
  const [viewTab, setViewTab] = useState(false);
  const [appointmentTab, setAppointmentTab] = useState(false);

  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const { doctor } = useContext(UserContext);

  return (
    <>
      <Navbar isNavBarVisible={isNavBarVisible} page="patients" />

      <div
        className="pt-[30px] pb-[15px] lg:pl-[23%] px-[1.5rem] w-full"
        id="main"
      >
        <MainContentTop
          setIsNavBarVisible={setIsNavBarVisible}
          isNavBarVisible={isNavBarVisible}
        />

        <div className="main account">
          <div className="navigation-tabs border-b-[.3px] border-b-gray-200 pb-5">
            <p
              //   className={`${currentTab && registerTab ? "current-tab" : ""}`}
              className={`text-xs h-10 ${
                currentTab && registerTab
                  ? "border-[.4px] text-[#1e64af] border-dashed border-[#1e64af]"
                  : ""
              }  px-3 flex justify-center items-center rounded-lg cursor-pointer`}
              onClick={() => {
                setViewTab(false);
                setAppointmentTab(false);
                setRegisterTab(true);
                setCurrentTab(true);
              }}
            >
              Register Patients
            </p>

            <p
              className={`text-xs h-10 ${
                currentTab && viewTab
                  ? "border-[.4px] text-[#1e64af] border-dashed border-[#1e64af]"
                  : ""
              }  px-3 flex justify-center items-center rounded-lg cursor-pointer`}
              isView={viewTab}
              onClick={() => {
                setViewTab(true);
                setAppointmentTab(false);
                setRegisterTab(false);
                setCurrentTab(true);
              }}
            >
              View Patients
            </p>

            <p
              className={`text-xs h-10 ${
                currentTab && appointmentTab
                  ? "border-[.4px] text-[#1e64af] border-dashed border-[#1e64af]"
                  : ""
              }  px-3 flex justify-center items-center rounded-lg cursor-pointer`}
              isAppointment={appointmentTab}
              onClick={() => {
                setViewTab(false);
                setAppointmentTab(true);
                setRegisterTab(false);
                setCurrentTab(true);
              }}
            >
              Appointments
            </p>
          </div>

          <div className="switching-tabs mt-5">
            <RegisterPatient isRegisterTab={registerTab} />
            <ViewPatients isViewPatientsTab={viewTab} />
            <Appointments isAppointmentsTab={appointmentTab} />
          </div>
        </div>
      </div>
    </>
  );
}

const NavigationTab = styled.a`
  text-decoration: none;
  color: black;
  position: relative;
  cursor: pointer;
`;

export default Patients;
