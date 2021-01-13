import {
  Button,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Heading } from "../../components/Heading";
import { imageCDN, pathName } from "../../properties/properties";
import { SustainabilityLess } from "./Sustainability";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  home: {
    paddingLeft: 140,
    paddingRight: 140,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  content: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    backgroundSize: "cover",
    background: `no-repeat center`,
    height: 400,
    width: 800,
    [theme.breakpoints.down("xs")]: {
      height: 200,
      width: 800,
    },
  },
  text: {
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 20,
      // textAlign: "justify",
    },
  },
  divider: {
    backgroundColor: theme.palette.common.white,
    height: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  more: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    textTransform: "uppercase",
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 100,
  },
}));

export const PassionForSustainability: React.FC = () => {
  return (
    <>
      <Hidden xsDown>
        <PassionForSustainabilityDesktopView />
      </Hidden>
      <Hidden smUp>
        <PassionForSustainabilityMobileView />
      </Hidden>
    </>
  );
};

export const PassionForSustainabilityDesktopView: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Passion For Sustainability" />
      <Grid container className={classes.home}>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={6}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_1.jpg)`,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.text}>
                Forest fires rage from Australia to California ; thunderstorms
                shatter coastal towns ; icebergs are melting and sea levels in
                coastal towns are rising at alarming levels. Mother Nature is
                angry with us ; and rightly so. We humans have disturbed the
                carbon balance on the planet with our emissions.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.text}>
                Though not proven ; it is also likely that the Covid virus
                challenge we face is due to this change in our carbon balance .
                We have less than two decades left to ensure temperature rise
                does not exceed two degrees and hence fighting climate change is
                real and the sustainability agenda needs to come to the
                forefront.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_2.png)`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={6}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_3.png)`,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.text}>
                Climate change can be fought on three pillars:
                <br />
                1) CONTROLLING CARBON EMISSIONS
                <br />
                <br /> 2) CAPTURING CARBON EMISSIONS
                <br />
                <br /> 3) GROWING THE CIRCULAR ECONOMY
                <br />
                <br /> On the first pillar significant progress has been made by
                growing renewable power generation ; mainly solar and wind. This
                must and will continue. However, more is needed and, hence, the
                shift to the Hydrogen Economy will be critical.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.text}>
                Growth of battery storage and Waste to Energy will be a big
                factor as we tackle climate change. Whilst a lot of work has
                been done on controlling carbon emission, a lot needs to be done
                on the capture side. Carbon storage and capture technology needs
                to evolve, and technology needs to bring the cost down. We must
                focus on reforestation and use of technology should increased so
                that carbon is captured by our forests, including growing our
                oceans to act as a sink for increased carbon capture. Finally,
                on the third pillar, we need to grow the circular economy, as
                just focusing on the first two pillars will not let us achieve
                our objectives. We need to ensure waste is captured and reused.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/hDyO6rr3kqk/1920x1280)`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={6}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_5.jpg)`,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.text}>
                Ravi is passionate about sustainability and is making his
                contributions to society to help fight climate change. He has
                extensive experience and ideas across the three pillars that
                need to be worked upon to address the challenge to ensure global
                temperatures do not rise by two degrees centigrade in the next
                two decades
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <SustainabilityLess />
      <Grid container justify="center">
        <Button
          className={classes.more}
          variant="contained"
          href={pathName + "/sustainability-report"}
        >
          Read More Articles
        </Button>
      </Grid>
    </div>
  );
};

const PassionForSustainabilityMobileView: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Passion For Sustainability" />
      <Grid container className={classes.home}>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.text}>
                Forest fires rage from Australia to California ; thunderstorms
                shatter coastal towns ; icebergs are melting and sea levels in
                coastal towns are rising at alarming levels. Mother Nature is
                angry with us ; and rightly so. We humans have disturbed the
                carbon balance on the planet with our emissions.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_1.jpg)`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.text}>
                Though not proven ; it is also likely that the Covid virus
                challenge we face is due to this change in our carbon balance .
                We have less than two decades left to ensure temperature rise
                does not exceed two degrees and hence fighting climate change is
                real and the sustainability agenda needs to come to the
                forefront.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_2.png)`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.text}>
                Climate change can be fought on three pillars:
                <br />
                1) CONTROLLING CARBON EMISSIONS
                <br />
                <br /> 2) CAPTURING CARBON EMISSIONS
                <br />
                <br /> 3) GROWING THE CIRCULAR ECONOMY
                <br />
                <br /> On the first pillar significant progress has been made by
                growing renewable power generation ; mainly solar and wind. This
                must and will continue. However, more is needed and, hence, the
                shift to the Hydrogen Economy will be critical.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_3.png)`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.text}>
                Growth of battery storage and Waste to Energy will be a big
                factor as we tackle climate change. Whilst a lot of work has
                been done on controlling carbon emission, a lot needs to be done
                on the capture side. Carbon storage and capture technology needs
                to evolve, and technology needs to bring the cost down. We must
                focus on reforestation and use of technology should increased so
                that carbon is captured by our forests, including growing our
                oceans to act as a sink for increased carbon capture. Finally,
                on the third pillar, we need to grow the circular economy, as
                just focusing on the first two pillars will not let us achieve
                our objectives. We need to ensure waste is captured and reused.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/hDyO6rr3kqk/1920x1280)`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.text}>
                Ravi is passionate about sustainability and is making his
                contributions to society to help fight climate change. He has
                extensive experience and ideas across the three pillars that
                need to be worked upon to address the challenge to ensure global
                temperatures do not rise by two degrees centigrade in the next
                two decades
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${imageCDN}/assets/sustainability/home_5.jpg)`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <SustainabilityLess />
      <Grid container justify="center">
        <Button
          className={classes.more}
          variant="contained"
          href={pathName + "/sustainability-report"}
        >
          Read More Articles
        </Button>
      </Grid>
    </div>
  );
};
