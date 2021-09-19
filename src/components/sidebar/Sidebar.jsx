import React from 'react'
import './sidebar.css'
import { AttachMoney, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons";
import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to = "/">
                            <LineStyle className="sidebarIcon" />
                            Home
                            </Link>

                        </li>
                        <li className="sidebarListItem active">
                            <Timeline className="sidebarIcon" />
                            Analytics

                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales

                        </li>
                    </ul>


                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to = "/users">
                            <PermIdentity className="sidebarIcon" />
                            Users
                            </Link>

                        </li>
                        <li className="sidebarListItem active">
                            <Storefront className="sidebarIcon" />
                            Products

                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions

                        </li>
                    </ul>


                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail

                        </li>
                        <li className="sidebarListItem active">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback

                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages

                        </li>
                    </ul>


                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage

                        </li>
                        <li className="sidebarListItem active">
                            <Timeline className="sidebarIcon" />
                            Analytics

                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Reports

                        </li>
                    </ul>


                </div>
            </div>

        </div>
    )
}
