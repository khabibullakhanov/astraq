import React, { useState, useEffect } from 'react';
import "./KanbanUserCard.css";
import team from "../../Assets/Icons/grey Team.svg"
import skripka from "../../Assets/Icons/Grey Skripka.svg"
import chatLogo from "../../Assets/Icons/Chat logo.svg"
import { KanbanUsersData } from '../Data/KanbanUsersData';


export function KanbanUserCard() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        KanbanUsersData()
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div id='kanban-user-main-container'>
            {user.map((item, index) => {
                return (
                    <div id='kanbar-user-card-content'>
                        <div id='kanbar-user-card-content-left'>
                            <div id='kanbar-user-card-content-left-div'>
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.work}</p>
                        </div>
                        <div id='kanbar-user-card-content-right'>
                            <div id='kanbar-user-card-content-right-progress-text'>
                                <p>Progress</p>
                                <p>{item.progressLength}</p>
                            </div>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-container w3-round-xlarge" style={{ width: "45%", backgroundColor: "#5149E4", paddingBlock: "5px" }}></div>
                            </div>
                            <div id='kanbar-user-card-content-right-icons'>
                                <img src={team} alt="" />
                                <p>{item.team}</p>
                                <img src={skripka} alt="" />
                                <p>{item.skripka}</p>
                                <img src={chatLogo} alt="" />
                                <p>{item.message}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
