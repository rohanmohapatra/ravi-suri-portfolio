import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import { Heading } from "../../../components/Heading";
import { pathName } from "../../../properties/properties";
import { ProjectCard } from "../../Home/components/ProjectCards";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    color: theme.palette.primary.contrastText,
  },
  universityImage: {
    backgroundSize: "cover",
    background: `no-repeat center`,
    height: 80,
    width: 80,
  },
  scholarship: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  degreeCard: {
    padding: 40,
    [theme.breakpoints.down("xs")]: {
      padding: 20,
    },
  },
  icon: {
    fontSize: "1rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  headerTitle: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  },
  headerTitle2: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  paper: {
    padding: 20,
    backgroundColor: theme.palette.primary.light,
  },
  heading: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
  },
  more: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
    paddingTop: 20,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  less: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
    paddingTop: 20,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  button: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
    color: theme.palette.primary.contrastText,
  },
  courseHeader: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    fontWeight: 600,
  },
  degreeCourse: {
    padding: 16,
  },
  cardTextContainer: {
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  universityText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  listContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
    },
  },
}));

const executiveEducation = [
  {
    src: pathName + "/assets/about/education/stanford.jpg",
    university: "STANFORD UNIVERSITY GRADUATE SCHOOL OF BUSINESS",
    details: ["Customer Focussed Innovation"],
  },
  {
    src: pathName + "/assets/about/education/harvard.jpg",
    university: "HARVARD UNIVERSITY KENNEDY SCHOOL OF GOVERNMENT",
    details: [
      "Creating Shared Value with Michael Potter",
      "Leadership of Senior Executive",
      "Leading Innovation in India",
    ],
  },
  {
    src: pathName + "/assets/about/education/yale.jpg",
    university: "Yale University",
    details: ["YALE CEO COLLEGE"],
  },
  {
    src: pathName + "/assets/about/education/oxford.jpg",
    university: "University Of Oxford",
    details: ["Creative writing", "Executive Leadership Programme"],
  },
  {
    src: pathName + "/assets/about/education/cambridge.jpg",
    university: "University Of Cambridge",
    details: ["General Management"],
  },
  {
    src: pathName + "/assets/about/education/northwestern-kellogg.jpg",
    university: "Kellogg School of Management",
    details: ["Soul of Leadership"],
  },
  {
    src: pathName + "/assets/about/education/mit.jpg",
    university: "Massachusetts Institute Of Technology",
    details: ["Clean Technology"],
  },
  {
    src: pathName + "/assets/about/education/wharton_upenn.jpg",
    university: "UNIVERSITY OF PENNSYLVANIA WHARTON",
    details: [
      "Accelerated Development programme",
      "Strategic Presentation Workshop",
      "Wharton Fellows",
    ],
  },
  {
    src: pathName + "/assets/about/education/imperial_london.jpg",
    university: "IMPERIAL COLLEGE, London",
    details: ["Customer Focussed Innovation"],
  },
  {
    src: pathName + "/assets/about/education/lse.jpg",
    university: "LONDON SCHOOL OF ECONOMICS",
    details: [
      "Behavioral Economics and the Modern Economy",
      "Course on Regulation",
    ],
  },
  {
    src: pathName + "/assets/about/education/cornell.png",
    university: "CORNELL UNIVERSITY",
    details: ["Leading High performance Teams"],
  },
  {
    src: pathName + "/assets/about/education/nyu-stern.jpg",
    university: "NYU, STERN",
    details: ["Executive Programme in Business leadership"],
  },
  {
    src: pathName + "/assets/about/education/insead.jpg",
    university: "INSEAD, France",
    details: ["Blue Ocean Strategy Programme"],
  },
  {
    src: pathName + "/assets/about/education/london_business.jpg",
    university: "LONDON BUSINESS SCHOOL",
    details: ["Masterclass in Private Equity"],
  },
  {
    src: pathName + "/assets/about/education/imd.jpg",
    university: "IMD, SWITZERLAND",
    details: ["Leading Digital Business Transformation"],
  },
  {
    src: pathName + "/assets/about/education/berkley.png",
    university: "UNIVERSITY OF BERKLEY",
    details: [
      "GOLDMAN SCHOOL OF PUBLIC POLICY",
      "Independent Leaders Scholar Programme on Public Policy",
    ],
  },
  {
    src: pathName + "/assets/about/education/singularity.png",
    university: "SINGULARITY UNIVERSITY",
    details: ["Impact of Exponential Technology Changes"],
  },
];

export const Qualifications: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Educational Qualifications" />
      <div id="degree-course" className={classes.degreeCourse}>
        <Typography variant="h5" className={classes.courseHeader}>
          DEGREE COURSES
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <DegreeCard
              src={pathName + "/assets/about/education/bombay_uni.jpg"}
              university="University Of Mumbai"
              course="B.Sc – Chemistry and Physics"
              other="RANK THIRD"
            />
            <DegreeCard
              src={pathName + "/assets/about/education/bombay_uni.jpg"}
              university="University Of Mumbai"
              course="B.Sc (Tech))"
              other="GOLD MEDALIST"
            />
          </Grid>
          <Grid item xs={6}>
            <DegreeCard
              src={pathName + "/assets/about/education/northwestern_uni.jpg"}
              university="Northwestern University"
              course="Master Of Science (M.Sc),"
              other="Chemical Engineering"
            />
          </Grid>
        </Grid>
      </div>
      <div id="executive-education">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon htmlColor="#fff" fontSize="large" />}
            aria-controls="executive-education-content"
            id="executive-education-header"
          >
            <Typography variant="h5" className={classes.courseHeader}>
              EXECUTIVE EDUCATION
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {executiveEducation.map((value) => (
                <Grid item xs={6}>
                  <ExecutiveCard
                    src={value.src}
                    university={value.university}
                    details={value.details}
                  />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
      <Heading heading="Scholarships" />
      <Grid container className={classes.scholarship}>
        <Grid item xs={12}>
          <List component="ul">
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Awarded the prestigious JN Tata Scholarship for students proceeding to the US for higher studies" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="KC Mahindra Education Trust Scholarship" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary=" Awarded Bombay University Scholarship for performance in B.Sc, but could not accept it as family income was more than the requisite means." />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Heading heading="Alumni/fellowships/memberships" />
      <Grid container className={classes.scholarship}>
        <Grid item xs={12}>
          <List component="ul">
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="CAMBRIDGE EXECUTIVE EDUCATION" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="WHARTON FELLOWS" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="NORTHWESTERN KELLOGG SCHOLAR IN PROGRESS" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container className={classes.card}>
        <ProjectCard
          src={pathName + "/assets/about/banner/testimonial.jpg"}
          title="Testimonials"
          text="Testimonials by leading Industry veterans on Ravi’s professionalism, work ethics, and positive personal traits"
          index={1}
          href={pathName + "/testimonials"}
        />
      </Grid>
    </div>
  );
};

interface DegreeProps {
  src: string;
  university: string;
  course: string;
  other?: string;
}
const DegreeCard: React.FC<DegreeProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.degreeCard}>
      <Grid item>
        <div
          className={classes.universityImage}
          style={{ backgroundImage: `url(${props.src})` }}
        ></div>
      </Grid>
      <Grid item className={classes.cardTextContainer}>
        <Typography variant="h6" className={classes.universityText}>
          {props.university}
        </Typography>
        <Typography variant="body2">{props.course}</Typography>
        <Typography variant="body2">{props.other}</Typography>
      </Grid>
    </Grid>
  );
};

interface ExecutiveProps {
  src: string;
  university: string;
  details?: string[];
}

const ExecutiveCard: React.FC<ExecutiveProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.degreeCard}>
      <Grid item>
        <div
          className={classes.universityImage}
          style={{ backgroundImage: `url(${props.src})` }}
        ></div>
      </Grid>
      <Grid item className={classes.cardTextContainer}>
        <Typography variant="h6" className={classes.universityText}>
          {props.university}
        </Typography>
        <ul className={classes.listContainer}>
          {props.details?.map((value) => (
            <li>
              <Typography variant="body2">{value}</Typography>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
