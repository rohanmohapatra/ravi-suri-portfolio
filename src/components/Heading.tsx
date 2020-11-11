import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    paddingLeft: 30,
  },
  headerTitle: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  },
  societyHeader: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    paddingLeft: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 10,
    },
  },
  societyHeaderTitle: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
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

export function SocietyHeading(props) {
  const classes = useStyles();
  const { heading } = props;
  return (
    <div className={classes.societyHeader}>
      <Typography variant="h4" className={classes.societyHeaderTitle}>
        {heading}
      </Typography>
    </div>
  );
}
