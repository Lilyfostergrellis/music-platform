import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Trending from "../trending/trending";
import Player from "../player/player";
import Favourites from "../favourites/favourites";
import "./home.css";
import Sidebar from "../../components/sidebar";
import { Box } from "@chakra-ui/react";
//route paths set for js files/pages of application.

export default function Home() {
  return (
    <Box className="main-body">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </Box>
  );
}
