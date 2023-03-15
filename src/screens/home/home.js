import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Trending from "../trending/trending";
import Player from "../player/player";
import Favourites from "../favourites/favourites";
//route paths set for js files/pages of application.

export default function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/" element={<Feed />} />
            <Route path="/" element={<Trending />} />
            <Route path="/" element={<Player />} />
            <Route path="/" element={<Favourites />} />

        </Routes>
    </Router>
    );
}


