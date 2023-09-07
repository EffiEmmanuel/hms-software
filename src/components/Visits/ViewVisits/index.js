// @ts-nocheck
import React, { useState, useRef, useContext, useEffect } from "react";
import "../index.css";
import styled from "styled-components";
import internistikaLogo from "../../../assets/images/logo.png";
import ReactToPrint from "react-to-print";
import rentgen2 from "../../../assets/images/rentgen2.jpg";
import { UserContext } from "../../../App";
import axios from "axios";
import Modal from "react-modal";

function ViewVisits({ isViewVisits }) {
  const [visitDetailDisplay, setVisitDetailDisplay] = useState("none");
  const [overlayDisplay, setOverlayDisplay] = useState("none");

  const [currentItem, setCurrentItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Print handler
  let componentRef = useRef();

  const { visits } = useContext(UserContext);
  console.log("WETIN HAPPEN!!", visits);

  const [fetchedVisits, setFetchedVisits] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getVisits(page) {
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));
    setIsLoading(true);
    await axios
      .get(
        `http://localhost:8080/api/v1/doctors/visits/get-visits/${
          myDoctor?._id
        }?page=${page}&limit=${2}`
      )
      .then((res) => {
        console.log("FETCH VISIT RESPONSE:", res.data);
        setFetchedVisits(res.data.visits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  useEffect(() => {
    if (isViewVisits) getVisits(1);
  }, [isViewVisits]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-red-500 max-w-lg mx-auto mt-[120px]"
      >
        <div className="h-[450px] text-left overflow-y-scroll shadow-lg p-14 bg-white">
          <div className="">
            <div className="">
              {/* PRINT BUTTON */}
              <ReactToPrint
                trigger={() => (
                  <button className="bg-[#1e64af] text-white h-10 w-32 rounded-lg mt-3 text-xs">
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
                  <h6 className="text-sm font-semibold">PATIENT:</h6>
                  <p className="text-xs">
                    {currentItem?.patient?.firstName}{" "}
                    {currentItem?.patient?.lastName}
                  </p>
                </div>

                <hr />

                <div className="report-group">
                  <h6 className="text-sm font-semibold">VISIT TYPE:</h6>
                  <p className="text-xs">{currentItem?.type}</p>
                </div>

                <hr />

                <div className="report-group">
                  <h6 className="text-sm font-semibold">RENTGEN IMAGES:</h6>
                  {currentItem?.rentgen?.map((image) => (
                    <img
                      src={`${image}`}
                      alt="rentgen"
                      className="report-img object-contain w-[250px]"
                    />
                  ))}
                  {currentItem?.rentgen?.length === 0 && (
                    <p
                      style={{ textAlign: "center" }}
                      className="text-xs my-20"
                    >
                      There were no Rentgen images for this visit...
                    </p>
                  )}
                </div>

                <hr />

                <div className="report-group">
                  <h6 className="text-sm font-semibold">ECHO IMAGES:</h6>
                  {currentItem?.echo?.map((image) => (
                    <img
                      src={`${image}`}
                      alt="echo"
                      className="report-img object-contain w-[250px]"
                    />
                  ))}
                  {currentItem?.echo?.length === 0 && (
                    <p
                      style={{ textAlign: "center" }}
                      className="my-20 text-xs"
                    >
                      There were no Echo images for this visit...
                    </p>
                  )}
                </div>

                <hr />

                <div className="report-group">
                  <h6 className="text-sm font-semibold">CT IMAGES:</h6>
                  {currentItem?.ct?.map((image) => (
                    <img
                      src={`${image}`}
                      alt="ct scan"
                      className="report-img object-contain w-[250px]"
                    />
                  ))}
                  {currentItem?.ct?.length === 0 && (
                    <p style={{ textAlign: "center", marginTop: "40px" }}>
                      There were no CT Scans for this visit...
                    </p>
                  )}
                </div>

                <hr />

                <div className="report-group">
                  <h6 className="text-sm font-semibold">INJECTIONS:</h6>
                  <ol>
                    <li className="text-xs">{currentItem?.injections}</li>
                  </ol>
                </div>

                <hr />

                <div className="report-group">
                  <h6 className="text-sm font-semibold">DRUGS:</h6>
                  <ol>
                    <li className="text-xs">{currentItem?.drugs}</li>
                  </ol>
                </div>

                <div className="report-group">
                  <h6 className="text-sm font-semibold">ANALYSIS:</h6>
                  <ol>
                    <li className="text-xs">{currentItem?.analysis}</li>
                  </ol>
                </div>

                <hr />

                <div className="report-group">
                  <h6 className="text-lg font-semibold">DIAGNOSIS:</h6>
                  <p>{currentItem?.diagnosis}</p>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </Modal>

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

        <div className="patients-list visits">
          <div className="table-title mt-5">
            <p>FULLNAME</p>
            <p>EMAIL</p>
            <p>TYPE</p>
          </div>
          <ol className="visit-ol-print" id="visit-ol-print">
            {fetchedVisits?.map((visit) => (
              <div
                key={visit?._id}
                className="flex justify-between cursor-pointer my-10 pb-5 border-b-[0.3px] border-b-gray-200 border-dashed"
                onClick={() => {
                  setCurrentItem(visit);
                  setIsModalOpen(true);
                }}
              >
                <p className="text-xs max-w-md">
                  {visit?.patient?.firstName} {visit?.patient?.lastName}
                </p>
                {/* <hr /> */}
                <p className="text-xs max-w-md">{visit?.patient?.email}</p>
                {/* <hr /> */}
                <p className="text-xs max-w-md">{visit?.type}</p>
              </div>
            ))}

            {visits?.length === 0 && (
              <h5 style={{ textAlign: "center", marginTop: "40px" }}>
                There is nothing to show here for now...
              </h5>
            )}
          </ol>
        </div>
      </ViewVisitsTab>
    </>
  );
}

const ViewVisitsTab = styled.div`
  display: ${(props) => (props.isViewVisits ? "block" : "none")};
`;

export default ViewVisits;
