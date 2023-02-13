// @ts-nocheck
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../App";

function ViewPatients({ isViewPatientsTab }) {
  const { patients } = useContext(UserContext);

  console.log("PATIEEEENNNTTTTSSS:", patients);

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

      <div className="patients-list">
        <div className="table-title mt-5">
          <p>FULLNAME</p>
          <p>TELEPHONE NUMBER</p>
          <p>EMAIL ADDRESS</p>
        </div>
        {patients?.map((patient) => (
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
      </div>
    </ViewPatientsTab>
  );
}

const ViewPatientsTab = styled.div`
  display: ${(props) => (props.isView ? "block" : "none")};
`;

export default ViewPatients;
