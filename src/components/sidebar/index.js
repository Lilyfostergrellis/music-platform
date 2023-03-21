import React from "react";
import './sidebar.css';
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" className="profile-img" alt="profile"></img>
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
                <SidebarButton title="New Releases" to="/new-releases" icon={<FaGripfire />}/>
                <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
                <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite />}/>
                <SidebarButton title="Library" to="/Library" icon={<IoLibrary />}/>
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
        
        
        </div>
        
    );
}