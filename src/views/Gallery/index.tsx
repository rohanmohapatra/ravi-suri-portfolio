import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Heading } from "../../components/Heading";
import { pathName } from "../../properties/properties";
import { GalleryImage } from "./components/GalleryImage";
import { GalleryLongPaper, GalleryPaper } from "./components/GalleryPaper";

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
      fontSize: 20,
    },
  },
}));
// function chunk(array, start, size) {
//   const chunked_arr = [];
//   let index = 0 + start;
//   while (index < array.length) {
//     let sliced = array.slice(index, size + index);
//     chunked_arr.push(sliced as never);
//     index += size;
//   }
//   return chunked_arr;
// }
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

const links = {
  powerafrica: [
    "/assets/gallery/pdf/africa-power-2014.pdf",
    "/assets/gallery/pdf/africa-power-scb.docx",
  ],
  projectfinance: [
    "/assets/gallery/pdf/pf-pii-barcelona.pdf",
    "/assets/gallery/pdf/pf-clp-wind-farms.pdf",
    "/assets/gallery/pdf/pf-africa-boost.pdf",
    "/assets/gallery/pdf/pf-gulf-lenders.pdf",
    "/assets/gallery/pdf/pf-iraq-finance.pdf",
    "/assets/gallery/pdf/pf-iraq-power-gas-2011.doc",
    "/assets/gallery/pdf/pf-nation-builders-asia.docx",
    "/assets/gallery/pdf/pf-iraq-power-gas-2011.doc",
    "/assets/gallery/pdf/pf-sirajganj.pdf",
    "/assets/gallery/pdf/pf-difc.docx",
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
          initiatives undertaken by Ravi Suri during his during his career at
          different organisations.
        </Typography>
      </div>
      <GalleryImage src={pathName + "/assets/gallery/av.jpg"} />
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
          <a
            href="https://amp.thenational.ae/business/technology/uae-moves-up-a-spot-in-driverless-car-readiness-ranking-1.1045632"
            target="_blank"
            rel="noopener noreferrer"
          >
            UAE moves up a spot in driverless car readiness ranking
          </a>
          <br />
          <br />
          <a
            href="https://www.cbnme.com/logistics-news/uae-ranks-in-top-10-on-kpmgs-2020-global-autonomous-vehicles-readiness-index/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UAE ranks in top 10 on KPMG's 2020 Global Autonomous Vehicles
            Readiness Index
          </a>
          <br />
          <br />
          <a
            href="https://www.arabianbusiness.com/technology/388224-uae-named-in-worlds-top-10-for-driverless-vehicles-potential"
            target="_blank"
            rel="noopener noreferrer"
          >
            UAE named in world's top 10 for driverless vehicles potential
          </a>
          <br />
          <br />
        </Typography>
      </div>
      <GalleryImage src={pathName + "/assets/gallery/infra.jpg"} />
      <Heading heading="FUTURE OF INFRASTRUCTURE " />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          The AI Revolution, climate change, economic uncertainty and pressure
          on the global health and education system, has put the infrastructure
          system under immense stress. A robust roadmap to build modern and
          sustainable infrastructure is key to ensure economic growth.
          <br />
          <br />
          <br />
          <a
            href="https://www.linkedin.com/posts/kpmg_lowergulf_covid19-infrastructure-infrastructurefinance-activity-6668845571622658048-3f54"
            target="_blank"
            rel="noopener noreferrer"
          >
            Infrastructure sector post pandemic
          </a>
          <br />
          <br />
        </Typography>
      </div>
      <GalleryImage src={pathName + "/assets/gallery/africa.jpg"} />
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
            link1={pathName + links.powerafrica[0]}
            link2={pathName + links.powerafrica[1]}
          />
        </Typography>
      </div>
      <GalleryImage src={pathName + "/assets/gallery/finance.jpg"} />
      <Heading heading="PROJECT FINANCE" />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          The future of project financing in a VUCA (volatile, uncertain,
          complex, ambiguous) world demands strategies that are innovative and
          visionary are implemented. Project finance as a tool needs to be
          effectively used to ensure that critical infrastructure projects are
          financed.
          <br />
          <br />
          <br />
          <a
            href="http://www.allconferences.com/conferences/2007/20070120231341"
            target="_blank"
            rel="noopener noreferrer"
          >
            The 3rd Annual Project Finance in the Middle East Forum
          </a>
          <br />
          <br />
          <a
            href="https://www.naturalgasworld.com/project-financing-shale-gas-europe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natural Gas world: Making a Financial Case for Shale Gas
          </a>
          <br />
          <br />
          <a
            href="http://www.pfie.com/story/1040882/gulf-power-2010-part-2-d60vmw79q3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gulf Power Roundtable 2020
          </a>
          <br />
          <br />
          <a
            href="https://www.gtreview.com/supplements/gtr-mena-supplement-2014/saudi-arabia-the-projects-keep-rolling-in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saudi Arabia: The projects keep rolling, Global Trade Review (GTR)
          </a>
          <br />
          <br />
          <GalleryPaper
            header1={headings.projectfinance[0]}
            header2={headings.projectfinance[1]}
            link1={pathName + links.projectfinance[0]}
            link2={pathName + links.projectfinance[1]}
          />
          <GalleryPaper
            header1={headings.projectfinance[2]}
            header2={headings.projectfinance[3]}
            link1={pathName + links.projectfinance[2]}
            link2={pathName + links.projectfinance[3]}
          />
          <GalleryPaper
            header1={headings.projectfinance[4]}
            header2={headings.projectfinance[5]}
            link1={pathName + links.projectfinance[4]}
            link2={pathName + links.projectfinance[5]}
          />
          <GalleryPaper
            header1={headings.projectfinance[6]}
            header2={headings.projectfinance[7]}
            link1={pathName + links.projectfinance[6]}
            link2={pathName + links.projectfinance[7]}
          />
          <GalleryPaper
            header1={headings.projectfinance[8]}
            header2={headings.projectfinance[9]}
            link1={pathName + links.projectfinance[8]}
            link2={pathName + links.projectfinance[9]}
          />
        </Typography>
      </div>
      <GalleryImage src={pathName + "/assets/gallery/bri.jpg"} />
      <Heading heading="BELT AND ROAD INITIATIVE (BRI)" />
      <div className={classes.textContainer}>
        <Typography variant="h6" className={classes.text}>
          <a
            href="https://www.dmcc.ae/events/new-global-trade-order/asia-house-conference-speakers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Asia House Conference Speakers
          </a>
          <br />
          <br />
          <a
            href="zawya.com/mena/en/business/story/BRI_in_the_Gulf_Opening_up_a_world_of_opportunities_in_construction_and_real_estate_sectors-ZAWYA20191030101522/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BRI in the Gulf Opening up a world of oppurtunities in construction
            and real state sectors
          </a>
          <br />
          <br />
          <a
            href="https://asiahouse.org/news-and-views/middle-east-presents-unique-perspectives-belt-road-initiative/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Middle East presents unique perspectives belt road initiative
          </a>
          <br />
          <br />
          <GalleryLongPaper
            header="Speaker at AFF, 2017"
            link={pathName + "/assets/gallery/pdf/aff-jan-2017.pdf"}
          />
        </Typography>
      </div>
      <GalleryImage src={pathName + "/assets/gallery/powerlng.jpg"} />
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
          <a
            href="https://lngjournal.com/index.php/the-journal/item/5283-european-lng-forum"
            target="_blank"
            rel="noopener noreferrer"
          >
            European LNG Forum, Oslo, Norway
          </a>
          <br />
          <br />
          <a
            href="https://lngjournal.com/index.php/the-journal/item/5283-european-lng-forum"
            target="_blank"
            rel="noopener noreferrer"
          >
            SMI's LNG Conference, London 2012
          </a>
          <br />
          <br />
        </Typography>
        <GalleryLongPaper
          header="FLNG World 2014 - Pimagazine Asia"
          link={pathName + "/assets/gallery/pdf/flng-2014.pdf"}
        />
      </div>
    </div>
  );
}
