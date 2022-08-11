import React from 'react'
import './index.css'

function Login() {
    return (
        <div className='login-container'>
            <div className='left'>
                <div className='overlay'></div>
                <div className='login-content'>
                    <h1>Internistika</h1>

                    <div className='login-form-container'>
                        <h2>Sign in to your account.</h2>
                        <form className='form-container mt-4'>
                            <div className='form-group'>
                                <input type='text' name='username' id='username' className='form-control my-3' placeholder='Username' />
                            </div>
                            <div className='form-group'>
                                <input type='password' name='password' id='password' className='form-control my-3 mt-4' placeholder='Password' />
                            </div>

                            <button type='submit' className='btn submit-button mt-4'>Sign in</button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='right'>
                <div className='overlay'></div>
            </div>
        </div>
    )
}

export default Login