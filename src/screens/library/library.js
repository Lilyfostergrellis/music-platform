import { Box, Button, Card, CardBody, CardHeader, Image, Input, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";

const CLIENT_ID = "3deed9bc4aff411493d9447b7d93fdc6";
const CLIENT_SECRET = "36756a1ae5a5415594e0eda5bc0508b9";

export default function Library() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

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

  async function search() {
    console.log(accessToken);
    console.log(`Search for ${searchInput}`);

    // get request using search, to get the Artist ID
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
      Library
      <Box>
          <Input
            placeholder="Search for Artist"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>

      </Box>
      <Box>
        <SimpleGrid columns={4}>
          {
            // display Albums to the user
            albums.map((album) => {
              console.log(album);

              return (
                <Card key={album.id}>
                  <Image src={album.images[0].url} />
                  <CardBody>
                    <CardHeader>{album.name}</CardHeader>
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
