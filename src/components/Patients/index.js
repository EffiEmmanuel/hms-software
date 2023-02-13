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

function Patients() {
  useDocumentTitle("Internistika | Patients");

  const [currentTab, setCurrentTab] = useState(true);
  const [registerTab, setRegisterTab] = useState(true);
  const [viewTab, setViewTab] = useState(false);
  const [appointmentTab, setAppointmentTab] = useState(false);

  const { doctor } = useContext(UserContext);

  return (
    <div className="main-content" id="main">
      <div className="main-content-top">
        <h3>
          <span className="doctor-name hms-blue-text">{doctor?.username}.</span>
        </h3>
        <img src={logoutIcon} alt="Log out" className="nav-link-icon logout" />
      </div>

      <div className="main account">
        <div className="navigation-tabs">
          <NavigationTab
            className={`${currentTab && registerTab ? "current-tab" : ""}`}
            isRegister={registerTab}
            onClick={() => {
              setViewTab(false);
              setAppointmentTab(false);
              setRegisterTab(true);
              setCurrentTab(true);
            }}
          >
            Register Patients
          </NavigationTab>

          <NavigationTab
            className={`${currentTab && viewTab ? "current-tab" : ""}`}
            isView={viewTab}
            onClick={() => {
              setViewTab(true);
              setAppointmentTab(false);
              setRegisterTab(false);
              setCurrentTab(true);
            }}
          >
            View Patients
          </NavigationTab>

          <NavigationTab
            className={`${currentTab && appointmentTab ? "current-tab" : ""}`}
            isAppointment={appointmentTab}
            onClick={() => {
              setViewTab(false);
              setAppointmentTab(true);
              setRegisterTab(false);
              setCurrentTab(true);
            }}
          >
            Appointments
          </NavigationTab>
        </div>

        <div className="switching-tabs mt-5">
          <RegisterPatient isRegisterTab={registerTab} />
          <ViewPatients isViewPatientsTab={viewTab} />
          <Appointments isAppointmentsTab={appointmentTab} />
        </div>
      </div>
    </div>
  );
}

const NavigationTab = styled.a`
  text-decoration: none;
  color: black;
  position: relative;
  cursor: pointer;
`;

export default Patients;
