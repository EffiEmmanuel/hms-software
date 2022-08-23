import React from "react";
import "./index.css";

function StatCard({ icon, number, text }) {
  return (
    <div className="stat-card">
      <div className="stat-icon-wrapper">
        <img className="icon stat-icon" src={icon} alt={`${text}`} />
      </div>
      <div className="stat-details">
        <h5>{number}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default StatCard;
