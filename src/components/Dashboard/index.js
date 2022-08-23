import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import logoutIcon from '../../assets/icons/logout-black.png'
import patientsIcon from '../../assets/icons/total-patients.png'
import doctorsIcon from '../../assets/icons/doctor.png'
import visitsIcon from '../../assets/icons/schedule.png'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { makeAPICall } from '../../helpers/apiCall'
import StatCard from '../StatCard'

function Dashboard() {

  useDocumentTitle('Internistika | Dashboard')

  // const doctor = useContext(Doctor)

  const [schedule, setSchedule] = useState(undefined)
  const [patients, setPatients] = useState(0)
  const [doctors, setDoctors] = useState(0)
  const [totalVisits, setTotalVisits] = useState(0)

  // Schedule
  // useEffect(async () => {
  //   const { data, error } = await makeAPICall.get('/admin/schedule')
  //   data ? setSchedule(data) : console.log(error)
  // })

  // // Patients
  // useEffect(async () => {
  //   const { data, error } = await makeAPICall.get('/patients')
  //   data ? setPatients(data) : console.log(error)
  // })

  // // Doctors
  // useEffect(async () => {
  //   const { data, error } = await makeAPICall.get('/doctors')
  //   data ? setDoctors(data) : console.log(error)
  // })

  // // Total Visits
  // useEffect(async () => {
  //   const { data, error } = await makeAPICall.get('/totalVisits')
  //   data ? setTotalVisits(data) : console.log(error)
  // })

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
        <StatCard icon={patientsIcon} number={200} text='Patients' />
        <StatCard icon={doctorsIcon} number={5} text='Doctors' />
        <StatCard icon={visitsIcon} number={40} text='Total visits today' />
      </div>
    </div>
  )
}

export default Dashboard