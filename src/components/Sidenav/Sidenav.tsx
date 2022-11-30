import React from 'react'
import Logo from "./../../assets/logo.svg";
import DashIcon from "./../../assets/dash.svg";
import ContentIcon from "./../../assets/content.svg";
import DraftsIcon from "./../../assets/drafts.svg";
import AnalyticsIcon from "./../../assets/analytics.svg";
import ProfileIcon from "./../../assets/profile.svg";
import "./Sidenav.scss";

interface SidenavProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
const Links = [
  {
    name: "Dashboard",
    icon: DashIcon,
    alt: "Dashboard Icon",
  },
  {
    name: "Content",
    icon: ContentIcon,
    alt: "Content Icon",
  },
  {
    name: "Draft",
    icon: DraftsIcon,
    alt: "Drafts Icon",
  },
  {
    name: "Analytics",
    icon: AnalyticsIcon,
    alt: "Analytics Icon",
  },
  {
    name: "Profile",
    icon: ProfileIcon,
    alt: "Profile Icon",
  },
];

const Sidenav = (props: SidenavProps) => {
  const {active, setActive} = props;

  return (
    <div className="sidenav">
      <div className="sidenav__wrapper">
        <img src={Logo} alt="Extent Logo" className="sidenav__wrapper--logo" />
        <div className='sidenav__wrapper--links'>
          {
            Links.map((link) => {
              if (active !== link.name) {
                return (
                  <div key={link.name} className="sidenav__wrapper--link" onClick={() => setActive(link.name)}>
                    <div></div>
                    <img src={link.icon} alt={link.alt} />
                    <span>{link.name}</span>
                  </div>
                )
              } 

              return (
                <div key={link.name} className="sidenav__wrapper--link active">
                  <div></div>
                  <img src={link.icon} alt={link.alt} />
                  <span>{link.name}</span>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidenav