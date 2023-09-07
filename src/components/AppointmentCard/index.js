// @ts-nocheck
import React, { useContext } from "react";
import "./index.css";
import deleteIcon from "../../assets/icons/delete.png";
import doneIcon from "../../assets/icons/done.png";
import { UserContext } from "../../App";

function AppointmentCard({
  id,
  firstname,
  lastname,
  date,
  time,
  getAppointments,
}) {
  const { markAppointmentAsDone, deleteAppointment } = useContext(UserContext);

  return (
    <div className="py-5">
      <div className="flex w-full items-center border-b-[.3px] border-dashed border-b-gray-300 pb-3 mt-2">
        <p className="text-xs w-[20%]">{firstname}</p>
        {/* <hr /> */}
        <p className="text-xs w-[20%]">{lastname}</p>
        {/* <hr /> */}
        <p className="text-xs w-[20%]">{date?.split("T")[0]}</p>
        {/* <hr /> */}
        <p className="text-xs w-[20%]">{time}</p>

        <div className="action-buttons flex flex-col lg:flex-row gap-y-3">
          <button
            className="lg:my-[20px] lg:mx-[5px] h-[30px] w-[30px] "
            onClick={async () => {
              await deleteAppointment(id);
              await getAppointments(1);
            }}
          >
            <img src={deleteIcon} alt="Delete" className="nav-link-icon" />
          </button>
          <button
            className="lg:my-[20px] lg:mx-[5px] h-[30px] w-[30px] "
            onClick={async () => {
              await markAppointmentAsDone(id);
              await getAppointments(1);
            }}
          >
            <img src={doneIcon} alt="Mark as done" className="nav-link-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
