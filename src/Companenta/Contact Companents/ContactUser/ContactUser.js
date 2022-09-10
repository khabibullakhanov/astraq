import React, { useState, useEffect } from 'react'
import "./ContactUser.css"
import greyStar from "../../../Assets/Icons/Grey Star.svg"
import bagImg from "../../../Assets/Icons/Bag.svg"
import phone from "../../../Assets/Icons/Phone.svg"
import message from "../../../Assets/Icons/Message.svg"
import { ContactData } from "../../../Companenta/Data/ContactData"
import yellowStar from "../../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";
import todoIconImg from "../../../Assets/Icons/Todo Icon.svg"
import reactangleImg from "../../../Assets/Icons/4 Tortburchaklar.svg"
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';




export function ContactUser({ user }) {
    const [row, setRow] = useState(false)

    const rowTodo = () => {
        setRow(true)
    }
    return (
        <div id='contact-user-main-container'>
            <div id='contact-header-part'>
                <div>
                    <h1>Contact</h1>
                </div>
                <div id="contact-header-part-right">
                    <div id="contact-header-select-content">
                        <select>
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>More...</option>
                        </select>
                    </div>
                    <div onClick={rowTodo}>
                        <ViewAgendaIcon style={{color:"#8A96B1", fontSize:"38px"}}/>
                    </div>
                    <div onClick={() => setRow(false)}>
                        <GridViewIcon style={{color:"#8A96B1", fontSize:"38px"}}/>
                    </div>
                    <button>+</button>
                </div>
            </div>
            <div id="users-container" style={row ? { flexDirection: 'column', } : {}}>
                {user.map((item, index) => {
                    return (
                        <div id="user-main-content" style={row ? { width: "auto", } : {}} key={index}>
                            <div id='user-main-content-header'>
                                <div id='user-main-content-grey-div'>

                                </div>
                                <div>
                                    <Checkbox icon={<img src={greyStar} />} checkedIcon={<img src={yellowStar} />} />
                                </div>
                            </div>
                            <div id='user-main-content-text'>
                                <h3>{item.name}</h3>
                                <p>{item.work}</p>
                            </div>

                            <div style={row ? { display: "flex", flexDirection: "row", gap: "2rem" } : {}} id='user-main-content-inside'>
                                <div id="user-work">
                                    <img src={bagImg} alt="" />
                                    <span>{item.company}</span>
                                </div>
                                <div id="user-phone">
                                    <a href="tel:+998993414718">
                                        <img src={phone} alt="" />
                                    </a>
                                    <span>{item.phone}</span>
                                </div>
                                <div id="user-email">
                                    <img src={message} alt="" />
                                    <span>{item.email}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

