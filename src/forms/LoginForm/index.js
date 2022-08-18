import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import loginSchema from "./validation";
import './index.css'
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigator = useNavigate()

    // TO-DO: Implement reCaptcha here

    // The onsubmit handler
  const onSubmit = async (values, actions) => {

    // API call to the server
    await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/login`, {
        values
    })
    .then(response => {
        console.log(response)
        // Resetting the form
        actions.resetForm()

        // Calling a sweet alert message
        Swal.fire({
            title: 'Login Successful',
            text: 'Redirecting you to your dashboard',
            timer: 2000,
            icon: 'success'
        });

        // Redirect to dashboard
        navigator('/dashboard')
    })
    .catch(error => {
        console.log(error)
        // Calling a sweet alert message
        Swal.fire({
            title: 'An error occured',
            text: 'We were unable to process your request at this time. Please try again.',
            timer: 2000,
            icon: 'error    '
        });

        // DELETE THIS LINE LATER
        navigator('/dashboard')
    })
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
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form className="form-container mt-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="username"
          id="username"
          className="form-control my-3"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {/* Displaying the error to the user if it exists */}
        {errors.username && <p className="error">{ errors.username }</p>}
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
        {errors.password && <p className="error">{ errors.password }</p>}
      </div>

      <button type="submit" className="btn submit-button mt-4" disabled={isSubmitting}>
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
