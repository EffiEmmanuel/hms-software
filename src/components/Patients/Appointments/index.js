// @ts-nocheck
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../../App";
import AppointmentCard from "../../AppointmentCard";

function Appointments({ isAppointmentsTab }) {
  const [newAppointmentDisplay, setNewAppointmentDisplay] = useState("none");
  const [overlayDisplay, setOverlayDisplay] = useState("none");

  const { appointments } = useContext(UserContext);

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

      {/* <form className="form-container">
        <div className="fg-row patients" id="searchbar">
          <div className="form-group">
            <input
              type="text"
              name="firstname"
              className="form-control search"
              placeholder="🔍 Firstname  |"
            />
          </div>
          <div className="form-group patients-center">
            <input
              type="text"
              name="lastname"
              className="form-control search"
              placeholder="🔍 Lastname  |"
            />
          </div>
          <div className="form-group patients">
            <input
              type="text"
              name="date"
              className="form-control search"
              placeholder="🔍 Date  |"
              onFocus={(e) => (e.target.type = "date")}
            />
          </div>
          <div className="form-group patients">
            <input
              type="text"
              name="time"
              className="form-control search"
              placeholder="🔍 Time  |"
            />
          </div>
        </div>
      </form> */}

      <div className="appointments-list">
        <div className="table-title mt-5">
          <p>FIRSTNAME</p>
          <p>LASTNAME</p>
          <p>DATE</p>
          <p>TIME</p>
        </div>

        {appointments?.map((appointment) => (
          <AppointmentCard
            firstname={appointment?.attributes?.fullName.split(" ")[0]}
            lastname={appointment?.attributes?.fullName.split(" ")[1]}
            date={appointment?.attributes?.date}
            time={appointment?.attributes?.time}
          />
        ))}

        {appointments.length === 0 && (
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
          <form className="form-container">
            <div className="form-group">
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                className="form-control"
                id="new-appointment-fullname"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="date"
                className="form-control"
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
                id="new-appointment-time"
              />
            </div>
            <button
              type="submit"
              className="btn bg-success btn-dark submit-button register"
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
