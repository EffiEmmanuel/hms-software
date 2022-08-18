import React, { useRef, useState } from 'react'
import './index.css'
import styled from 'styled-components'
import logoutIcon from '../../assets/icons/logout-black.png'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ReactToPrint from 'react-to-print'


// VISIT REPORT TEST PHOTOS
import rentgen1 from '../../assets/images/rentgen1.jpg'
import rentgen2 from '../../assets/images/rentgen2.jpg'
import rentgen3 from '../../assets/images/rentgen3.jpg'
import echo1 from '../../assets/images/echo1.jpg'
import echo2 from '../../assets/images/echo2.png'


function Visits() {

  useDocumentTitle('Internistika | Visits')

  const [currentTab, setCurrentTab] = useState(true)
  const [addVisitTab, setAddVisitTab] = useState(true)
  const [ViewVisitsTab, setViewVisitsTab] = useState(false)

  // ADD FILE BUTTONS
  const [rentgenFileName, setRentgenFileName] = useState('+')
  const [ctFileName, setCTFileName] = useState('+')
  const [echoFileName, setEchoFileName] = useState('+')

  // Overlay
  const [visitDetailDisplay, setVisitDetailDisplay] = useState('none')
  const [overlayDisplay, setOverlayDisplay] = useState('none')

  // Printing handler
  let componentRef = useRef()

  return (
    <div className='main-content' id='main'>
      <div className='overlay visits' style={{
        display: `${overlayDisplay}`
      }} onClick={() => {
        setOverlayDisplay('none')
        setVisitDetailDisplay('none')
      }} ></div>
      <div className='main-content-top'>
        <h3><span className='doctor-name hms-blue-text'>Dr Doe.</span></h3>
        <img src={logoutIcon} alt='Log out' className='nav-link-icon logout' />
      </div>

      <div className='main account'>
        <div className='navigation-tabs visits'>
          <NavigationTab className={`${currentTab && addVisitTab ? 'current-tab' : ''}`} isAddVisit={addVisitTab} onClick={() => {
            setViewVisitsTab(false)
            setAddVisitTab(true)
            setCurrentTab(true)
          }}>Add Visits</NavigationTab>

          <NavigationTab className={`${currentTab && ViewVisitsTab ? 'current-tab' : ''}`} isViewVisits={ViewVisitsTab} onClick={() => {
            setAddVisitTab(false)
            setViewVisitsTab(true)
            setCurrentTab(true)
          }}>View Visits</NavigationTab>

        </div>

        <div className='switching-tabs mt-5'>
          <AddVisit className='register-patient add-visit' isAddVisit={addVisitTab} >
            <form className='form-container'>
              <div className='fg-row d-flex justify-content-between'>
                <div className='form-group'>
                  <label htmlFor='patient-name'>Patient name</label>
                  <input
                    type='text'
                    name='patientName'
                    id='patient-name'
                    className='form-control'
                  />
                </div>

                <div className='image-upload mt-0 fg-row form-group'>
                  <div className='form-group'>
                    <div className='add-file'>
                      <label htmlFor=''>Rentgen</label>
                      <label htmlFor='rentgen' className='add-file-btn'>{rentgenFileName}</label>
                    </div>
                    <input
                      type='file'
                      accept='image/*'
                      name='rentgen'
                      id='rentgen'
                      className='form-control hidden'
                      style={{ visibility: 'hidden' }}
                      onChange={(e) => setRentgenFileName('✔️')}
                      multiple
                    />
                  </div>

                  <div className='form-group'>
                    <div className='add-file second'>
                      <label htmlFor=''>CT Scan</label>
                      <label htmlFor='ct-scan' className='add-file-btn'>{ctFileName}</label>
                    </div>
                    <input
                      type='file'
                      accept='image/*'
                      name='ctScan'
                      id='ct-scan'
                      className='form-control hidden'
                      style={{ visibility: 'hidden' }}
                      onChange={(e) => setCTFileName('✔️')}
                      multiple
                    />
                  </div>

                  <div className='form-group'>
                    <div className='add-file last'>
                      <label htmlFor=''>Echo</label>
                      <label htmlFor='echo' className='add-file-btn'>{echoFileName}</label>
                    </div>
                    <input
                      type='file'
                      accept='image/*'
                      name='echo'
                      id='echo'
                      className='form-control hidden'
                      style={{ visibility: 'hidden' }}
                      onChange={(e) => setEchoFileName('✔️')}
                      multiple
                    />
                  </div>
                </div>
              </div>

              <div className='fg-row'>
                <div className='form-group'>
                  <label htmlFor='injections'>Injections</label>
                  <input
                    type='text'
                    name='injections'
                    id='injections'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='drugs'>Drugs</label>
                  <input
                    type='text'
                    name='drugs'
                    id='drugs'
                    className='form-control'
                  />
                </div>
              </div>

              <div className='fg-row text-area'>
                <div className='form-group'>
                  <label htmlFor='diagnosis'>Diagnosis</label>
                  <textarea className='form-control' name='diagnosis' id='diagnosis'></textarea>
                </div>
              </div>


              <button type='submit' className='btn bg-success btn-dark submit-button register'>Register</button>

            </form>
          </AddVisit>

          <ViewVisits className='view-patients' isViewVisits={ViewVisitsTab} >

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

            <div className='visit-details-container' style={{
              display: `${visitDetailDisplay}`
            }}>
              <div className='visit-details'>
                {/* PRINT BUTTON */}
                <ReactToPrint
                  trigger={() => <button className='btn btn-primary btn-dark px-5 py-3'>Print</button>}
                  content={() => componentRef}
                  documentTitle='Visits Report'
                  pageStyle='print'
                />

                <div className='visit-report' ref={(el) => (componentRef = el)}>
                  <img src={logoutIcon} alt='Logo' className='print-logo' />

                  <div className='report-group'>
                    <h6>PATIENT:</h6>
                    <p>John Doe</p>
                  </div>

                  <hr />

                  <div className='report-group'>
                    <h6>RENTGEN:</h6>
                    <img src={rentgen2} alt='rentgen' className='report-img' />
                    <img src={rentgen2} alt='rentgen' className='report-img' />
                    <img src={rentgen2} alt='rentgen' className='report-img' />
                    {/* <img src={rentgen3} alt='rentgen' className='report-img' />
                    <img src={rentgen1} alt='rentgen' className='report-img' /> */}
                  </div>

                  <hr />

                  <div className='report-group'>
                    <h6>ECHO:</h6>
                    <img src={rentgen2} alt='rentgen' className='report-img' />
                    <img src={rentgen2} alt='rentgen' className='report-img' />
                    <img src={rentgen2} alt='rentgen' className='report-img' />
                  </div>

                  <hr />

                  <div className='report-group'>
                    <h6>INJECTIONS:</h6>
                    <ol>
                      <li>Injection 1</li>
                      <li>Injection 2</li>
                      <li>Injection 3</li>
                      <li>Injection 4</li>
                    </ol>
                  </div>

                  <hr />

                  <div className='report-group'>
                    <h6>DRUGS:</h6>
                    <ol>
                      <li>Drug 1</li>
                      <li>Drug 2</li>
                      <li>Drug 3</li>
                      <li>Drug 4</li>
                    </ol>
                  </div>

                  <hr />

                  <div className='report-group'>
                    <h6>DIAGNOSIS:</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, sapien nec luctus
                      vehicula, augue dolor tristique neque, non pellentesque est nibh vel sapien. Quisque mollis turpis ipsum,
                      ac iaculis purus mollis vitae. Fusce luctus lectus quis auctor faucibus. Maecenas bibendum fringilla risus nec
                      sollicitudin. Cras ac tempor arcu.
                    </p>
                  </div>

                  <hr />
                </div>
              </div>

            </div>


            <div className='patients-list visits'>
              <div className='table-title mt-5'>
                <p>FULLNAME</p>
                <p>LASTNAME</p>
                <p>TIME</p>
              </div>
              <ol className='visit-ol-print' id='visit-ol-print'>
                <li className='visit-item'>
                  <div className='patient' onClick={() => {
                    setOverlayDisplay('block')
                    setVisitDetailDisplay('flex')
                  }}>

                    <p>John</p>
                    <hr />
                    <p>Doe</p>
                    <hr />
                    <p>johndoe@gmail.com</p>
                  </div>
                </li>

                <li className='visit-item'>
                  <div className='patient' onClick={() => {
                    setOverlayDisplay('block')
                    setVisitDetailDisplay('flex')
                  }}>

                    <p>John</p>
                    <hr />
                    <p>Doe</p>
                    <hr />
                    <p>johndoe@gmail.com</p>
                  </div>
                </li>

                <li className='visit-item'>
                  <div className='patient' onClick={() => {
                    setOverlayDisplay('block')
                    setVisitDetailDisplay('flex')
                  }}>

                    <p>John</p>
                    <hr />
                    <p>Doe</p>
                    <hr />
                    <p>johndoe@gmail.com</p>
                  </div>
                </li>

                <li className='visit-item'>
                  <div className='patient' onClick={() => {
                    setOverlayDisplay('block')
                    setVisitDetailDisplay('flex')
                  }}>

                    <p>John</p>
                    <hr />
                    <p>Doe</p>
                    <hr />
                    <p>johndoe@gmail.com</p>
                  </div>
                </li>


              </ol>
            </div>
          </ViewVisits>
        </div>

      </div>
    </div >
  )
}

const NavigationTab = styled.a`
    text-decoration: none;
    color: black;
    position: relative;
    cursor:  pointer
`

const AddVisit = styled.div`
    display: ${props => props.isAddVisit ? 'block' : 'none'};
`

const ViewVisits = styled.div`
    display: ${props => props.isViewVisits ? 'block' : 'none'};
`

export default Visits