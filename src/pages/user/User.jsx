import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import "./user.css"

function User() {
    return (
        <div className = "user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className = "userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className = "userShowImg" src="https://images.unsplash.com/photo-1613379312965-315474b5da31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">12.19.1998</span>
                        </div>
                         <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+91 123456789</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">NewYork|USA</span>
                        </div>
                        

                        
                    </div> 
                    </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Userame</label>
                                <input type ="text" placeholder="annabeck99" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label >FullName</label>
                                <input type ="text" placeholder="Anna becker" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type ="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type ="text" placeholder= "+91 123456789" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type ="text" placeholder="New York | USA" className="userUpdateInput"/>
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1631641906574-24adb8594649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className ="userUpdateIcon"/></label>
                                <input type="file" id ="file" style ={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
