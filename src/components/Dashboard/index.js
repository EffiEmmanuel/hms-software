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
import {
  FaDoorClosed,
  FaDoorOpen,
  FaFileArchive,
  FaGofore,
  FaSignOutAlt,
} from "react-icons/fa";
import MainContentTop from "../MainContentTop";

function Dashboard() {
  useDocumentTitle("Internistika | Dashboard");

  const [doctors, setDoctors] = useState(0);
  const [visits, setVisits] = useState(0);
  const [patients, setPatients] = useState(0);
  const [visitsData, setVisitsData] = useState();

  const { doctor } = useContext(UserContext);

  console.log("VISITS:", visits);
  console.log("PATIENTES:", patients);

  useEffect(() => {
    async function getDoctors() {
      const token = localStorage.getItem("internistikaLoginToken");
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Doctors:", res.data);
          setDoctors(res.data?.length);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    async function getVisits() {
      const token = localStorage.getItem("internistikaLoginToken");
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/visits?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          //   console.log("VISITS:", res.data);
          console.log("VISITS:", res.data.data);
          setVisits(res.data.data.length);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    async function getVisitsData() {
      const token = localStorage.getItem("internistikaLoginToken");
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/visits?populate=*?pagination[start]=0&pagination[limit]=2&sort[0]=createdAt%3Adesc`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          //   console.log("VISITS:", res.data);
          console.log("VISITS:", res.data.data);
          setVisitsData(res.data.data);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    async function getPatients() {
      const token = localStorage.getItem("internistikaLoginToken");
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/patients`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Patients:", res.data.data);
          setPatients(res.data.data.length);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getDoctors();
    getVisits();
    getVisitsData();
    getPatients();
  }, []);

  return (
    <div className="main-content" id="main">
      <MainContentTop />

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
              {visitsData?.map((item, index) => (
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
        <StatCard icon={visitsIcon} number={visits} text="Total visits" />
      </div>
    </div>
  );
}

export default Dashboard;
