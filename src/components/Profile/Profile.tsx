import React from 'react';
import defaultProfile from "./../../assets/defaultprofile.jpeg";
import "./Profile.scss";

interface ProfileProps {
    fullname: string;
    username: string;
}

const Profile = (props: ProfileProps) => {
    const {fullname, username} = props;
    return (
        <div className="profile">
            <div className="profile__wrapper">
                <div className="profile__wrapper--info">
                    <div className="profile__wrapper__info--fullname">{fullname}</div>
                    <div className="profile__wrapper__info--username">@{username}</div>
                </div>
                <div className="profile__wrapper--image">
                    <img style={{"width": "90px", "height": "90px", "borderRadius": "50%"}} src={defaultProfile} alt="Profile Image" />
                </div>
            </div>
        </div>
    );
};

export default Profile;