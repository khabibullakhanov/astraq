import React, { useState, useEffect } from 'react'
import "./BottomCards.css"
import message from "../../../Assets/Icons/Message.svg"
import phone from "../../../Assets/Icons/Phone.svg"
import doubleTrue from "../../../Assets/Icons/Pink Double True.svg"
import { DashboardContacts } from "../../Data/DashboardContacts"
import emailjs from "emailjs-com"


export function BottomCards() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        DashboardContacts()
            .then((data) => {
                setContacts(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const contactLength = contacts.length

    return (
        <div>
            <div id='footer'>

                <div id='bottom-contact-container'>
                    <div id='bottom-contact-container-header'>
                        <div id='bottom-contact-container-left'>
                            <h2>Contacts</h2>
                            <p>You have <span>{contactLength}</span> contacts</p>
                        </div>
                        <div id='bottom-contact-container-right'>
                            <button>+</button>
                        </div>
                    </div>
                    <div id='bottom-contact-container-main'>
                        {contacts.map((contact, index) => {
                            return (
                                <div
                                id='bottom-contact-container-user'>
                                    <div id='bottom-contact-container-user-left'
                                     key={index}
                                    >
                                        <div id='bottom-contact-container-user-left-div'>

                                        </div>
                                        <div id='bottom-contact-container-user-left-text'>
                                            <h4>{contact.name}</h4>
                                            <p>{contact.job}</p>
                                        </div>
                                    </div>
                                    <div id='bottom-contact-container-user-right'>
                                        <div id='bottom-contact-container-user-right-first'>
                                            <a href="tel:+998941744904">
                                                <img src={phone} alt="" />
                                            </a>
                                        </div>
                                        <div id='bottom-contact-container-user-right-second'>
                                            <img src={message} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button id='bottom-contact-btn'>View More</button>
                </div>
                <div id='bottom-message-container'>
                    <div id='bottom-contact-container-header'>
                        <div id='bottom-contact-container-left'>
                            <h2>Message</h2>
                            <p>You have <span>{contactLength}</span> contacts</p>
                        </div>
                        <div id='bottom-message-container-right'>
                            <a href=''>View All</a>
                        </div>
                    </div>
                    {contacts.map((contact) => {
                        return (
                            <div id='bottom-message-container-main'>
                                <div id="bottom-contact-container-user">
                                    <div id='bottom-contact-container-user-left'>
                                        <div id='bottom-contact-container-user-left-div'>
                                        </div>
                                        <div id='bottom-contact-container-user-left-text'>
                                            <h4>{contact.name}</h4>
                                            <p>{contact.message}</p>
                                        </div>
                                    </div>
                                    <div id='bottom-message-container-main-user-right'>
                                        <button>46</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div id="bottom-message-container-footer">
                        <button>View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
