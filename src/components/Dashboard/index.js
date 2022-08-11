import React from 'react'
import './index.css'
import logoutIcon from '../../assets/icons/logout-black.png'
import patientsIcon from '../../assets/icons/total-patients.png'
import doctorsIcon from '../../assets/icons/doctor.png'
import visitsIcon from '../../assets/icons/schedule.png'

function Dashboard() {
  return (
    <div className='main-content' id='main'>
      <div className='main-content-top'>
        <h3>Welcome back, <span className='doctor-name hms-blue-text'>Dr Doe.</span></h3>
        <img src={logoutIcon} alt='Log out' className='nav-link-icon logout-icon' />
      </div>

      <div className='banner'></div>

      <div className='top-schedule'>
        <h4>Top Schedule</h4>

        <div className='schedule-table'>
          <div className='table-title'>
            <p>FULLNAME</p>
            <p>DATE</p>
            <p>TIME</p>
          </div>

          <div className='table-content'>
            <div className='table-item'>
              <p>John Doe</p>
              <p>26/07/2022</p>
              <p>4:50PM</p>
            </div>
            <div className='table-item plain'>
              <p>John Doe</p>
              <p>26/07/2022</p>
              <p>4:50PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className='stats'>
        <div className='stat-card'>
          <div className='stat-icon-wrapper'>
            <img className='icon stat-icon' src={patientsIcon} alt='Patients' />
          </div>
          <div className='stat-details'>
            <h5>200</h5>
            <p>Patients</p>
          </div>
        </div>

        <div className='stat-card'>
          <div className='stat-icon-wrapper'>
            <img className='icon stat-icon' src={doctorsIcon} alt='Doctors' />
          </div>
          <div className='stat-details'>
            <h5>3</h5>
            <p>Doctors</p>
          </div>
        </div>

        <div className='stat-card'>
          <div className='stat-icon-wrapper'>
            <img className='icon stat-icon' src={visitsIcon} alt='Visits' />
          </div>
          <div className='stat-details'>
            <h5>200</h5>
            <p>Total visits today</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard