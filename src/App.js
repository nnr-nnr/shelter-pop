import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import InputForm from "./components/InputForm";
import { Box } from "@mui/material";
import GeneratedImage from "./components/GeneratedImg";

function App() {
  const [genImgURI, setGenImgURI] = useState("");
  // console.log("genImgURI", genImgURI);
  return (
    <Box sx={{ p: 4 }}>
      {/* border: "1.5pt blue solid" */}
      <NavBar />
      <InputForm setGenImgURI={setGenImgURI} />
      <GeneratedImage genImgURI={genImgURI} />
    </Box>
  );
}

export default App;
