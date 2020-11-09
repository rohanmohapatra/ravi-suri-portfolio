import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
}));

export const Qualifications: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Educational Qualifications" />
      <div id="degree-course">
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
              <ListItemText primary="Cambridge Executive Education" />
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
          text="Testimonials by leading Industry veterans and expert on Ravi’s professionalism, work ethics, and positive personal traits"
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
      <Grid item style={{ marginLeft: 10 }}>
        <Typography variant="h6">{props.university}</Typography>
        <Typography variant="body2">{props.course}</Typography>
        <Typography variant="body2">{props.other}</Typography>
      </Grid>
    </Grid>
  );
};
