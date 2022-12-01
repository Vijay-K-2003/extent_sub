import React, { useState } from 'react';
import Music from "./../../assets/music.svg";
import Picture from "./../../assets/picture.svg";
import Video from "./../../assets/video.svg";
import Plus from "./../../assets/plus.svg";
import "./Options.scss";

const Options = () => {
    const [option, setOption] = useState(false);
    return (
        <div className="options">
            {
                option && (
                    <div className='animate-slideup'>
                        <div className='image-container-slided'><img className='image-container--img' src={Music} alt="Music" /></div>
                        <div className='image-container-slided'><img className='image-container--img' src={Picture} alt="Picture" /></div>
                        <div className='image-container-slided'><img className='image-container--img' src={Video} alt="Video" /></div>
                    </div>
                )
            }

            <div style={{color: "#C2C2C2", fontFamily: '"Avenir Next", sans-serif', fontStyle: 'normal', fontWeight: "900", fontSize: "40px", lineHeight: "55px"}} className='image-container' onClick={() => setOption(prev => !prev)}>
            {/* <img className='image-container--img' src={Plus} alt="Add Content" /> */}
            {"+"}
        </div>
        </div >
    );
};

export default Options;