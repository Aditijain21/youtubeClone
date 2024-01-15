import React from "react";
import Img from '../assets/generalVariabl.js';
import "../App.css";
import "../Csscomponent/Card.css";

const VideoCard = (props) => {
  return (
    <div className="card">
      <div className="thumb-container">
        <img src={Img.ThumbnailPic}  className="thumb-pic" />
      </div>
      <div className="video-description">
        <div className="prof-container">
          <img src={Img.ProfilePic} className="prof-pic" />
        </div>
        <div className="text-container">
          <p className="title-text">
            Talking Tech and AI with Google CEO Sundar Pichai!
          </p>
          <p className="auther-text">Marques Brownlee</p>
          <p className="time-text">3.4M views · 6 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
