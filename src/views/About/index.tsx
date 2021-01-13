import {
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import { Heading } from "../../components/Heading";
import { imageCDN, pathName } from "../../properties/properties";
import { ProjectCard } from "../Home/components/ProjectCards";
import { WorkExperience } from "./components/WorkExperience";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    color: theme.palette.primary.contrastText,
  },
  image: {
    height: 450,
    width: 450,
    background: `url(${imageCDN}/assets/home/ravi-suri2.png) no-repeat center`,
    backgroundSize: "contain",
    [theme.breakpoints.between(1280, 1380)]: {
      height: 450,
      width: 450,
    },
    [theme.breakpoints.down("md")]: {
      height: 300,
      width: 300,
    },
    [theme.breakpoints.down("sm")]: {
      height: 200,
      width: 200,
    },

    [theme.breakpoints.down("xs")]: {
      height: 200,
      width: 200,
    },
  },
  about: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 80,
    paddingRight: 30,
    [theme.breakpoints.between(1280, 1380)]: {
      paddingLeft: 80,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 80,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 80,
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
    },
  },
  aboutText: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      fontSize: 14,
    },
  },
  specialization: {
    paddingTop: 40,
    [theme.breakpoints.between(1280, 1380)]: {
      paddingTop: 60,
    },
    [theme.breakpoints.down("xs")]: {
      // paddingTop: 20,
      fontSize: 20,
    },
  },
  we: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 200,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 10,
    },
  },
  advisory: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    fontSize: "1rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  listIcon: {
    [theme.breakpoints.down("xs")]: {
      minWidth: 36,
    },
  },
  listText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
}));

const specialization = [
  "Experienced Corporate and Investment Banker",
  "Broad based experience across Banking, Industry and Consulting",
  "Experienced Project Financier and Sustainable Specialist",
  "Infrastructure Experience across broad sectors",
  "Deep knowledge of technological impact on infrastructure",
  "Deep insights into developed and emerging markets",
];

export function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. */}
      <Heading heading="About" />
      <Hidden xsDown>
        <AboutSectionDesktopView />
      </Hidden>
      <Hidden smUp>
        <AboutSectionMobileView />
      </Hidden>
      <Heading heading="Work Experience" />
      <Grid container className={classes.we}>
        <Grid item xs={12}>
          <WorkExperience />
        </Grid>
      </Grid>
      <Heading heading="Advisory Board" />
      <Grid container className={classes.advisory}>
        <Grid item xs={12}>
          <List component="ul">
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="GLOBAL TRADE REVIEW (GTR) 2014" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="BOARD MEMBER- Global Sponsorship Board – Infrastructure, KPMG INternational" />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} className={classes.card}>
          <ProjectCard
            src={imageCDN + "/assets/about/banner/Education.jpg"}
            title="Educational Qualifications"
            text="Ravi’s degree courses, Executive Education from the world’s most prestigious universities, and the various scholarships won for higher education"
            index={0}
            href={pathName + "/qualifications"}
          />
        </Grid>
        <Grid item xs={12} className={classes.card}>
          <ProjectCard
            src={imageCDN + "/assets/about/banner/testimonial.jpg"}
            title="Testimonials"
            text="Testimonials by leading Industry veterans on Ravi’s professionalism, work ethics, and positive personal traits"
            index={1}
            href={pathName + "/testimonials"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const AboutSectionDesktopView: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.about} justify="space-between">
      <Grid item xs={6} sm={4}>
        <div className={classes.image}></div>
        <Typography variant="h4" className={classes.specialization}>
          SPECIALIZATION
        </Typography>
        <List component="ul">
          {specialization.map((element) => (
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" className={classes.listText}>
                  {element}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={6} sm={8}>
        <Typography variant="h6" className={classes.aboutText}>
          Ravi has over 25 years of experience in the project finance and
          infrastructure advisory space having worked with a number of blue chip
          institutions. He has a distinguished career in banking, industry and
          consulting, having worked with ANZ, GE Capital, ABN AMRO Bank,
          Standard Chartered Bank and KPMG in global leadership Positions. He
          has strong industry insights and professional experience in the power,
          transportation, infra, ports, rail. airports, social infrastructure
          and oil and gas sectors. <br /> <br />
          During his career, he has led large complex advisory projects in the
          above mentioned sectors across 50 countries in Asia, Africa, Middle
          East, Europe and the Americas. Ravi believes that with the
          intersection of Artificial intelligence, Internet of Things, Big Data,
          3D and block chain into infrastructure being an inexorable event, the
          technological impact in this field will be significant resulting in a
          number of disruptions. He emphasises that risk mitigation for both
          debt and equity will no longer be immutable, as it has been during the
          last two decades, and newer methods will need to be adopted. <br />
          <br />
          Ravi is also working on cutting edge solutions to ensure
          infrastructure projects are bankable with the technology risk they
          face. He strongly believes in fighting the challenges facing climate
          change, and feels sustainable finance is a force for good to achieve
          this. He is passionate about this area and is doing some pathbreaking
          work here. <br />
          <br />
          His initiatives to finance power projects in Africa when at Standard
          Chartered bank under President Barack Obama’ s Power Africa
          initiative, is testament to his philosophy that infrastructure
          projects ameliorate the living of the poor. It is this belief that
          drives him to work with the Business for Peace Foundation and the
          United Nations. In his own humble and modest way, he is trying to make
          the world a better place to live in for the future generations.
        </Typography>
      </Grid>
    </Grid>
  );
};

const AboutSectionMobileView: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.about} justify="space-between">
      <Grid item xs={12}>
        <Grid container justify="center">
          <div className={classes.image}></div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.aboutText}>
          Ravi has over 25 years of experience in the project finance and
          infrastructure advisory space having worked with a number of blue chip
          institutions. He has a distinguished career in banking, industry and
          consulting, having worked with ANZ, GE Capital, ABN AMRO Bank,
          Standard Chartered Bank and KPMG in global leadership Positions. He
          has strong industry insights and professional experience in the power,
          transportation, infra, ports, rail. airports, social infrastructure
          and oil and gas sectors. <br /> <br />
          During his career, he has led large complex advisory projects in the
          above mentioned sectors across 50 countries in Asia, Africa, Middle
          East, Europe and the Americas. Ravi believes that with the
          intersection of Artificial intelligence, Internet of Things, Big Data,
          3D and block chain into infrastructure being an inexorable event, the
          technological impact in this field will be significant resulting in a
          number of disruptions. He emphasises that risk mitigation for both
          debt and equity will no longer be immutable, as it has been during the
          last two decades, and newer methods will need to be adopted. <br />
          <br />
          Ravi is also working on cutting edge solutions to ensure
          infrastructure projects are bankable with the technology risk they
          face. He strongly believes in fighting the challenges facing climate
          change, and feels sustainable finance is a force for good to achieve
          this. He is passionate about this area and is doing some pathbreaking
          work here. <br />
          <br />
          His initiatives to finance power projects in Africa when at Standard
          Chartered bank under President Barack Obama’ s Power Africa
          initiative, is testament to his philosophy that infrastructure
          projects ameliorate the living of the poor. It is this belief that
          drives him to work with the Business for Peace Foundation and the
          United Nations. In his own humble and modest way, he is trying to make
          the world a better place to live in for the future generations.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.specialization}>
          SPECIALIZATION
        </Typography>
        <List component="ul">
          {specialization.map((element) => (
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" className={classes.listText}>
                  {element}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
