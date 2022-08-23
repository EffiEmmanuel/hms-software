import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import registerPatientSchema from "./validation";
import handleFormSubmit from "../../helpers/handleFormSubmit";

function RegisterPatientForm() {
  const navigator = useNavigate();

  // The onsubmit handler
  const onSubmit = async (values, actions) => {
    const response = await handleFormSubmit(
      "admin/login",
      values,
      "Login Successful",
      "Redirecting you to your dashboard"
    );

    // Redirect
    if (response) {
      // Resetting form
      actions.resetForm();
      // redirecting
      navigator("/patients");
    }
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
      firstname: "",
      middlename: "",
      lastname: "",
      gender: "",
      dateOfBirth: "",
      bloodGroup: "",
      height: 0,
      weight: 0,
      profession: "",
      location: "",
      address: "",
      phone: "",
      email: "",
    },
    validationSchema: registerPatientSchema,
    onSubmit,
  });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="fg-row">
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="form-control"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="middlename">Middle name</label>
          <input
            type="text"
            name="middlename"
            id="middlename"
            className="form-control"
            value={values.middlename}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && <p className="error">{errors.middlename}</p>}
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
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && <p className="error">{errors.lastname}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
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
          {errors.firstname && <p className="error">{errors.gender}</p>}
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
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && <p className="error">{errors.dateOfBirth}</p>}
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
          />
          {errors.firstname && <p className="error">{errors.bloodGroup}</p>}
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
          />
          {errors.firstname && <p className="error">{errors.height}</p>}
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
          />
          {errors.firstname && <p className="error">{errors.weight}</p>}
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
          />
          {errors.firstname && <p className="error">{errors.profession}</p>}
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
          />
          {errors.firstname && <p className="error">{errors.location}</p>}
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
          />
          {errors.firstname && <p className="error">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="form-control"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && <p className="error">{errors.phone}</p>}
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
          />
          {errors.firstname && <p className="error">{errors.email}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="btn bg-success btn-dark submit-button register"
        disabled={isSubmitting}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterPatientForm;
