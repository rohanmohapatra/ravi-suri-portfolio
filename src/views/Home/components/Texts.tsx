import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
  cardText: {
    position: "absolute",
    top: "40%",
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      top: "50%",
      fontSize: 8,
    },
  },
}));
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

export function Text1() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Distinguished career across world’s <br />
        leading banks and institutions like{" "}
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          ABN <br />
          AMRO, Standard Chartered , ANZ, GE Capital and KPMG
        </span>
      </motion.div>
    </Typography>
  );
}

export function Text2() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Significant years of experience in <br />
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          project export finance
        </span>{" "}
        and{" "}
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          sustainable finance
        </span>
      </motion.div>
    </Typography>
  );
}

export function Text3() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Worked on a number of landmark <br />
        infrastructure deals across{" "}
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          50 <br />
          countries
        </span>{" "}
        in both developed and emerging markets
      </motion.div>
    </Typography>
  );
}

export function Text4() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Thorough technical knowledge in sustainability, <br />{" "}
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          power, renewable energy,
        </span>{" "}
        refining, <br />
        petrochemical, road, rail, Ports, airports and <br />
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          social infrastructure sector
        </span>{" "}
      </motion.div>
    </Typography>
  );
}

export function Text5() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Passionately working on
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          SUSTAINABLE <br />
          INFRASTRUCTURE
        </span>{" "}
        and its financing;
        <br />
        renewable projects financed to date have <br /> saved approx. 5000
        metric tonnes per year <br /> of CO2 emissions generated
      </motion.div>
    </Typography>
  );
}

export function Text6() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Successfully raised debt and equity in excess of <br />
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          USD 75 billion
        </span>{" "}
        across deals that have saved
        <br />
        approx 5000 metric tonnes per year of CO2 <br /> emissions generated
        over 57000 mw of <br /> electricity and over 1600 MIGD of water plant
      </motion.div>
    </Typography>
  );
}

export function Text7() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Provided significant
        <br />
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          THOUGHT LEADERSHIP
        </span>{" "}
        at high profile forums. Is a
        <br />
        respected global leader in this field
      </motion.div>
    </Typography>
  );
}

export function Text8() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Doing Cutting edge work on
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          HYDROGEN <br />
          ECONOMY
        </span>{" "}
        and advising governments in
        <br />
        achieving their aim to get to net zero <br />
        carbon emissions in the future
      </motion.div>
    </Typography>
  );
}

export function Text9() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Working on the impact of technology {"("}Artificial <br />
        Intelligence, IoT, 5G, 3D printing{")"} on the <br />
        infrastructure sector and designing appropriate <br />
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          RISK MITIGATION
        </span>{" "}
        techniques for obtaining long
        <br />
        term finance needed to grow this sector
      </motion.div>
    </Typography>
  );
}

export function Text10() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        Acting member of
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          UNCC, Business
        </span>
        <br />
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          for Peace foundation
        </span>{" "}
        and
        <br />
        International Society of Public Private Partnership Sciences
      </motion.div>
    </Typography>
  );
}

export function Text11() {
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
    <Typography variant="h5" className={classes.cardText}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
      >
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          Gold Medalist
        </span>
        in Bombay University
        <br />
        Post graduate in
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
          CHEMICAL ENGINEERING
        </span>{" "}
        from <br />
        North western University
        <br />
        Executive education from HARVARD, MIT, STANFORD,
        <br /> WHARTON, YALE, CAMBRIDGE and OXFORD universities.
      </motion.div>
    </Typography>
  );
}
