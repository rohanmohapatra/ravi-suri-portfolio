import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import React from "react";
import { Heading } from "../../components/Heading";
import { imageCDN, pathName } from "../../properties/properties";
import { AwardsVideo } from "./AwardsVideo";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  cardContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardImage: {
    backgroundSize: "contain",
    height: 500,
    background: "no-repeat center",
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  cardText: {
    textTransform: "uppercase",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
}));

const awards = [
  {
    src: imageCDN + "/assets/awards/aw1_Idpt-vXpw.jpg",
    desc: "PFI- GLOBAL BANK OF THE YEAR AWARD – Standard Chartered Bank, 2010",
  },
  {
    src: imageCDN + "/assets/awards/aw2.jpg",
    desc:
      "Prestigious IFC -FT Transformational Award, while at Standard Chartered Bank",
  },
  {
    src: imageCDN + "/assets/awards/aw3.jpg",
    desc: "WINNER OF STANDARD CHARTERED BANK'S STAR OF THE YEAR",
  },
  {
    src: imageCDN + "/assets/awards/aw4.jpg",
    desc:
      "EUROMONEY award for the best Project finance house in the Middle East - Standard Chartered Bank",
  },
  {
    src: imageCDN + "/assets/awards/aw5.jpg",
    desc: "EUROMONEY 2010 ISLAMIC FINANCE AWARDS",
  },
  {
    src: imageCDN + "/assets/awards/aw6.jpg",
    desc:
      "EUROMONEY BEST PROJECT FINANCE DEAL OF THE YEAR- 2010 ISLAMIC FINANCE PROJECTS ; AL DUR IWPP",
  },
  {
    src: imageCDN + "/assets/awards/aw7.jpg",
    desc:
      "WINNER: GLOBAL WATER INTELLIGENCE; Power and Water Plant of the year -2010",
  },
  {
    src: imageCDN + "/assets/awards/aw8.jpg",
    desc: "PROJECT FINANCE DEAL OF THE YEAR 2013",
  },
  {
    src: imageCDN + "/assets/awards/aw9.jpg",
    desc: "Best Power Deal in the Middle East ; Salalah 2 IPP Project in Oman",
  },
  {
    src: imageCDN + "/assets/awards/aw10.jpg",
    desc: "Best Power/ Water deal in EMEA- Al Dur IWPP (2009)",
  },
  {
    src: imageCDN + "/assets/awards/aw11.jpg",
    desc: "BEST POWER DEAL IN EMEA: RIYADH PPP11 1PP",
  },
  {
    src: imageCDN + "/assets/awards/aw12.jpg",
    desc: "IJ GLOBAL AWARDS 2015- MENA POWER SALALAH 2",
  },
  {
    src: imageCDN + "/assets/awards/aw13.jpg",
    desc: "THE ASSET ASIAN AWARDS-BEST ISLAMIC PROJECT FINANCE HOUSE",
  },
];

const tombstones = [
  {
    src: imageCDN + "/assets/awards/tm1.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm2.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm3.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm4.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm5.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm6.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm7.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm8.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm9.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm10.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm11.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm12.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm13.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm14.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm15.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm16.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm17.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm18.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm19.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm20.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm21.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm22.jpg",
  },
  {
    src: imageCDN + "/assets/awards/tm23.jpg",
  },
];

export const Awards: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Awards" />
      <Typography variant="h4" className={classes.title}>
        VARIOUS AWARDS WON AND DEALS DONE BY RAVI ACROSS 52 COUNTRIES WHILE HE
        WAS WITH GE CAPITAL, ABN AMRO, STANDARD CHARTERED BANK AND KPMG.
      </Typography>
      <AwardsVideo />
      <Heading heading="AWARDS WON" />
      <Grid container>
        {awards.map((item) => (
          <Grid item xs={12} sm={6}>
            <AwardCard src={item.src} desc={item.desc} />{" "}
          </Grid>
        ))}
      </Grid>

      <Heading heading="TOMBSTONES FOR VARIOUS DEALS DONE" />
      <Grid container>
        {tombstones.map((item) => (
          <Grid item xs={12} sm={6}>
            <AwardCard src={item.src} />{" "}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const AwardCard: React.FC<{
  src: string;
  desc?: string;
}> = (props) => {
  const { src, desc } = props;
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Box
        className={classes.cardImage}
        style={{ backgroundImage: `url(${src})` }}
      />
      <Typography className={classes.cardText} variant="h4">
        {desc}
      </Typography>
    </Box>
  );
};
