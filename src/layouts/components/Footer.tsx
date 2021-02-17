import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  disclaimer: {
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
  tml: {
    paddingTop: 5,
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
  logoContainer: {
    paddingTop: 5,
  },
  logo: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      height: 25,
    },
  },
}));

export const Footer: React.FC = () => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <Box
      style={{ color: "white", paddingTop: 10, paddingBottom: 10 }}
      alignSelf="center"
    >
      {location.pathname.includes("/landmark-deals") ? (
        <Typography variant="h6" align="center" className={classes.disclaimer}>
          Disclaimer: The images used with each project are only representative
          and in most cases do not represent the actual look of the projects. In
          some cases if they do, they have been sourced from public domain.
        </Typography>
      ) : location.pathname.includes("/home") ? (
        <Typography variant="h6" align="center" className={classes.disclaimer}>
          Disclaimer: All images used in this website are for representative
          purpose only and have been picked up from public domain.
        </Typography>
      ) : null}

      <Typography variant="h6" align="center" className={classes.tml}>
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </Typography>
      <Grid container justify="center" className={classes.logoContainer}>
        <a href="http://themintlab.com">
          <img
            src="https://ik.imagekit.io/tgj9qhofatt/assets/home/tml-white_pbLuzWqGd.svg"
            alt="The Mint Lab"
            className={classes.logo}
          />
        </a>
      </Grid>
    </Box>
  );
};
