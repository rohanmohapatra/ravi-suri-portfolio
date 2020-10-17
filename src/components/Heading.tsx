import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    paddingLeft: 30,
  },
  headerTitle: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  },
}));
export function Heading(props) {
  const classes = useStyles();
  const { heading } = props;
  return (
    <div className={classes.header}>
      <Typography variant="h4" className={classes.headerTitle}>
        {heading}
      </Typography>
    </div>
  );
}
