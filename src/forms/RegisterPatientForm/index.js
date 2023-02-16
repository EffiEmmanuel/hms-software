// @ts-nocheck
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import registerPatientSchema from "./validation";
import handleFormSubmit from "../../helpers/handleFormSubmit";
import { UserContext } from "../../App";
import "./index.css";

function RegisterPatientForm() {
  const navigator = useNavigate();

  const { registerPatient } = useContext(UserContext);

  // The onsubmit handler
  const onSubmit = async (values) => {
    const value = {
      ...values,
      visits: [],
    };
    registerPatient(value);
  };

  //   Formik handlers
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      bloodGroup: "",
      height: 0,
      weight: 0,
      profession: "",
      location: "",
      address: "",
      telephoneNumber: "",
      email: "",
    },
    validationSchema: registerPatientSchema,
    onSubmit,
  });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="fg-row">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. John"
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle name</label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            className="form-control"
            value={values.middleName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. Snow"
          />
          {errors.middleName && <p className="error">{errors.middleName}</p>}
        </div>
      </div>

      <div className="fg-row">
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. Doe"
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div
          className="form-group"
          style={{
            width: "",
          }}
        >
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              backgroundColor: "transparent",
              borderRadius: "5px",
              width: "100%",
            }}
          >
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
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
      </div>

      <div className="fg-row">
        <div className="form-group">
          <label htmlFor="date-of-birth">Date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="date-of-birth"
            className="form-control"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="blood-group">Blood group</label>
          <input
            type="text"
            name="bloodGroup"
            id="blood-group"
            className="form-control"
            value={values.bloodGroup}
            onChange={handleChange}
            placeholder="Eg. 0+"
          />
          {errors.bloodGroup && <p className="error">{errors.bloodGroup}</p>}
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
            value={values.height}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. 176"
          />
          {errors.height && <p className="error">{errors.height}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (lb)</label>
          <input
            type="number"
            name="weight"
            id="weight"
            className="form-control"
            value={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. 138"
          />
          {errors.weight && <p className="error">{errors.weight}</p>}
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
            value={values.profession}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. Lawyer"
          />
          {errors.profession && <p className="error">{errors.profession}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="location">Location (city)</label>
          <input
            type="text"
            name="location"
            id="location"
            className="form-control"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. Vienna"
          />
          {errors.location && <p className="error">{errors.location}</p>}
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
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. 12 ABC Estate, Vienna City"
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="telephoneNumber">Telephone number</label>
          <input
            type="tel"
            name="telephoneNumber"
            id="telephoneNumber"
            className="form-control"
            value={values.telephoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. +37745225699"
          />
          {errors.telephoneNumber && (
            <p className="error">{errors.telephoneNumber}</p>
          )}
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
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg. abc@example.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="btn bg-success btn-dark submit-button register"
        disabled={isSubmitting}
        onClick={() => onSubmit(values)}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterPatientForm;
