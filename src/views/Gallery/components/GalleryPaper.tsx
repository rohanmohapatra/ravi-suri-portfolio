import { Button, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.dark,
    padding: 20,
  },
  text: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  button: {
    borderColor: theme.palette.common.white,
  },
  item: {
    padding: 10,
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
