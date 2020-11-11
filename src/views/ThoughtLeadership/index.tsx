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
import { Heading } from "../../components/Heading";
import { data } from "./CardData";

interface Props {
  title: string;
  text: string;
  src: string;
  href: string;
  buttonText: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  section: {
    padding: 15,
  },
  home: {
    padding: 40,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  card: {
    height: 600,
    padding: 50,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
      height: 240,
    },
  },
  riskcard: {
    height: 700,
    padding: 50,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: 20,
      height: 320,
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
    paddingLeft: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
      padding: 0,
      textAlign: "left",
    },
  },
  title: {
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 6,
    },
  },
  additionalText: {
    textTransform: "uppercase",
    fontWeight: 400,
    [theme.breakpoints.down("xs")]: {
      fontSize: 7,
    },
  },
}));

export const ThoughtLeadership: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Thought Leadership" />
      <Grid container className={classes.home}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.text}>
            In close context to Ravi Suri’s thoughts on Sustainability, kindly
            refer to the various reports and articles below on the way ahead.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        {data.slice(0, 12).map((row) => (
          <Grid item xs={6} className={classes.section}>
            <TLGeneralCard {...row} />
          </Grid>
        ))}
        <Grid item xs={12} className={classes.section}>
          <RiskMitigationCard
            src="https://source.unsplash.com/hDyO6rr3kqk/1920x1280"
            title="RISK MITIGATION"
            text="Ravi writes on correctly mitigating the risks involved with infrastructure projects to ensure they get financed."
            buttonText="Learn More"
            href=""
          />
        </Grid>
        {data.slice(12).map((row) => (
          <Grid item xs={6} className={classes.section}>
            <TLGeneralCard {...row} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const TLGeneralCard: React.FC<Props> = (props) => {
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

const TLExtendedCard: React.FC<Props> = (props) => {
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

const RiskMitigationCard: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.riskcard}>
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
      <CardActions>
        <Button size="large" href={props.href} className={classes.button}>
          {props.buttonText}
        </Button>
      </CardActions>
      <CardContent className={classes.content}>
        <Typography variant="body2" className={classes.text}>
          With reference to the above article, please find more details on:
        </Typography>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="h6" className={classes.additionalText}>
              Value for Money
            </Typography>
            <Button size="large" className={classes.button}>
              VFM.pdf
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className={classes.additionalText}>
              Project level risk mitigation
            </Typography>
            <Button size="large" className={classes.button}>
              Project finance - key concepts.pdf
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className={classes.additionalText}>
              TRUE VALUE
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <Button size="large" className={classes.button}>
                  True Value Creation.pdf
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button size="large" className={classes.button}>
                  Volvo Group Case Study.pdf
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button size="large" className={classes.button}>
                  True Value Methodology.pdf
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className={classes.additionalText}>
              REGULATION
            </Typography>
            <Button size="large" className={classes.button}>
              World Bank Report.pdf
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className={classes.additionalText}>
              UNBUNDLING
            </Typography>
            <Button size="large" className={classes.button}>
              World Bank Report.pdf
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
