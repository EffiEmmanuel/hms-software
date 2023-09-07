// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../../App";
import { paginate } from "../../../helpers/paginate";
import Pagination from "../../Pagination";
import axios from "axios";
import Swal from "sweetalert2";

function ViewPatients({ isViewPatientsTab }) {
  const { patients, setPatients } = useContext(UserContext);
  const [patientsFirstName, setPatientsFirstName] = useState([]);
  const [patientsTel, setPatientsTel] = useState([]);
  const [patientsEmail, setPatientsEmail] = useState([]);
  const [isSearchingByFirstName, setIsSearchingByFirstName] = useState(false);
  const [isSearchingByTelephoneNumber, setIsSearchingByTelephoneNumber] =
    useState(false);
  const [isSearchingByEmail, setIsSearchingByEmail] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPatients = paginate(patients, currentPage, pageSize);
  const paginatedPatientsByFirstName = paginate(
    patientsFirstName,
    currentPage,
    pageSize
  );
  const paginatedPatientsByTel = paginate(patientsTel, currentPage, pageSize);
  const paginatedPatientsByEmail = paginate(
    patientsEmail,
    currentPage,
    pageSize
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const [fetchedPatients, setFetchedPatients] = useState();
  const [page, setPage] = useState(1);

  async function getPatients(page) {
    setIsLoading(true);
    await axios
      .get(
        `http://localhost:8080/api/v1/doctors/patients/get-patients?page=${page}&limit=${2}`
      )
      .then((res) => {
        console.log("FETCH PATIENTS RESPONSE:", res.data);
        setFetchedPatients(res.data.patients);
        if (!(page < 1) && res.data?.patients?.length == 0) {
          setIsNextDisabled(true);
          setPage(page - 1);
        } else {
          setFetchedPatients(res.data.patients);
        }

        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  useEffect(() => {
    if (isViewPatientsTab) getPatients(page);
  }, [page, isViewPatientsTab]);

  return (
    <ViewPatientsTab className="view-patients" isView={isViewPatientsTab}>
      <form className="">
        <div className="flex lg:justify-between items-center lg:flex-row flex-col justify-center w-full">
          <div className="w-full flex relative">
            <input
              className="w-full lg:max-w-xs h-10 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
              id="search"
              type="text"
              name="search"
              placeholder="🔍 Search By Firstname  |"
              //   value={searcg}
              onChange={(e) => {
                console.log("VAL:", e.target.value);
                if (!(e.target.value === "")) {
                  setIsSearchingByFirstName(true);
                  setIsSearchingByTelephoneNumber(false);
                  setIsSearchingByEmail(false);
                  console.log("hI");
                  const newPatientList = fetchedPatients?.filter((patient) => {
                    console.log("PATIENTINO:", patient);
                    return patient?.firstName.includes(e.target.value);
                  });
                  setPatientsFirstName(newPatientList);
                  console.log("PFN:", patientsFirstName);
                } else {
                  setIsSearchingByFirstName(false);
                }
              }}
            />
          </div>
          <div className="w-full flex relative">
            <input
              className="w-full lg:max-w-xs h-10 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
              id="search"
              type="text"
              name="search"
              placeholder="🔍 Search By Tel  |"
              onChange={(e) => {
                console.log("VAL:", e.target.value);
                if (!(e.target.value === "")) {
                  setIsSearchingByTelephoneNumber(true);
                  setIsSearchingByEmail(false);
                  setIsSearchingByFirstName(false);
                  const newPatientList = fetchedPatients?.filter((patient) => {
                    return patient?.telephoneNumber.includes(e.target.value);
                  });
                  console.log("NPTEL:", newPatientList);
                  setPatientsTel(newPatientList);
                } else {
                  setIsSearchingByTelephoneNumber(false);
                }
              }}
            />
          </div>
          <div className="w-full flex relative">
            <input
              className="w-full lg:max-w-xs h-10 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
              id="search"
              type="text"
              name="search"
              placeholder="🔍 Search By Email  |"
              onChange={(e) => {
                console.log("VAL:", e.target.value);
                if (!(e.target.value === "")) {
                  setIsSearchingByEmail(true);
                  setIsSearchingByTelephoneNumber(false);
                  setIsSearchingByFirstName(false);
                  const newPatientList = fetchedPatients?.filter((patient) => {
                    return patient?.email.includes(e.target.value);
                  });
                  setPatientsEmail(newPatientList);
                } else {
                  setIsSearchingByEmail(false);
                }
              }}
            />
          </div>
        </div>
      </form>

      <div className="">
        <div className="table-title my-5">
          <p>FULLNAME</p>
          <p>TELEPHONE NUMBER</p>
          <p>EMAIL ADDRESS</p>
        </div>

        {/* Normal list of patients */}
        {!isSearchingByFirstName &&
          !isSearchingByTelephoneNumber &&
          !isSearchingByEmail &&
          fetchedPatients?.map((patient) => (
            <div
              key={patient?._id}
              className="flex justify-between my-10 pb-5 border-b-[0.3px] border-b-gray-200 border-dashed"
            >
              <p className="text-xs max-w-md">
                {patient?.firstName} {patient?.lastName}
              </p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.telephoneNumber}</p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.email}</p>
            </div>
          ))}

        {/* Search results for patients by firstname */}
        {isSearchingByFirstName &&
          patientsFirstName?.map((patient) => (
            <div
              key={patient?._id}
              className="flex justify-between my-10 pb-5 border-b-[0.3px] border-b-gray-200 border-dashed"
            >
              <p className="text-xs max-w-md">
                {patient?.firstName} {patient?.lastName}
              </p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.telephoneNumber}</p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.email}</p>
            </div>
          ))}
        {isSearchingByFirstName && patientsFirstName?.length == 0 && (
          <div className="flex justify-center my-10">
            <p className="text-xs max-w-md">No results</p>
          </div>
        )}

        {/* Search results for patients by telephone number */}
        {isSearchingByTelephoneNumber &&
          patientsTel?.map((patient) => (
            <div
              key={patient?._id}
              className="flex justify-between my-10 pb-5 border-b-[0.3px] border-b-gray-200 border-dashed"
            >
              <p className="text-xs max-w-md">
                {patient?.firstName} {patient?.lastName}
              </p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.telephoneNumber}</p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.email}</p>
            </div>
          ))}
        {isSearchingByTelephoneNumber && patientsTel?.length == 0 && (
          <div className="flex justify-center my-10">
            <p className="text-xs max-w-md">No results</p>
          </div>
        )}

        {/* Search results for patients by email */}
        {isSearchingByEmail &&
          patientsEmail?.map((patient) => (
            <div
              key={patient?._id}
              className="flex justify-between my-10 pb-5 border-b-[0.3px] border-b-gray-200 border-dashed"
            >
              <p className="text-xs max-w-md">
                {patient?.firstName} {patient?.lastName}
              </p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.telephoneNumber}</p>
              {/* <hr /> */}
              <p className="text-xs max-w-md">{patient?.email}</p>
            </div>
          ))}

        {isSearchingByEmail && patientsEmail?.length == 0 && (
          <div className="flex justify-center my-10">
            <p className="text-xs max-w-md">No results</p>
          </div>
        )}

        <div className="flex justify-center gap-x-5 text-sm">
          <button
            disabled={isPreviousDisabled}
            className="h-10 w-32 bg-[#181818] text-xs text-white rounded-lg disabled:bg-gray-300"
            onClick={() => {
              setIsNextDisabled(false);
              const previousPage = page - 1;
              if (!(previousPage < 1)) {
                setPage(page - 1);
              } else if (page >= 1) {
                setIsPreviousDisabled(true);
              } else {
                setIsPreviousDisabled(true);
              }
            }}
          >
            Previous Page
          </button>
          <button
            disabled={isNextDisabled}
            className="h-10 w-32 bg-[#1e64af] text-xs text-white rounded-lg disabled:bg-gray-300"
            onClick={() => {
              if (isPreviousDisabled) setIsPreviousDisabled(false);
              setPage(page + 1);
              if (!fetchedPatients || fetchedPatients?.length == 0) {
                setIsNextDisabled(true);
                setPage(page - 1);
              }
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    </ViewPatientsTab>
  );
}

const ViewPatientsTab = styled.div`
  display: ${(props) => (props.isView ? "block" : "none")};
`;

export default ViewPatients;
