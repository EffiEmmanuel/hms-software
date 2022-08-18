import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../../forms/LoginForm";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./index.css";
// import axios from "axios";

function Login() {
  useDocumentTitle("Internistika | Login");

  return (
    <div className="login-container">
      <div className="left">
        <div className="overlay"></div>
        <div className="login-content">
          <h1>Internistika</h1>

          <div className="login-form-container">
            <h2>Sign in to your account.</h2>
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Login;
