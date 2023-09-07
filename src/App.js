// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import Patients from "./components/Patients";
import Visits from "./components/Visits";
import ProtectedRoute from "./components/ProtectedRoutes";
import axios from "axios";
import Swal from "sweetalert2";

export const UserContext = React.createContext();

function App() {
  const [doctor, setDoctor] = useState();
  const [patients, setPatients] = useState();
  const [appointments, setAppointments] = useState();
  const [visits, setVisits] = useState();

  const navigator = useNavigate();

  async function loginDoctor(values, actions) {
    console.log("INSIDE ON SUBMIT FUNCTION FRONTEND");

    // API call to the server
    await axios
      .post(
        // `http://localhost:8080/api/v1/doctors/admin`
        `http://localhost:8080/api/v1/doctors/login`,
        {
          email: values.email,
          password: values.password,
        }
      )
      .then((response) => {
        console.log(response.data);
        // Resetting the form
        actions.resetForm();

        // Calling a sweet alert message
        Swal.fire({
          title: "Login Successful",
          text: "Redirecting you to your dashboard",
          timer: 2000,
          icon: "success",
        });

        navigator("/");
        localStorage.setItem("internistikaLoginToken", response.data.token);
        localStorage.setItem("doctor", JSON.stringify(response.data.doctor));
        setDoctor(response.data.doctor);
      })
      .catch((error) => {
        console.log(error);
        // Calling a sweet alert message
        Swal.fire({
          title: "An error occured",
          text: error.response.data.message,
          timer: 2000,
          icon: "error",
        });
      });
  }

  async function updateDoctor(values) {
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    await axios
      .patch(
        `http://localhost:8080/api/v1/doctors/update/${myDoctor?._id}`,
        values
      )
      .then((res) => {
        console.log("UPDATE RESPONSE:", res.data);
        setDoctor(res.data?.doctor);

        localStorage?.setItem("doctor", JSON.stringify(res.data?.doctor));

        Swal.fire({
          title: "Update Successful!",
          text: "Your details have been updated successfully.",
          timer: 2000,
          icon: "success",
        });

        // window.location.reload();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          text:
            err?.response?.data?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "error",
        });
      });
  }

  async function registerPatient(value) {
    console.log("HI HI");
    console.log("VALUESSSS:", value);
    const token = localStorage.getItem("internistikaLoginToken");

    await axios
      .post(`http://localhost:8080/api/v1/doctors/patients/create`, value)
      .then((res) => {
        console.log("UPDATE RESPONSE:", res.data);
        const newPatient = res.data;
        // setPatients(patients?.push(newPatient));
        Swal.fire({
          title: "Successful!",
          text: "Patient details have been saved successfully.",
          timer: 2000,
          icon: "success",
        });
        // navigator("/");
        // actions.resetForm();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Error",
          text:
            err?.response?.data?.error?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "error",
        });
      });
  }

  async function fetchPatients(values, actions) {
    const token = localStorage.getItem("internistikaLoginToken");
    await axios
      .get(`http://localhost:8080/api/v1/doctors/patients/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("FETCH PATIENTS RESPONSE:", res.data.data);
        setPatients(res.data.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Error",
          text:
            err?.response?.data?.error?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "success",
        });
      });
  }

  async function fetchAppointments() {
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    await axios
      .get(
        `http://localhost:8080/api/v1/doctors/appointments/get-doctor-appointments/${myDoctor?._id}`
      )
      .then((res) => {
        console.log("FETCH APPOINTMENTS RESPONSE:", res.data.data);
        setAppointments(res.data.appointments);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Error",
          text:
            err?.response?.data?.error?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "success",
        });
      });
  }

  async function addAppointment(value) {
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    console.log("VALUE:", value);

    await axios
      .post(
        `http://localhost:8080/api/v1/doctors/appointments/create/${myDoctor?._id}/${value?.patient}`,
        value
      )
      .then((res) => {
        console.log("ADD APPOINTMENTS RESPONSE:", res.data);
        fetchAppointments();
        Swal.fire({
          title: "Successful!",
          text: "Appointment details have been saved successfully.",
          timer: 2000,
          icon: "success",
        });
        // navigator("/");
      })
      .catch((err) => {
        console.log("add app ERROR:", err);
        Swal.fire({
          title: "Error",
          text:
            err?.response?.data?.error?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "error",
        });
      });
  }

  async function markAppointmentAsDone(id) {
    const token = localStorage.getItem("internistikaLoginToken");

    await axios
      .patch(`http://localhost:8080/api/v1/doctors/appointments/update/${id}`, {
        markedAsDone: true,
      })
      .then((res) => {
        console.log("MARKED AS DONE APPOINTMENT RESPONSE:", res.data);
        fetchAppointments();
        Swal.fire({
          title: "Successful!",
          text: "Appointment has been marked as done.",
          timer: 2000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Error",
          text:
            err?.response?.data?.error?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "error",
        });
      });
  }

  async function deleteAppointment(id) {
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    await axios
      .delete(`http://localhost:8080/api/v1/doctors/appointments/delete/${id}`)
      .then((res) => {
        console.log("DELETE APPOINTMENTS RESPONSE:", res.data);
        fetchAppointments();
        Swal.fire({
          title: "Successful!",
          text: "Appointment was deleted successfully.",
          timer: 2000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Error",
          text:
            err?.response?.data?.error?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "error",
        });
      });
  }

  async function addVisit(values) {
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    console.log("VISIT VALUES:", values);
    await axios
      .post(
        `http://localhost:8080/api/v1/doctors/visits/create/${myDoctor?._id}/${values?.patient}`,
        values
      )
      .then((res) => {
        console.log("ADD VISIT RESPONSE:", res.data);
        // const newVisit = res.data.data;
        // setVisits(visits.push({ newVisit }));
        // navigator("/");
        Swal.fire({
          title: "Successful!",
          text: "Visit details have been saved successfully.",
          timer: 2000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Error",
          text:
            err?.response?.data?.error?.message ||
            "An error occured, Please try again. If the problem persists, kindly logout and log back into your account, thank you!",
          timer: 2000,
          icon: "error",
        });
      });
  }

  async function fetchVisits() {
    const token = localStorage.getItem("internistikaLoginToken");

    await axios
      .get(`http://localhost:8080/api/v1/doctors/visits?populate=*`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        //   console.log("VISITS:", res.data);
        console.log("VISITSSSSSSS:", res.data.data);
        setVisits(res.data.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("internistikaLoginToken");
    const doctor = localStorage.getItem("doctor");

    if (isUserLoggedIn && doctor) {
      navigator("/");
      //   fetchPatients();
      //   fetchAppointments();
      //   fetchVisits();
      setDoctor(JSON.parse(doctor));
    } else {
      navigator("/login");
      Swal.fire({
        title: "Attention!",
        text: "You must be logged in to view your dashboard.",
        timer: 2000,
        icon: "info",
      });
    }
  }, []);

  return (
    <React.Fragment>
      <UserContext.Provider
        value={{
          loginDoctor,
          addAppointment,
          addVisit,
          updateDoctor,
          registerPatient,
          markAppointmentAsDone,
          deleteAppointment,
          setPatients,
          doctor,
          patients,
          appointments,
          visits,
        }}
      >
        <div className="app-wrapper">
          {/* {localStorage.getItem("internistikaLoginToken") && <Navbar />} */}
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/account" element={<Account />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/patients" element={<Patients />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/visits" element={<Visits />} />
            </Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
