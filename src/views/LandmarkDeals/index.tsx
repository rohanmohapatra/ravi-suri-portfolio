import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { HeadingWithTransactionButton } from "../../components/HeadingWithTransactionButton";
import { useIsMobile } from "../../components/useIsMobile";
import { pathName } from "../../properties/properties";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  card: {
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 40,
    },
  },
  cardImage: {
    background: "no-repeat center center",
    backgroundSize: "cover",
    height: 330,
    marginRight: 10,
    [theme.breakpoints.between(1280, 1380)]: {
      height: 300,
    },
    [theme.breakpoints.down("sm")]: {
      height: 230,
      backgroundPosition: " 50% center",
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
      marginRight: 0,
    },
  },
  cardContent: {
    paddingTop: 30,
    height: 300,
    [theme.breakpoints.between(1280, 1380)]: {
      paddingTop: 10,
      height: 270,
    },
    [theme.breakpoints.down("sm")]: {
      height: 200,
      paddingLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      height: 120,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  cardContentLeft: {
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {},
  },
  cardContentRight: {
    // paddingLeft: 350,
    marginRight: 10,
    [theme.breakpoints.between(1280, 1380)]: {
      // paddingLeft: 100,
    },
    [theme.breakpoints.down("md")]: {
      // paddingLeft: 100,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 4,
      paddingLeft: 10,
    },
  },
  cardText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    paddingTop: 30,
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      fontSize: 10,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 5,
      fontSize: 18,
    },
  },
  cardTitle: {
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontWeight: 900,
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  cardButton: {
    marginTop: 50,
    textTransform: "uppercase",
    fontWeight: 900,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      fontSize: 8,
      padding: 2,
    },
  },
  home: {
    padding: 40,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  text: {
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  dealImage: {
    background: `url(${pathName}/assets/landmarkdeals/landmarkdeals.png) no-repeat center`,
    backgroundSize: "contain",
    height: 600,
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 2,
      paddingBottom: 2,
    },
  },
}));

const landmarkDeals = [
  {
    src: pathName + "/assets/landmarkdeals/dewa.jpg",
    title: "DEWA MBR Solar - Phase IV, UAE",
    text: "Largest Solar Project and first CSP tower in the region",
    href: pathName + "/landmark-deals/dewa-mbr",
  },
  {
    src: pathName + "/assets/landmarkdeals/istanbul-tunnel.jpg",
    title: "Istanbul Tunnel Project",
    text:
      "One of the most complex tunnel financing transactions connecting Europe and Asia",
    href: pathName + "/landmark-deals/istanbul-tunnel",
  },
  {
    src: pathName + "/assets/landmarkdeals/petronet.jpg",
    title: "PetroNet LNG Project",
    text: "India’s first Liquified Natural Gas Importer",
    href: pathName + "/landmark-deals/petronet",
  },
  {
    src: pathName + "/assets/landmarkdeals/guangdong.jpg",
    title: "Guangdong LNG Project",
    text: "China’s First LNG receiving terminal",
    href: pathName + "/landmark-deals/guangdong",
  },
  {
    src: pathName + "/assets/landmarkdeals/power-africa.jpg",
    title: "Power Africa",
    text:
      "Part of US President Barack Obama’s Power Africa Initiative to help generate power to ameliorate the living conditions of Africans",
    href: pathName + "/landmark-deals/dewa-mbr",
  },
  {
    src: pathName + "/assets/landmarkdeals/azura.jpg",
    title: "AZURA ENDO POWER PROJECT NIGERIA",
    text: "Open Cycle Gas Turbine One of Nigeria’s first project financed IPPS",
    href: pathName + "/landmark-deals/azura-edo",
  },
  {
    src: pathName + "/assets/landmarkdeals/corpus-christi.jpg",
    title: "Corpus Christi Liquefaction Project, USA",
    text:
      "It was the first greenfield LNG export facility in the United States in nearly 50 years",
    href: pathName + "/landmark-deals/corpus-christi",
  },
  {
    src: pathName + "/assets/landmarkdeals/barakah.jpg",
    title: "Barakah Nuclear Power Plant, Abu Dhabi",
    text:
      "One of the first privately financed Nuclear power projects in the world",
    href: pathName + "/landmark-deals/barakah-nuclear",
  },
  {
    src: pathName + "/assets/landmarkdeals/vict.jpg",
    title: "Victoria International Container Terminal, australia",
    text: "Australia’s first fully automated terminal",
    href: pathName + "/landmark-deals/vict",
  },
  {
    src: pathName + "/assets/landmarkdeals/maaden.jpg",
    title: "Ma’aden Phosphate Fertilizer Project, Saudi Arabia",
    text:
      "After the existing 2 pillars of Saudi Aramco (Oil) & SABIC (petrochemicals), this is the third pillar of mining established in the country",
    href: pathName + "/landmark-deals/maaden-phosphate",
  },
  {
    src: pathName + "/assets/landmarkdeals/uch-power.jpg",
    title: "UCH Power Ltd, Pakistan",
    text:
      "It was the first greenfield LNG export facility in Pakistan in nearly 50 years",
    href: pathName + "/landmark-deals/uch-power",
  },
  {
    src: pathName + "/assets/landmarkdeals/shirajganj.jpg",
    title: "Sirajganj 2- Combined Cycle Power Plant, Bangladesh",
    text:
      "One of the projects towards the transformation of the Bangladesh power sector",
    href: pathName + "/landmark-deals/sirajganj",
  },
  {
    src: pathName + "/assets/landmarkdeals/rabigh-water.jpg",
    title: "Rabigh Power and Water Project",
    text:
      "First Independent Water and Power project financed by international banks and executed with a Chinese EPC contractor",
    href: pathName + "/landmark-deals/rabigh-power-water",
  },
  {
    src: pathName + "/assets/landmarkdeals/haya-water.jpg",
    title: "Haya Water PROJECT",
    text:
      "One of the first PPP’s to be procured under the newly notified Oman PPP Law",
    href: pathName + "/landmark-deals/haya",
  },
  {
    src: pathName + "/assets/landmarkdeals/fewa-solar.jpg",
    title: "FEWA 500MW Solar PV IPP",
    text: "First Solar IPP Projectn",
    href: pathName + "/landmark-deals/fewa-solar",
  },
  {
    src: pathName + "/assets/landmarkdeals/shams-maan.jpg",
    title: "Shams Ma’an Solar PV IPP Project",
    text:
      "First solar PV project across MENA & the first CSP tower project in Jordan.",
    href: pathName + "/landmark-deals/shams-maan",
  },
  {
    src: pathName + "/assets/landmarkdeals/dp-djibouti.jpg",
    title: "DP World’s Ports In Djibouti",
    text:
      "One of the only projects where GDP of the country is less than the Project cost",
    href: pathName + "/landmark-deals/dp-djibouti",
  },
  {
    src: pathName + "/assets/landmarkdeals/ras-laffan.jpg",
    title: "Ras Laffan B Power and Water Project, Qatar",
    text: "Longest power and water purchase agreement in the Middle East.",
    href: pathName + "/landmark-deals/ras-laffan-b",
  },
  {
    src: pathName + "/assets/landmarkdeals/jorf-lasfar.jpg",
    title: "Jorf Lasfar coal-fired power plant, Morocco",
    text:
      "Largest coal-fired plant in the Middle East and North Africa and first independent power producer (IPP) in Morocco at the time",
    href: pathName + "/landmark-deals/jorf-lasfar",
  },
  {
    src: pathName + "/assets/landmarkdeals/clp-india.jpg",
    title: "CLP wind energy assets, India",
    text:
      "‘Pooled Financing’ arrangement was expected to boost the growth of CLP India’s wind portfolio",
    href: pathName + "/landmark-deals/clp-india",
  },
  {
    src: pathName + "/assets/landmarkdeals/al-dur-ii.jpg",
    title: "Al Dur II IWPP",
    text: "Largest Independent Power and Water plant in Bahrain",
    href: pathName + "/landmark-deals/al-dur-ii",
  },
  {
    src: pathName + "/assets/landmarkdeals/fewa-solar.jpg",
    title: "FEWA UAQ IWP",
    text: "FEWA’s first successfully closed PPP project",
    href: pathName + "/landmark-deals/fewa-water",
  },
  {
    src: pathName + "/assets/landmarkdeals/al-ghubrah.jpg",
    title: "Al Ghubrah-3 IWP and Barka-5",
    text: "One of the largest IWP procurements in Oman",
    href: pathName + "/landmark-deals/al-ghubrah",
  },
  {
    src: pathName + "/assets/landmarkdeals/rabigh-iii.jpg",
    title: "Rabigh III IWP",
    text: "First large scale IWP for the investor in the region",
    href: pathName + "/landmark-deals/rabigh-iii",
  },
  {
    src: pathName + "/assets/landmarkdeals/waste-to-energy.jpg",
    title: "Transformative Waste-to-Energy Project",
    text: "Largest Waste-to- Energy project in the world",
    href: pathName + "/landmark-deals/waste-to-energy",
  },
  {
    src: pathName + "/assets/landmarkdeals/sembcorp.jpg",
    title: "Sembcorp Salalah Power & Water Company",
    text:
      "Largest project in Oman executed at the peak of the Financial Crisis",
    href: pathName + "/landmark-deals/sembcorp-salalahr",
  },
  {
    src: pathName + "/assets/landmarkdeals/jhajjar-india.jpg",
    title: "Jhajjar power project, India",
    text:
      "First coal-fired power generation project in India to be financed by a consortium of foreign banksn",
    href: pathName + "/landmark-deals/jhajjar-india",
  },
  {
    src: pathName + "/assets/landmarkdeals/dp-senegal.jpg",
    title: "DP World’s ports in Senegal",
    text: "First project finance port deal in Senegal",
    href: pathName + "/landmark-deals/dp-senegal",
  },
  {
    src: pathName + "/assets/landmarkdeals/ruwais-power.jpg",
    title: "Refinancing for Ruwais Power Company",
    text: "First project bond offering by an IWPP in the Middle Waste",
    href: pathName + "/landmark-deals/ruwais",
  },
  {
    src: pathName + "/assets/landmarkdeals/oyu-tolgoi.jpg",
    title: "Oyu Tolgoi Project",
    text: "Largest single investment in Mongolia’s history",
    href: pathName + "/landmark-deals//oyu-tolgo",
  },
  {
    src: pathName + "/assets/landmarkdeals/oman-refineries.jpg",
    title: "Oman refineries",
    text:
      "Merger led to the formation of the largest refinery complex in Oman till date, with a combined capacity of 222,400 BPDn",
    href: pathName + "/landmark-deals/oman-refineries",
  },
  {
    src: pathName + "/assets/landmarkdeals/messaieed-water.jpg",
    title: "Mesaieed Water and Power Project",
    text:
      "First power privatization in Qatar and the longest debt tenor for a power project in the region at the time",
    href: pathName + "/landmark-deals/mesaieed",
  },
];

export function LandmarkDeals() {
  const classes = useStyles();
  return (
    <div>
      <HeadingWithTransactionButton heading="Landmark Deals" />
      <Grid container className={classes.home}>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="h5" className={classes.text}>
            OVERVIEW OF GROUND BREAKING TRANSACTIONS DONE BY RAVI
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="h5" className={classes.text}>
            Cutting edge deals done across various sectors like power, ports,
            renewables, social infrastructure etc during Ravi’s tenure at ANZ,
            GE, ABN AMRO, STANDARD CHARTERED BANK and KPMG.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <div className={classes.dealImage}></div>
        </Grid>
      </Grid>
      {landmarkDeals.map((deal, index) => (
        <DealsCard
          index={index}
          src={deal.src}
          title={deal.title}
          text={deal.text}
          href={deal.href}
        />
      ))}
    </div>
  );
}

export const DealsCard: React.FC<{
  index: number;
  src: string;
  title: string;
  text: string;
  href?: string;
}> = (props) => {
  const { src, title, text, index, href } = props;
  const isMobile = useIsMobile();
  const classes = useStyles();
  return index % 2 === 0 || isMobile ? (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.card}
    >
      <Grid item xs={12} sm={6}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div
          className={[classes.cardContent, classes.cardContentLeft].join(" ")}
        >
          <Typography variant="h5" className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.cardText}>
            {text}
          </Typography>
          <Button
            variant="contained"
            className={classes.cardButton}
            href={href}
          >
            Learn More
          </Button>
        </div>
      </Grid>
    </Grid>
  ) : (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.card}
    >
      <Grid item xs={12} sm={6}>
        <div
          className={[classes.cardContent, classes.cardContentRight].join(" ")}
        >
          <Grid container justify="flex-end">
            <Typography
              variant="h5"
              className={classes.cardTitle}
              style={{ textAlign: "right" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              className={classes.cardText}
              style={{ textAlign: "right", width: "100%" }}
            >
              {text}
            </Typography>
            <Button
              variant="contained"
              className={classes.cardButton}
              href={href}
            >
              Learn More
            </Button>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${src})`, marginLeft: 10 }}
        ></div>
      </Grid>
    </Grid>
  );
};
