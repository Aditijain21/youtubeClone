import React from "react";
import "../Csscomponent/sidebar.css";
import Img from "../assets/generalVariabl.js";
import SidebarLinks from "./sidebarLinks";
const Sidebar = () => {
  return <div className="mainSidebarContainer">
  <SidebarLinks icon = {Img.sidebar.home} title = "Home"/>
  <SidebarLinks icon = {Img.sidebar.explore} title = "Explore"/>
  <SidebarLinks icon = {Img.sidebar.subscriptions} title = "Subscriptions"/>
  <SidebarLinks icon = {Img.sidebar.originals} title = "Originals"/>
  <SidebarLinks icon = {Img.sidebar.youtubeMusic} title = "Youtube Music"/>
  <SidebarLinks icon = {Img.sidebar.library} title = "Library"/>
  </div>;
};

export default Sidebar;
