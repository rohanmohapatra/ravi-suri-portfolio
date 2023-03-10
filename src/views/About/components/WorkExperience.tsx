import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { useTransform, useViewportScroll } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { imageCDN } from "../../../properties/properties";
import { makeStyles, Typography } from "@material-ui/core";
import { useRefScrollProgress } from "../../../components/useRefScrollProgress";

const useStyles = makeStyles((theme) => ({
  connector: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,
  },
  dot: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,
    height: 20,
    width: 20,
    [theme.breakpoints.down("xs")]: {
      height: 5,
      width: 5,
    },
  },
  image: {
    height: 120,
    width: 120,
    marginRight: 30,
    background: `no-repeat center`,
    backgroundSize: "contain",
    // [theme.breakpoints.between(1280, 1380)]: {
    //   height: 450,
    //   width: 450,
    // },
    // [theme.breakpoints.down("md")]: {
    //   height: 300,
    //   width: 300,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: 200,
    //   width: 200,
    // },

    [theme.breakpoints.down("xs")]: {
      height: 180,
      width: 180,
      marginRight: 10,
    },
  },
  text: {
    marginLeft: 200,
    width: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      marginLeft: 20,
      width: 200,
    },
  },
}));

export function WorkExperience() {
  const { scrollYProgress } = useViewportScroll();
  const timelineRef = useRef();
  const { ref, start, end } = useRefScrollProgress(timelineRef);
  const interval = start && end ? end - start : 1;
  const lateStart = start ? start - 0.15 : 0;
  const scrollRange = [
    lateStart,
    lateStart + interval / 5,
    lateStart + 2 * (interval / 5),
    lateStart + 3 * (interval / 5),
    lateStart + 4 * (interval / 5),
    end ? end - 0.1 : 1,
  ] as number[];
  const opacity = {
    one: useTransform(scrollYProgress, scrollRange, [0, 1, 1, 1, 1, 1]),
    two: useTransform(scrollYProgress, scrollRange, [0, 0, 1, 1, 1, 1]),
    three: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 1, 1, 1]),
    four: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 0, 1, 1]),
    five: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 0, 0, 1]),
    // six: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 0, 0, 0]),
  };
  const companies = [
    imageCDN + "/assets/about/logos/anz.png",
    imageCDN + "/assets/about/logos/ge.png",
    imageCDN + "/assets/about/logos/abn.png",
    imageCDN + "/assets/about/logos/scb.png",
    imageCDN + "/assets/about/logos/kpmg.png",
  ];
  const classes = useStyles();
  return (
    <Timeline ref={ref} align="left">
      <motion.div style={{ opacity: opacity.one }}>
        <TimelineItem>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${companies[0]})` }}
          />
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={classes.text}>
              Ravi Suri started his career with ANZ Grindlays as a corporate
              Banker.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div style={{ opacity: opacity.two }}>
        <TimelineItem>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${companies[1]})` }}
          />
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={classes.text}>
              After a successful stint with ANZ, including training in their
              Melbourne Flowerdale Centre, he joined GE Capital???s Global Project
              and Structured Finance Unit for Asia Pacific. He led GE Capital to
              play a leadership role in the successful privatisation of India???s
              power sector and was involved in landmark deals in Pakistan,
              Bangladesh and Indonesia. Whilst at GE, he was instrumental in
              setting up an infrastructure fund with Soros and IFC that invested
              in Power assets globally.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div style={{ opacity: opacity.three }}>
        <TimelineItem>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${companies[2]})` }}
          />
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={classes.text}>
              Ravi then moved on to join ABN AMRO in India as the Head of the
              Structured Finance unit. He positioned ABN Amro as a leader in
              this space, and was also responsible for successfully advising
              Petronet LNG, a landmark deal which was India???s first LNG Project.
              He then shifted to Hongkong as Executive Director of Integrated
              Energy doing deals across China, Thailand, Indonesia and other
              Asia Pacific countries.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div style={{ opacity: opacity.four }}>
        <TimelineItem>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${companies[3]})` }}
          />
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={classes.text}>
              After ABN AMRO he joined the Standard Chartered Bank unit to set
              up their Project and Export Finance Unit. He grew this business
              successfully to make Standard Chartered a force to reckon with in
              the global arena and was promoted as the global head of this
              division. Under his able leadership, Standard Chartered attained
              many prestigious league tables status, including being voted as
              the Best Project Finance house by PFI globally in 2010.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div style={{ opacity: opacity.five }}>
        <TimelineItem>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${companies[4]})` }}
          />
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={classes.text}>
              After a glorious stint of over 15 years at Standard Chartered
              Bank, Ravi joined KPMG as their Partner and Global Head for
              Infrastructure Finance, covering approximately 150 countries.
              Under him KPMG made it to the top league tables in the MENA region
              in a very short span of time. As it stands, KPMG has soon become a
              leader in the project finance Advisory services, with some unique
              high profile complex deal executions.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </motion.div>
      {/* <motion.div style={{ opacity: opacity.six }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Get up</TimelineContent>
        </TimelineItem>
      </motion.div> */}
    </Timeline>
  );
}
