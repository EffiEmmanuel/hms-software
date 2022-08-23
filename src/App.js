import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import Patients from "./components/Patients";
import Visits from "./components/Visits";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useContext();

  // const LoginContext = React.createContext(false);
  return (
    <React.Fragment>
      {/* <LoginContext.Provider> */}
      <div className="app-wrapper">
        {sessionStorage.getItem('internistikaLoginToken') && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/patients" element={<Patients />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/visits" element={<Visits />} />
          </Route>
        </Routes>
      </div>
      {/* </LoginContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
