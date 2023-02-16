// @ts-nocheck
import React, { useContext } from "react";
import "./index.css";
import deleteIcon from "../../assets/icons/delete.png";
import doneIcon from "../../assets/icons/done.png";
import { UserContext } from "../../App";

function AppointmentCard({ id, firstname, lastname, date, time }) {
  const { markAppointmentAsDone, deleteAppointment } = useContext(UserContext);

  return (
    <div className="appointment">
      <div className="appointment-details">
        <p>{firstname}</p>
        <hr />
        <p>{lastname}</p>
        <hr />
        <p>{date}</p>
        <hr />
        <p>{time}</p>
      </div>
      <div className="action-buttons">
        <button className="delete" onClick={() => deleteAppointment(id)}>
          <img src={deleteIcon} alt="Delete" className="nav-link-icon" />
        </button>
        {/* <button className="done" onClick={() => markAppointmentAsDone(id)}>
          <img src={doneIcon} alt="Mark as done" className="nav-link-icon" />
        </button> */}
      </div>
    </div>
  );
}

export default AppointmentCard;
