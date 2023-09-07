// @ts-nocheck
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import addVisitSchema from "./validation";
import "./index.css";
import axios from "axios";
import { uploadCloudinary } from "../../helpers/cloudinary";
import { FaSpinner } from "react-icons/fa";

function AddVisitForm() {
  const [isLoading, setIsLoading] = useState(false);
  // ADD FILE BUTTONS
  const [rentgenFileName, setRentgenFileName] = useState("+");
  const [ctFileName, setCTFileName] = useState("+");
  const [echoFileName, setEchoFileName] = useState("+");

  const [echoImages, setEchoImages] = useState();
  const [rentgenImages, setRentgenImages] = useState();
  const [ctImages, setCtImages] = useState();

  // LINKS
  const [rentgenLinks, setRentgenLinks] = useState();
  const [echoLinks, setEchoLinks] = useState();
  const [ctLinks, setCtLinks] = useState();

  //   UPLOAD STATE
  const [isRentgenUploaded, setIsRentgenUploaded] = useState(false);
  const [isEchoUploaded, setIsEchoUploaded] = useState(false);
  const [isCtUploaded, setIsCtUploaded] = useState(false);

  const { patients, addVisit } = useContext(UserContext);

  const [isRentgenUploading, setIsRentgenUploading] = useState(false);
  const [isEchoUploading, setIsEchoUploading] = useState(false);
  const [isCtUploading, setIsCtUploading] = useState(false);
  async function uploadRentgenImages(e) {
    e.preventDefault();
    setIsRentgenUploading(true);
    try {
      let arr = [];
      for (let i = 0; i < rentgenImages?.length; i++) {
        const data = await uploadCloudinary(rentgenImages[i]);
        arr.push(data.url);
        console.log("R:", data.url);
      }

      setRentgenLinks(arr);
      setIsRentgenUploading(false);
      setIsRentgenUploaded(true);
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function uploadEchoImages(e) {
    e.preventDefault();
    setIsEchoUploading(true);
    try {
      let arr = [];
      for (let i = 0; i < echoImages?.length; i++) {
        const data = await uploadCloudinary(echoImages[i]);
        arr.push(data.url);
      }

      setEchoLinks(arr);
      setIsEchoUploading(false);
      setIsEchoUploaded(true);
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  async function uploadCtImages(e) {
    e.preventDefault();
    setIsCtUploading(true);
    try {
      let arr = [];
      for (let i = 0; i < ctImages?.length; i++) {
        const data = await uploadCloudinary(ctImages[i]);
        arr.push(data.url);
      }

      setCtLinks(arr);
      setIsCtUploading(false);
      setIsCtUploaded(true);
    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  const onSubmit = async (values) => {
    setIsLoading(true);
    console.log("RENTGEN IMAGES:", rentgenImages);
    console.log("ECHO IMAGES:", echoImages);
    console.log("CT IMAGES:", ctImages);

    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    const value = {
      analysis: values.analysis,
      ct: ctLinks ?? "",
      echo: echoLinks ?? "",
      rentgen: rentgenLinks ?? "",
      diagnosis: values.diagnosis,
      drugs: values.drugs,
      injections: values.injections,
      patient: values.patient,
      doctor: myDoctor?._id,
      type: values.type,
    };
    addVisit(value);

    setRentgenFileName("+");
    setCTFileName("+");
    setEchoFileName("+");

    setIsRentgenUploaded(false);
    setIsCtUploaded(false);
    setIsEchoUploaded(false);

    setRentgenLinks([]);
    setEchoLinks([]);
    setCtLinks([]);

    setRentgenImages(null);
    setEchoImages(null);
    setCtImages(null);

    resetForm();
    setIsLoading(false);
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      patient: "",
      rentgen: "",
      ct: "",
      echo: "",
      type: "",
      injections: "",
      drugs: "",
      analysis: "",
      diagnosis: "",
    },
    validationSchema: addVisitSchema,
    onSubmit,
  });

  const [fetchedPatients, setFetchedPatients] = useState();

  async function getPatients(page) {
    setIsLoading(true);
    await axios
      .get(
        `http://localhost:8080/api/v1/doctors/patients/get-patients?page=${page}&limit=${20000}`
      )
      .then((res) => {
        console.log("FETCH PATIENTS RESPONSE:", res.data);
        setFetchedPatients(res.data.patients);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  useEffect(() => {
    getPatients(1);
  }, []);

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
    >
      <div className="w-full relative my-5">
        <label
          htmlFor="patient"
          className="text-xs absolute left-0 text-gray-400"
        >
          Patient
        </label>
        <select
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="patient"
          name="patient"
          value={values.patient}
          onChange={handleChange}
          placeholder="abc@example.com"
        >
          <option value="">--SELECT PATIENT--</option>
          {fetchedPatients?.map((patient) => (
            <option key={patient?._id} value={patient?._id}>
              {patient?.firstName} {patient?.lastName}
            </option>
          ))}
        </select>
        {errors.patient && (
          <p className="text-xs text-red-500 my-2">{errors.patient}</p>
        )}
      </div>

      <div className="">
        <div className="flex items-center gap-x-5">
          <div className="flex flex-col">
            {!isRentgenUploaded && (
              <div className="">
                <div className="add-file">
                  <label htmlFor="" className="text-xs text-gray-400">
                    Rentgen
                  </label>
                  <label
                    htmlFor="rentgen"
                    className="h-[50px] w-[50px] flex items-center justify-center text-2xl font-bold text-gray-400 border-[.3px] border-dashed border-gray-400 rounded-lg"
                  >
                    {rentgenFileName}
                  </label>
                </div>
                <input
                  disabled={isRentgenUploaded}
                  type="file"
                  accept="image/*"
                  name="rentgen"
                  id="rentgen"
                  className={`form-control hidden`}
                  style={{ visibility: "hidden" }}
                  value={values.rentgen}
                  onChange={(e) => {
                    setRentgenImages(e.target.files);
                    setRentgenFileName("✔️");
                    handleChange(e);
                  }}
                  multiple
                />
                {errors.rentgen && (
                  <p className="text-xs text-red-500 my-2">{errors.rentgen}</p>
                )}
              </div>
            )}

            {rentgenImages && (
              <button
                disabled={isRentgenUploaded}
                onClick={uploadRentgenImages}
                className={`h-10 px-3 text-xs rounded-lg mt-2 text-white ${
                  isRentgenUploaded ? "bg-gray-300" : "bg-gray-500"
                }`}
              >
                {!isRentgenUploading && (
                  <>
                    {!isRentgenUploaded
                      ? "Upload Rentgen"
                      : "Uploaded Rentgen ✔️"}
                  </>
                )}
                {isRentgenUploading && (
                  <FaSpinner className="my-auto mx-auto text-center text-lg animate-spin" />
                )}
              </button>
            )}
          </div>

          <div className="flex flex-col">
            {!isCtUploaded && (
              <div className="">
                <div className="add-file">
                  <label htmlFor="" className="text-xs text-gray-400">
                    CT Scan
                  </label>
                  <label
                    htmlFor="ct-scan"
                    className="h-[50px] w-[50px] flex items-center justify-center text-2xl font-bold text-gray-400 border-[.3px] border-dashed border-gray-400 rounded-lg"
                  >
                    {ctFileName}
                  </label>
                </div>
                <input
                  disabled={isCtUploaded}
                  type="file"
                  accept="image/*"
                  name="ct"
                  id="ct-scan"
                  className="form-control hidden"
                  style={{ visibility: "hidden" }}
                  value={values.ct}
                  onChange={(e) => {
                    setCtImages(e.target.files);
                    setCTFileName("✔️");
                    handleChange(e);
                  }}
                  multiple
                />
                {errors.ct && (
                  <p className="text-xs text-red-500 my-2">{errors.ct}</p>
                )}
              </div>
            )}

            {ctImages && (
              <button
                disabled={isCtUploaded}
                onClick={uploadCtImages}
                className={`h-10 px-3 text-xs rounded-lg mt-2 text-white ${
                  isCtUploaded ? "bg-gray-300" : "bg-gray-500"
                }`}
              >
                {!isCtUploading && (
                  <>{!isCtUploaded ? "Upload CT" : "Uploaded CT ✔️"}</>
                )}
                {isCtUploading && (
                  <FaSpinner className="my-auto mx-auto text-center text-lg animate-spin" />
                )}
              </button>
            )}
          </div>

          <div className="flex flex-col">
            {!isEchoUploaded && (
              <div className="">
                <div className="add-file">
                  <label htmlFor="" className="text-xs text-gray-400">
                    Echo
                  </label>
                  <label
                    htmlFor="echo"
                    className="h-[50px] w-[50px] flex items-center justify-center text-2xl font-bold text-gray-400 border-[.3px] border-dashed border-gray-400 rounded-lg"
                  >
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
                    console.log("e.target.value:", e.target.files);
                    setEchoImages(e.target.files);
                    setEchoFileName("✔️");
                    handleChange(e);
                  }}
                  multiple
                />
                {errors.echo && (
                  <p className="text-xs text-red-500 my-2">{errors.echo}</p>
                )}
              </div>
            )}

            {echoImages && (
              <button
                disabled={isEchoUploaded}
                onClick={uploadEchoImages}
                className={`h-10 px-3 text-xs rounded-lg mt-2 text-white ${
                  isEchoUploaded ? "bg-gray-300" : "bg-gray-500"
                }`}
              >
                {!isEchoUploading && (
                  <>{!isEchoUploaded ? "Upload Rentgen" : "Uploaded Echo ✔️"}</>
                )}
                {isEchoUploading && (
                  <FaSpinner className="my-auto mx-auto text-center text-lg animate-spin" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full relative my-5">
        <label htmlFor="type" className="text-xs absolute left-0 text-gray-400">
          Visit Type
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="type"
          type="text"
          name="type"
          value={values.type}
          onChange={handleChange}
          placeholder="Visit Type"
        />
        {errors.type && (
          <p className="text-xs text-red-500 my-2">{errors.type}</p>
        )}
      </div>

      <div className="w-full relative my-2">
        <label
          htmlFor="injections"
          className="text-xs absolute left-0 text-gray-400"
        >
          Injections
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="injections"
          type="text"
          name="injections"
          value={values.injections}
          onChange={handleChange}
          placeholder="Injections"
        />
        {errors.injections && (
          <p className="text-xs text-red-500 my-2">{errors.injections}</p>
        )}
      </div>

      <div className="w-full relative my-2">
        <label
          htmlFor="drugs"
          className="text-xs absolute left-0 text-gray-400"
        >
          Drugs
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="drugs"
          type="text"
          name="drugs"
          value={values.drugs}
          onChange={handleChange}
          placeholder="Drugs"
        />
        {errors.drugs && (
          <p className="text-xs text-red-500 my-2">{errors.drugs}</p>
        )}
      </div>

      <div className="w-full relative my-2">
        <label
          htmlFor="analysis"
          className="text-xs absolute left-0 text-gray-400"
        >
          Analysis
        </label>
        <textarea
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="analysis"
          type="text"
          name="analysis"
          value={values.analysis}
          onChange={handleChange}
          placeholder="Analysis"
        ></textarea>
        {errors.analysis && (
          <p className="text-xs text-red-500 my-2">{errors.analysis}</p>
        )}
      </div>

      <div className="w-full relative my-2">
        <label
          htmlFor="diagnosis"
          className="text-xs absolute left-0 text-gray-400"
        >
          Diagnosis
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="diagnosis"
          type="text"
          name="diagnosis"
          value={values.diagnosis}
          onChange={handleChange}
          placeholder="Diagnosis"
        />
        {errors.diagnosis && (
          <p className="text-xs text-red-500 my-2">{errors.diagnosis}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#1e64af] text-white h-10 w-32 rounded-lg mt-3 text-xs"
        onClick={() => onSubmit(values)}
      >
        {isLoading ? (
          <FaSpinner className="my-auto mx-auto text-center text-lg animate-spin" />
        ) : (
          "Add Visit"
        )}
      </button>
    </form>
  );
}

export default AddVisitForm;
