import React from 'react'
import "./DashboardRightCard.css"
import star from "../../../Assets/Icons/Alone Star.svg"
import Greystar from "../../../Assets/Icons/Alone Grey Star.svg"

export function DashboardRightCard() {
    return (
        <div>
            <div id='card-container'>
                <div id='card-container-header'>
                    <div id='card-container-header-box'>

                    </div>
                    <div id='card-container-header-text'>
                        <h3>Christian Jornald</h3>
                        <div id='card-container-header-star'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={Greystar} alt="" />
                        </div>
                    </div>
                </div>
                <p>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.  Ab sit asperiores architecto repudiandae.</p>
                <div id='card-container-bottom'>
                    <a href="">
                        Archive
                    </a>
                    <a href="">
                        Accept
                    </a>

                </div>
            </div>
        </div>
    )
}
