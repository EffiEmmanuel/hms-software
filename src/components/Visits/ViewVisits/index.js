// @ts-nocheck
import React, { useState, useRef, useContext } from "react";
import "../index.css";
import styled from "styled-components";
import internistikaLogo from "../../../assets/images/logo.png";
import ReactToPrint from "react-to-print";
import rentgen2 from "../../../assets/images/rentgen2.jpg";
import { UserContext } from "../../../App";

function ViewVisits({ isViewVisits }) {
  const [visitDetailDisplay, setVisitDetailDisplay] = useState("none");
  const [overlayDisplay, setOverlayDisplay] = useState("none");

  const [currentItem, setCurrentItem] = useState();

  // Print handler
  let componentRef = useRef();

  const { visits } = useContext(UserContext);
  console.log("WETIN HAPPEN!!", visits);

  return (
    <ViewVisitsTab className="view-patients" isViewVisits={isViewVisits}>
      <div
        className="overlay visits"
        style={{
          display: `${overlayDisplay}`,
        }}
        onClick={() => {
          setOverlayDisplay("none");
          setVisitDetailDisplay("none");
        }}
      ></div>
      {/* <form className="form-container">
        <div className="fg-row patients">
          <div className="form-group">
            <input
              type="text"
              name="search"
              className="form-control search"
              placeholder="🔍 Firstname  |"
            />
          </div>
          <div className="form-group patients-center">
            <input
              type="text"
              name="search"
              className="form-control search"
              placeholder="🔍 Lastname  |"
            />
          </div>
          <div className="form-group patients">
            <input
              type="text"
              name="search"
              className="form-control search"
              placeholder="🔍 Email  |"
            />
          </div>
        </div>
      </form> */}

      <div
        className="visit-details-container"
        style={{
          display: `${visitDetailDisplay}`,
        }}
      >
        <div className="visit-details">
          {/* PRINT BUTTON */}
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-primary btn-dark px-5 py-3">
                Print
              </button>
            )}
            content={() => componentRef}
            documentTitle="Visits Report"
            pageStyle="print"
          />

          <div className="visit-report" ref={(el) => (componentRef = el)}>
            <img src={internistikaLogo} alt="Logo" className="print-logo" />

            <div className="report-group">
              <h6>PATIENT:</h6>
              <p>
                {currentItem?.attributes?.patient?.data?.attributes?.firstName}{" "}
                {currentItem?.attributes?.patient?.data?.attributes?.lastName}
              </p>
            </div>

            <hr />

            <div className="report-group">
              <h6>VISIT TYPE:</h6>
              <p>{currentItem?.attributes?.type}</p>
            </div>

            <hr />

            <div className="report-group">
              <h6>RENTGEN:</h6>
              {currentItem?.attributes?.rentgen?.data.map((image) => (
                <img
                  src={`${process.env.REACT_APP_URL}${image?.attributes?.url}`}
                  alt="rentgen"
                  className="report-img"
                />
              ))}
              {currentItem?.attributes?.rentgen?.data.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "40px" }}>
                  There were no Rentgen images for this visit...
                </p>
              )}
            </div>

            <hr />

            <div className="report-group">
              <h6>ECHO:</h6>
              {currentItem?.attributes?.echo?.data.map((image) => (
                <img
                  src={`${process.env.REACT_APP_URL}${image?.attributes?.url}`}
                  alt="echo"
                  className="report-img"
                />
              ))}
              {currentItem?.attributes?.ct?.data.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "40px" }}>
                  There were no Echo images for this visit...
                </p>
              )}
            </div>

            <hr />

            <div className="report-group">
              <h6>CT:</h6>
              {currentItem?.attributes?.ct?.data.map((image) => (
                <img
                  src={`${process.env.REACT_APP_URL}${image?.attributes?.url}`}
                  alt="ct scan"
                  className="report-img"
                />
              ))}
              {currentItem?.attributes?.ct?.data.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "40px" }}>
                  There were no CT Scans for this visit...
                </p>
              )}
            </div>

            <hr />

            <div className="report-group">
              <h6>INJECTIONS:</h6>
              <ol>
                <li>{currentItem?.attributes?.injections}</li>
              </ol>
            </div>

            <hr />

            <div className="report-group">
              <h6>DRUGS:</h6>
              <ol>
                <li>{currentItem?.attributes?.drugs}</li>
              </ol>
            </div>

            <hr />

            <div className="report-group">
              <h6>DIAGNOSIS:</h6>
              <p>{currentItem?.attributes?.diagnosis}</p>
            </div>

            <hr />
          </div>
        </div>
      </div>

      <div className="patients-list visits">
        <div className="table-title mt-5">
          <p>FULLNAME</p>
          <p>EMAIL</p>
          <p>TYPE</p>
        </div>
        <ol className="visit-ol-print" id="visit-ol-print">
          {visits
            ? visits?.map((visit) => (
                <li key={visit.id} className="visit-item">
                  <div
                    className="patient"
                    onClick={() => {
                      setOverlayDisplay("block");
                      setVisitDetailDisplay("flex");
                      setCurrentItem(visit);
                    }}
                  >
                    <p>
                      {visit?.attributes?.patient?.data?.attributes?.firstName}{" "}
                      {visit?.attributes?.patient?.data?.attributes?.lastName}
                    </p>
                    <hr />
                    <p>{visit?.attributes?.patient?.data?.attributes?.email}</p>
                    <hr />
                    <p>{visit?.attributes?.type}</p>
                  </div>
                </li>
              ))
            : null}

          {visits?.length === 0 && (
            <h5 style={{ textAlign: "center", marginTop: "40px" }}>
              There is nothing to show here for now...
            </h5>
          )}
        </ol>
      </div>
    </ViewVisitsTab>
  );
}

const ViewVisitsTab = styled.div`
  display: ${(props) => (props.isViewVisits ? "block" : "none")};
`;

export default ViewVisits;
