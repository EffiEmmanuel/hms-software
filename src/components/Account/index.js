import React from 'react'
import './index.css'
import logoutIcon from '../../assets/icons/logout-black.png'
import useDocumentTitle from '../../hooks/useDocumentTitle'

function Account() {

    useDocumentTitle('Internistika | Account')

    return (
        <div className='main-content' id='main'>
            <div className='main-content-top'>
                <h3><span className='doctor-name hms-blue-text'>Dr Doe.</span></h3>
                <img src={logoutIcon} alt='Log out' className='nav-link-icon logout' />
            </div>

            <main className='main account'>
                <h4>Profile</h4>

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
                            <label htmlFor='lastname'>Lastname</label>
                            <input
                                type='text'
                                name='lastname'
                                id='lastname'
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
                            <label htmlFor='address'>Address</label>
                            <input
                                type='text'
                                name='address'
                                id='address'
                                className='form-control'
                            />
                        </div>
                        {/* <div className='form-group'>
                            <label htmlFor='lastname'>Lastname</label>
                            <input
                                type='text'
                                name='lastname'
                                id='lastname'
                                className='form-control'
                            />
                        </div> */}
                    </div>


                    <button type='submit' className='btn bg-success btn-dark submit-button'>Save</button>

                </form>
            </main>
        </div>
    )
}

export default Account