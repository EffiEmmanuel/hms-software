import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import Patients from './components/Patients';
import Visits from './components/Visits';

function App() {
  return (
    <React.Fragment>
      <div className='app-wrapper'>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/account' element={ <Account /> } />
          <Route path='/patients' element={ <Patients /> } />
          <Route path='/visits' element={ <Visits /> } />
        </Routes>
      </div>

    </React.Fragment>
  );
}

export default App;
