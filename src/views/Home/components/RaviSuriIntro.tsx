import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useWidth } from "../../../components/useIsMobile";
import { imageCDN } from "../../../properties/properties";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 300,
    width: 300,
    background: `url(${imageCDN}/assets/home/ravi-suri.png) no-repeat center`,
    backgroundSize: "contain",
    [theme.breakpoints.between(1280, 1380)]: {
      height: 260,
      width: 260,
    },
    [theme.breakpoints.down("md")]: {
      height: 230,
      width: 230,
    },
    [theme.breakpoints.down("sm")]: {
      height: 180,
      width: 180,
    },

    [theme.breakpoints.down("xs")]: {
      height: 160,
      width: 160,
    },
  },
  textContainer: {
    paddingTop: 40,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
    },
  },
  text: {
    fontWeight: 300,
    fontFamily: "Poppins",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.between(1280, 1380)]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
}));

export function RaviSuriImage() {
  const classes = useStyles();
  const width = useWidth();
  return (
    <div>
      <Hidden xsDown smDown={width <= 768}>
        <div className={classes.image}></div>

        <div className={classes.textContainer}>
          <Typography variant="h6" className={classes.text}>
            Passionate and experienced Project Financier with extensive
            knowledge in infrastructure and sustainable finance across all
            continents.
          </Typography>
        </div>
      </Hidden>
      <Hidden smUp={width > 768}>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <div className={classes.image}></div>
          </Grid>
          <Grid item xs={6} sm={8}>
            <div className={classes.textContainer}>
              <Typography variant="h6" className={classes.text}>
                Passionate and experienced Project Financier with extensive
                knowledge in infrastructure and sustainable finance across all
                continents.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
}
