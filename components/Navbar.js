import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons' 

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <FontAwesomeIcon icon={faEarthAmericas} />
                <p>my travel journal.</p>
            </div>
        </nav>
    )
}