import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from "./library";
import Feed from "./feed";
import Trending from "./trending";
import Player from "./player";
import Favourites from "./favourites";
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
