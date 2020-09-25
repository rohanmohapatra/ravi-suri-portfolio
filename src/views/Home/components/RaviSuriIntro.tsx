import { Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { pathName } from "../../../properties/properties";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 300,
    width: 300,
    background: `url(${pathName}/assets/home/ravi-suri.png) no-repeat center`,
    backgroundSize: "contain",
    [theme.breakpoints.down("sm")]: {
      height: 250,
      width: 250,
    },
    [theme.breakpoints.between(1280, 1380)]: {
      height: 260,
      width: 260,
    },
  },
  textContainer: {
    paddingTop: 40,
  },
  text: {
    fontWeight: 300,
    fontFamily: "Poppins",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.between(1280, 1380)]: {
      fontSize: 18,
    },
  },
}));

export function RaviSuriImage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.image}></div>
      <Hidden xsDown>
        <div className={classes.textContainer}>
          <Typography variant="h6" className={classes.text}>
            Passionate and experienced Project Financier with extensive
            knowledge in infrastructure and sustainable finance across all
            continents.
          </Typography>
        </div>
      </Hidden>
    </div>
  );
}
