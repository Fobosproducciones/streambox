import React from "react";
import "../styles/Herostyles.css";

import { Box, Grid, Typography } from "@material-ui/core";

const Hero = () => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box m={3}>
            <Typography
              variant="h2"
              color="primary"
              align="center"
              className="glitch"
            >
              StreamBox
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              align="center"
              className="glitch"
            >
              StreamBox
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              align="center"
              className="glitch"
            >
              StreamBox
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" color="primary" align="center">
              Todo tu contenido en un sólo lugar.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
