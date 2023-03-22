import React, { useContext } from "react";
import { Box, Heading } from "@chakra-ui/react";
// import { UserContext } from "../../App";
import AppContext from "../../context/appContext";

export default function Home() {
  // get access token from react context
  // const accessToken = React.useContext(UserContext);
  const ctx = useContext(AppContext);

  return (
    <Box className="home">
      <Heading>Home</Heading>
      {ctx.accessToken}
    </Box>
  );
}
