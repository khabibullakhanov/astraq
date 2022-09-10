import React, { useState, useEffect } from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import chat from "../../Assets/Icons/Chat logo.svg"
import rupor from "../../Assets/Icons/Ovoz kuchaytirgich.svg"
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SendIcon from '@mui/icons-material/Send';
import { Checkbox } from "@mui/material";
import searchIcon from "../../Assets/Icons/Search.svg"
import { DashboardRightUsers } from "../../Companenta/Data/DashboardRightUsers"




export function Header() {
    const [see, setSee] = useState(false)
    const [users, setUsers] = useState([]);
    const [sendIcon, setSendIcon] = useState(false)
    const [message, setMessage] = useState([])
    const [search, setSearch] = useState("")




    const submitMessage = (e) => {
        e.preventDefault();
        localStorage.setItem("xabarlar", ...message)
    }

    const changeInput = (e) => {
        setMessage({ ...message, sms: e.target.value })
    }


    return (
        <div id='header-container'>
            <form id='search-form'>
                {/* <SearchIcon/> */}
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Search here...' />
            </form>
            <div id="header-container-right">
                <Link to="/">
                    <img onClick={() => setSee(true)} src={chat} alt="" />
                </Link>
                <Link to="/" >
                    <img src={rupor} alt="" />
                </Link>
                <div>
                    <input type="color" id='color-input' value="#8A96B1" />
                    <select>
                        <option value="">Uzb</option>
                        <option value="">Rus</option>
                        <option value="">Eng</option>
                    </select>
                </div>
            </div>
            <div style={see ? { display: "block", } :
                { display: "none" }}
                id='message-modal-container'>
                <div id='message-modal-container-inside'>
                    <div id='message-modal-container-header'>
                        <h2>Online Chat</h2>
                    </div>
                    <div id='message-modal-container-body'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum. Impedit reiciendis ipsum deleniti enim blanditiis, incidunt praesentium! Optio beatae at totam unde nostrum. Reprehenderit illo magnam quae corporis unde?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum fuga recusandae illum iure omnis, similique dolore accusantium corrupti expedita nesciunt voluptate ducimus nemo, repellendus voluptatem. Quas odit eius numquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam earum, sunt aliquam eaque, ad saepe cum ea fuga quis sit dolores. Adipisci minima nesciunt at aliquid magni ea asperiores.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum. Impedit reiciendis ipsum deleniti enim blanditiis, incidunt praesentium! Optio beatae at totam unde nostrum. Reprehenderit illo magnam quae corporis unde?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum fuga recusandae illum iure omnis, similique dolore accusantium corrupti expedita nesciunt voluptate ducimus nemo, repellendus voluptatem. Quas odit eius numquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam earum, sunt aliquam eaque, ad saepe cum ea fuga quis sit dolores. Adipisci minima nesciunt at aliquid magni ea asperiores.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laborum. Impedit reiciendis ipsum deleniti enim blanditiis, incidunt praesentium! Optio beatae at totam unde nostrum. Reprehenderit illo magnam quae corporis unde?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum fuga recusandae illum iure omnis, similique dolore accusantium corrupti expedita nesciunt voluptate ducimus nemo, repellendus voluptatem. Quas odit eius numquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam earum, sunt aliquam eaque, ad saepe cum ea fuga quis sit dolores. Adipisci minima nesciunt at aliquid magni ea asperiores.</p>

                    </div>
                    <form onSubmit={submitMessage} id='message-modal-container-form'>
                        <div id="message-modal-container-bottom">
                            <div id="message-modal-container-bottom-left">
                                <label>
                                    <input type="file" id='message-modal-container-file' />
                                    <AttachFileIcon id="message-modal-container-bottom-clip-icon" />
                                </label>
                                <TextField id="standard-basic" label="Write a message..." aria-readonly="true" variant="standard" sx={{ color: "#8A96B1" }}
                                    onChange={changeInput} />
                            </div>
                            <div id="message-modal-container-bottom-right">
                                <Checkbox icon={<KeyboardVoiceIcon style={{ color: "#8A96B1", fontSize: "28px" }} id="message-modal-container-bottom-voiceOff-icon" />} checkedIcon={<GraphicEqIcon style={{ color: "#e53935", fontSize: "28px" }} id="message-modal-container-bottom-sendOnn-icon" />} />
                                <SendIcon onClick={submitMessage} id="message-modal-container-bottom-send-icon" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
