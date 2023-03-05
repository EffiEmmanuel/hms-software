// @ts-nocheck
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../../App";
import { paginate } from "../../../helpers/paginate";
import Pagination from "../../Pagination";

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

  return (
    <ViewPatientsTab className="view-patients" isView={isViewPatientsTab}>
      <form className="form-container">
        <div className="fg-row patients">
          <div className="form-group">
            <input
              type="text"
              name="search"
              className="form-control search"
              placeholder="🔍 Firstname  |"
              onChange={(e) => {
                console.log("VAL:", e.target.value);
                if (!(e.target.value === "")) {
                  setIsSearchingByFirstName(true);
                  setIsSearchingByTelephoneNumber(false);
                  setIsSearchingByEmail(false);
                  console.log("hI");
                  const newPatientList = patients?.filter((patient) => {
                    console.log("PATIENTINO:", patient);
                    return patient?.attributes?.firstName.includes(
                      e.target.value
                    );
                  });
                  setPatientsFirstName(newPatientList);
                  console.log("PFN:", patientsFirstName);
                } else {
                  setIsSearchingByFirstName(false);
                }
              }}
            />
          </div>
          <div className="form-group patients-center">
            <input
              type="text"
              name="search"
              className="form-control search"
              placeholder="🔍 Tel  |"
              onChange={(e) => {
                console.log("VAL:", e.target.value);
                if (!(e.target.value === "")) {
                  setIsSearchingByTelephoneNumber(true);
                  setIsSearchingByEmail(false);
                  setIsSearchingByFirstName(false);
                  const newPatientList = patients?.filter((patient) => {
                    return patient?.attributes?.telephoneNumber.includes(
                      e.target.value
                    );
                  });
                  setPatientsTel(newPatientList);
                } else {
                  setIsSearchingByTelephoneNumber(false);
                }
              }}
            />
          </div>
          <div className="form-group patients">
            <input
              type="text"
              name="search"
              className="form-control search"
              placeholder="🔍 Email  |"
              onChange={(e) => {
                console.log("VAL:", e.target.value);
                if (!(e.target.value === "")) {
                  setIsSearchingByEmail(true);
                  setIsSearchingByTelephoneNumber(false);
                  setIsSearchingByFirstName(false);
                  const newPatientList = patients?.filter((patient) => {
                    return patient?.attributes?.email.includes(e.target.value);
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

      <div className="patients-list">
        <div className="table-title mt-5">
          <p>FULLNAME</p>
          <p>TELEPHONE NUMBER</p>
          <p>EMAIL ADDRESS</p>
        </div>

        {/* Normal list of patients */}
        {!isSearchingByFirstName &&
          !isSearchingByTelephoneNumber &&
          !isSearchingByEmail &&
          paginatedPatients?.map((patient) => (
            <div key={patient?.attributes?.id} className="patient">
              <p>
                {patient?.attributes?.firstName} {patient?.attributes?.lastName}
              </p>
              <hr />
              <p>{patient?.attributes?.telephoneNumber}</p>
              <hr />
              <p>{patient?.attributes?.email}</p>
            </div>
          ))}

        {/* Search results for patients by firstname */}
        {isSearchingByFirstName &&
          paginatedPatientsByFirstName?.map((patient) => (
            <div key={patient?.attributes?.id} className="patient">
              <p>
                {patient?.attributes?.firstName} {patient?.attributes?.lastName}
              </p>
              <hr />
              <p>{patient?.attributes?.telephoneNumber}</p>
              <hr />
              <p>{patient?.attributes?.email}</p>
            </div>
          ))}

        {/* Search results for patients by telephone number */}
        {isSearchingByTelephoneNumber &&
          paginatedPatientsByTel?.map((patient) => (
            <div key={patient?.attributes?.id} className="patient">
              <p>
                {patient?.attributes?.firstName} {patient?.attributes?.lastName}
              </p>
              <hr />
              <p>{patient?.attributes?.telephoneNumber}</p>
              <hr />
              <p>{patient?.attributes?.email}</p>
            </div>
          ))}

        {/* Search results for patients by email */}
        {isSearchingByEmail &&
          paginatedPatientsByEmail?.map((patient) => (
            <div key={patient?.attributes?.id} className="patient">
              <p>
                {patient?.attributes?.firstName} {patient?.attributes?.lastName}
              </p>
              <hr />
              <p>{patient?.attributes?.telephoneNumber}</p>
              <hr />
              <p>{patient?.attributes?.email}</p>
            </div>
          ))}

        <div>
          <Pagination
            items={patients?.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </ViewPatientsTab>
  );
}

const ViewPatientsTab = styled.div`
  display: ${(props) => (props.isView ? "block" : "none")};
`;

export default ViewPatients;
