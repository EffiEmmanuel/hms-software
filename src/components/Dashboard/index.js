// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import logoutIcon from "../../assets/icons/logout-black.png";
import patientsIcon from "../../assets/icons/total-patients.png";
import doctorsIcon from "../../assets/icons/doctor.png";
import visitsIcon from "../../assets/icons/schedule.png";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { makeAPICall } from "../../helpers/apiCall";
import StatCard from "../StatCard";
import axios from "axios";
import VisitCard from "../VisitCard";
import { UserContext } from "../../App";

function Dashboard() {
  useDocumentTitle("Internistika | Dashboard");

  // const doctor = useContext(Doctor)
  const [visits, setVisits] = useState([]);
  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [totalVisits, setTotalVisits] = useState(0);

  const { doctor } = useContext(UserContext);

  console.log("DOCTORRRRRRR:========", doctor);

  //   Schedule
  //   useEffect(async () => {
  //     const { data, error } = await makeAPICall.get("/admin/schedule");
  //     data ? setSchedule(data) : console.log(error);
  //   });

  useEffect(() => {
    async function getVisits() {
      await axios
        .get("http://localhost:1337/api/visits?populate=*")
        .then((res) => {
          //   console.log("VISITS:", res.data);
          console.log("VISITS:", res.data.data);
          setVisits(res.data.data);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    async function getPatients() {
      await axios
        .get("http://localhost:1337/api/patients")
        .then((res) => {
          console.log("Patients:", res.data.data);
          setPatients(res.data.data.length);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    async function getDoctors() {
      await axios
        .get("http://localhost:1337/api/users")
        .then((res) => {
          console.log("Doctors:", res.data);
          setDoctors(res.data.length);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }

    getVisits();
    getPatients();
    getDoctors();
  }, []);

  // // Doctors
  // useEffect(async () => {
  //   const { data, error } = await makeAPICall.get('/doctors')
  //   data ? setDoctors(data) : console.log(error)
  // })

  // // Total Visits
  // useEffect(async () => {
  //   const { data, error } = await makeAPICall.get('/totalVisits')
  //   data ? setTotalVisits(data) : console.log(error)
  // })

  return (
    <div className="main-content" id="main">
      <div className="main-content-top">
        <h3>
          Welcome back,{" "}
          <span className="doctor-name hms-blue-text">{doctor?.username}.</span>
        </h3>
        <img
          src={logoutIcon}
          alt="Log out"
          className="nav-link-icon logout-icon"
          onClick={() => {
            localStorage.removeItem("internistikaLoginToken");
            navigator("/login");
          }}
        />
      </div>

      <div className="banner"></div>

      <div className="top-schedule">
        <h4>Top Schedule</h4>

        <div className="schedule-table">
          <div className="table-title">
            <p>FULLNAME</p>
            <p>VISIT TYPE</p>
            <p>DIAGNOSIS</p>
          </div>

          <div className="table-content">
            <>
              {visits?.map((item, index) => (
                <div
                  key={index}
                  className={`table-item ${!index % 2 == 0 ? "plain" : ""}`}
                >
                  <p>
                    {item?.attributes?.patient?.data?.attributes?.firstName}{" "}
                    {item?.attributes?.patient?.data?.attributes?.lastName}
                  </p>
                  <p>{item?.attributes?.type}</p>
                  <p>{item?.attributes?.diagnosis}</p>
                </div>
              ))}
            </>
          </div>
        </div>
      </div>

      <div className="stats">
        <StatCard icon={patientsIcon} number={patients} text="Patients" />
        <StatCard icon={doctorsIcon} number={doctors} text="Doctors" />
        <StatCard
          icon={visitsIcon}
          number={visits.length}
          text="Total visits"
        />
      </div>
    </div>
  );
}

export default Dashboard;
