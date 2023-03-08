import React from "react";
import { Typography, Box } from "@mui/material";

export default function NavBar() {
  return (
    <Box paddingX={2}>
      <header>
        <Typography variant="h1" align="center">
          Shelter Pop{" "}
        </Typography>
        <Typography variant="subtitle1">
          Shelter animals' intake photos rarely flatter them 🪞, and rescues
          don't always have the time and resources to update these photos and
          get their best angle 📸. That's where ✨Shelter Pop✨ comes in. In
          just a couple of minutes, you can create images 🖼️ to help potential
          adopters better see these animals' personalities 🎭 and envision them
          in their (or your 👀) home 🙌 with{" "}
          <a href="https://openai.com/product/dall-e-2">
            OpenAI's DALL•E {/* </Typography> */}
          </a>
          🧠💫.
        </Typography>
      </header>
    </Box>
  );
}
