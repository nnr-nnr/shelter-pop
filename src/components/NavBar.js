import React from "react";
import { Typography, Box, Link } from "@mui/material";

export default function NavBar() {
  return (
    <Box paddingX={2}>
      {/*  */}
      <header>
        <Typography variant="h1" align="center">
          Shelter Pop{" "}
        </Typography>
        <Box
          className="aboutBox"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              width: "50%",
              maxWidth: "800px",
              minWidth: "300px",
              textAlign: "justify",
            }}
          >
            Shelter animals' intake photos rarely flatter them 🪞, and rescues
            don't always have the time and resources to update these photos and
            get their best angle 📸. That's where ✨Shelter Pop✨ comes in. In a
            few seconds, you can create images 🖼️ to help potential adopters
            better see these animals' personalities 🎭 and envision them in
            their (or your 👀) home 🙌 with{" "}
            <Link
              color="primary.main"
              href="https://openai.com/product/dall-e-2"
              target={"_blank"}
            >
              OpenAI's DALL•E
            </Link>
            🧠💫.
          </Typography>
        </Box>
      </header>
    </Box>
  );
}
