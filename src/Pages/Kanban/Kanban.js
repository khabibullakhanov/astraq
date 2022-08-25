import React from 'react'
import { KanbanNavbar } from '../../Companenta/Kanban/KanbanNavbar'
import { KanbanUserCard } from '../../Companenta/Kanban/KanbanUserCard'
import "./Kanban.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import userIcon from "../../Assets/Icons/user Icon.svg"
import { Header } from "../../Companenta/Header/Header"


export function Kanban() {
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
                            <StarBorderIcon />
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
                        <button>Edit</button>
                    </div>
                </div>
                <div id='kanban-project-board-container-right'>
                    <button>New Project <span>+</span></button>
                </div>
            </div>
            <div>
                <KanbanNavbar />
                <KanbanUserCard />
            </div>
        </div>
    )
}
