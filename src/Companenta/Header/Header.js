import React from 'react'
import "./Header.css"
import search from "../../Assets/Icons/Search.svg";
import chat from "../../Assets/Icons/Chat logo.svg"
import rupor from "../../Assets/Icons/Ovoz kuchaytirgich.svg"
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div id='header-container'>
            <form id='search-form'>
                <img src={search} alt="" />
                <input type="text" placeholder='Search here...' />
            </form>
            <div id="header-container-right">
                <Link to="/">
                    <img src={chat} alt="" />
                </Link>
                <Link to="/" >
                    <img src={rupor} alt="" />
                </Link>
                <div>
                    <div id='header-container-right-rectangle'>

                    </div>
                    <select>
                        <option value="">Uzb</option>
                        <option value="">Rus</option>
                        <option value="">Eng</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
