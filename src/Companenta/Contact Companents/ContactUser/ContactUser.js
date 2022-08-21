import React, { useState, useEffect } from 'react'
import "./ContactUser.css"
import greyStar from "../../../Assets/Icons/Grey Star.svg"
import bagImg from "../../../Assets/Icons/Bag.svg"
import phone from "../../../Assets/Icons/Phone.svg"
import message from "../../../Assets/Icons/Message.svg"
import { ContactData } from "../../../Companenta/Data/ContactData"


export function ContactUser() {

    const [user, setUser] = useState([]);
    useEffect(() => {
        ContactData()
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    return (
        <>
            <div id="users-container">
                {user.map((item, index) => {
                    return (
                        <div id="user-main-content" key={index}>
                            <div id='user-main-content-header'>
                                <div id='user-main-content-grey-div'>

                                </div>
                                <div>
                                    <img src={greyStar} alt="" />
                                </div>
                            </div>
                            <div id='user-main-content-text'>
                                <h3>{item.name}</h3>
                                <p>{item.work}</p>
                            </div>

                            <div id='user-main-content-inside'>
                                <div id="user-work">
                                    <img src={bagImg} alt="" />
                                    <span>{item.company}</span>
                                </div>
                                <div id="user-phone">
                                    <img src={phone} alt="" />
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
        </>
    )
}

