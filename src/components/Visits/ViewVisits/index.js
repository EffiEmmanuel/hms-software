import React, { useState, useRef } from "react";
import '../index.css'
import styled from "styled-components";
import internistikaLogo from "../../../assets/images/logo.png";
import ReactToPrint from "react-to-print";
import rentgen2 from "../../../assets/images/rentgen2.jpg";

function ViewVisits({ isViewVisits }) {
  const [visitDetailDisplay, setVisitDetailDisplay] = useState("none");
  const [overlayDisplay, setOverlayDisplay] = useState("none");

  // Print handler
  let componentRef = useRef();

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
      <form className="form-container">
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
      </form>

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
              <p>John Doe</p>
            </div>

            <hr />

            <div className="report-group">
              <h6>RENTGEN:</h6>
              <img src={rentgen2} alt="rentgen" className="report-img" />
              <img src={rentgen2} alt="rentgen" className="report-img" />
              <img src={rentgen2} alt="rentgen" className="report-img" />
              {/* <img src={rentgen3} alt='rentgen' className='report-img' />
                    <img src={rentgen1} alt='rentgen' className='report-img' /> */}
            </div>

            <hr />

            <div className="report-group">
              <h6>ECHO:</h6>
              <img src={rentgen2} alt="rentgen" className="report-img" />
              <img src={rentgen2} alt="rentgen" className="report-img" />
              <img src={rentgen2} alt="rentgen" className="report-img" />
            </div>

            <hr />

            <div className="report-group">
              <h6>INJECTIONS:</h6>
              <ol>
                <li>Injection 1</li>
                <li>Injection 2</li>
                <li>Injection 3</li>
                <li>Injection 4</li>
              </ol>
            </div>

            <hr />

            <div className="report-group">
              <h6>DRUGS:</h6>
              <ol>
                <li>Drug 1</li>
                <li>Drug 2</li>
                <li>Drug 3</li>
                <li>Drug 4</li>
              </ol>
            </div>

            <hr />

            <div className="report-group">
              <h6>DIAGNOSIS:</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                faucibus, sapien nec luctus vehicula, augue dolor tristique
                neque, non pellentesque est nibh vel sapien. Quisque mollis
                turpis ipsum, ac iaculis purus mollis vitae. Fusce luctus lectus
                quis auctor faucibus. Maecenas bibendum fringilla risus nec
                sollicitudin. Cras ac tempor arcu.
              </p>
            </div>

            <hr />
          </div>
        </div>
      </div>

      <div className="patients-list visits">
        <div className="table-title mt-5">
          <p>FULLNAME</p>
          <p>LASTNAME</p>
          <p>TIME</p>
        </div>
        <ol className="visit-ol-print" id="visit-ol-print">
          <li className="visit-item">
            <div
              className="patient"
              onClick={() => {
                setOverlayDisplay("block");
                setVisitDetailDisplay("flex");
              }}
            >
              <p>John</p>
              <hr />
              <p>Doe</p>
              <hr />
              <p>johndoe@gmail.com</p>
            </div>
          </li>

          <li className="visit-item">
            <div
              className="patient"
              onClick={() => {
                setOverlayDisplay("block");
                setVisitDetailDisplay("flex");
              }}
            >
              <p>John</p>
              <hr />
              <p>Doe</p>
              <hr />
              <p>johndoe@gmail.com</p>
            </div>
          </li>

          <li className="visit-item">
            <div
              className="patient"
              onClick={() => {
                setOverlayDisplay("block");
                setVisitDetailDisplay("flex");
              }}
            >
              <p>John</p>
              <hr />
              <p>Doe</p>
              <hr />
              <p>johndoe@gmail.com</p>
            </div>
          </li>

          <li className="visit-item">
            <div
              className="patient"
              onClick={() => {
                setOverlayDisplay("block");
                setVisitDetailDisplay("flex");
              }}
            >
              <p>John</p>
              <hr />
              <p>Doe</p>
              <hr />
              <p>johndoe@gmail.com</p>
            </div>
          </li>
        </ol>
      </div>
    </ViewVisitsTab>
  );
}

const ViewVisitsTab = styled.div`
  display: ${(props) => (props.isViewVisits ? "block" : "none")};
`;

export default ViewVisits;
