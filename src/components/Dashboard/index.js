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
import Navbar from "../Navbar";
import AppointmentCard from "../AppointmentCard";

function Dashboard() {
  useDocumentTitle("Internistika | Dashboard");

  const [doctors, setDoctors] = useState(0);
  const [visits, setVisits] = useState(0);
  const [patients, setPatients] = useState(0);
  const [visitsData, setVisitsData] = useState();

  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const { doctor } = useContext(UserContext);

  console.log("VISITS:", visits);
  console.log("PATIENTES:", patients);
  console.log("DOCTOR:", doctor);

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

  const [fetchedAppointments, setFetchedAppointments] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getAppointments() {
    setIsLoading(true);
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    await axios
      .get(
        `http://localhost:8080/api/v1/doctors/appointments/get-doctor-appointments/${
          myDoctor?._id
        }?page=${1}&limit=${5}`
      )
      .then((res) => {
        console.log("FETCH APPOINTMENTS RESPONSE:", res.data);
        setFetchedAppointments(res.data.appointments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("FETH APPOINTMENT ERROR:", err);
      });
  }

  useEffect(() => {
    getAppointments();
  }, []);

  const [patientCount, setPatientCount] = useState();
  const [appointmentCount, setAppointmentCount] = useState();
  const [visitCount, setVisitCount] = useState();

  async function getStats() {
    setIsLoading(true);
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));

    await axios
      .get(`http://localhost:8080/api/v1/doctors/statistics/${myDoctor?._id}`)
      .then((res) => {
        console.log("FETCH stats RESPONSE:", res.data);
        setAppointmentCount(res.data.appointments);
        setPatientCount(res.data.patients);
        setVisitCount(res.data.visits);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log("FETH APPOINTMENT ERROR:", err);
      });
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <Navbar isNavBarVisible={isNavBarVisible} page="home" />

      <div
        className="pt-[30px] pr-[35px] pb-[15px] lg:pl-[21%] px-[1.5rem] w-full"
        id="main"
      >
        <MainContentTop
          setIsNavBarVisible={setIsNavBarVisible}
          isNavBarVisible={isNavBarVisible}
        />

        <div className="banner"></div>

        <div className="stats my-10">
          <StatCard
            icon={patientsIcon}
            number={patientCount ?? 0}
            text="Patients"
            isLoading={isLoading}
          />
          <StatCard
            icon={doctorsIcon}
            number={appointmentCount ?? 0}
            text="Appointments"
            isLoading={isLoading}
          />
          <StatCard
            icon={visitsIcon}
            number={visitCount ?? 0}
            text="Total visits"
            isLoading={isLoading}
          />
        </div>

        <div className="top-schedule">
          <h4 className="text-xl">Top Schedule</h4>

          <div className="schedule-table">
            {fetchedAppointments?.length > 0 && (
              <div className="table-title mt-3">
                <p className="w-[20%]">FIRSTNAME</p>
                <p className="w-[20%]">LASTNAME</p>
                <p className="w-[20%]">DATE</p>
                <p className="w-[20%]">TIME</p>
                <p className="w-[20%]">ACTIONS</p>
              </div>
            )}

            <div className="table-content">
              <>
                {fetchedAppointments?.map((appointment) => {
                  return (
                    <AppointmentCard
                      firstname={appointment?.patient?.firstName}
                      lastname={appointment?.patient?.lastName}
                      date={appointment?.date}
                      time={appointment?.time}
                      id={appointment?._id}
                      getAppointments={getAppointments}
                    />
                  );
                })}

                {fetchedAppointments?.length == 0 && (
                  <h5
                    style={{ textAlign: "center" }}
                    className="text-xs my-10 mb-20"
                  >
                    There is nothing to show here for now...
                  </h5>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
