import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Heading } from "../../components/Heading";
import { GalleryImage } from "./components/GalleryImage";
import { GalleryPaper } from "./components/GalleryPaper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  textContainer: {
    padding: 30,
    color: theme.palette.common.white,
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));
function chunk(array, start, size) {
  const chunked_arr = [];
  let index = 0 + start;
  while (index < array.length) {
    let sliced = array.slice(index, size + index);
    chunked_arr.push(sliced as never);
    index += size;
  }
  return chunked_arr;
}
const headings = {
  powerafrica: [
    "Powering up growth,Global Finance Magazine, Africa 2014",
    "Standard Chartered pledges $3b more for Africa power project",
  ],
  projectfinance: [
    "Speaker at Projects Infrastructure international, 2017, Barcelona",
    "SCB named Sole bank For CLP wind farms",
    "Power Africa receives $6b boost",
    "Gulf lenders on financing projects ",
    "Standard Chartered sponsors Iraq Finance 2014",
    "Speaker at Iraq Power and Gas Projects Infrastructure international, 2017, Barcelona",
    "Speaker at National Builders, Asia",
    "Speaker at Projects Infrastructure international, 2011, Istanbul",
    "MIGA Guarantee Backs Sirajganj 2 Power Plant in Bangladesh",
    "DIFC hosts MENA transformation forum",
  ],
};

export function Gallery() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Gallery" />
      <div className={classes.textContainer}>
        <Typography variant="h4">
          Media coverage across various platforms for the projects and
          initiatives undertaken by Ravi Suri during his work stint at different
          organisations.
        </Typography>
      </div>
      <GalleryImage src="https://source.unsplash.com/MAxpJkr1CMo/1920x1257" />
      <Heading heading="AUTONOMOUS VEHICLES (AVs)" />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          As robotics advances all around the world, the field of self-driving
          vehicles has attracted the biggest names of the auto industry. From
          Honda to Toyota, Audi to Mitsubishi, everyone wants a piece of this
          pie. Technology has improved by leaps and bounds in the areas of
          propulsion, navigation, handling, safety and security, road technology
          etc. Ravi Suri weighs in on the transformational potential of AV
          technology, from his vantage point in the UAE- a global leader in
          adopting self-driving vehicles at speed and scale.
          <br />
          <br />
          <br />
          <a href="https://amp.thenational.ae/business/technology/uae-moves-up-a-spot-in-driverless-car-readiness-ranking-1.1045632">
            https://amp.thenational.ae/business/technology/uae-moves-up-a-spot-in-driverless-car-readiness-ranking-1.1045632
          </a>
          <br />
          <br />
          <a href="https://www.cbnme.com/logistics-news/uae-ranks-in-top-10-on-kpmgs-2020-global-autonomous-vehicles-readiness-index/">
            https://www.cbnme.com/logistics-news/uae-ranks-in-top-10-on-kpmgs-2020-global-autonomous-vehicles-readiness-index/
          </a>
          <br />
          <br />
          <a href="https://www.arabianbusiness.com/technology/388224-uae-named-in-worlds-top-10-for-driverless-vehicles-potential">
            https://www.arabianbusiness.com/technology/388224-uae-named-in-worlds-top-10-for-driverless-vehicles-potential
          </a>
          <br />
          <br />
          <a href="https://amp.thenational.ae/business/technology/uae-moves-up-a-spot-in-driverless-car-readiness-ranking-1.1045632">
            https://amp.thenational.ae/business/technology/uae-moves-up-a-spot-in-driverless-car-readiness-ranking-1.1045632
          </a>
        </Typography>
      </div>
      <GalleryImage src="https://source.unsplash.com/hDyO6rr3kqk/1920x1280" />
      <Heading heading="FUTURE OF INFRASTRUCTURE " />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          The AI revolution, climate change {"&"} species extension, economic
          uncertainty, and global health {"&"} education crises have all put
          immense pressure on humanity’s systems. A robust roadmap for
          infrastructure is key to building a secure and sustainable future.
          Investing in modern and futuristic infrastructure and capacity
          building is the only way to ensure dividends from the sectors of
          railways, roadways, waterways, telecom, healthcare, education,
          electricity and so on.
          <br />
          <br />
          <br />
          <a href="https://www.linkedin.com/posts/kpmg_lowergulf_covid19-infrastructure-infrastructurefinance-activity-6668845571622658048-3f54">
            https://www.linkedin.com/posts/kpmg_lowergulf_covid19-infrastructure-infrastructurefinance-activity-6668845571622658048-3f54
          </a>
          <br />
          <br />
        </Typography>
      </div>
      <GalleryImage src="https://source.unsplash.com/MAxpJkr1CMo/1920x1257" />
      <Heading heading="POWER AFRICA " />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          Power Africa was an initiative under President Obama to implement
          power projects in Africa through private capital to help the continent
          meet its power needs . A number of private institutions participated
          to help design , implement and fund these projects .
          <br />
          <br />
          <GalleryPaper
            header1={headings.powerafrica[0]}
            header2={headings.powerafrica[1]}
          />
        </Typography>
      </div>
      <GalleryImage src="https://source.unsplash.com/hDyO6rr3kqk/1920x1280" />
      <Heading heading="PROJECT FINANCE " />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          The future of project financing in a VUCA (volatile, uncertain,
          complex, ambiguous) world demands strategies that are innovative and
          visionary. Project finance experts continue to be amongst the most of
          sought after professionals in the world, as the importance of funds,
          cash flow, and credible lendors, borrowers and guarantors increases in
          primary, secondary and tertiary markets. Project financing creates
          long-term value for all stakeholders involved.
          <br />
          <br />
          <br />
          <a href="https://www.linkedin.com/posts/kpmg_lowergulf_covid19-infrastructure-infrastructurefinance-activity-6668845571622658048-3f54">
            https://www.linkedin.com/posts/kpmg_lowergulf_covid19-infrastructure-infrastructurefinance-activity-6668845571622658048-3f54
          </a>
          <br />
          <br />
          <GalleryPaper
            header1={headings.projectfinance[0]}
            header2={headings.projectfinance[1]}
          />
          <GalleryPaper
            header1={headings.projectfinance[2]}
            header2={headings.projectfinance[3]}
          />
          <GalleryPaper
            header1={headings.projectfinance[4]}
            header2={headings.projectfinance[5]}
          />
          <GalleryPaper
            header1={headings.projectfinance[6]}
            header2={headings.projectfinance[7]}
          />
          <GalleryPaper
            header1={headings.projectfinance[8]}
            header2={headings.projectfinance[9]}
          />
        </Typography>
      </div>
      <GalleryImage src="https://source.unsplash.com/hDyO6rr3kqk/1920x1280" />
      <Heading heading="BELT AND ROAD INITIATIVE (BRI)" />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          One of the largest cross-border infrastructure projects in history,
          China’s BRI will alter international relations between countries,
          companies, and constituencies, forever. The BRI is touted to have
          sweeping effects on the society and economy of at least 130 countries
          around the world. And it will particularly impact Sino-African
          relations as the development project spans China, Central Asia, and
          East Africa.
          <br />
          <br />
          <br />
          <a href="https://www.linkedin.com/posts/kpmg_lowergulf_covid19-infrastructure-infrastructurefinance-activity-6668845571622658048-3f54">
            https://www.linkedin.com/posts/kpmg_lowergulf_covid19-infrastructure-infrastructurefinance-activity-6668845571622658048-3f54
          </a>
          <br />
          <br />
        </Typography>
      </div>
      <GalleryImage src="https://source.unsplash.com/hDyO6rr3kqk/1920x1280" />
      <Heading heading="POWER AND LNG " />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          As the cleanest fossil fuel, LNG or Liquified Natural Gas continues to
          remain the amongst the most relevant sources of energy for the world’s
          largest economies. LNG continues to occupy a significant portion of
          many major countries’ energy mix. In 2019, global demand for LNG rose
          by 12.5%.
          <br />
          <br />
          LNG Journal European LNG Forum
          <br />
          <a href="hhttps://lngjournal.com/index.php/the-journal/item/5283-european-lng-forum">
            https://lngjournal.com/index.php/the-journal/item/5283-european-lng-forum
          </a>
          <br />
          <br />
        </Typography>
      </div>
    </div>
  );
}