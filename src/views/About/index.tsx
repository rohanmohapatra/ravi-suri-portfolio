import { makeStyles } from "@material-ui/core";
import React from "react";
import { WorkExperience } from "./components/WorkExperience";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    paddingTop: 140,
  },
}));
export function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      <WorkExperience />
    </div>
  );
}
