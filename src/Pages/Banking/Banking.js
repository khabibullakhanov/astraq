import React, { useState, useEffect } from 'react'
import "./Banking.css"
import { Header } from "../../Companenta/Header/Header"
import kokSt from "../../Assets/Images/Blue Statistics Banking.png"
import pushtiSt from "../../Assets/Images/Pink Statistics Banking.png"
import bankingSt from "../../Assets/Images/Bankking Statistics.png"
import topIcon from "../../Assets/Icons/Up.svg"
import downIcon from "../../Assets/Icons/Down.svg"
import printer from "../../Assets/Icons/Printer.svg"
import download from "../../Assets/Icons/Download.svg"
import { BankingCard } from '../../Companenta/BankingBottomCard/BankingCard'
import { BnkingData } from '../../Companenta/Data/BankingData'
import { BankingPagination } from '../../Companenta/BankingBottomCard/BankingPagination'
import creditCard from "../../Assets/Images/Credit Card.png"
import sendImg from "../../Assets/Icons/Send Logo.svg"
import blueRectangle from "../../Assets/Icons/Siyohrang Tortburchak.svg"
import pinkRectangle from "../../Assets/Icons/Pushti Tortburchak.svg"
import orangeRectangle from "../../Assets/Icons/Orange Tortburchak.svg"
import uchNuqta from "../../Assets/Icons/3 nuqta.svg"


export function Banking() {

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(6)
    useEffect(() => {
        BnkingData()
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = user.slice(firstPostIndex, lastPostIndex);


    // const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div id="banking-main-container">
            <div id='banking-main-container-left'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 id='font-weight-600'>Banking</h1>
                </div>
                <div id='banking-main-container-left-main'>
                    <div id='banking-main-container-left-main-top'>
                        <div id="banking-main-container-left-main-top-main">
                            <div id='banking-main-container-left-main-top-header'>
                                <h2>Profit</h2>
                                <div>
                                    <select>
                                        <option>Weekly</option>
                                        <option>Daily</option>
                                        <option>Hourly</option>
                                        <option>Minutly</option>
                                    </select>
                                </div>
                            </div>
                            <div id="banking-main-container-left-main-top-main-inside">
                                <div id="banking-main-container-left-main-top-main-left">
                                    <div id="banking-main-container-left-main-top-main-left-inside">
                                        <div id='banking-main-container-main-top-main-left-inside-text'>
                                            <p id='grey-color'>Income</p>
                                            <h1 id='font-weight-600'>$72,890,00</h1>
                                            <div id="banking-main-container-left-main-top-main-left-inside-icon-div">
                                                <img src={topIcon} alt="" />
                                                <p id="green-color-banking">+15%</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={kokSt} alt="" />
                                        </div>
                                    </div>
                                    <div id="banking-main-container-left-main-top-main-left-inside">
                                        <div id='banking-main-container-main-top-main-left-inside-text'>
                                            <p id='grey-color'>Income</p>
                                            <h1 id='font-weight-600'>$72,890,00</h1>
                                            <div id="banking-main-container-left-main-top-main-left-inside-icon-div">
                                                <img src={downIcon} alt="" />
                                                <p id="pink-color-banking">-15%</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={pushtiSt} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div id="banking-main-container-left-main-top-main-right">
                                    <img src={bankingSt} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='banking-main-container-left-main-bottom'>
                        <div id='banking-main-container-left-main-bottom-header'>
                            <h2 id="font-weight-600">Lastest Transaction</h2>
                            <div id='banking-main-container-left-main-bottom-header-right'>
                                <div id='banking-main-container-left-main-bottom-header-right-select'>
                                    <select>
                                        <option>Newest</option>
                                        <option>Newer</option>
                                        <option>Oldest</option>
                                        <option>Older</option>
                                    </select>
                                </div>
                                <div id='border-grey'>
                                    <img src={printer} alt="" />
                                </div>
                                <div id='border-grey'>
                                    <img src={download} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id='banking-main-container-left-main-bottom-main'>
                            <BankingCard users={currentUsers} />
                            <BankingPagination
                                totalPosts={user.length}
                                setCurrentPage={setCurrentPage}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="banking-main-container-right">
                <h1 id='banking-right-container-text'>My Card</h1>
                <div>
                    <div id='banking-main-container-right-credit-container'>
                        <img id='banking-credit-card-img' src={creditCard} alt="" />
                        <button>+ Add new card</button>
                    </div>
                    <div id='banking-main-container-right-transfer-container'>
                        <h2 id="banking-right-container-text">Quick Transfer</h2>
                        <div id='banking-main-container-right-transfer-container-inside'>
                            <div id='banking-main-container-right-transfer-container-inside-divs-container'>
                                <div id='banking-right-grey-div'>
                                    <div id="banking-right-grey-background"></div>
                                    <h6 id='font-weight-600'>Tony</h6>
                                </div>
                                <div id='banking-right-grey-div'>
                                    <div id='banking-right-grey-background'></div>
                                    <h6 id='font-weight-600'>Karen</h6>
                                </div>
                                <div id='banking-right-grey-div'>
                                    <div id="banking-right-grey-background"></div>
                                    <h6 id='font-weight-600'>Jordan</h6>
                                </div>
                                <div id='banking-right-grey-div'>
                                    <div id="banking-right-grey-background"></div>
                                    <h6 id='font-weight-600'>Ken</h6>
                                </div>
                                <div id='banking-right-grey-div'>
                                    <div id="banking-right-grey-background"></div>
                                    <h6 id='font-weight-600'>Jack</h6>
                                </div>
                                <div id='bankingright-blue-button-div'>
                                    <button>+</button>
                                </div>
                            </div>
                            <div id='banking-main-container-right-amount-container'>
                                <p id='grey-color'>Amount</p>
                                <input id='font-weight-600' type="text" value="$100" />
                            </div>
                            <button id="banking-right-transfer-comtainer-send">Transfer <img src={sendImg} /></button>
                        </div>
                    </div>
                    <div id='banking-main-container-right-saving-container'>
                        <h2 id="banking-right-container-text">Savings</h2>
                        <div id='banking-main-container-right-progress-div'>
                            <div id='banking-main-container-right-progress-div-header'>
                                <div id='banking-main-container-right-progress-div-header-left'>
                                    <img src={blueRectangle} alt="" />
                                    <p id='font-weight-600'>Buying House</p>
                                </div>
                                <img src={uchNuqta} alt="" />
                            </div>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-container w3-round-xlarge" style={{ width: "45%", backgroundColor: "#5149E4", paddingBlock: "6px" }}></div>
                            </div>
                            <div id='banking-main-container-right-progress-div-cost'>
                                <p>1650/</p>
                                <p>%1000</p>
                            </div>
                        </div>
                        <div id='banking-main-container-right-progress-div'>
                            <div id='banking-main-container-right-progress-div-header'>
                                <div id='banking-main-container-right-progress-div-header-left'>
                                    <img src={blueRectangle} alt="" />
                                    <p id='font-weight-600'>Buying House</p>
                                </div>
                                <img src={uchNuqta} alt="" />
                            </div>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-container w3-round-xlarge" style={{ width: "45%", backgroundColor: "#5149E4", paddingBlock: "6px" }}></div>
                            </div>
                            <div id='banking-main-container-right-progress-div-cost'>
                                <p>1650/</p>
                                <p>%1000</p>
                            </div>
                        </div>
                        <div id='banking-main-container-right-progress-div'>
                            <div id='banking-main-container-right-progress-div-header'>
                                <div id='banking-main-container-right-progress-div-header-left'>
                                    <img src={blueRectangle} alt="" />
                                    <p id='font-weight-600'>Buying House</p>
                                </div>
                                <img src={uchNuqta} alt="" />
                            </div>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-container w3-round-xlarge" style={{ width: "45%", backgroundColor: "#5149E4", paddingBlock: "6px" }}></div>
                            </div>
                            <div id='banking-main-container-right-progress-div-cost'>
                                <p>1650/</p>
                                <p>%1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
