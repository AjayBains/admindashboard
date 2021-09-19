import { Visibility } from '@material-ui/icons';
import React from 'react'
import "./widgetSm.css";

export default function WidgetSm() {
    return (
        <div className ="widgetSm">
            <span className="widgetSmTitle">New Join Memebers</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className = "widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rajiv Masand</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className ="widgetSmButton"> <Visibility className ="widgetSmIcon"/> Display</button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className = "widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rajiv Masand</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className ="widgetSmButton"> <Visibility className ="widgetSmIcon"/> Display</button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className = "widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rajiv Masand</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className ="widgetSmButton"> <Visibility className ="widgetSmIcon"/> Display</button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className = "widgetSmImg"  />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Rajiv Masand</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className ="widgetSmButton"> <Visibility className ="widgetSmIcon"/> Display</button>
                </li>

            </ul>
            
            
        </div>
    )
}
