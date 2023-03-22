import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useState, useContext } from "react";
import AppContext from "../../context/appContext";

// import { UserContext } from "../../App";
import "./Library.css";

export default function Library() {
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);

  // get access token from react context
  // const ctx.accessToken = React.useContext(UserContext);
  const ctx = useContext(AppContext);

  async function search() {
    console.log(ctx.accessToken);
    console.log(`Search for ${searchInput}`);

    // get request using search, to get the Artist ID
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.accessToken}`,
      },
    };

    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      searchParams
    )
      .then((result) => result.json())
      .then((data) => data.artists.items[0].id);

    console.log(`Artist ID: ${artistID}`);

    // get request with Artist ID, to get all the albums of that Artist
    await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums/?include_groups=album&market=US&limit=50`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => setAlbums(data.items));
  }

  return (
    <Box>
      <Box className="topsearchcontainer">
        <Input
          className="searchbar"
          placeholder="Search for Artist"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              search();
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Button className="searchButton" onClick={search}>Search</Button>
      </Box>
      <Box className="searchResults">
        <SimpleGrid minChildWidth="160px" spacing="30px">
          {
            // display Albums to the user
            albums.map((album) => {
              console.log(album);

              return (
                <Card key={album.id} className="cards">
                  <Image src={album.images[0].url} />
                  <CardBody>
                    <CardHeader className="albumTitle">{album.name}</CardHeader>
                  </CardBody>
                </Card>
              );
            })
          }
        </SimpleGrid>
      </Box>
    </Box>
  );
}
