
import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul className="menu">
               <Link to="/"> <li className="menu-item">Home</li></Link>
                <Link to="/movies"><li className="menu-item">Movies</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar