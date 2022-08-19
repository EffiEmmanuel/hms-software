import { useFormik } from "formik";
import React, { useState } from "react";
import addVisitSchema from "./validation";

function AddVisitForm() {
  // ADD FILE BUTTONS
  const [rentgenFileName, setRentgenFileName] = useState("+");
  const [ctFileName, setCTFileName] = useState("+");
  const [echoFileName, setEchoFileName] = useState("+");

  const onSubmit = async (values, actions) => {};

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      patientName: "",
      rentgen: undefined,
      ctScan: undefined,
      echo: undefined,
      injections: "",
      drugs: "",
      diagnosis: "",
    },
    validationSchema: addVisitSchema,
    onSubmit,
  });

  return (
    <form className="form-container">
      <div className="fg-row d-flex justify-content-between">
        <div className="form-group">
          <label htmlFor="patient-name">Patient name</label>
          <input
            type="text"
            name="patientName"
            id="patient-name"
            className="form-control"
            value={values.patientName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.patientName && <p className="error">{errors.patientName}</p>}
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
              name="ctScan"
              id="ct-scan"
              className="form-control hidden"
              style={{ visibility: "hidden" }}
              value={values.ctScan}
              onChange={(e) => {
                setCTFileName("✔️");
                handleChange(e);
              }}
              multiple
            />
            {errors.ctScan && <p className="error">{errors.ctScan}</p>}
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
      >
        Register
      </button>
    </form>
  );
}

export default AddVisitForm;
