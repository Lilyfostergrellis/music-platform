import React from "react";
import { useState, useEffect } from "react";
// needed for react bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Row,
    Card,
  } from "react-bootstrap";

const CLIENT_ID = "3deed9bc4aff411493d9447b7d93fdc6";
const CLIENT_SECRET = "36756a1ae5a5415594e0eda5bc0508b9";

export default function Library() {
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
      .then((data) => console.log(data.access_token));
  }, []);

  return <div className="screen-conatiner">Library</div>;
}
