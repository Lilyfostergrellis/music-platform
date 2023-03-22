import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { UserContext } from "../../App";

export default function Home() {
  // get access token from react context
  const accessToken = React.useContext(UserContext); 

  return (
    <Box className="home">
      <Heading>Home</Heading>
      {accessToken}
    </Box>
  );
}
