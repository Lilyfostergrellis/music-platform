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
  const [searchInput, setSearchInput] = useState("");
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
      .then((data) => console.log(data.access_token));
  }, []);

  async function search() {
    console.log(accessToken);
    console.log(`Search for ${searchInput}`);

    // get request using search, to get the Artist ID
    const artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    let artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => console.log(data));

    // get request with Artist ID, to get all the albums of that Artist
    // display those Albums to the user
  }

  return (
    <div className="screen-conatiner">
      Library
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for Artist"
            type="input"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="row row-cols-12 mx-2">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album name</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
