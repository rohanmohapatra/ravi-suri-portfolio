import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import { ReadMore } from "../components/ReadMore";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    // paddingTop: 130,
    // [theme.breakpoints.down("sm")]: {
    //   paddingTop: 100,
    // },
  },
  header: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    paddingLeft: 30,
  },
  body: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  headerTitle: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  },
  headerTitle2: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  paper: {
    padding: 20,
    backgroundColor: theme.palette.primary.light,
  },
  heading: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
  },
  more: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
    paddingTop: 20,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  less: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
    paddingTop: 20,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  button: {
    fontFamily: '"Poppins"',
    fontWeight: 300,
    color: theme.palette.primary.contrastText,
  },
}));
export function Testimonials() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.headerTitle}>
          TESTIMONIALS
        </Typography>
      </div>
      <div className={classes.body}>
        <ReadMore
          classes={classes}
          header={<Header1 />}
          more="Ravi Suri worked with me at Standard Chartered bank from 2009 to
        2015 as a key leader and partner in our global project and export
        finance franchisee. this business became the largest project
        finance business across the emerging markets and was awarded
        project finance international’s prestigious bank of the year award
        in 2011. Ravi managed South Asia, Middle East and Africa
        franchisees, each of which played vitally important role in
        helping to develop core infrastructure across these regions. His
        teams provided core advisory expertise, long term capital,
        structuring skill and technical judgement, allowing key
        infrastructure projects across these markets to be constructed.
        This included: structuring 50,000 MW of power across Middle East,
        India and Africa region during the period that we work together,
        helping countries improve their living conditions- specially
        India, Pakistan, Bangladesh Jordan and across Africa.He also lead
        complex projects like DP World’s Djibouti and Senegal port
        projects which bought vital goods and medicines to the region
        improving the living conditions in these countries."
          less="Ravi Suri worked with me at Standard Chartered bank from 2009 to
        2015 as a key leader and partner in our global project and export
        finance franchisee. this business became the largest project
        finance business across the emerging markets and was awarded
        project finance international’s prestigious bank of the year award
        in 2011. Ravi managed South Asia, Middle East and Africa
        franchisees, each of which played vitally important role in
        helping to develop core infrastructure across these regions. His
        teams provided core advisory expertise, long term capital,
        structuring skill and technical judgement, allowing key
        infrastructure projects across these markets to be constructed.
        This included: structuring 50,000 MW of power across Middle East,
        India and Africa region during the period that we work together,
        helping countries improve their living conditions- specially
        India, Pakistan, Bangladesh Jordan and across Africa.He also lead
        complex projects like DP World’s Djibouti and Senegal port
        projects which bought vital goods and medicines to the region
        improving the living conditions in these countries."
        />
      </div>
      <div className={classes.body}>
        <ReadMore
          classes={classes}
          header={<Header2 />}
          divider={true}
          more="“Ravi Suri directly worked under me as Regional Head of Project and Export Finance covering South Asia, the Middle East and Africa between 2011 and 2015, continued with his specialization as Global Head of Project and Export Finance until 2017, and later moved to lead a broader advisory business at KPMG. I had several interactions with Ravi’s clients over the years and all were united in their respect and admiration for the work he was doing for them and towards ground-breaking projects they were pursuing. For example; Power Africa Initiative - Under President Obama’s Power Africa Initiative, Standard Chartered – in an initiative led by Ravi Suri - commuted to help finance USD 5 Billion of power projects to help generate power to ameliorate the living conditions of Africans. As a direct result of Ravi’s work leading the Project Finance team in Africa, Standard Chartered went on to become the largest private sector contributor within the Power Africa partnership. The Korean group SK- who built the Istanbul Tunnels connecting Europe and Asia These projects and the many others achieved by Ravi and his teams demonstrate a passion and desire to help countries improve their standard of living by improving efficiency in infrastructure in a sustainable and business-like manner.”"
          less="Ravi Suri worked directly for me as Regional Head of Project and Export Finance covering South Asia, the Middle East and Africa between 2011 and 2015. After I moved on to become CEO of the Corporate and Institutional Bank at Standard Chartered, he continued with his specialization as Global Head of Project and Export Finance before leaving the bank in 2017 to lead a broader advisory business at KPMG.During my time working with Ravi, I was always struck by his transparent passion for the work he was doing. This was not particularly associated with the money making of profit (although he always ran a clean and profitable business) but was much more about the change and improvement he was able to bring to the areas in which he worked. He embraced new technologies, new ways of working and new partnership opportunities to help his clients achieve often massive projects in the developing world and he did this tirelessly and often in the face of considerable challenge. His desire to just get things done with good humour and commitmentwas inspirational and he built and lead teams who grew to love his passionate approach to his workI had several interactions with Ravi’s clients over the years and all were united in the respect and admiration for the work he was doing for them and towards the ground- breaking projects they were pursuing. For example the Saudi business ACWA power which grew from a fledgling business to a major force in modern power generation in the Middle East; Emirates Power and the Korean power company KEPCO, who combined to form the first privately funded nuclear power solution in Asia; the Korean group SK who built the Istanbul tunnels connecting Europe and Asia; all of these clients would testify to Ravi‘s determination to get the projects underway and financed. These projects and the many others achieved by Ravi and his teams demonstrate a passion and desire to help countries improve their standard of living by improving efficiency in infrastructure in a sustainable and business-like manner.I have no hesitation in recommending Ravi for the Business For Peace Award, and would be delighted to provide more information and support if so desired."
        />
      </div>
      <div className={classes.body}>
        <ReadMore
          classes={classes}
          header={<Header3 />}
          more="Inspirational Leader “While an inspirational leader, he is fair and balanced. During the 2005 time period, it was a dramatically changing time for the business, and Standard Chartered acquired ANZ’s project finance group in Asia, Europe and Americas. Combining new people into a different culture had its challenges, and Ravi led a bigger team to excellence. During this time period, renewable energy was taking hold, and Equator Principles were being actioned. Ravi was a leader in the implementation of these principles, and we started-up a specific renewable energy group. He led key deals in the market that exemplified his goals, by working on power deals in the Middle East and India, growing power and electrifying the emerging markets.” Personal Growth “He has developed his core principles following the experiences that he had in his earlier years. He took charge and led teams from Dubai, that covered Asia and Africa and the Middle East. "
          less="He won the respect and admiration of many inside and more importantly, outside of Standard Charted. His excellence, leadership, high-road values, and passion become his personal branding for sustainable and socially responsible financings. “ “Ravi Suri became solely responsible for Standard Chartered’ s franchise and is now well known across Emerging Markets as a leading expert in all aspects of Infrastructure Finance. He is passionate about this specialization and believes strongly in its ability to be a force for good in developing nations, while having a strong positive impact on climate change – particularly in Renewables – and ensuring Equator Principles of environmental and social policy are always maintained."
        />
      </div>
      <div className={classes.body}>
        <ReadMore
          classes={classes}
          header={<Header4 />}
          more="I have known Ravi and worked closely with him over the past four years. He has
          dedicated his career to supporting the development of infrastructure projects in
          developing markets, and at KPMG leads our global infrastructure finance practice
          working closely with colleagues across the world, in particular supporting our less
          experienced practices in the Middle East Africa Latam and ASPAC."
          less="Both Ravi and I are acutely conscious of the importance of economic growth in
          the development markets to the achievement of the United Nations Sustainable
          Development Goals (UNSDG), and the critical role that infrastructure plays in
          stimulating such growth. Ravi brings the most amazing passion and energy to
          everything he does, motivating and inspiring colleagues, and through his support
          to the projects of our clients helping to realise the aspirations of both government
          and private sector infrastructure service providers often in some of the most
          difficult environments.
          It is an honor to work with Ravi."
        />
      </div>
      <div className={classes.body}>
        <ReadMore
          classes={classes}
          header={<Header5 />}
          more="I know Ravi for almost four years now I’m currently on the board of KPMG lower Gulf and prior to this I was the CEO of KPMG in India I have been actively involved in mentoring Ravi and supporting him on various initiatives I have had the opportunity to see Ravi in action leading a global growth story at KPMG as the Global Head of Infrastructure Finance, where he is developing new teams and leading new groups with a focused perspective. Ravi is very well connected in the space. He is also very knowledgeable about the sector and its needs. It is because of this that he can quickly connect with the clients and their senior management and help them define their problem and identify the right solution to deal with their problems. His passion and hard work have won him the respect and admiration of many people within the KPMG international network. He has also developed many important relationships, outside the KPMG with the infrastructure people, various sovereign wealth, and Pension Funds. He had the opportunity to be invited to Oxford and various other platforms to present. This has added a lot of credibility to the work he is doing in this space. He "
          less="is well known across Emerging Markets as a leading expert in all aspects of Infrastructure Finance. He has been instrumental in establishing new business in Infra Finance in KPMG Lower Gulf and has built a large infrastructure practice in the firm. He makes a big difference when he goes for client meetings and pitches, and his knowledge and expertise in this domain act as a big differentiator. He has indeed helped KPMG created a difference in the marketplace. He has volunteered to lead KPMG Lower Gulf’s Belt and Road Initiative (BRI). He established KPMG Lower Gulf as a center of excellence for infrastructure finance within the KPMG global network. Ravi has always demonstrated an exceptional strategic mindset as well as a willingness to invest in partner relationships, and to help others with access to clients and creating impactful infrastructure opportunities. He believes in bringing a change and improvements by new ways of working, innovative ideas and new partnership opportunities to help his clients deal with complex issues in their projects. He believes in getting things done and drives his team to achieve its objectives. He works well with his team and brings in the right amount of humor to diffuse the project-related tensions and stress. He is passionate about his work and inspires his team members and others to get their best. Ravi has an ability to take difficult decisions to building businesses against the competition and ensures that those decisions are based on implemental projects versus just doing a deal. Ravi, as a leader demonstrates high level of integrity and lives the KPMG values. He is very hardworking and puts his heart and soul in what he is doing. It is truly incredible that in a short span of time he has built KPMG Lower Gulf’s reputation in this space. Based on the work he has done not only in KPMG but in previous organizations, I would like to recommend Ravi for the Business For Peace award and will be happy to provide any additional information if needed."
        />
      </div>
      <div className={classes.body}>
        <ReadMore
          classes={classes}
          header={<Header6 />}
          more="I got to know Ravi shortly after he joined KPMG in 2016 when he started reaching out to Asia in
          his role Ask the Global Head of Infrastructure Finance for KPMG
          It has been a pleasure to work with him these last four years as he has brought passion an
          energy to his role a man has excelled in whatever he has taken on. He has built an enviable
          reputation working with my partners in the Asia Pacific region, specifically Australia, Singapore,
          Indonesia, Japan, Thailand, Vietnam, Taiwan, Cambodia and Myanmar, in building out our
          infrastructure advisory business. Two of his landmark mandates are the Pertamina Anne Moya
          Water, where his personal credibility and commitment were swing factors in us winning them.
          Ravi has shown a great collaborative spirit as well as a willingness to mentor a number of
          partners to build successful practices in the region."
          less="Ravi is very up to date with the most important trends in the infrastructure business, and has
          been most concerned about ensuring that the sector builds on our strong foundation of
          sustainability as it helps deliver economic growth. To this end, he has invested considerable
          personal energy in building commercially viable models which also moved the needle on SDGs,
          and actively advocating these both across the KPMG network and with our clients."
        />
      </div>
    </div>
  );
}

function Header1() {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.headerTitle2}>
      James Courtney
      <br />
      Former Global Head, Project and Export Finance <br />
      Standard Chatered Bank <br />
    </Typography>
  );
}

function Header2() {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.headerTitle2}>
      Mark Dowie
      <br />
      Former CEO Corporate and Institutional Banking, <br />
      Standard Chartered PLC <br />
    </Typography>
  );
}
function Header3() {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.headerTitle2}>
      William Palmer
      <br />
      Rathvon Former Global Head of Project Finance, <br />
      Standard Chartered Bank
      <br />
    </Typography>
  );
}

function Header4() {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.headerTitle2}>
      RICHARD THRELFALL
      <br />
      Partner
      <br />
      Global Head of KPMG IMPACT <br />
      Global Head of Infrastructure, KPMG International <br />
    </Typography>
  );
}

function Header5() {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.headerTitle2}>
      RICHARD REKHY
      <br />
      FORMER CEO,
      <br />
      KPMG INDIA BOARD MEMBER KPMG LOWER GULF <br />
    </Typography>
  );
}

function Header6() {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.headerTitle2}>
      SATYANARAYAN R
      <br />
      PARTNER, Head of Infrastructure, Government &amp; Healthcare <br />
      Singapore and Indonesia <br />
    </Typography>
  );
}
