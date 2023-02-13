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
      <div className="form-group">
        <input
          type="email"
          name="email"
          id="email"
          className="form-control my-3"
          placeholder="Email address"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {/* Displaying the error to the user if it exists */}
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          id="password"
          className="form-control my-3 mt-4"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {/* Displaying the error to the user if it exists */}
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="btn submit-button mt-4"
        disabled={isSubmitting}
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
