import { Box, ChakraProvider, Heading, Link, Switch } from "@chakra-ui/react";
import theme from "./Theme";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Discussion from "./discussion"



function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />

        {/* cosas dinamicas  */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/discussion/:id" element={<Discussion />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
