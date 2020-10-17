import React from "react";
import { makeStyles } from "@material-ui/core";
import { TopBar } from "./components/TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 64,
    height: "100%",
  },
  content: {
    height: "100%",
    paddingTop: 130,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
    },
  },
}));

export function Main(props) {
  const { location, children } = props;
  const classes = useStyles();
  return (
    <div>
      <TopBar location={location} />
      <main className={classes.content}>{children}</main>
    </div>
  );
}
