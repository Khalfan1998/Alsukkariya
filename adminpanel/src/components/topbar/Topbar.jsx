import React from 'react';
import "./topbar.css"
import {NotificationsNone, Language, Settings, AccountCircle} from "@material-ui/icons"
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
  <div className="topbar">
      <div className="topbarWrapper">
      <Link to="/" className="link">
        <div className="topLeft"><span className="logo">AlSukkariya Admin</span></div>
       
        </Link>
        <div className="topRight">
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
