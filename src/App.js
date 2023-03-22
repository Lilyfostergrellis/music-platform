import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// chakra
import { Container, Grid, GridItem } from "@chakra-ui/react";

import Sidebar from "./components/sidebar";

// screens
import Home from "./screens/home/Home";
import Library from "./screens/library/Library";
import Feed from "./screens/feed/Feed";
import NewReleases from "./screens/new-releases/NewReleases";
import Player from "./screens/player/Player";
import Favourites from "./screens/favourites/Favourites";

import "./index.css";

const CLIENT_ID = "3deed9bc4aff411493d9447b7d93fdc6";
const CLIENT_SECRET = "36756a1ae5a5415594e0eda5bc0508b9";

export const UserContext = React.createContext();

export default function App() {
  
  const [accessToken, setAccessToken] = useState("");

  // run once when app starts
  useEffect(() => {
    // Get Spotify API Token
    const tokenParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch("https://accounts.spotify.com/api/token", tokenParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  return (
    <Grid templateColumns="1fr 11fr" className="screen-container">
      <Router>
        <GridItem as="nav">
          <Sidebar />
        </GridItem>
        <GridItem  as="main">
          <Container>
          <UserContext.Provider value={accessToken}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/Library" element={<Library />} />
              <Route path="/Feed" element={<Feed />} />
              <Route path="/NewReleases" element={<NewReleases />} />
              <Route path="/Player" element={<Player />} />
              <Route path="/Favourites" element={<Favourites />} />
            </Routes>
            </UserContext.Provider>
          </Container>
        </GridItem>
      </Router>
    </Grid>
  );
}
