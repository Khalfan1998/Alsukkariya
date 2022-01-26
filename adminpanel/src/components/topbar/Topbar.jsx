import React from 'react';
import "./topbar.css"
import {NotificationsNone, Language, Settings} from "@material-ui/icons"

export default function Topbar() {
  return (
  <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft"><span className="logo">KhalfanAdmin</span></div>
        <div className="topRight">
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
            <img src="https://i.postimg.cc/XqWNh7Nn/charles-deluvio-K4m-SJ7kc0-As-unsplash.jpg" alt="" className="topAvatar" />
        </div>
      </div>
      </div>
  )
}
