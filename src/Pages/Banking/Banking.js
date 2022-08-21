import React from 'react'
import "./Banking.css"
import { Header } from "../../Companenta/Header/Header"
import kokSt from "../../Assets/Images/Blue Statistics Banking.png"
import pushtiSt from "../../Assets/Images/Pink Statistics Banking.png"
import bankingSt from "../../Assets/Images/Bankking Statistics.png"
import topIcon from "../../Assets/Icons/Up.svg"
import downIcon from "../../Assets/Icons/Down.svg"



export function Banking() {
    return (
        <div id="banking-main-container">
            <div id='banking-main-container-left'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 id='font-weight-600'>Banking</h1>
                </div>
                <div id='banking-main-container-left-main'>
                    <div id='banking-main-container-left-main-top'>
                        <div id="banking-main-container-left-main-top-main">
                            <div id='banking-main-container-left-main-top-header'>
                                <h2>Profit</h2>
                                <div>
                                <select>
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                    <option>Hourly</option>
                                    <option>Minutly</option>
                                </select>
                                </div>
                            </div>
                            <div id="banking-main-container-left-main-top-main-inside">
                                <div id="banking-main-container-left-main-top-main-left">
                                    <div id="banking-main-container-left-main-top-main-left-inside">
                                        <div id='banking-main-container-main-top-main-left-inside-text'>
                                            <p id='grey-color'>Income</p>
                                            <h1 id='font-weight-600'>$72,890,00</h1>
                                            <div id="banking-main-container-left-main-top-main-left-inside-icon-div">
                                                <img src={topIcon} alt="" />
                                                <p id="green-color-banking">+15%</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={kokSt} alt="" />
                                        </div>
                                    </div>
                                    <div id="banking-main-container-left-main-top-main-left-inside">
                                        <div id='banking-main-container-main-top-main-left-inside-text'>
                                            <p id='grey-color'>Income</p>
                                            <h1 id='font-weight-600'>$72,890,00</h1>
                                            <div id="banking-main-container-left-main-top-main-left-inside-icon-div">
                                                <img src={downIcon} alt="" />
                                                <p id="pink-color-banking">-15%</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={pushtiSt} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div id="banking-main-container-left-main-top-main-right">
                                    <img src={bankingSt} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='banking-main-container-left-main-bottom'>

                    </div>
                </div>
            </div>
            <div id="banking-main-container-right">
                <h1>My Card</h1>
            </div>
        </div>
    )
}
