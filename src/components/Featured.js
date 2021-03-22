import React from "react";

import Carousel from "react-grid-carousel";

import "../styles/Featuredstyles.css";
import { Grid } from "@material-ui/core";

const Featured = (props) => {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <div className="carousel-container">
          <Carousel
            cols={12}
            rows={1}
            gap={10}
            responsiveLayout={[
              {
                breakpoint: 376,
                gap: 1,
              },
            ]}
            loop
            showDots
            autoplay={5000}
            className="carousel"
          >
            {props.movies.map((movie) => (
              <Carousel.Item>
                <img
                  src={movie.Poster}
                  alt="movie"
                  width="75%"
                  className="featured-poster"
                  key={movie.imdbId}
                ></img>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Grid>
    </>
  );
};

export default Featured;
