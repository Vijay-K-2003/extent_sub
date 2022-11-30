import React from 'react'
import Logo from "./../../assets/Logo.png";
import DashIcon from "./../../assets/dash.svg";
import ContentIcon from "./../../assets/content.svg";
import DraftsIcon from "./../../assets/drafts.svg";
import AnalyticsIcon from "./../../assets/analytics.svg";
import ProfileIcon from "./../../assets/profile.svg";
import "./Sidenav.scss";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav__wrapper">
        <img src={Logo} alt="Extent Logo" className="sidenav__wrapper--logo" />
        <div className='sidenav__wrapper--links'>
          <div className="sidenav__wrapper--link">
            <div></div>
            <img src={DashIcon} alt="Dashboard Icon" />
            <span>Dashboard</span>
          </div>

          <div className="sidenav__wrapper--link">
            <div></div>
            <img src={ContentIcon} alt="Content Icon" />
            <span>Content</span>
          </div>

          <div className="sidenav__wrapper--link">
            <div></div>
            <img src={DraftsIcon} alt="Drafts Icon" />
            <span>Draft</span>
          </div>

          <div className="sidenav__wrapper--link">
            <div></div>
            <img src={AnalyticsIcon} alt="Analytics Icon" />
            <span>Analytics</span>
          </div>

          <div className="sidenav__wrapper--link">
            <div></div>
            <img src={ProfileIcon} alt="Profile Icon" />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav