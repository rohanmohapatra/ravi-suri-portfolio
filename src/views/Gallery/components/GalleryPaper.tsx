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
      fontSize: 20,
    },
  },
  button: {
    borderColor: theme.palette.common.white,
    fontSize: 18,
    textDecoration: "underline",
    paddingLeft: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  item: {
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      padding: 8,
    },
  },
}));
export function GalleryPaper(props: {
  header1: string;
  header2: string;
  link1?: string;
  link2?: string;
}) {
  const { header1, header2, link1, link2 } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={6} className={classes.item}>
          <Typography variant="h4" className={classes.text}>
            {header1}
          </Typography>
          <br />
          <Button
            variant="text"
            className={[classes.text, classes.button].join(" ")}
            href={link1 ?? ""}
            target="_blank"
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.item}>
          <Typography variant="h4" className={classes.text}>
            {header2}
          </Typography>
          <br />
          <Button
            variant="text"
            className={[classes.text, classes.button].join(" ")}
            href={link2 ?? ""}
            target="_blank"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export function GalleryLongPaper(props: { header: string; link: string }) {
  const { header, link } = props;
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
            variant="text"
            className={[classes.text, classes.button].join(" ")}
            href={link}
            target="_blank"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
