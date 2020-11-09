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
          more="Ravi Suri worked directly for me as Regional Head of Project and Export Finance covering South Asia, the Middle East and Africa between 2011 and 2015. After I moved on to become CEO of the Corporate and Institutional Bank at Standard Chartered, he continued with his specialization as Global Head of Project and Export Finance before leaving the bank in 2017 to lead a broader advisory business at KPMG.During my time working with Ravi, I was always struck by his transparent passion for the work he was doing. This was not particularly associated with the money making of profit (although he always ran a clean and profitable business) but was much more about the change and improvement he was able to bring to the areas in which he worked. He embraced new technologies, new ways of working and new partnership opportunities to help his clients achieve often massive projects in the developing world and he did this tirelessly and often in the face of considerable challenge. His desire to just get things done with good humour and commitmentwas inspirational and he built and lead teams who grew to love his passionate approach to his work"
          less="I had several interactions with Ravi’s clients over the years and all were united in the respect and admiration for the work he was doing for them and towards the ground- breaking projects they were pursuing. For example the Saudi business ACWA power which grew from a fledgling business to a major force in modern power generation in the Middle East; Emirates Power and the Korean power company KEPCO, who combined to form the first privately funded nuclear power solution in Asia; the Korean group SK who built the Istanbul tunnels connecting Europe and Asia; all of these clients would testify to Ravi‘s determination to get the projects underway and financed. These projects and the many others achieved by Ravi and his teams demonstrate a passion and desire to help countries improve their standard of living by improving efficiency in infrastructure in a sustainable and business-like manner.I have no hesitation in recommending Ravi for the Business For Peace Award, and would be delighted to provide more information and support if so desired."
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
