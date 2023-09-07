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
import Navbar from "../Navbar";

function Visits() {
  useDocumentTitle("Internistika | Visits");

  const [currentTab, setCurrentTab] = useState(true);
  const [addVisitTab, setAddVisitTab] = useState(true);
  const [ViewVisitsTab, setViewVisitsTab] = useState(false);

  const { doctor } = useContext(UserContext);
  const doctorParsed = JSON.parse(localStorage.getItem("doctor"));

  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  return (
    <>
      <Navbar isNavBarVisible={isNavBarVisible} page="visits" />

      <div
        className="pt-[30px] pb-[15px] lg:pl-[23%] px-[1.5rem] w-full"
        id="main"
      >
        <MainContentTop
          setIsNavBarVisible={setIsNavBarVisible}
          isNavBarVisible={isNavBarVisible}
        />

        <div className="main account">
          <div className="flex items-center gap-x-14 border-b-[.3px] border-b-gray-200 pb-5">
            <p
              //   className={`${currentTab && registerTab ? "current-tab" : ""}`}
              className={`text-xs h-10 ${
                currentTab && addVisitTab
                  ? "border-[.4px] text-[#1e64af] border-dashed border-[#1e64af]"
                  : ""
              }  px-3 flex justify-center items-center rounded-lg cursor-pointer`}
              onClick={() => {
                setAddVisitTab(true);
                setViewVisitsTab(false);
                setCurrentTab(true);
              }}
            >
              Add Visit
            </p>

            <p
              className={`text-xs h-10 ${
                currentTab && ViewVisitsTab
                  ? "border-[.4px] text-[#1e64af] border-dashed border-[#1e64af]"
                  : ""
              }  px-3 flex justify-center items-center rounded-lg cursor-pointer`}
              onClick={() => {
                setAddVisitTab(false);
                setViewVisitsTab(true);
                setCurrentTab(true);
              }}
            >
              View Visit
            </p>
          </div>

          <div className="switching-tabs mt-5">
            <AddVisit isAddVisit={addVisitTab} />
            <ViewVisits isViewVisits={ViewVisitsTab} />
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

export default Visits;
