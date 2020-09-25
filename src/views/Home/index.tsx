import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RaviSuriImage } from "./components/RaviSuriIntro";
import { Video } from "./components/Video";
import { Grid, Hidden, Typography } from "@material-ui/core";
import { Carousel } from "./components/Carousel";
import { ProjectCards } from "./components/ProjectCards";
import { CarouselV2 } from "./components/CarouselV2";
import { useIsMobile } from "../../components/useIsMobile";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    paddingTop: 100,
  },
  sectionOne: {
    paddingTop: 80,
    paddingLeft: 60,
    paddingRight: 30,
  },
  sectionTwo: {
    paddingTop: 100,
    paddingLeft: 60,
    paddingRight: 60,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  sectionHidden: {
    paddingTop: 100,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  intro: {
    fontFamily: "Montserrat",
  },
  sectionThree: {
    paddingTop: 80,
    width: "100%",
    // paddingLeft: 60,
    // paddingRight: 60
  },
  sectionFour: {
    paddingTop: 80,
    paddingLeft: 60,
    paddingRight: 60,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
}));

export function Home() {
  const classes = useStyles();
  const isMobile = useIsMobile();
  return (
    <div className={classes.root}>
      <Grid
        container
        justify={isMobile ? "center" : "space-between"}
        alignItems={isMobile ? "center" : "flex-start"}
        className={classes.sectionOne}
      >
        <Grid item xs={3}>
          <RaviSuriImage />
        </Grid>
        <Grid item xs={8}>
          <Hidden xsDown>
            <CarouselV2 />
          </Hidden>
        </Grid>
      </Grid>
      <Hidden smUp>
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          className={classes.sectionHidden}
        >
          <CarouselV2 />
        </Grid>
      </Hidden>
      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        className={classes.sectionTwo}
      >
        <Grid item xs={12}>
          <Video />
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        className={classes.sectionFour}
      >
        <ProjectCards />
      </Grid>
    </div>
  );
}
