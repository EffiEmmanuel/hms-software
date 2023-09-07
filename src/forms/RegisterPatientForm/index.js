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
    registerPatient({ ...values });
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
    <form className="" onSubmit={handleSubmit}>
      <div className="w-full relative my-5">
        <label
          htmlFor="firstName"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          First Name
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="firstName"
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        {errors.firstName && (
          <p className="text-xs text-red-500 my-2">{errors.firstName}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="middleName"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Middle Name
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="middleName"
          type="text"
          name="middleName"
          value={values.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
        />
        {errors.middleName && (
          <p className="text-xs text-red-500 my-2">{errors.middleName}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="lastName"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Last Name
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="lastName"
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <p className="text-xs text-red-500 my-2">{errors.lastName}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="gender"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Gender
        </label>
        <select
          name="gender"
          id="gender"
          className="w-full lg:max-w-lg h-14 border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
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
            <option value="prefer not to mention">Prefer not to mention</option>
          </optgroup>
        </select>
        {errors.gender && (
          <p className="text-xs text-red-500 my-2">{errors.gender}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="dateOfBirth"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Date of Birth
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="dateOfBirth"
          type="date"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          placeholder="Date of birth"
        />
        {errors.dateOfBirth && (
          <p className="text-xs text-red-500 my-2">{errors.dateOfBirth}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="bloodGroup"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Blood Group
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="bloodGroup"
          type="text"
          name="bloodGroup"
          value={values.bloodGroup}
          onChange={handleChange}
          placeholder="Blood Group"
        />
        {errors.bloodGroup && (
          <p className="text-xs text-red-500 my-2">{errors.bloodGroup}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="height"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Height(cm)
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="height"
          type="number"
          name="height"
          value={values.height}
          onChange={handleChange}
          placeholder="Height"
        />
        {errors.height && (
          <p className="text-xs text-red-500 my-2">{errors.height}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="weight"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Weight(lb)
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="weight"
          type="number"
          name="weight"
          value={values.weight}
          onChange={handleChange}
          placeholder="weight"
        />
        {errors.weight && (
          <p className="text-xs text-red-500 my-2">{errors.weight}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="profession"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Profession
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="profession"
          type="text"
          name="profession"
          value={values.profession}
          onChange={handleChange}
          placeholder="Professioin"
        />
        {errors.profession && (
          <p className="text-xs text-red-500 my-2">{errors.profession}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="location"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Location (City)
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="location"
          type="text"
          name="location"
          value={values.location}
          onChange={handleChange}
          placeholder="Location"
        />
        {errors.location && (
          <p className="text-xs text-red-500 my-2">{errors.location}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="address"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Address
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="address"
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          placeholder="Address"
        />
        {errors.address && (
          <p className="text-xs text-red-500 my-2">{errors.address}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="telephoneNumber"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Telephone Number
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="telephoneNumber"
          type="tel"
          name="telephoneNumber"
          value={values.telephoneNumber}
          onChange={handleChange}
          placeholder="Telephone Number"
        />
        {errors.telephoneNumber && (
          <p className="text-xs text-red-500 my-2">{errors.telephoneNumber}</p>
        )}
      </div>

      <div className="w-full relative my-5">
        <label
          htmlFor="email"
          className="text-xs absolute left-0 text-solyntaYellow"
        >
          Email
        </label>
        <input
          className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="abc@example.com"
        />
        {errors.email && (
          <p className="text-xs text-red-500 my-2">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#1e64af] text-white h-10 w-32 rounded-lg mt-3"
        disabled={isSubmitting}
        onClick={() => onSubmit(values)}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterPatientForm;
