import React from "react";
import styled from "styled-components";

function RegisterPatient({ isRegisterTab }) {
  return (
    <RegisterPatientTab className="register-patient" isRegister={isRegisterTab}>
      <form className="form-container">
        <div className="fg-row">
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="middlename">Middle name</label>
            <input
              type="text"
              name="middlename"
              id="middlename"
              className="form-control"
            />
          </div>
        </div>

        <div className="fg-row">
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" className="form-control">
              <optgroup>
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer not to mention">
                  Prefer not to mention
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className="fg-row">
          <div className="form-group">
            <label htmlFor="date-of-birth">Date of birth</label>
            <input
              type="text"
              name="dateOfBirth"
              id="date-of-birth"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="blood-group">Blood group</label>
            <input
              type="text"
              name="blood-group"
              id="blood-group"
              className="form-control"
            />
          </div>
        </div>
        <div className="fg-row">
          <div className="form-group">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              name="height"
              id="height"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (lb)</label>
            <input
              type="number"
              name="weight"
              id="weight"
              className="form-control"
            />
          </div>
        </div>

        <div className="fg-row">
          <div className="form-group">
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              name="profession"
              id="profession"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location (city)</label>
            <input
              type="text"
              name="location"
              id="location"
              className="form-control"
            />
          </div>
        </div>

        <div className="fg-row">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-control"
            />
          </div>
        </div>

        <div className="fg-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn bg-success btn-dark submit-button register"
        >
          Register
        </button>
      </form>
    </RegisterPatientTab>
  );
}

const RegisterPatientTab = styled.div`
  display: ${(props) => (props.isRegister ? "block" : "none")};
`;

export default RegisterPatient;
