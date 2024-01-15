import React from "react";
import "../Csscomponent/sidebar.css";
const SidebarLinks = (props) => {
  return (
    <div className="sidebarLink">
      <img src={props.icon} alt="home" className="home icons" />
      <div id="sidetext">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default SidebarLinks;
