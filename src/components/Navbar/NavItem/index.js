import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function NavItem({ icon, text, link }) {
    return (
        <>
            <li className='nav-item'>
                <Link className='nav-link' to={link}>
                    <img src={icon} alt={text} className='nav-link-icon' />
                    <span className='nav-link-text' >{text}</span>
                </Link>
            </li>
        </>
    )
}

export default NavItem