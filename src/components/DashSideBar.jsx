import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DashSideBar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/loggedin/userdash">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    {/* <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> */}
                </a>
                <br /><br /><br />
                <nav className="sidebar">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink
                                to="/loggedin/userdash"
                                className={({ isActive }) => `nav-link  ${isActive ? "text-white fw-bold " : ""}`}
                            >
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>  <hr className="sidebar-divider" />
                        <li className="nav-item">
                            <NavLink
                                to="/loggedin/allbusiness"
                                className={({ isActive }) => `nav-link ${isActive ? "text-white fw-bold " : ""}`}
                            >
                                <i className="fas fa-building"></i>
                                <span>All Business</span>
                            </NavLink>
                        </li>  <hr className="sidebar-divider" />
                        <li className="nav-item">
                            <NavLink
                                to="/loggedin/addrestaurant"
                                className={({ isActive }) => `nav-link ${isActive ? "text-white fw-bold" : ""}`}
                            >
                                <i className="fas fa-folder-plus"></i>
                                <span>Add Restaurant</span>
                            </NavLink>
                        </li><hr className="sidebar-divider" />
                    </ul>
                </nav>




            </ul >
        </>
    )
}
