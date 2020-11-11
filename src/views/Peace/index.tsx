import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Heading, SocietyHeading } from "../../components/Heading";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    color: theme.palette.primary.contrastText,
  },
  padding: {
    paddingLeft: 90,
    paddingRight: 90,
    paddingTop: 50,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
  },
  oneText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
  one: {},
  two: { paddingRight: 0, paddingLeft: 0 },
  leftItem: {
    paddingRight: 30,
    [theme.breakpoints.down("xs")]: {
      paddingRight: 10,
    },
  },
  rightItem: {
    paddingLeft: 30,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 10,
    },
  },
  imageItem: {
    backgroundSize: "cover",
    height: "100%",
    background: "no-repeat center",
  },
  bpf: {
    height: "600px",
    [theme.breakpoints.down("xs")]: {
      height: "250px",
    },
  },
  unece: {
    height: "800px",
    [theme.breakpoints.down("xs")]: {
      height: "350px",
    },
  },
  bpfText: {
    padding: 50,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      fontSize: 6,
    },
  },
}));

export const ImpactOnSociety: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Heading heading="Impact On Society" />
      <Grid container className={[classes.padding, classes.one].join(" ")}>
        <Grid item xs={6} className={classes.leftItem}>
          <Typography variant="h6" className={classes.oneText}>
            Ravi is an active member of the Business for Peace Foundation in
            Oslo, Norway. The Business for Peace community is a subset of the
            Nobel Peace Prize society that promotes commercial business/profit
            generating projects whilst contributing towards social causes and
            protecting the environment. He strongly believes that the
            infrastructure projects that he has helped finance has been a force
            of good and has helped communities and ameliorated the living
            conditions of people in emerging markets. Given his wide gamut of
            project finance transactions, he has played a pivotal role in
            furthering the social agenda of this community and has contributed
            towards the betterment of the community and environment. It is
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.rightItem}>
          <Typography variant="h6" className={classes.oneText}>
            because of this passion; he actively engages with Business for Peace
            Foundation and different members of the community and has routinely
            been part of ground-breaking dialogues to discuss and implement
            future collaboration opportunities. He also regularly engages with
            the UNECE (United Nations Economic Commission for Europe) and has
            been an active member of their Geneva conferences on thought
            leadership. He is also a member of the International Society of
            Public Private Partnership Sciences (ISPPPS), and passionately
            shares his thoughts on Public Private Partnerships (PPP) and
            building of sustainable infrastructure at these summits.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={[classes.padding, classes.two].join(" ")}>
        <Grid item xs={6} className={classes.bpf}>
          <div
            className={classes.imageItem}
            style={{
              backgroundImage: `url(https://source.unsplash.com/JhqBxsORuXA/1920x1344)`,
            }}
          ></div>
        </Grid>
        <Grid item xs={6}>
          <SocietyHeading heading="Business for Peace Foundation" />
          <Typography variant="h6" className={classes.bpfText}>
            Business for Peace is an international foundation based in Oslo that
            aims to support, inspire, and recognise global business leaders who
            are positively changing the face of business. Founded in 2007, the
            Foundation was established with the vision that all business leaders
            see improving society as their core purpose. This requires
            being business worthy – ethically and responsibly creating value for
            both business and society. The Foundation aims to accelerate the
            development of responsible business practices by increasing the
            awareness of the strengths of the business worthy case, including
            drawing attention to business leaders who are leading the way.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={[classes.padding, classes.two].join(" ")}>
        <Grid item xs={6}>
          <SocietyHeading heading="UNECE" />
          <Typography variant="h6" className={classes.bpfText}>
            The United Nations Economic Commission for Europe (UNECE) is one of
            the five regional commissions under the jurisdiction of the United
            Nations Economic and Social Council. It was established to promote
            economic cooperation and integrations among its Member States.
            UNEC's major aim is to promote pan-European economic integration. As
            a multilateral platform, UNECE facilitates greater economic
            integration and cooperation among its member countries and promotes
            sustainable development and economic prosperity. UNECE contributes
            to enhancing the effectiveness of the United Nations through the
            regional implementation of outcomes of global United Nations
            Conferences and Summits. It gives focus to the United Nations global
            mandates in the economic field, in cooperation with other global
            players and key stakeholders, notably the business community. UNECE
            also sets out norms, standards, and conventions to facilitate
            international cooperation within and outside the region. UNECE
            supports countries in the implementation of the 2030 Agenda and the
            Sustainable Development Goals (SDGs).
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.unece}>
          <div
            className={classes.imageItem}
            style={{
              backgroundImage: `url(https://source.unsplash.com/JhqBxsORuXA/1920x1344)`,
            }}
          ></div>
        </Grid>
      </Grid>
      <Grid container className={[classes.padding, classes.two].join(" ")}>
        <Grid item xs={6} className={classes.bpf}>
          <div
            className={classes.imageItem}
            style={{
              backgroundImage: `url(https://source.unsplash.com/JhqBxsORuXA/1920x1344)`,
            }}
          ></div>
        </Grid>
        <Grid item xs={6}>
          <SocietyHeading heading="INTERNATIONAL SOCIETY OF PUBLIC PRIVATE PARTNERSHIP SCIENCES" />
          <Typography variant="h6" className={classes.bpfText}>
            The International Society of Public Private Partnership Sciences
            (ISPPPS) actively promotes the concept of Public Private Partnership
            (PPP) to focus on cross sector collaborations to help manage
            infrastructure needs. Ravi is an active member of the International
            Society of Public Private Partnership Sciences and regularly
            contributes thought leadership articles to its journals and attends
            their meetings and conferences Learn More
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={[classes.padding, classes.two].join(" ")}>
        <Grid item xs={6}>
          <SocietyHeading heading="POWER AFRICA" />
          <Typography variant="h6" className={classes.bpfText}>
            Under President Obama’s Power Africa Initiative, Standard Chartered
            commuted to help finance USD 5 Billion of power projects to help
            generate power to ameliorate the living conditions of Africans. The
            Power Africa project set an objective to improve access to clean,
            reliable power in Africa, and ultimately deliver electricity to more
            than 20 million new households and companies across the continent.
            Ravi, as part of Standard Chartered Bank, helped lead this
            initiative and ensured the banks commitments were met.
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.bpf}>
          <div
            className={classes.imageItem}
            style={{
              backgroundImage: `url(https://source.unsplash.com/JhqBxsORuXA/1920x1344)`,
            }}
          ></div>
        </Grid>
      </Grid>
      <Grid container className={[classes.padding, classes.two].join(" ")}>
        <Grid item xs={6} className={classes.bpf}>
          <div
            className={classes.imageItem}
            style={{
              backgroundImage: `url(https://source.unsplash.com/JhqBxsORuXA/1920x1344)`,
            }}
          ></div>
        </Grid>
        <Grid item xs={6}>
          <SocietyHeading heading="CLIFFORD CAPITAL" />
          <Typography variant="h6" className={classes.bpfText}>
            To help expand the Singaporean economy and to grow exports, the
            Singapore government set up Clifford Capital. Standard Chartered was
            a founder member, wherein Ravi supported the initiative for the bank
            to set up Clifford Capital, including being on its initial board and
            helped setting their credit process and underwriting standards. As
            things stand today, Clifford Capital is a phenomenal success and is
            contributing significantly towards growing Sing’s exports and
            project finance loan and bond market.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={[classes.padding, classes.two].join(" ")}>
        <Grid item xs={6}>
          <SocietyHeading heading="BELT AND ROAD INITIATIVE" />
          <Typography variant="h6" className={classes.bpfText}>
            China’s Belt and Road Initiative (BRI), sometimes referred to as the
            New Silk Road, is one of the most ambitious infrastructure projects
            ever conceived, that would stretch from East Asia to Europe. The
            main objective of BRI is to connect Asia with Africa and Europe via
            land and maritime networks along six corridors, with the aim of
            improving regional integration, increasing trade, and stimulating
            economic growth. Ravi helped conclude several significant deals
            along the Belt and Road corridor as part of Standard Chartered Bank
            initiative.
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.bpf}>
          <div
            className={classes.imageItem}
            style={{
              backgroundImage: `url(https://source.unsplash.com/JhqBxsORuXA/1920x1344)`,
            }}
          ></div>
        </Grid>
      </Grid>
    </div>
  );
};
