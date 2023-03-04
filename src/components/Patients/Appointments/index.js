// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import styled from "styled-components";
import Swal from "sweetalert2";
import { UserContext } from "../../../App";
import AppointmentCard from "../../AppointmentCard";

function Appointments({ isAppointmentsTab }) {
  const [newAppointmentDisplay, setNewAppointmentDisplay] = useState("none");
  const [overlayDisplay, setOverlayDisplay] = useState("none");

  const [fullName, setFullName] = useState("");
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
    if (!fullName || !date || !time) {
      Swal.fire({
        title: "Attention!",
        text: "Please fill in the missing fields",
        timer: 2000,
        icon: "info",
      });
      return;
    }

    const value = {
      fullName: fullName[0].name,
      date,
      time,
    };

    console.log("FULLNAME:", value.fullName);

    addAppointment(value);
  }

  return (
    <AppointmentsTab
      className="view-patients"
      isAppointment={isAppointmentsTab}
    >
      <div
        className="add-appointment-overlay"
        style={{
          display: `${overlayDisplay}`,
        }}
        onClick={() => {
          setOverlayDisplay("none");
          setNewAppointmentDisplay("none");
        }}
      ></div>

      <div className="appointments-list">
        <div className="table-title mt-5">
          <p>FIRSTNAME</p>
          <p>LASTNAME</p>
          <p>DATE</p>
          <p>TIME</p>
        </div>

        {appointments?.map((appointment) => {
          return (
            <AppointmentCard
              firstname={appointment?.attributes?.fullName.split(" ")[0]}
              lastname={appointment?.attributes?.fullName.split(" ")[1]}
              date={appointment?.attributes?.date}
              time={appointment?.attributes?.time}
              id={appointment?.id}
            />
          );
        })}

        {appointments?.length === 0 && (
          <h5 style={{ textAlign: "center", marginTop: "40px" }}>
            There is nothing to show here for now...
          </h5>
        )}

        <button
          className="add-appointment"
          onClick={() => {
            setOverlayDisplay("block");
            setNewAppointmentDisplay("flex");
          }}
        >
          {/* <img src={plusIcon} alt='Add new appointment' className='nav-link-icon add-appointment-icon' /> */}
          +
        </button>
      </div>

      <div
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
      </div>
    </AppointmentsTab>
  );
}

const AppointmentsTab = styled.div`
  display: ${(props) => (props.isAppointment ? "block" : "none")};
`;

export default Appointments;
