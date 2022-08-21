import React from 'react'
import "./Contact.css"
import todoIconImg from "../../Assets/Icons/Todo Icon.svg"
import reactangleImg from "../../Assets/Icons/4 Tortburchaklar.svg"
import { Header } from "../../Companenta/Header/Header"
import { ContactUser } from '../../Companenta/Contact Companents/ContactUser/ContactUser'



export function Contact() {
    return (
        <div id='contact-main-container'>
            <Header />
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
                    <div>
                        <img src={todoIconImg} alt="" />
                    </div>
                    <div>
                        <img src={reactangleImg} alt="" />
                    </div>
                    <button>+</button>
                </div>
            </div>
            <div>
                <ContactUser />
            </div>
        </div>
    )
}
