import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import useDocumentTitle from '../../hooks/useDocumentTitle'
import './index.css'

function Login() {

    useDocumentTitle('Internistika | Login')

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const navigator = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        
        navigator('/dashboard')
    }

    return (
        <div className='login-container'>
            <div className='left'>
                <div className='overlay'></div>
                <div className='login-content'>
                    <h1>Internistika</h1>

                    <div className='login-form-container'>
                        <h2>Sign in to your account.</h2>
                        <form className='form-container mt-4' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='username'
                                    id='username'
                                    className='form-control my-3'
                                    placeholder='Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    className='form-control my-3 mt-4'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
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