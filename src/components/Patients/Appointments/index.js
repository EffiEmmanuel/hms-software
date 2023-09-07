// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import styled from "styled-components";
import Swal from "sweetalert2";
import { UserContext } from "../../../App";
import AppointmentCard from "../../AppointmentCard";
import axios from "axios";
import Modal from "react-modal";

function Appointments({ isAppointmentsTab }) {
  const [isNewAppointment, setIsNewAppointment] = useState(false);
  const [overlayDisplay, setOverlayDisplay] = useState("none");

  //   const [fullName, setFullName] = useState("");
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { appointments, addAppointment, patients } = useContext(UserContext);
  const [patientDropdownValues, setPatientDropdownValues] = useState();

  useEffect(() => {
    //   Formatting patients to fit react-dropdown-select package
    let values = [];
    patients?.forEach((patient) => {
      console.log("PATIENT:", patient);
      values?.push({
        id: `${patient.id}`,
        name: `${patient.attributes.firstName} ${patient.attributes.lastName}`,
      });
    });
    setPatientDropdownValues(values);
  }, [patients]);

  async function handleSubmit(e) {
    e?.preventDefault();
    if (!patient || !date || !time) {
      Swal.fire({
        title: "Attention!",
        text: "Please fill in the missing fields",
        timer: 2000,
        icon: "info",
      });
      return;
    }

    const value = {
      patient,
      date,
      time,
    };

    await addAppointment(value);
    await getAppointments(1);
  }

  const [isLoading, setIsLoading] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const [fetchedAppointments, setFetchedAppointments] = useState();
  const [pages, setPages] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  async function getAppointments(myPage) {
    setIsLoading(true);
    const myDoctor = JSON.parse(localStorage.getItem("doctor"));
    console.log("DDDD:", myDoctor);
    console.log("DDDD:", myPage);
    await axios
      .get(
        `http://localhost:8080/api/v1/doctors/appointments/get-doctor-appointments/${
          myDoctor?._id
        }?page=${myPage}&limit=${2}`
      )
      .then((res) => {
        console.log("FETCH APPOINTMENTS RESPONSE:", res.data);
        setFetchedAppointments(res.data.appointments);
        if (!(myPage < 1) && res.data?.appointments?.length == 0) {
          setIsNextDisabled(true);
          setPages(myPage - 1);
        } else {
          setFetchedAppointments(res.data.appointments);
        }

        setIsLoading(false);
      })
      .catch((err) => {
        console.log("FETH APPOINTMENT ERROR:", err);
      });
  }

  useEffect(() => {
    if (isAppointmentsTab) {
      console.log("PAGES:", currentPage);
      getAppointments(currentPage);
    }
  }, [currentPage, isAppointmentsTab]);

  const [fetchedPatients, setFetchedPatients] = useState();

  async function getPatients(page) {
    setIsLoading(true);
    await axios
      .get(
        `http://localhost:8080/api/v1/doctors/patients/get-patients?page=${page}&limit=${20000}`
      )
      .then((res) => {
        console.log("FETCH PATIENTS RESPONSE:", res.data);
        setFetchedPatients(res.data.patients);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  useEffect(() => {
    if (isAppointmentsTab) getPatients(1);
  }, [isAppointmentsTab]);

  return (
    <>
      <Modal
        isOpen={isNewAppointment}
        onRequestClose={() => setIsNewAppointment(false)}
        className="bg-red-500 max-w-lg mx-auto mt-[120px]"
      >
        <div className="h-[450px] shadow-lg p-14 bg-white text-center">
          <div className="">
            <h2 className="font-semibold text-lg mb-6">New Appointment</h2>
            <form className="" onSubmit={(e) => handleSubmit(e)}>
              <div className="w-full relative my-5">
                <label
                  htmlFor="firstName"
                  className="text-xs absolute left-0 text-solyntaYellow"
                >
                  Patient
                </label>
                <select
                  className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={patient}
                  onChange={(e) => setPatient(e.target.value)}
                >
                  <option value="">--SELECT-PATIENT--</option>
                  {fetchedPatients?.map((patient) => (
                    <option key={patient?._id} value={`${patient?._id}`}>
                      {patient?.firstName} {patient?.lastName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full relative my-5">
                <label
                  htmlFor="date"
                  className="text-xs absolute left-0 text-solyntaYellow"
                >
                  Date
                </label>
                <input
                  className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
                  id="date"
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="w-full relative my-5">
                <label
                  htmlFor="time"
                  className="text-xs absolute left-0 text-solyntaYellow"
                >
                  Time
                </label>
                <input
                  className="lg:max-w-lg w-full h-12 text-xs border-gray-300 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
                  id="time"
                  type="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-[#1e64af] text-white h-10 w-32 rounded-lg mt-3"
                onClick={(e) => handleSubmit(e)}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </Modal>

      <AppointmentsTab
        className="view-patients"
        isAppointment={isAppointmentsTab}
      >
        <div className="appointments-list">
          <div className="table-title mt-5">
            <p className="w-[20%]">FIRSTNAME</p>
            <p className="w-[20%]">LASTNAME</p>
            <p className="w-[20%]">DATE</p>
            <p className="w-[20%]">TIME</p>
            <p className="w-[20%]">ACTIONS</p>
          </div>

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
            <h5 style={{ textAlign: "center" }} className="text-xs my-10">
              There is nothing to show here for now...
            </h5>
          )}

          <button
            className="add-appointment"
            onClick={() => {
              setIsNewAppointment(true);
            }}
          >
            {/* <img src={plusIcon} alt='Add new appointment' className='nav-link-icon add-appointment-icon' /> */}
            +
          </button>
        </div>

        {/* <div
          className="new-appointment-container"
          style={{
            display: `${newAppointmentDisplay}`,
          }}
        >
          <div className="new-appointment">
            <h2>New Appointment</h2>
            <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <Select
                  options={patientDropdownValues}
                  name="fullName"
                  id="fullName"
                  labelField="name"
                  valueField="id"
                  value={fullName}
                  onChange={setFullName}
                  closeOnSelect={true}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Date"
                  id="new-appointment-date"
                  onFocus={(e) => (e.target.type = "date")}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="time"
                  placeholder="Time"
                  className="form-control"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  id="new-appointment-time"
                />
              </div>
              <button
                type="submit"
                className="btn bg-success btn-dark submit-button register"
                onClick={(e) => handleSubmit(e)}
              >
                Add
              </button>
            </form>
          </div>
        </div> */}

        <div className="flex justify-center gap-x-5 text-sm">
          <button
            disabled={isPreviousDisabled}
            className="h-10 w-32 bg-[#181818] text-xs text-white rounded-lg disabled:bg-gray-300"
            onClick={() => {
              setIsNextDisabled(false);
              const previousPage = currentPage - 1;
              if (!(previousPage < 1)) {
                setCurrentPage(currentPage - 1);
              } else if (currentPage >= 1) {
                setIsPreviousDisabled(true);
              } else {
                setIsPreviousDisabled(true);
              }
            }}
          >
            Previous Page
          </button>
          <button
            disabled={isNextDisabled}
            className="h-10 w-32 bg-[#1e64af] text-xs text-white rounded-lg disabled:bg-gray-300"
            onClick={() => {
              if (isPreviousDisabled) setIsPreviousDisabled(false);
              setCurrentPage(currentPage + 1);
              if (!fetchedAppointments || fetchedAppointments?.length == 0) {
                setIsNextDisabled(true);
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            Next Page
          </button>
        </div>
      </AppointmentsTab>
    </>
  );
}

const AppointmentsTab = styled.div`
  display: ${(props) => (props.isAppointment ? "block" : "none")};
`;

export default Appointments;
