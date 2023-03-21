import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Player from "../player/player";
import Favourites from "../favourites/favourites";
import "./home.css";
import Sidebar from "../../components/sidebar";
import { Box } from "@chakra-ui/react";
import NewReleases from "../new-releases/new-releases";
//route paths set for js files/pages of application.

export default function Home() {
  return (
    <Box className="main-body">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/new-releases" element={<NewReleases/>} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </Box>
  );
}
