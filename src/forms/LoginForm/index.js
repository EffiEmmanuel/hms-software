import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import loginSchema from "./validation";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function LoginForm() {
  const navigator = useNavigate();

  const { loginDoctor } = useContext(UserContext);
  // TO-DO: Implement reCaptcha here

  // The onsubmit handler
  const onSubmit = async (values, actions) => {
    console.log("INSIDE ON SUBMIT FUNCTION FRONTEND");
    loginDoctor(values, actions, navigator);
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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form className="form-container mt-4" onSubmit={handleSubmit}>
      <div className="w-full relative my-2">
        <label
          htmlFor="email"
          className="text-sm absolute left-0 text-solyntaYellow"
        >
          Email Address
        </label>
        <input
          className="w-full h-14 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email Address"
        />

        <p className="text-left mt-3 text-xs">
          {errors.email ? errors.email : ""}
        </p>
      </div>
      <div className="w-full relative my-2">
        <label
          htmlFor="password"
          className="text-sm absolute left-0 text-solyntaYellow"
        >
          Password
        </label>
        <input
          className="w-full h-14 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="********"
        />

        <p className="text-left mt-3 text-xs">
          {errors.password ? errors.password : ""}
        </p>
      </div>

      <button
        type="submit"
        className="h-14 hover:bg-[#181818] transition-all hover:border-none px-7 py-2 w-full mt-2 rounded-lg border-[0.5px] border-[#fff] text-white"
        disabled={isSubmitting}
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
