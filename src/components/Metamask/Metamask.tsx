import React from 'react';
import MetamaskFox from "./../../assets/MetamaskFox.png";
import "./Metamask.scss"
interface MetamaskProps {
  hash: string;
}

const Metamask = (props: MetamaskProps) => {
  const { hash } = props;
  return (
    <div className="metamask">
        <div className="metamask__wrapper">
            <img style={{"width": "40px"}} className="metamask__wrapper--logo" src={MetamaskFox} alt="Metamask Fox Logo" />
            <span className="metamask__wrapper--hash">{hash}</span>
        </div>
    </div>
  );
}

export default Metamask;