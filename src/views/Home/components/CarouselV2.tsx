import React, { useEffect } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Grid } from "@material-ui/core";
import "./slick-custom.css";
import {
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Text7,
  Text8,
  Text9,
  Text10,
  Text11,
} from "./Texts";
import { pathName } from "../../../properties/properties";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: "100%",
  },
  root: {
    width: "100%",
    margin: 0,
  },
  card: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  cardTitle: {
    position: "absolute",
    top: "20%",
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: 700,
  },
  cardText: {
    position: "absolute",
    top: "40%",
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
  },
  cardImage: {
    height: 500,
    width: 1000,
    // maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 200,
      width: 500,
    },
    [theme.breakpoints.between(1280, 1380)]: {
      height: 450,
      width: 1000,
    },
  },
}));

export function CarouselV2() {
  const classes = useStyles();
  const settings = {
    dots: true,
    className: classes.content,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/1.png"} text={Text1} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/2.jpg"} text={Text2} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/3.png"} text={Text3} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/4.png"} text={Text4} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/5.png"} text={Text5} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/6.png"} text={Text6} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/7.png"} text={Text7} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/8.jpg"} text={Text8} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card src={pathName + "/assets/home/Carousel/9.png"} text={Text9} />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card
              src={pathName + "/assets/home/Carousel/10.jpg"}
              text={Text10}
            />
          </Grid>
        </div>
        <div>
          <Grid container justify="center" alignItems="center">
            <Card
              src={pathName + "/assets/home/Carousel/11.png"}
              text={Text11}
            />
          </Grid>
        </div>
      </Slider>
    </div>
  );
}

function Card(props) {
  const { src, text: Text } = props;
  const classes = useStyles();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);
  return (
    <div className={classes.card}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={["card-image"].join(" ")}
      >
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          animate={controls}
          className="card-img-overlay"
        ></motion.div>
        <img
          alt="carousel"
          src={src}
          className={classes.cardImage}
          // style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h6" className={classes.cardTitle}>
          RAVI SURI
        </Typography>
        <Text />
        {/* <Typography variant="h4" className={classes.cardText}>
          <Text />
        </Typography> */}
      </Grid>
    </div>
  );
}
