// @ts-nocheck
import { useFormik } from "formik";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import addVisitSchema from "./validation";

function AddVisitForm() {
  // ADD FILE BUTTONS
  const [rentgenFileName, setRentgenFileName] = useState("+");
  const [ctFileName, setCTFileName] = useState("+");
  const [echoFileName, setEchoFileName] = useState("+");

  const { patients, addVisit } = useContext(UserContext)

  const onSubmit = async (values) => {
    addVisit(values)
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      patient: "",
      rentgen: undefined,
      ct: undefined,
      echo: undefined,
      type: "",
      injections: "",
      drugs: "",
      analysis: "",
      diagnosis: "",
    },
    validationSchema: addVisitSchema,
    onSubmit,
  });

  return (
    <form className="form-container" onSubmit={(e) => {
        e.preventDefault()
        onSubmit(values)
        }}>
      <div className="fg-row d-flex justify-content-between">
        <div className="form-group">
          <label htmlFor="patient-name">Patient</label> <br />
          <select name="patient" id="patient" className="form-control" onChange={handleChange} value={values.patient}>
            <option value="">--SELECT PATIENT--</option>
            {patients?.map(patient => (
                <option value={patient?.id}>{patient?.attributes?.firstName} {patient?.attributes?.lastName}</option>
            ))}
          </select>
          {errors.patient && <p className="error">{errors.patient}</p>}
        </div>

        <div className="image-upload mt-0 fg-row form-group">
          <div className="form-group">
            <div className="add-file">
              <label htmlFor="">Rentgen</label>
              <label htmlFor="rentgen" className="add-file-btn">
                {rentgenFileName}
              </label>
            </div>
            <input
              type="file"
              accept="image/*"
              name="rentgen"
              id="rentgen"
              className="form-control hidden"
              style={{ visibility: "hidden" }}
              value={values.rentgen}
              onChange={(e) => {
                setRentgenFileName("✔️");
                handleChange(e);
              }}
              multiple
            />
            {errors.rentgen && <p className="error">{errors.rentgen}</p>}
          </div>

          <div className="form-group">
            <div className="add-file second">
              <label htmlFor="">CT Scan</label>
              <label htmlFor="ct-scan" className="add-file-btn">
                {ctFileName}
              </label>
            </div>
            <input
              type="file"
              accept="image/*"
              name="ct"
              id="ct-scan"
              className="form-control hidden"
              style={{ visibility: "hidden" }}
              value={values.ct}
              onChange={(e) => {
                setCTFileName("✔️");
                handleChange(e);
              }}
              multiple
            />
            {errors.ct && <p className="error">{errors.ct}</p>}
          </div>

          <div className="form-group">
            <div className="add-file last">
              <label htmlFor="">Echo</label>
              <label htmlFor="echo" className="add-file-btn">
                {echoFileName}
              </label>
            </div>
            <input
              type="file"
              accept="image/*"
              name="echo"
              id="echo"
              className="form-control hidden"
              style={{ visibility: "hidden" }}
              value={values.echo}
              onChange={(e) => {
                setEchoFileName("✔️");
                handleChange(e);
              }}
              multiple
            />
            {errors.echo && <p className="error">{errors.echo}</p>}
          </div>
        </div>
      </div>

      <div className="fg-row">
        <div className="form-group">
          <label htmlFor="injections">Visit Type</label>
          <input
            type="text"
            name="type"
            id="type"
            className="form-control"
            value={values.type}
            onChange={handleChange}
          />
          {errors.type && <p className="error">{errors.type}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="injections">Injections</label>
          <input
            type="text"
            name="injections"
            id="injections"
            className="form-control"
            value={values.injections}
            onChange={handleChange}
          />
          {errors.injections && <p className="error">{errors.injections}</p>}
        </div>
      </div>

      <div className="form-group">
          <label htmlFor="drugs">Drugs</label>
          <input
            type="text"
            name="drugs"
            id="drugs"
            className="form-control"
            value={values.drugs}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.drugs && <p className="error">{errors.drugs}</p>}
        </div>

      <div className="fg-row text-area">
        <div className="form-group">
          <label htmlFor="analysis">Analysis</label>
          <textarea
            className="form-control"
            name="analysis"
            id="analysis"
            value={values.analysis}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.analysis && <p className="error">{errors.analysis}</p>}
        </div>
      </div>

      <div className="fg-row text-area">
        <div className="form-group">
          <label htmlFor="diagnosis">Diagnosis</label>
          <textarea
            className="form-control"
            name="diagnosis"
            id="diagnosis"
            value={values.diagnosis}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.diagnosis && <p className="error">{errors.diagnosis}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="btn bg-success btn-dark submit-button register"
        onClick={() => onSubmit(values)}
      >
        Register
      </button>
    </form>
  );
}

export default AddVisitForm;
