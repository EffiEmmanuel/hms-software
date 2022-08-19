import React from 'react'
import './index.css'

function NavItem({ icon, text, link }) {
    return (
        <>
            <li className='nav-item'>
                <a className='nav-link' href={link}>
                    <img src={icon} alt={text} className='nav-link-icon' />
                    <span className='nav-link-text' >{text}</span>
                </a>
            </li>
        </>
    )
}

export default NavItem