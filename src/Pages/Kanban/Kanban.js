import React, { useState, useEffect } from 'react'
import { KanbanNavbar } from '../../Companenta/Kanban/KanbanNavbar'
import "./Kanban.css"
import userIcon from "../../Assets/Icons/user Icon.svg"
import { Header } from "../../Companenta/Header/Header"
import team from "../../Assets/Icons/Team.svg"
import skripka from "../../Assets/Icons/Skripka.svg"
import chatLogo from "../../Assets/Icons/Chat logo.svg"
import TextField from '@mui/material/TextField';
import greyStar from "../../Assets/Icons/Grey Star.svg"
import yellowStar from "../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from "react-redux";
import { acKanbanAddCrud, acKanbanDeleteCrud, acKanbanUpdateCrud } from "../../Redux/KanbanCrud";
import { acLoading } from "../../Redux/Loading"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



export function Kanban() {
    const dispatch = useDispatch();
    const kanbanUsers = useSelector((state) => state.reKanbanCrud);
    const { enqueueSnackbar } = useSnackbar()
    const [modalOpen, setModalOpen] = useState(false)
    const [deleteItems, setDeleteItems] = useState(false)
    const [value, setValue] = useState([])
    const [typeHendelSubmit, setTypeHendelSubmit] = useState("Add");

    useEffect(() => {
        localStorage.setItem("kanbanUsers", JSON.stringify(kanbanUsers));
    }, [kanbanUsers]);

    const addNewContact = (e) => {
        e.preventDefault();
        setTimeout(() => {
            dispatch(acLoading(true));
        }, "1")
        setTimeout(() => {
            dispatch(acLoading(false));
        }, "1500")

        if (typeHendelSubmit === "Add") {
            setModalOpen(false)
            const NowDate = new Date().getTime()
            const newKanban = {
                id: NowDate,
                kanbanName: e.target.name.value,
                kanbanWork: e.target.work.value,
                kanbanProgress: e.target.progress.value,
                kanbanTeam: e.target.team.value,
                kanbanProject: e.target.project.value,
                kanbanMessage: e.target.message.value,
                kanbanColor: e.target.color.value,
            }

            dispatch(acKanbanAddCrud(newKanban))
            enqueueSnackbar(`${value.kanbanName} successfully saved`, {
                autoHideDuration: "2000",
                variant: "success",
            });
        } else {
            dispatch(acKanbanUpdateCrud(value));
            setTypeHendelSubmit("Add")
            setModalOpen(false);
            setTimeout(() => {
                dispatch(acLoading(true));
            }, "1")
            setTimeout(() => {
                dispatch(acLoading(false));
            }, "1500")
            enqueueSnackbar(`${value.kanbanName} successfully edited`, {
                autoHideDuration: "2000",
                variant: "success",
            });
        }
    }

    const editKanbanItems = () => {
        setDeleteItems(true)
    }

    const saveKanbanItems = () => {
        setDeleteItems(false)
        enqueueSnackbar("Items successfully saved", {
            autoHideDuration: "2000",
            variant: "success",
        });
    }


    return (
        <div id='kanban-main-container'>
            <div id='kanban-main-container-header-text'>
                <Header />
                <h1>Kanban</h1>
            </div>
            <div id='kanban-project-board-container'>
                <div id='kanban-project-board-container-left'>
                    <div>
                        <h2>Project #1  Board</h2>
                    </div>
                    <div id="kanban-star-content">
                        <button>
                            <Checkbox icon={<img src={greyStar} alt=""/>} checkedIcon={<img src={yellowStar} alt=""/>} />
                        </button>
                    </div>
                    <div id='kanban-grey-div-container'>
                        <button id='kanban-grey-div'>

                        </button>
                        <button id='kanban-grey-div'>

                        </button>
                        <button id='kanban-grey-div'>

                        </button>
                        <button id='kanban-purple-div'>
                            <p>5+</p>
                        </button>
                    </div>
                    <div id="kanban-invite-people-container">
                        <button>
                            <img src={userIcon} alt="" />
                            <p>Invite People</p>
                        </button>
                    </div>
                    <div id='kanban-private-content'>
                        <button>Private</button>
                    </div>
                    <div id="kanban-edite-content">
                        <button onClick={editKanbanItems}>Edit</button>
                    </div>
                    <div id="kanban-save-content" style={deleteItems ? { display: "block" } : { display: "none" }} onClick={saveKanbanItems}>
                        <button>Save</button>
                    </div>
                </div>
                <div id='kanban-project-board-container-right' onClick={() => { setModalOpen(true) }}>
                    <button>New Project <span>+</span></button>
                </div>
            </div>
            <div id='message-modal-container' style={modalOpen ? { display: "block", textAlign: "center" } : { display: "none" }}>
                <div id='dash-contact-container-inside'>
                    <div id='dash-contact-container-inside-header'>
                        <h1 id="dash-contact-modal-form-h1">Add Project</h1>
                        <h2 onClick={() => { setModalOpen(false) }}>X</h2>
                    </div>
                    <form id='dash-contact-modal-form' onSubmit={addNewContact}>
                        <TextField required value={value.kanbanName} name='name' label="Type name..." variant="outlined" onChange={(e) => { setValue({ ...value, kanbanName: e.target.value }) }} placeholder="Contact name..." />
                        <TextField required value={value.kanbanWork} name='work' label="Type job..." variant="outlined" onChange={(e) => { setValue({ ...value, kanbanWork: e.target.value }) }} placeholder="Contact job..." />
                        <TextField required value={value.kanbanProgress} name='progress' type="number" label="Type progress percent..." variant="outlined" onChange={(e) => { setValue({ ...value, kanbanProgress: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required value={value.kanbanTeam} name='team' type="text" label="Type team members..." variant="outlined" onChange={(e) => { setValue({ ...value, kanbanTeam: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required value={value.kanbanProject} name='project' type="number" label="Type projects..." variant="outlined" onChange={(e) => { setValue({ ...value, kanbanProject: e.target.value }) }} placeholder="Phone number..." />
                        <TextField required value={value.kanbanMessage} name='message' label="Type message..." variant="outlined" onChange={(e) => { setValue({ ...value, kanbanMessage: e.target.value }) }} placeholder="Text..." />
                        <TextField required value={value.kanbanColor} name='color' type="color" label="Choose color..." variant="outlined" onChange={(e) => { setValue({ ...value, kanbanColor: e.target.value }) }} placeholder="Text..." />
                        <button type='submit'>
                            {typeHendelSubmit}
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <KanbanNavbar />
                <div id='kanban-user-main-container'>
                    {kanbanUsers.map((item, index) => {
                        const colors = item.kanbanColor
                        const width = item.kanbanProgress + "%"
                        console.log(colors);
                        return (
                            <div id='kanbar-user-card-content'>
                                <div id='kanbar-user-card-content-left'>
                                    <div id='kanbar-user-card-content-left-div'>
                                    </div>
                                    <h3>{item.kanbanName}</h3>
                                    <p>{item.kanbanWork}</p>
                                </div>
                                <div id='kanbar-user-card-content-right'>
                                    <div id='kanbar-user-card-content-right-progress-text'>
                                        <p>Progress</p>
                                        <p>{item.kanbanProgress}</p>
                                    </div>
                                    <div className="w3-light-grey w3-round-xlarge" id=''>
                                        <div className="w3-container w3-round-xlarge" style={{
                                            backgroundColor: colors, borderRadius: "50px", width: width, paddingBlock: "6px",
                                        }}></div>
                                    </div>
                                    <div id='kanbar-user-card-content-right-icons'>
                                        <img src={team} alt="" />
                                        <p>{item.kanbanTeam}</p>
                                        <img src={skripka} alt="" />
                                        <p>{item.kanbanProject}</p>
                                        <img src={chatLogo} alt="" />
                                        <p>{item.kanbanMessage}</p>
                                    </div>
                                    <div style={deleteItems ? { display: "block", marginTop: "10px", marginLeft: "-10px", } : { display: "none" }}>
                                        <IconButton
                                            onClick={() => {
                                                dispatch(acKanbanDeleteCrud(item.id))
                                                enqueueSnackbar(`${item.kanbanName} successfully deleted`, {
                                                    autoHideDuration: "2000",
                                                    variant: "success",
                                                });
                                            }}
                                        >
                                            <DeleteIcon style={{ color: "#5149E4", fontSize: "25px", }} />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => {
                                                setValue(item)
                                                setModalOpen(true)
                                                setTypeHendelSubmit("Edite")
                                            }}
                                        >
                                            <EditIcon style={{ color: "#5149E4", fontSize: "25px", }} />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
