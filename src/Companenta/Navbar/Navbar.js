import React from 'react'
import "./Navbar.css"
import mainLogo from "../../Assets/Icons/Main Logo.svg"
import Home from "../../Assets/Icons/Home icon.svg"
import Message from "../../Assets/Icons/Message.svg"
import Team from "../../Assets/Icons/Team.svg"
import Dollar from "../../Assets/Icons/Circle Dollar.svg"
import Javon from "../../Assets/Icons/Javon.svg"
import List from "../../Assets/Icons/List.svg"
import Hamyon from "../../Assets/Icons/Hamyon.svg"
import CreditCard from "../../Assets/Icons/25-credit card.svg"
import { NavLink } from 'react-router-dom'



export function Navbar() {
    return (
        <div className='sidebar-container'>
            <div className='logo-container'>
                <img src={mainLogo} alt="" />
                <p>Astraq</p>
            </div>
            <div className="sidebar-container-inside">
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/">
                        <img src={Home} alt="" />
                        <p id="navbar-text">Dashboard</p>
                    </NavLink>
                </div>
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/email">
                        <img src={Message} alt="" />
                        <p id="navbar-text">Email</p>
                    </NavLink>
                </div>
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/contact">
                        <img src={Team} alt="" />
                        <p id="navbar-text">Contact</p>
                    </NavLink>
                </div>
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/crypto">
                        <img src={Dollar} alt="" />
                        <p id="navbar-text">Crypto</p>
                    </NavLink>
                </div>
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/kanban">
                        <img src={Javon} alt="" />
                        <p id="navbar-text">Kanban</p>
                    </NavLink>
                </div>
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/invoice">
                        <img src={List} alt="" />
                        <p id="navbar-text">Invoice</p>
                    </NavLink>
                </div>
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/banking">
                        <img src={Hamyon} alt="" />
                        <p id="navbar-text">Banking</p>
                    </NavLink>
                </div>
                <div id='nav-item'>
                    <NavLink className="nav-link" activeclassname="active" to="/ticketing">
                        <img src={CreditCard} alt="" />
                        <p id='navbar-text'>Ticketing</p>
                    </NavLink>
                </div>
            </div >
        </div >
    )
}
