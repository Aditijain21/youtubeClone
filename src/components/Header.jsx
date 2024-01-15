import React from "react";
import Img from "../assets/generalVariabl.js";
import "../Csscomponent/Header.css";
const Header = () => {
  return (
    <div className="App-header">
      <div className="left">
        <img src={Img.Header.navicon} className="navicon icon" />
        <img src={Img.Header.youtubeicon} className="youtubeicon icon" />
      </div>
      <div className="center">
        <div className="searchcontainer">
          <input type="text" placeholder="Search" className="searchbox" />
          <div className="searchcon">
            <img src={Img.Header.searchicon} className="searchicon icon" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Img.Header.uploadicon} className="uploadicon icon" />
        <img src={Img.Header.youtubeappicon} className="youappicon icon" />
        <img
          src={Img.Header.notificationicon}
          className="notificationicon icon"
        />
        <img src={Img.Header.logouticon} className="logout icon" />
      </div>
    </div>
  );
};

export default Header;
