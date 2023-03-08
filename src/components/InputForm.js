import React, { useEffect, useState } from "react";

import {
  Typography,
  Autocomplete,
  Button,
  TextField,
  Slider,
  Box,
  Grid,
} from "@mui/material";

import {
  imgStyles,
  animalSpecies,
  imgVenues,
  breedOptions,
} from "../utils/data";

export default function InputForm({ setGenImgURI }) {
  const [xsSize, mdSize, lgSize, pdSize] = [12, 10, 8, 2];
  const [submittable, setSubmittable] = useState(false);

  const [searchParams, setSearchParams] = useState({
    species: "",
    breed: "mut/unknown",
    physAttrs: "",
    age: 5,
    imgStyle: "",
    imgScene: "",
  });

  useEffect(() => {
    // console.log(searchParams);
    const complete =
      searchParams.imgStyle !== "" &&
      searchParams.imgScene !== "" &&
      searchParams.species !== "";
    setSubmittable(complete);
  }, [searchParams]);

  const generateImage = async () => {
    setGenImgURI("processing");
    const url = process.env.REACT_APP_API_URL;
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchParams),
    };
    await fetch(url, req)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error occured");
        }
        return res.json();
      })
      .then((data) => {
        const imgURL = data.img_url;
        setGenImgURI(imgURL);
      })
      .catch((err) => console.log("ERROR", err));
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      sx={{ p: 2 }}
      // border: "2pt solid hotpink"
    >
      {/* <div> */}
      <Grid container padding={2}>
        {/* sx={{ border: "2pt solid green" }} */}
        <AnimalInfo
          props={{
            setSearchParams,
            searchParams,
            xsSize,
            mdSize,
            lgSize,
            pdSize,
          }}
        />
        <ImageInfo
          props={{
            setSearchParams,
            searchParams,
            xsSize,
            mdSize,
            lgSize,
            pdSize,
          }}
        />
      </Grid>
      {/* </div> */}

      <Button
        variant="contained"
        disabled={!submittable}
        color="primary"
        onClick={() => generateImage()}
      >
        Generate Image
      </Button>
    </Box>
  );
}

function AnimalInfo({ props }) {
  const { setSearchParams, searchParams, xsSize, mdSize, lgSize, pdSize } =
    props;

  const questions = [
    <Autocomplete
      disableClearable
      id="combo-box-demo"
      defaultValue={null}
      onChange={(ev, val) => {
        // const updVal = { species: val.value };
        setSearchParams((searchParams) => ({
          ...searchParams,
          ...{ species: val.value },
          ...{ breed: "mut/unknown" },
        }));
      }}
      options={animalSpecies}
      renderInput={(params) => <TextField {...params} label="species *" />}
    ></Autocomplete>,
    <Autocomplete
      disabled={searchParams.species === ""}
      id="combo-box-demo"
      defaultValue={null}
      onChange={(ev, val) => {
        setSearchParams((searchParams) => ({
          ...searchParams,
          ...{ breed: val },
        }));
      }}
      // isOptionEqualToValue={(option, value) => option.id === value.id}

      options={breedOptions(searchParams.species)}
      renderInput={(params) => (
        <TextField {...params} label="breed/type (optional)" />
      )}
    ></Autocomplete>,
    <TextField
      id="standard-basic"
      label="with these notable physical attributes (optional)"
      placeholder="soft eyes, fluffy tail, and floppy ears"
      fullWidth
      variant="standard"
      onChange={(ev, val) => {
        setSearchParams((searchParams) => ({
          ...searchParams,
          ...{ physAttrs: ev.target.value },
        }));
      }}
    />,
    <>
      <Typography variant="caption" gutterBottom>
        age in years (optional)
      </Typography>
      <Slider
        step={0.5}
        min={0.5}
        max={20}
        defaultValue={5}
        valueLabelDisplay="auto"
        marks={true}
        onChange={(ev, val) => {
          setSearchParams((searchParams) => ({
            ...searchParams,
            ...{ age: val },
          }));
        }}
      />
    </>,
  ];

  return (
    <Grid item container xs={12} md={6}>
      <Grid item xs={12} padding={pdSize}>
        <Typography variant="h5">Animal Info</Typography>
      </Grid>
      {questions.map((question, ind) => (
        <RespGridItem
          props={{ xsSize, mdSize, lgSize, pdSize, question }}
          key={ind}
        ></RespGridItem>
      ))}
    </Grid>
  );
}

function ImageInfo({ props }) {
  const { setSearchParams, searchParams, xsSize, mdSize, lgSize, pdSize } =
    props;

  const questions = [
    <Autocomplete
      disableClearable
      id="combo-box-demo"
      defaultValue={""}
      onChange={(ev, val) => {
        setSearchParams((searchParams) => ({
          ...searchParams,
          ...{ imgScene: val.value },
        }));
      }}
      options={imgVenues}
      renderInput={(params) => <TextField {...params} label="scene *" />}
    />,
    <Autocomplete
      disableClearable
      id="combo-box-demo"
      defaultValue={null}
      onChange={(ev, val) => {
        setSearchParams((searchParams) => ({
          ...searchParams,
          ...{ imgStyle: val.value },
        }));
      }}
      options={imgStyles}
      renderInput={(params) => <TextField {...params} label="image style *" />}
    />,
  ];

  return (
    <Grid item container xs={12} md={6}>
      {/* sx={{ border: "blue 2pt dashed" }} */}
      <Grid item xs={12} padding={pdSize}>
        <Typography variant="h5">Theme Info</Typography>
      </Grid>
      {questions.map((question, ind) => (
        <RespGridItem
          props={{ xsSize, mdSize, lgSize, pdSize, question }}
          key={ind}
        ></RespGridItem>
      ))}
    </Grid>
  );
}

function RespGridItem({ props }) {
  const { xsSize, mdSize, lgSize, pdSize, question } = props;
  return (
    <Grid
      item
      xs={xsSize}
      md={mdSize}
      lg={lgSize}
      padding={pdSize}
      className="RespGridItem"
    >
      {question}
    </Grid>
  );
}
