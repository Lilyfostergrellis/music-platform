import React, { useContext, Component } from "react";
/* import Slider from "react-slick"; */
import { Box, Heading } from "@chakra-ui/react";
// import { UserContext } from "../../App";
import AppContext from "../../context/appContext";
import "./home.css";

export default function Home() {
  // get access token from react context
  // const accessToken = React.useContext(UserContext);
  const ctx = useContext(AppContext);


  return (
    <Box>
      <Box className="home">

        

        <Heading>Home</Heading>

        {ctx.accessToken}

        


      </Box>
    </Box>
  );
}
