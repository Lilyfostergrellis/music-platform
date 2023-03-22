import React from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { VStack } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <VStack className="sidebar-container">
      <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        className="profile-img"
        alt="profile"
      ></img>
      <SidebarButton title="Feed" to="/Feed" icon={<MdSpaceDashboard />} />
      <SidebarButton
        title="New Releases"
        to="/NewReleases"
        icon={<FaGripfire />}
      />
      <SidebarButton title="Player" to="/Player" icon={<FaPlay />} />
      <SidebarButton
        title="Favourites"
        to="/Favourites"
        icon={<MdFavorite />}
      />
      <SidebarButton title="Library" to="/Library" icon={<IoLibrary />} />
      <SidebarButton title="Sign Out" to="/" icon={<FaSignOutAlt />} />
    </VStack>
  );
}
