// @ts-nocheck
import React from "react";
import styled from "styled-components";
import RegisterPatientForm from "../../../forms/RegisterPatientForm";

function RegisterPatient({ isRegisterTab }) {
  return (
    <RegisterPatientTab className="register-patient" isRegister={isRegisterTab}>
      <RegisterPatientForm />
    </RegisterPatientTab>
  );
}

const RegisterPatientTab = styled.div`
  display: ${(props) => (props.isRegister ? "block" : "none")};
`;

export default RegisterPatient;
