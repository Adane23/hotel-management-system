import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [showAccount, setShowAccount] = useState(false);

    const handleAccountClick = () => {
        setShowAccount(!showAccount);
    }

    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 stick-top'>
            <div className='container-fluid'>
                <Link to={"/"}>
                    <span className='hotel-color'>
                        Megenagna Hotel
                    </span>
                </Link>
                <button 
                className='navbar-toggler' 
                type='button' data-bs-toggle='collapse' data-bs-target='#navbarScroll' aria-controls='navbarScroll' 
                aria-expanded='false' 
                aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarScroll'>
                    <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
                        <li className='nav-item'>
                            <NavLink className="nav-link" aria-current="page" to={"/browse-all-rooms"}>Browse All Rooms</NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink className="nav-link" aria-current="page" to={"/admin"}>Admin</NavLink>
                        </li>
                    </ul>

                    <ul className='d-flex navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to={"/find-booking"}>Find My Booking</NavLink>
                        </li>

                        <li className='nav-item dropdown'>
                            <a 
                            className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
                            href='#'
                            role='button'
                            data-bs-toggle='dropdown'
                            aria-expanded={false}
                            onClick={handleAccountClick}
                            >
                            {}
                            Account
                            </a>

                            <ul
                            className={`dropdown-menu ${showAccount ? "show" : ""}`}
                            aria-labelledby='navbarDropdown'
                            >
                                <li>
                                    <Link className='dropdown-item' to={"/login"} >Login
                                    </Link>
                                </li>

                                <li>
                                    <Link className='dropdown-item' to={"/profile"} >Profile
                                    </Link>
                                </li>
                                <li>
                                    <hr className='dropdown-divider'></hr>
                                </li>

                                <li>
                                    <Link  className='dropdown-item' to={"/logout"}>
                                    Logout 
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
