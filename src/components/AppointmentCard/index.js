import React from 'react'
import './index.css'
import deleteIcon from '../../assets/icons/delete.png'
import doneIcon from '../../assets/icons/done.png'

function AppointmentCard({ id, firstname, lastname, date, time }) {
    return (
        <div className='appointment'>
            <div className='appointment-details'>
                <p>{firstname}</p>
                <hr />
                <p>{lastname}</p>
                <hr />
                <p>{date}</p>
                <hr />
                <p>{time}</p>
            </div>
            <div className='action-buttons'>
                <button className='delete'>
                    <img src={deleteIcon} alt='Delete' className='nav-link-icon' />
                </button>
                <button className='done'>
                    <img src={doneIcon} alt='Mark as done' className='nav-link-icon' />
                </button>
            </div>
        </div>
    )
}

export default AppointmentCard