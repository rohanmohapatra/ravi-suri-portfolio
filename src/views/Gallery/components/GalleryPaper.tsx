import { Button, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  text: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  button: {
    borderColor: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  item: {
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      padding: 8,
    },
  },
}));
export function GalleryPaper(props) {
  const { header1, header2 } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6} className={classes.item}>
          <Typography variant="h4" className={classes.text}>
            {header1}
          </Typography>
          <br />
          <Button
            variant="outlined"
            className={[classes.text, classes.button].join(" ")}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.item}>
          <Typography variant="h4" className={classes.text}>
            {header2}
          </Typography>
          <br />
          <Button
            variant="outlined"
            className={[classes.text, classes.button].join(" ")}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export function GalleryLongPaper(props) {
  const { header } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className={classes.item}>
          <Typography variant="h4" className={classes.text}>
            {header}
          </Typography>
          <br />
          <Button
            variant="outlined"
            className={[classes.text, classes.button].join(" ")}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
