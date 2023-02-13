// @ts-nocheck
import React, { useContext, useState } from "react";
import "./index.css";
import logoutIcon from "../../assets/icons/logout-black.png";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { UserContext } from "../../App";

function Account() {
  useDocumentTitle("Internistika | Account");
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const { doctor, updateDoctor } = useContext(UserContext);

  return (
    <div className="main-content" id="main">
      <div className="main-content-top">
        <h3>
          <span className="doctor-name hms-blue-text">{doctor?.username}.</span>
        </h3>
        <img src={logoutIcon} alt="Log out" className="nav-link-icon logout" />
      </div>

      <main className="main account">
        <h4>Profile</h4>

        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            updateDoctor({ username, email });
          }}
        >
          <div className="fg-row">
            <div className="form-group">
              <label htmlFor="firstname">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                defaultValue={doctor?.username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="fg-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={doctor?.email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-success btn-dark submit-button"
          >
            Save
          </button>
        </form>
      </main>
    </div>
  );
}

export default Account;
