import React, { useEffect } from 'react'
import message from "../../Assets/Icons/Message.svg"
import phone from "../../Assets/Icons/Phone.svg"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export function ViewAll() {
    const navigate = useNavigate()
    const dashUser = useSelector((state) => state.crud);

    useEffect(() => {
        JSON.parse(localStorage.getItem("users") || "[]")
    }, [dashUser]);

    return (
        <div style={{height:"100vh"}}>
            <div style={{ marginTop: "18px", marginBottom: "20px" }}><h2 onClick={() => navigate(-1)}>Back</h2></div>
            <h2 style={{ textAlign: "center" }}>
                {dashUser.length !== 0
                    ? `You have${dashUser.length} contacts`
                    : "Now you have not contacts yet 💁‍♂️"}
            </h2>
            {dashUser.map((contact, index) => {
                const telRaqam = `tel:${contact.tel}`
                return (
                    <div id='bottom-contact-container-user'>
                        <div id='bottom-contact-container-user-left' key={index}>
                            <div id='bottom-contact-container-user-left-div'>
                            </div>
                            <div id='bottom-contact-container-user-left-text'>
                                <h4>{contact.name}</h4>
                                <p>{contact.job}</p>
                                <p>{contact.message}</p>
                            </div>
                        </div>
                        <div id='bottom-contact-container-user-right'>
                            <div id='bottom-contact-container-user-right-first'>
                                <a href={telRaqam}>
                                    <img src={phone} alt="" />
                                </a>
                            </div>
                            <div id='bottom-contact-container-user-right-second'>
                                <img src={message} alt="" />
                            </div>
                            <div id='bottom-contact-container-user-right-third'>
                                <DeleteIcon />
                            </div>
                            <div id='bottom-contact-container-user-right-third'>
                                <EditIcon />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
