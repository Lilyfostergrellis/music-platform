import {
  Heading,
  SimpleGrid,
  Image,
  Card,
  CardBody,
  CardHeader,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import AppContext from "../../context/appContext";

export default function Category(props) {
  // get access token from react context
  const ctx = useContext(AppContext);
  const [category, setCategory] = useState([]);

  const { val } = useParams();
 
  console.log("ID: " + val);
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

    // get request for category
    fetch(
      `https://api.spotify.com/v1/browse/categories/${val}`,
      // `https://api.spotify.com/v1/search?type=artist&q=genre:samba`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setCategory(data);
      });
    // fetch(
    //   `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
    //   searchParams
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setAlbums(data.genres);
    //   });
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
      <Heading>Category{val}</Heading>
      <Box className="searchresults">
        <SimpleGrid minChildWidth="160px" spacing="40px">
          {
            // display Albums to the user
            category &&
              category.map((album) => {
                console.log(album);

                return (
                  <Card key={album.id}>
                    <Image src={album.icons[0].url} />
                    <CardBody>
                      <CardHeader>{album.name}</CardHeader>
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
