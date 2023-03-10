import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Heading } from "../../../components/Heading";
import { SustainabilityMore } from "../Sustainability";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  home: {
    padding: 40,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  text: {
    paddingTop: 20,
    paddingBottom: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  introductionText: {
    fontWeight: 700,
    [theme.breakpoints.between(1280, 1380)]: {
      fontSize: 24,
    },
  },
}));

export const PassionForSustainabilityMore: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Passion For Sustainability" />
      <Grid container className={classes.home}>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.introductionText}>
            With reference to Ravi’s thoughts on Sustainability, kindly refer to
            the various reports and articles below that support his ideas on the
            way forward.
          </Typography>
        </Grid>
      </Grid>
      <SustainabilityMore />
    </div>
  );
};
