import React, { useState, useEffect } from "react";

import "../styles/Mainsectionstyles.css";

import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import Iframe from "./Iframe";
import Featured from "./Featured";

const MainSection = () => {
  const [movies, setMovies] = useState([]);
  let movieArray = [];
  let movieArray2 = [];
  let finalArray = [];

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?apikey=3e0a45aa&s=space";
    const response = await fetch(url);
    const responseJson = await response.json();
    movieArray = responseJson.Search;

    const url2 = "http://www.omdbapi.com/?apikey=3e0a45aa&s=space&page=2";
    const response2 = await fetch(url2);
    const responseJson2 = await response2.json();
    movieArray2 = movieArray.concat(responseJson2.Search);

    const url3 = "http://www.omdbapi.com/?apikey=3e0a45aa&s=space&page=3";
    const response3 = await fetch(url3);
    const responseJson3 = await response3.json();
    finalArray = movieArray2.concat(responseJson3.Search);
    setMovies(finalArray);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box className="block">
            <Grid item xs={12}>
              <Typography color="primary" align="center">
                Space Channel - Now streaming
              </Typography>
              <Box mt={1} mb={2} className="iframe-box">
                <Iframe />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography color="primary" align="center">
                Or pick a movie from our catalog
              </Typography>
              <Box mt={0}>
                <Featured movies={movies} />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainSection;
