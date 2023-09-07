import React from "react";
import "./index.css";
import { FaSpinner } from "react-icons/fa";

function StatCard({ icon, number, text, isLoading }) {
  return (
    <div className="stat-card">
      {isLoading ? (
        <FaSpinner className="my-auto mx-auto text-center text-lg animate-spin" />
      ) : (
        <>
          <div className="stat-icon-wrapper">
            <img className="icon stat-icon" src={icon} alt={`${text}`} />
          </div>
          <div className="stat-details">
            <h5 className="text-xl font-bold">{number}</h5>
            <p className="text-sm">{text}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default StatCard;
