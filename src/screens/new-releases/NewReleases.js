import {
  Heading,
  SimpleGrid,
  Image,
  Card,
  CardBody,
  CardHeader,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useState, useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import "./newReleases.css";

export default function NewReleases() {
  // get access token from react context
  const ctx = useContext(AppContext);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    console.log("new releases-useEffect" + ctx.accessToken);

    // get request using search, to get the Artist ID
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.accessToken}`,
      },
    };

    // get request for new releases
    fetch(
      `https://api.spotify.com/v1/browse/new-releases?country=US&limit=10&offset=5`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.albums.items);
      });
  }, []);

  // async function search() {
  //   console.log("new releases" + ctx.accessToken);

  //   // get request using search, to get the Artist ID
  //   const searchParams = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${ctx.accessToken}`,
  //     },
  //   };

  //   // get request for new releases
  //   await fetch(
  //     `https://api.spotify.com/v1/browse/new-releases?country=US&limit=10&offset=5`,
  //     searchParams
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       return setAlbums(data.albums.items);
  //     });
  // }

  return (
    <>
      <Heading size='lg' fontSize='50px' color="#CAD2C5" className="heading">New Releases</Heading>
      <Box className="searchResults">
        <SimpleGrid minChildWidth="160px" spacing="40px">
          {
            // display Albums to the user
            albums &&
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
    </>
  );
}
