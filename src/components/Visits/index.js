// @ts-nocheck
import React, { useContext, useRef, useState } from "react";
import "./index.css";
import styled from "styled-components";
import logoutIcon from "../../assets/icons/logout-black.png";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import AddVisit from "./AddVisit";
import ViewVisits from "./ViewVisits";
import { UserContext } from "../../App";
import MainContentTop from "../MainContentTop";

function Visits() {
  useDocumentTitle("Internistika | Visits");

  const [currentTab, setCurrentTab] = useState(true);
  const [addVisitTab, setAddVisitTab] = useState(true);
  const [ViewVisitsTab, setViewVisitsTab] = useState(false);

  const { doctor } = useContext(UserContext);
  const doctorParsed = JSON.parse(localStorage.getItem("doctor"));

  return (
    <div className="main-content" id="main">
      <MainContentTop />

      <div className="main account">
        <div className="navigation-tabs visits">
          <NavigationTab
            className={`${currentTab && addVisitTab ? "current-tab" : ""}`}
            isAddVisit={addVisitTab}
            onClick={() => {
              setViewVisitsTab(false);
              setAddVisitTab(true);
              setCurrentTab(true);
            }}
          >
            Add Visits
          </NavigationTab>

          <NavigationTab
            className={`${currentTab && ViewVisitsTab ? "current-tab" : ""}`}
            isViewVisits={ViewVisitsTab}
            onClick={() => {
              setAddVisitTab(false);
              setViewVisitsTab(true);
              setCurrentTab(true);
            }}
          >
            View Visits
          </NavigationTab>
        </div>

        <div className="switching-tabs mt-5">
          <AddVisit isAddVisit={addVisitTab} />
          <ViewVisits isViewVisits={ViewVisitsTab} />
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

export default Visits;
