import React, { useState } from 'react'
import './index.css'
import styled from 'styled-components'
import logoutIcon from '../../assets/icons/logout-black.png'
import plusIcon from '../../assets/icons/patients-icon2.png'
import AppointmentCard from '../AppointmentCard'
import useDocumentTitle from '../../hooks/useDocumentTitle'


function Patients() {

    useDocumentTitle('Internistika | Patients')

    const [currentTab, setCurrentTab] = useState(true)
    const [registerTab, setRegisterTab] = useState(true)
    const [viewTab, setViewTab] = useState(false)
    const [appointmentTab, setAppointmentTab] = useState(false)

    const [newAppointmentDisplay, setNewAppointmentDisplay] = useState('none')
    const [overlayDisplay, setOverlayDisplay] = useState('none')

    return (
        <div className='main-content' id='main'>
            <div className='add-appointment-overlay' style={{
                display: `${overlayDisplay}`
            }} onClick={() => {
                setOverlayDisplay('none')
                setNewAppointmentDisplay('none')
            }} ></div>

            <div className='main-content-top'>
                <h3><span className='doctor-name hms-blue-text'>Dr Doe.</span></h3>
                <img src={logoutIcon} alt='Log out' className='nav-link-icon logout' />
            </div>

            <div className='main account'>
                <div className='navigation-tabs'>
                    <NavigationTab className={`${currentTab && registerTab ? 'current-tab' : ''}`} isRegister={registerTab} onClick={() => {
                        setViewTab(false)
                        setAppointmentTab(false)
                        setRegisterTab(true)
                        setCurrentTab(true)
                    }}>Register Patients</NavigationTab>

                    <NavigationTab className={`${currentTab && viewTab ? 'current-tab' : ''}`} isView={viewTab} onClick={() => {
                        setViewTab(true)
                        setAppointmentTab(false)
                        setRegisterTab(false)
                        setCurrentTab(true)
                    }}>View Patients</NavigationTab>

                    <NavigationTab className={`${currentTab && appointmentTab ? 'current-tab' : ''}`} isAppointment={appointmentTab} onClick={() => {
                        setViewTab(false)
                        setAppointmentTab(true)
                        setRegisterTab(false)
                        setCurrentTab(true)
                    }}>Appointments</NavigationTab>

                </div>

                <div className='switching-tabs mt-5'>
                    <RegisterPatient className='register-patient' isRegister={registerTab} >
                        <form className='form-container'>
                            <div className='fg-row'>
                                <div className='form-group'>
                                    <label htmlFor='firstname'>Firstname</label>
                                    <input
                                        type='text'
                                        name='firstname'
                                        id='firstname'
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='middlename'>Middle name</label>
                                    <input
                                        type='text'
                                        name='middlename'
                                        id='middlename'
                                        className='form-control'
                                    />
                                </div>
                            </div>

                            <div className='fg-row'>
                                <div className='form-group'>
                                    <label htmlFor='lastname'>Lastname</label>
                                    <input
                                        type='text'
                                        name='lastname'
                                        id='lastname'
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='gender'>Gender</label>
                                    <select
                                        name='gender'
                                        id='gender'
                                        className='form-control'
                                    >
                                        <optgroup>
                                            <option value='' disabled>Select Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='prefer not to mention'>Prefer not to mention</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>

                            <div className='fg-row'>
                                <div className='form-group'>
                                    <label htmlFor='date-of-birth'>Date of birth</label>
                                    <input
                                        type='text'
                                        name='dateOfBirth'
                                        id='date-of-birth'
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='blood-group'>Blood group</label>
                                    <input
                                        type='text'
                                        name='blood-group'
                                        id='blood-group'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='fg-row'>
                                <div className='form-group'>
                                    <label htmlFor='height'>Height (cm)</label>
                                    <input
                                        type='number'
                                        name='height'
                                        id='height'
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='weight'>Weight (lb)</label>
                                    <input
                                        type='number'
                                        name='weight'
                                        id='weight'
                                        className='form-control'
                                    />
                                </div>
                            </div>

                            <div className='fg-row'>
                                <div className='form-group'>
                                    <label htmlFor='profession'>Profession</label>
                                    <input
                                        type='text'
                                        name='profession'
                                        id='profession'
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='location'>Location (city)</label>
                                    <input
                                        type='text'
                                        name='location'
                                        id='location'
                                        className='form-control'
                                    />
                                </div>
                            </div>

                            <div className='fg-row'>
                                <div className='form-group'>
                                    <label htmlFor='address'>Address</label>
                                    <input
                                        type='text'
                                        name='address'
                                        id='address'
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='phone'>Phone</label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        id='phone'
                                        className='form-control'
                                    />
                                </div>
                            </div>

                            <div className='fg-row'>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='form-control'
                                    />
                                </div>
                            </div>


                            <button type='submit' className='btn bg-success btn-dark submit-button register'>Register</button>

                        </form>
                    </RegisterPatient>

                    <ViewPatients className='view-patients' isView={viewTab} >
                        <form className='form-container'>
                            <div className='fg-row patients'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='search'
                                        className='form-control search'
                                        placeholder='🔍 Firstname  |'
                                    />
                                </div>
                                <div className='form-group patients-center'>
                                    <input
                                        type='text'
                                        name='search'
                                        className='form-control search'
                                        placeholder='🔍 Lastname  |'
                                    />
                                </div>
                                <div className='form-group patients'>
                                    <input
                                        type='text'
                                        name='search'
                                        className='form-control search'
                                        placeholder='🔍 Email  |'
                                    />
                                </div>
                            </div>
                        </form>

                        <div className='patients-list'>
                            <div className='patient'>
                                <p>John</p>
                                <hr />
                                <p>Doe</p>
                                <hr />
                                <p>johndoe@gmail.com</p>
                            </div>
                            <div className='patient'>
                                <p>John</p>
                                <hr />
                                <p>Doe</p>
                                <hr />
                                <p>johndoe@gmail.com</p>
                            </div>
                            <div className='patient'>
                                <p>John</p>
                                <hr />
                                <p>Doe</p>
                                <hr />
                                <p>johndoe@gmail.com</p>
                            </div>
                            <div className='patient'>
                                <p>John</p>
                                <hr />
                                <p>Doe</p>
                                <hr />
                                <p>johndoe@gmail.com</p>
                            </div>
                            <div className='patient'>
                                <p>John</p>
                                <hr />
                                <p>Doe</p>
                                <hr />
                                <p>johndoe@gmail.com</p>
                            </div>
                            <div className='patient'>
                                <p>John</p>
                                <hr />
                                <p>Doe</p>
                                <hr />
                                <p>johndoe@gmail.com</p>
                            </div>
                        </div>
                    </ViewPatients>

                    <Appointments className='view-patients' isAppointment={appointmentTab} >
                        <form className='form-container'>
                            <div className='fg-row patients' id='searchbar'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='firstname'
                                        className='form-control search'
                                        placeholder='🔍 Firstname  |'
                                    />
                                </div>
                                <div className='form-group patients-center'>
                                    <input
                                        type='text'
                                        name='lastname'
                                        className='form-control search'
                                        placeholder='🔍 Lastname  |'
                                    />
                                </div>
                                <div className='form-group patients'>
                                    <input
                                        type='text'
                                        name='date'
                                        className='form-control search'
                                        placeholder='🔍 Date  |'
                                        onFocus={(e) => e.target.type = 'date'}
                                    />
                                </div>
                                <div className='form-group patients'>
                                    <input
                                        type='text'
                                        name='time'
                                        className='form-control search'
                                        placeholder='🔍 Time  |'
                                    />
                                </div>
                            </div>
                        </form>


                        <div className='appointments-list'>
                            <AppointmentCard firstname='John' lastname='Doe' date='26/07/2022' time='6:30PM' />
                            <AppointmentCard firstname='Jane' lastname='Doe' date='26/07/2022' time='6:50PM' />
                            <AppointmentCard firstname='Mia' lastname='Doe' date='26/07/2022' time='7:30PM' />
                            <AppointmentCard firstname='Felix' lastname='Doe' date='26/07/2022' time='7:50PM' />

                            <button className='add-appointment' onClick={() => {
                                setOverlayDisplay('block')
                                setNewAppointmentDisplay('block')
                            }}>
                                {/* <img src={plusIcon} alt='Add new appointment' className='nav-link-icon add-appointment-icon' /> */}
                                +
                            </button>
                        </div>

                        <div className='new-appointment' style={{
                            display: `${newAppointmentDisplay}`
                        }}>
                            <h2>New Appointment</h2>
                            <form className='form-container'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='fullname'
                                        id='fullname'
                                        placeholder='Fullname'
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='date'
                                        className='form-control'
                                        placeholder='Date'
                                        onFocus={(e) => e.target.type = 'date'}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='time'
                                        id='time'
                                        placeholder='Time'
                                        className='form-control'
                                    />
                                </div>
                                <button type='submit' className='btn bg-success btn-dark submit-button register'>Add</button>

                            </form>
                        </div>
                    </Appointments>
                </div>

            </div>
        </div>
    )
}

const NavigationTab = styled.a`
    text-decoration: none;
    color: black;
    position: relative;
    cursor:  pointer
`

const RegisterPatient = styled.div`
    display: ${props => props.isRegister ? 'block' : 'none'};
`

const ViewPatients = styled.div`
    display: ${props => props.isView ? 'block' : 'none'};
`

const Appointments = styled.div`
    display: ${props => props.isAppointment ? 'block' : 'none'};
`

export default Patients