import React from 'react'
import homeIcon from '../../assets/icons/home-icon.png'
import accountIcon from '../../assets/icons/account-icon.png'
import patientsIcon from '../../assets/icons/patients-icon2.png'
import visitsIcon from '../../assets/icons/visits-icon.png'
import logoutIcon from '../../assets/icons/logout-white.png'
import NavItem from '../NavItem'
import './index.css'

function Navbar() {
  return (
    <nav className='app-navbar'>
      <div className='overlay'></div>
      <div className='app-navbar-content'>
        <h2>Internistika</h2>
        <ul>
          <NavItem icon={homeIcon} text='Home' link='/dashboard' />
          <NavItem icon={accountIcon} text='Account' link='/account' />
          <NavItem icon={patientsIcon} text='Patients' link='/patients' />
          <NavItem icon={visitsIcon} text='Visits' link='/visits' />
          <NavItem icon={logoutIcon} text='Log out' link='/logout' />
        </ul>
      </div>


    </nav>
  )
}

export default Navbar