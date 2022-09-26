import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import chat from "../../Assets/Icons/Chat logo.svg";
import rupor from "../../Assets/Icons/Ovoz kuchaytirgich.svg";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SendIcon from "@mui/icons-material/Send";
import { Checkbox } from "@mui/material";
import searchIcon from "../../Assets/Icons/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { acHeaderChatAddCrud, acHeaderChatDeleteCrud, acHeaderChatUpdateCrud } from "../../Redux/HeaderChatCrud";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

export function Header() {
  const dispatch = useDispatch();
  const headerChatCrud = useSelector((state) => state.reHeaderChatCrud)
  const ref1 = useRef();
  const [see, setSee] = useState(false);
  const [sendIcon, setSendIcon] = useState(false);
  const [message, setMessage] = useState([]);
  const [value, setValue] = useState([])
  const [chatImg, setChatImg] = useState({
    imgMessage: {},
  })
  const [typeHendelSubmit, setTypeHendelSubmit] = useState("Add");
  const cart = JSON.parse(localStorage.getItem("xabarlar") || "[]");

  const submitMessage = (e) => {
    e.preventDefault();
    if (typeHendelSubmit === "Add") {
      const nowDate = new Date().getTime()
      const newMessages = {
        id: nowDate,
        chatMessage: e.target.headerMessage.value,
      }
      dispatch(acHeaderChatAddCrud(newMessages))
    } else {
      dispatch(acHeaderChatUpdateCrud(value))
    }
    setValue({ chatMessage: "" })
  };

  useEffect(() => {
    localStorage.setItem("headerChats", JSON.stringify(headerChatCrud));
  }, [headerChatCrud]);

  return (
    <div id="header-container">
      <form id="search-form">
        <img src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="Search here..." />

      </form>

      <div id="header-container-right">
        <Link to="/">
          <img onClick={() => setSee(true)} src={chat} alt="" />
        </Link>
        <Link to="/">
          <img src={rupor} alt="" />
        </Link>
        <div>
          <input type="color" id="color-input" value="#8A96B1" />
          <select>
            <option>Uzb</option>
            <option>Rus</option>
            <option>Eng</option>
          </select>
        </div>
      </div>
      <div
        style={
          see ? { display: "block", textAlign: "center" } : { display: "none" }
        }
        id="message-modal-container"
      >
        <div id="message-modal-container-inside">
          <div id="dash-contact-container-inside-header">
            <h1 id="dash-contact-modal-form-h1">Add Message</h1>
            <h2
              onClick={() => {
                setSee(false);
              }}
            >
              X
            </h2>
          </div>
          <div id="message-modal-container-body">
            {
              headerChatCrud.map((item, index) => {
                return (
                  <div id="header-chat-content" key={index}>
                    <div>
                      <h3>{item.chatMessage}</h3>
                      <img src={chatImg.imgMessage.size ? URL.createObjectURL(chatImg.imgMessage) : {}} alt="" />
                    </div>
                    <div>
                      <IconButton
                        onClick={() => {
                          dispatch(acHeaderChatDeleteCrud(item.id))
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>

                      <IconButton
                        onClick={() => {
                          setValue(item)
                          setTypeHendelSubmit("Edite")
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <form onSubmit={submitMessage} id="message-modal-container-form">
            <div id="message-modal-container-bottom">
              <div id="message-modal-container-bottom-left">
                <label>
                  <input type="file" name="imgMessage" id="message-modal-container-file" />
                  <AttachFileIcon id="message-modal-container-bottom-clip-icon" />
                </label>
                <input
                  id="header-chat-input"
                  name="headerMessage"
                  value={value.chatMessage}
                  onChange={(e) => { setValue({ ...value, chatMessage: e.target.value }) }}
                // id="standard-basic"
                // label="Write a message..."
                // variant="standard"
                // sx={{ color: "#8A96B1" }}
                />
              </div>
              <div id="message-modal-container-bottom-right">
                <Checkbox
                  icon={
                    <KeyboardVoiceIcon
                      style={{ color: "#8A96B1", fontSize: "28px" }}
                      id="message-modal-container-bottom-voiceOff-icon"
                    />
                  }
                  checkedIcon={
                    <GraphicEqIcon
                      style={{ color: "#e53935", fontSize: "28px" }}
                      id="message-modal-container-bottom-sendOnn-icon"
                    />
                  }
                />
                <button id="header-chat-btn" type="submit">{typeHendelSubmit}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
