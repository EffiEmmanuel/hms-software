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
      <div className="left overflow-hidden">
        <div className="overlay"></div>
        <div className="login-content">
          <h1 className="text-3xl font-bold text-center">Internistika</h1>
          <p className="text-sm mt-1 text-center">Sign in to your account.</p>

          <div className="mt-16">
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
