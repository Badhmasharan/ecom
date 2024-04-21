import React from "react";
import './DropdownMenu.css';
import Lottie from 'react-lottie';
import { TbLogout } from "react-icons/tb";
import { TbLogin2 } from "react-icons/tb";
import hellobot from './hellobot.json';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: hellobot,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const DropdownMenu = ({ username, isLoggedIn, handleLogin, handleLogout }) => (
  <div className="dropdown-menu">
    {isLoggedIn ? (
      <>
        <div className="dropdown-title">
        <div className="hellobot"><Lottie options={defaultOptions} height={50} width={50} /></div>
        <p>{username}</p>
        </div>
        <div className="line"></div>
        <div className="logout-function">
        <button onClick={handleLogout} className="logout-buttton"><TbLogout className="dropdown-logbutton" /><p className="dropdown-logout-p">Logout</p></button>
        </div>
      </>
    ) : (
      <button onClick={handleLogin}><TbLogin2 /> Login</button>
    )}
    
  </div>
);

export default DropdownMenu;
