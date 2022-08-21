import React from 'react';
import "./Dashboard.css";
import dollar from "../../Assets/Icons/White Dollor.svg"
import selectIcon from "../../Assets/Icons/Select Icon.svg"
import purpleSt from "../../Assets/Images/Purple Statistics.png"
import pinkSt from "../../Assets/Images/Pink Statistics.png"
import { PureComponent } from '../../Companenta/Statistics/PureComponent';
import { BottomCards } from '../../Companenta/Dashboard Companents/BottomCard/BottomCards';
import { DashboardCards } from '../../Companenta/Dashboard Companents/DashboardCard/DashboardCards';
import { Header } from '../../Companenta/Header/Header';
import { DashboardRightCard } from '../../Companenta/Dashboard Companents/DashboardRightCard.js/DashboardRightCard';
import { Persent } from '../../Companenta/Persent/Persent';
import { DashboardActivity } from '../../Companenta/Dashboard Companents/DashboardActivity/DashboardActivity';


export function Dashboard() {
    return (
        <div id='dashboard-main'>
            <div id='dashboard-main-left'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1 id='dashboard-text'>Dashboard</h1>
                </div>
                <DashboardCards />
                <div id='activity'>
                    <h1>Activity</h1>
                    <div id='activity-right'>
                        <div id='activity-right-first'>
                            <div id="ativity-purple">

                            </div>
                            <p>Last Year</p>
                        </div>
                        <div id='activity-right-first'>
                            <div id='activity-pink'>

                            </div>
                            <p>This Year</p>
                        </div>
                    </div>
                </div>
                <PureComponent />
                <div id="balance-container">
                    <div id='first-balance-container'>
                        <div id='first-balance-container-left'>
                            <div id='first-balance-container-left-img-container'>
                                <img src={dollar} alt="" />
                            </div>
                            <div id='first-balance-container-left-text'>
                                <p>Total Balance</p>
                                <h3>$40.123</h3>
                            </div>
                        </div>
                        <div id='first-balance-container-right'>
                            <span>Average from last month</span>
                            <div id='first-balance-container-right-text'>
                                <p>+0.5%</p>
                                <span>invoices sent</span>
                            </div>
                        </div>
                    </div>
                    <div id="second-balance-container">
                        <div id="second-balance-container-left">
                            <div id="second-balance-container-left-img-container">
                                <img src={selectIcon} alt="" />
                            </div>
                            <div id="second-balance-container-left-text">
                                <h2>$120.455</h2>
                                <p>Income</p>
                            </div>
                        </div>
                        <img src={purpleSt} alt="" />
                    </div>
                    <div id='third-balance-container'>
                        <div id='third-balance-container-left'>
                            <div id='third-balance-container-left-img-container'>
                                <img src={selectIcon} alt="" />
                            </div>
                            <div id='third-balance-container-left-text'>
                                <h2>$86.455</h2>
                                <p>Expense</p>
                            </div>
                        </div>
                        <div id='third-balance-container-right'>
                            <img src={pinkSt} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <BottomCards />
                    {/* <BottomCard /> */}
                </div>
            </div>
            <div id='dashboard-main-right'>
                <Persent />
                <h1>User Reviews</h1>
                <DashboardRightCard />
                <DashboardRightCard />
                <DashboardRightCard />
                <h1>Recent Activity</h1>
                <DashboardActivity />
            </div>
            
        </div>
    )
}
