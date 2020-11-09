import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useIsMobile } from "./useIsMobile";
import { pathName } from "../properties/properties";
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
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 10,
    },
  },
  headerButton: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    textTransform: "none",
    textDecorationLine: "underline",
    color: theme.palette.primary.contrastText,
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));
export function HeadingWithTransactionButton(props) {
  const classes = useStyles();
  const { heading } = props;
  const isMobile = useIsMobile();
  return (
    <div className={classes.header}>
      <Grid container justify="space-between">
        <Typography variant="h4" className={classes.headerTitle}>
          {heading}
        </Typography>
        {!isMobile && (
          <Button href={pathName + "/key-transactions"}>
            <Typography variant="h4" className={classes.headerButton}>
              Summary of key transactions{" "}
              <ChevronRightIcon className={classes.icon} />
            </Typography>
          </Button>
        )}
      </Grid>
      <Grid container justify="flex-start">
        {isMobile && (
          <Button href={pathName + "/key-transactions"}>
            <Grid container justify="flex-start">
              <Typography variant="h4" className={classes.headerButton}>
                Summary of key transactions{" "}
                <ChevronRightIcon className={classes.icon} />
              </Typography>
            </Grid>
          </Button>
        )}
      </Grid>
    </div>
  );
}
