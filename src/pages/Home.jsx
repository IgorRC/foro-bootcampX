import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <Box maxW="920px" margin="auto">
      <Box className="containerDiscution">
        <ul className="comentations">
          <li className="coment"> 
            <a href="discussion/:id">Los Dinosaurios</a>
            <Box className="date-user">
              <span className=" nameUser"> by igor </span>
              <span className="date"> 20/07/20222 </span>
              <span className="countComments"> | 20 comments </span>
            </Box>
          </li>
          <li className="coment"> 
            <a href="discussion/:id">The boys</a>
            <Box className="date-user">
              <span className=" nameUser"> by igor </span>
              <span className="date"> 20/07/20222 </span>
              <span className="countComments"> | 20 comments </span>
            </Box>
          </li>
          <li className="coment"> 
            <a href="discussion/:id">Universe marvel</a>
            <Box className="date-user">
              <span className=" nameUser"> by igor </span>
              <span className="date"> 20/07/20222 </span>
              <span className="countComments"> | 20 comments </span>
            </Box>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default Home;
