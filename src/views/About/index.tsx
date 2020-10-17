import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { pathName } from "../../properties/properties";
import { ProjectCard } from "../Home/components/ProjectCards";
import { WorkExperience } from "./components/WorkExperience";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    paddingTop: 10,
    paddingBottom: 10,
  },
}));
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
      {/* <WorkExperience /> */}
      <Grid container>
        <Grid item xs={12} className={classes.card}>
          <ProjectCard
            src="https://source.unsplash.com//hDyO6rr3kqk/1920x1280"
            title="Testimonials"
            text="Testimonials by leading Industry veterans and expert on Ravi’s professionalism, work ethics, and positive personal traits"
            index={1}
            href={pathName + "/testimonials"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
