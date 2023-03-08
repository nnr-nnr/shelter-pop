import React, { useRef, useEffect } from "react";
import { Box, Button, Skeleton, Typography } from "@mui/material";

export default function GeneratedImage({ genImgURI }) {
  const imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Box ref={imgRef}>
      {genImgURI === "" ? (
        <></>
      ) : genImgURI === "processing" ? (
        <Skeleton
          animation="wave"
          width={"512px"}
          height={"512px"}
          // sx={{ border: "1pt red solid" }}
        />
      ) : (
        <>
          <div
            style={{
              width: "512px",
              height: "512px",
              // backgroundColor: "blue",
            }}
            alt={"DALLE-generated illustration"}
            src={genImgURI}
          ></div>
          <br></br>
          <a href={genImgURI} download target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              color="primary"
              sx={{ textDecoration: "none" }}
              // href="mailto:?subject=Check out this Shelter Pop image!"
            >
              <Typography variant="button">Download</Typography>
            </Button>
          </a>
        </>
      )}
    </Box>
  );
}
