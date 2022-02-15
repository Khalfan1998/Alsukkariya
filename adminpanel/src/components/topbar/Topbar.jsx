import React from 'react';
import "./topbar.css"
import {NotificationsNone, Language, Settings, AccountCircle} from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { logOut } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function Topbar() {
  const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   logOut(dispatch);
  // };


  return (
  <div className="topbar">
      <div className="topbarWrapper">
      <Link to="/" className="link">
        <div className="topLeft"><img src=" https://i.postimg.cc/bwCJFWGx/Logo-S2.png" alt="logo" className="AlSukkariyaLogo" /></div>
       
        </Link>
        <div className="topRight">
        <button className="topLogOut">Logout</button>
          <label className="announcementAdmin">Announcement</label>
        <button className="announcementAdminEnable">Enable</button>
        <button className="announcementAdminDisable">Disable</button>
            <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <Settings/>
            </div>
            {/*    */}
            <AccountCircle className="topProfilePic" style={{cursor: "pointer"}}/>
        </div>
      </div>
      </div>
  )
}
