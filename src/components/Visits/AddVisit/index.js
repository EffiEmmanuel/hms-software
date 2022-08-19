import React, { useState } from "react";
import "../index.css";
import styled from "styled-components";
import AddVisitForm from "../../../forms/AddVisitForm";

function AddVisit({ isAddVisit }) {
  return (
    <AddVisitTab className="register-patient add-visit" isAddVisit={isAddVisit}>
      <AddVisitForm />
    </AddVisitTab>
  );
}

const AddVisitTab = styled.div`
  display: ${(props) => (props.isAddVisit ? "block" : "none")};
`;

export default AddVisit;
