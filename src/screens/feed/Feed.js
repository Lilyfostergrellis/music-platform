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
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";

export default function Feed() {
  // get access token from react context
  const ctx = useContext(AppContext);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.accessToken}`,
      },
    };

    fetch(
      `https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_SE&offset=0&limit=20`,
      // `https://api.spotify.com/v1/search?type=artist&q=genre:samba`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.categories.items);
      });
    
  }, []);

  return (
    <>
      <Heading>Categories</Heading>
      <Box className="searchresults">
        <SimpleGrid minChildWidth="160px" spacing="40px">
          {
            // display Albums to the user
            albums &&
              albums.map((album) => {
                console.log(album);

                const link = `/Category/${album.id}`;

                return (
                  <Link to={link}>
                    <Card key={album.id}>
                      <Image src={album.icons[0].url} />
                      <CardBody>
                        <CardHeader>{album.name}</CardHeader>
                      </CardBody>
                    </Card>
                  </Link>
                );
              })
          }
        </SimpleGrid>
      </Box>
    </>
  );
}
