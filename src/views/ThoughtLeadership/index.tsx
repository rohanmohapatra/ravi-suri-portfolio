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
import { imageCDN } from "../../properties/properties";
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
      height: (props: { cardHeightMobile: number }) => props.cardHeightMobile,
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
      height: 900,
    },
  },
  content: {
    padding: 0,
    paddingTop: 8,
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
      height: 200,
    },
  },
  button: {
    color: theme.palette.primary.contrastText,
    textDecoration: "underline",
    paddingLeft: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      padding: 0,
      textAlign: "left",
    },
  },
  title: {
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  text: {
    paddingTop: 20,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
      fontSize: 18,
    },
  },
  additionalText: {
    textTransform: "uppercase",
    fontWeight: 400,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 5,
      paddingBottom: 5,
    },
  },
  introductionText: {
    fontWeight: 700,
    [theme.breakpoints.between(1280, 1380)]: {
      fontSize: 24,
    },
  },
}));

export const ThoughtLeadership: React.FC = () => {
  const classes = useStyles({} as { cardHeightMobile: number });
  return (
    <div className={classes.root}>
      <Heading heading="Thought Leadership" />
      <Grid container className={classes.home}>
        {/* <Grid item xs={12}>
          <Typography variant="h4" className={classes.introductionText}>
            In close context to Ravi Suri’s thoughts on Sustainability, kindly
            refer to the various reports and articles below on the way ahead.
          </Typography>
        </Grid> */}
      </Grid>
      <Grid container>
        {data.slice(0, 12).map((row) => (
          <Grid item xs={12} sm={6} className={classes.section}>
            <TLGeneralCard {...row} />
          </Grid>
        ))}
        <Grid item xs={12} className={classes.section}>
          <RiskMitigationCard
            src={imageCDN + "/assets/thought/13.jpg"}
            title="RISK MITIGATION"
            text="Ravi writes on correctly mitigating the risks involved with infrastructure projects to ensure they get financed and the need for effective risk mitigation to attract capital."
            buttonText="Learn More"
            href=""
          />
        </Grid>
        {data.slice(12).map((row) => (
          <Grid item xs={12} sm={6} className={classes.section}>
            <TLGeneralCard {...row} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const TLGeneralCard: React.FC<Props> = (props) => {
  const cardHeightMobile =
    props.text.length > 200 ? (props.text.length > 330 ? 700 : 550) : 450;
  const classes = useStyles({ cardHeightMobile });
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
        <Typography variant="h6" className={classes.text}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttoncontent}>
        <Button
          size="large"
          href={props.href}
          className={classes.button}
          target="_blank"
        >
          {props.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

const TLExtendedCard: React.FC<Props> = (props) => {
  const classes = useStyles({} as { cardHeightMobile: number });
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
  const classes = useStyles({} as { cardHeightMobile: number });
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
        <Typography variant="h6" className={classes.text}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions style={{ padding: 0 }}>
        <Button
          size="large"
          href={props.href}
          className={classes.button}
          target="_blank"
        >
          {props.buttonText}
        </Button>
      </CardActions>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.text}>
          With reference to the above article, please find more details on:
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={classes.additionalText}>
              Value for Money
            </Typography>
            <Button
              size="large"
              href={imageCDN + "/assets/thought/pdf/VFM.pdf"}
              className={classes.button}
              target="_blank"
            >
              VFM.pdf
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={classes.additionalText}>
              Project level risk mitigation
            </Typography>
            <Button
              size="large"
              href={
                imageCDN +
                "/assets/thought/pdf/project-finance-key-concepts.pdf"
              }
              className={classes.button}
              target="_blank"
            >
              Project finance - key concepts.pdf
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={classes.additionalText}>
              TRUE VALUE
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <Button
                  size="large"
                  href={
                    imageCDN +
                    "/assets/thought/pdf/introduction-kpmg-truevalue.pdf"
                  }
                  className={classes.button}
                  target="_blank"
                >
                  True Value Creation.pdf
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  href={
                    imageCDN +
                    "/assets/thought/pdf/volvo-group-kpmg-true-value-case-study.pdf"
                  }
                  className={classes.button}
                  target="_blank"
                >
                  Volvo Group Case Study.pdf
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  href={
                    imageCDN +
                    "/assets/thought/pdf/kpmg-true-value-services.pdf"
                  }
                  className={classes.button}
                  target="_blank"
                >
                  True Value Methodology.pdf
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={classes.additionalText}>
              REGULATION
            </Typography>
            <Button
              size="large"
              href={imageCDN + "/assets/thought/pdf/regulation.pdf"}
              className={classes.button}
              target="_blank"
            >
              World Bank Report.pdf
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={classes.additionalText}>
              UNBUNDLING
            </Typography>
            <Button
              size="large"
              href={imageCDN + "/assets/thought/pdf/unbundling.pdf"}
              className={classes.button}
              target="_blank"
            >
              World Bank Report.pdf
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
