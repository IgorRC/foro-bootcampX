import { Box, Heading, Input, Button } from "@chakra-ui/react";
import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function Discussion() {
  const { id } = useParams();

  return (
    <Box color={"red"} maxW="920px" margin="auto" fontSize={"20px"}>
      variable de id{id}
    </Box>

  );
}

export default Discussion;
