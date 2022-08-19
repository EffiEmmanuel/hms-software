import React from "react";
import styled from "styled-components";

function ViewPatients({ isViewPatientsTab }) {
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
          <p>DATE</p>
          <p>TIME</p>
        </div>
        <div className="patient">
          <p>John</p>
          <hr />
          <p>Doe</p>
          <hr />
          <p>johndoe@gmail.com</p>
        </div>
        <div className="patient">
          <p>John</p>
          <hr />
          <p>Doe</p>
          <hr />
          <p>johndoe@gmail.com</p>
        </div>
        <div className="patient">
          <p>John</p>
          <hr />
          <p>Doe</p>
          <hr />
          <p>johndoe@gmail.com</p>
        </div>
        <div className="patient">
          <p>John</p>
          <hr />
          <p>Doe</p>
          <hr />
          <p>johndoe@gmail.com</p>
        </div>
        <div className="patient">
          <p>John</p>
          <hr />
          <p>Doe</p>
          <hr />
          <p>johndoe@gmail.com</p>
        </div>
        <div className="patient">
          <p>John</p>
          <hr />
          <p>Doe</p>
          <hr />
          <p>johndoe@gmail.com</p>
        </div>
      </div>
    </ViewPatientsTab>
  );
}

const ViewPatientsTab = styled.div`
  display: ${(props) => (props.isView ? "block" : "none")};
`;

export default ViewPatients;
