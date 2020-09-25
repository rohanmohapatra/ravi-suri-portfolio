import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pathName } from "../../../properties/properties";

const useStyles = makeStyles((theme) => ({
  card: {
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardImage: {
    background: "no-repeat center center",
    backgroundSize: "cover",
    height: 330,
    [theme.breakpoints.down("sm")]: {
      height: 230,
    },
    [theme.breakpoints.down("xs")]: {
      height: 180,
    },
  },
  cardContent: {
    paddingLeft: 10,
    paddingTop: 30,
    backgroundColor: theme.palette.primary.dark,
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
  cardText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    paddingTop: 30,
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
      fontSize: 8,
    },
  },
  cardTitle: {
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontWeight: 900,
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  cardButton: {
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
}));

const content = [
  {
    title: "About",
    text: "Details on Expertise and work experience",
    src: `${pathName}/assets/home/Cards/about.png`,
  },
  {
    title: "LANDMARK DEALS",
    text:
      "Cutting edge and large complex advisory projects done in sectors of power, ports, renewables etc, both developed and emerging markets",
    src: `${pathName}/assets/home/Cards/deals.jpg`,
  },
  {
    title: "Thought leadership",
    text:
      "Insights provided at high profile forums on lnfrastructure and sustainability",
    src: `${pathName}/assets/home/Cards/thoughtleadership.jpg`,
  },
  {
    title: "Passion for Sustainability",
    text: "Work being done on Sustainability and Green financing  ",
    src: `${pathName}/assets/home/Cards/sustainability.png`,
  },

  {
    title: "PROMOTING BUSINESS FOR PEACE",
    text: "Actively working for the Business For Peace Foundation",
    src: `${pathName}/assets/home/Cards/peace.jpg`,
  },
  {
    title: "Gallery",
    text: "Media coverage across different platforms",
    src: `${pathName}/assets/home/Cards/gallery.jpg`,
  },
  {
    title: "AWARDS",
    text: "Industry awards won for project finance deals ",
    src: `${pathName}/assets/home/Cards/awards.jpg`,
  },
];

export function ProjectCards() {
  const classes = useStyles();
  return (
    // <Grid container spacing={4}>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="About"
    //     />
    //   </Grid>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="Landmark Deals"
    //     />
    //   </Grid>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="Though Leadership"
    //     />
    //   </Grid>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="Passion for Sustainability"
    //     />
    //   </Grid>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="Work for Business of Peace"
    //     />
    //   </Grid>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="Awards"
    //     />
    //   </Grid>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="Gallery"
    //     />
    //   </Grid>
    //   <Grid item xs={6} sm={3}>
    //     <Card
    //       src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
    //       text="Connect"
    //     />
    //   </Grid>
    // </Grid>
    <Grid container>
      {content.map((card, index) => (
        <Grid item xs={12} className={classes.card}>
          <ProjectCard
            src={card.src}
            title={card.title}
            text={card.text}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
}

function Card(props) {
  const { src, text } = props;
  const classes = useStyles();
  return (
    <div>
      <img src={src} style={{ maxHeight: "100%", maxWidth: "100%" }} />
      <Typography variant="body1" className={classes.cardText}>
        {text}
      </Typography>
    </div>
  );
}

function ProjectCard(props) {
  const { src, title, text, index } = props;
  const classes = useStyles();
  return index % 2 === 0 ? (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${src})`, marginRight: 10 }}
        ></div>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.cardContent} style={{ marginLeft: 10 }}>
          <Typography variant="h5" className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.cardText}>
            {text}
          </Typography>
          <Button variant="contained" className={classes.cardButton}>
            Learn More
          </Button>
        </div>
      </Grid>
    </Grid>
  ) : (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6}>
        <div className={classes.cardContent} style={{ marginRight: 10 }}>
          <Typography variant="h5" className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.cardText}>
            {text}
          </Typography>
          <Button variant="contained" className={classes.cardButton}>
            Learn More
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${src})`, marginLeft: 10 }}
        ></div>
      </Grid>
    </Grid>
  );
}
