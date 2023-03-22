import { Container, Heading, SimpleGrid, Image, Card, CardBody, CardHeader } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { UserContext } from "../../App";



export default function NewReleases() {

  // get access token from react context
  const accessToken = React.useContext(UserContext); 
    const [albums, setAlbums] = useState([]);

  async function search() {
    console.log("new releases" + accessToken);

    // get request using search, to get the Artist ID
    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };


    // get request with Artist ID, to get all the albums of that Artist
    await fetch(
      `https://api.spotify.com/v1/browse/new-releases?country=US&limit=10&offset=5`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        /* setAlbums(data) */
      });
  }

    search(); 
    

    return (
        <Container>
            <Heading>New Releases</Heading>
            <SimpleGrid columns={4}>
            { console.log(albums)
            // display Albums to the user
            /*  albums.map((album) => {
              

              return (
                <Card key={album.id}>
                  <Image src={album.images[0].url} />
                  <CardBody>
                    <CardHeader>{album.name}</CardHeader>
                  </CardBody>
                </Card>
              );
            }) */
          }
        </SimpleGrid>
        </Container>
    )
    
}