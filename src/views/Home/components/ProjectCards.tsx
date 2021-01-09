import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pathName } from "../../../properties/properties";
import { useIsMobile } from "../../../components/useIsMobile";

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
    [theme.breakpoints.between(1280, 1380)]: {
      height: 240,
    },
    [theme.breakpoints.down("sm")]: {
      height: 230,
      backgroundPosition: " 50% center",
    },
    [theme.breakpoints.down("xs")]: {
      height: 240,
    },
  },
  cardContent: {
    paddingLeft: 30,
    paddingTop: 30,
    backgroundColor: theme.palette.primary.light,
    height: 300,
    [theme.breakpoints.between(1280, 1380)]: {
      height: 210,
    },
    [theme.breakpoints.down("sm")]: {
      height: 200,
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      height: 230,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  cardContentLeft: {
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 2,
    },
  },
  cardContentRight: {
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      marginRight: 2,
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
      paddingTop: 5,
      fontSize: 12,
    },
  },
  cardTitle: {
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontWeight: 900,
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  cardButton: {
    marginTop: 50,
    textTransform: "uppercase",
    fontWeight: 900,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      fontSize: 8,
      padding: 2,
    },
  },
}));

export function ProjectCards() {
  const classes = useStyles();
  const isMobile = useIsMobile();
  const content = [
    {
      title: "About",
      text: "Details on Expertise and work experience",
      src: `${pathName}/assets/home/Cards/about.png`,
      href: `${pathName}/about`,
    },
    {
      title: "LANDMARK DEALS",
      text:
        "Cutting edge and large complex advisory projects done in sectors of power, ports, renewables etc, both developed and emerging markets",
      src: `${pathName}/assets/home/Cards/deals.jpg`,
      href: `${pathName}/landmark-deals`,
    },
    {
      title: "Thought leadership",
      text:
        "Insights provided at high profile forums on lnfrastructure and sustainability",
      src: `${pathName}/assets/home/Cards/thoughtleadership.jpg`,
      href: `${pathName}/thought-leadership`,
    },
    {
      title: "Passion for Sustainability",
      text: "Work being done on Sustainability and Green financing  ",
      src: isMobile
        ? `${pathName}/assets/home/Cards/sustainability-mobile.png`
        : `${pathName}/assets/home/Cards/sustainability.png`,
      href: `${pathName}/sustainability`,
    },

    {
      title: "Impact on Society",
      text: "Actively working for the Business For Peace Foundation",
      src: `${pathName}/assets/home/Cards/peace.jpg`,
      href: `${pathName}/peace`,
    },
    {
      title: "Gallery",
      text: "Media coverage across different platforms",
      src: `${pathName}/assets/home/Cards/gallery.jpg`,
      href: `${pathName}/gallery`,
    },
    {
      title: "AWARDS",
      text: "Industry awards won for project finance deals ",
      src: isMobile
        ? `${pathName}/assets/home/Cards/awards-mobile.jpg`
        : `${pathName}/assets/home/Cards/awards.jpg`,
      href: `${pathName}/awards`,
    },
  ];
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
            href={card.href}
          />
        </Grid>
      ))}
    </Grid>
  );
}

// function Card(props) {
//   const { src, text } = props;
//   const classes = useStyles();
//   return (
//     <div>
//       <img src={src} style={{ maxHeight: "100%", maxWidth: "100%" }} />
//       <Typography variant="body1" className={classes.cardText}>
//         {text}
//       </Typography>
//     </div>
//   );
// }

export function ProjectCard(props) {
  const { src, title, text, index, href } = props;
  const classes = useStyles();
  return index % 2 === 0 ? (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6} sm={4}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${src})`, marginRight: 10 }}
        ></div>
      </Grid>
      <Grid item xs={6} sm={8}>
        <div
          className={[classes.cardContent, classes.cardContentLeft].join(" ")}
        >
          <Typography variant="h5" className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.cardText}>
            {text}
          </Typography>
          <Button
            variant="contained"
            className={classes.cardButton}
            href={href}
          >
            Learn More
          </Button>
        </div>
      </Grid>
    </Grid>
  ) : (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6} sm={8}>
        <div
          className={[classes.cardContent, classes.cardContentRight].join(" ")}
        >
          <Typography variant="h5" className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.cardText}>
            {text}
          </Typography>
          <Button
            variant="contained"
            className={classes.cardButton}
            href={href}
          >
            Learn More
          </Button>
        </div>
      </Grid>
      <Grid item xs={6} sm={4}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${src})`, marginLeft: 10 }}
        ></div>
      </Grid>
    </Grid>
  );
}
