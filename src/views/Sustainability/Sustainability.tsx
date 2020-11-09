import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import { data } from "./CardData";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
  },
  card: {
    height: 600,
    padding: 50,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
      height: 300,
    },
  },
  content: {
    padding: 0,
    paddingTop: 16,
    flex: 1,
  },
  buttoncontent: {
    padding: 0,
    paddingTop: 16,
    position: "absolute",
    bottom: 20,
  },
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 100,
    },
  },
  button: {
    color: theme.palette.primary.contrastText,
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
      padding: 0,
      textAlign: "left",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 7,
    },
  },
}));

export const SustainabilityLess: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {data.slice(0, 2).map((row) => (
        <Grid item xs={6} className={classes.root}>
          <SustainCard {...row} />
        </Grid>
      ))}
    </Grid>
  );
};

export const SustainabilityMore: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {data.slice(2).map((row) => (
        <Grid item xs={6} className={classes.root}>
          <SustainCard {...row} />
        </Grid>
      ))}
    </Grid>
  );
};

interface Props {
  title: string;
  text: string;
  src: string;
  href: string;
  buttonText: string;
}

const SustainCard: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        image={props.src}
        title={props.title}
        className={classes.media}
      />
      <CardContent className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttoncontent}>
        <Button size="large" href={props.href} className={classes.button}>
          {props.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};
