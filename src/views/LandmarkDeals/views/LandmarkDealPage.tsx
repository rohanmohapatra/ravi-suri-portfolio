import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./PageData";

interface PageData {
  srNumber: string;
  dealTitle: string;
  dealSubtitle: string;
  image: string;
  projectCapacity: string;
  sector: string;
  projectValue: string;
  yearOfFinancialClose: string | number;
  country: string;
  points: (string | string[])[];
  pressTitles: string[];
  pressLinks: string[];
}

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    paddingLeft: 30,
  },
  title: {
    fontFamily: '"Poppins"',
    fontWeight: 700,
    color: theme.palette.primary.contrastText,
    wordBreak: "break-word",
  },
  subTitle: {
    fontFamily: '"Poppins"',
    fontWeight: 500,
    color: theme.palette.primary.contrastText,
    wordBreak: "break-word",
  },
  image: {
    backgroundSize: "cover",
    background: `no-repeat center`,
    height: 800,
    width: "100%",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      height: 400,
      marginTop: 10,
    },
  },
  text: {
    color: theme.palette.primary.contrastText,
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  textContainer: {
    padding: 60,
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  pointsTextContainer: {
    marginTop: 30,
  },
  listIcon: {
    color: theme.palette.primary.contrastText,
    fontSize: 30,
  },
  linksTextContainer: {
    padding: 60,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  link: {
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
}));

const DealHeading: React.FC<{
  title: string;
  subTitle: string;
}> = (props) => {
  const classes = useStyles();
  const { title, subTitle } = props;
  return (
    <div className={classes.header}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h5" className={classes.subTitle}>
        {subTitle}
      </Typography>
    </div>
  );
};

export const LandmarkDealPage: React.FC = () => {
  const { hash } = useParams<{ hash: string }>();
  const pageData: PageData = data[hash];
  const classes = useStyles();
  return pageData ? (
    <Box>
      <DealHeading
        title={pageData.dealTitle}
        subTitle={pageData.dealSubtitle}
      />
      <Box
        className={classes.image}
        style={{ backgroundImage: `url(${pageData.image})` }}
      />
      <Box className={classes.textContainer}>
        <Box>
          {pageData.projectCapacity && (
            <Typography variant="body2" className={classes.text}>
              <b>Project Capacity:</b> {pageData.projectCapacity}
            </Typography>
          )}
          <Typography variant="body2" className={classes.text}>
            <b>Sector:</b> {pageData.sector}
          </Typography>
          {pageData.projectValue && (
            <Typography variant="body2" className={classes.text}>
              <b>Project Value: </b>
              {pageData.projectValue}
            </Typography>
          )}
          <Typography variant="body2" className={classes.text}>
            <b>Year of Financial Close:</b> {pageData.yearOfFinancialClose}
          </Typography>
          <Typography variant="body2" className={classes.text}>
            <b>Country:</b> {pageData.country}
          </Typography>
        </Box>
        <Box className={classes.pointsTextContainer}>
          <ul>
            {pageData.points.map((item) =>
              Array.isArray(item) ? (
                <ul>
                  {item.map((subItem) => (
                    <li className={classes.listIcon}>
                      <Typography variant="body2" className={classes.text}>
                        {subItem}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <li className={classes.listIcon}>
                  <Typography variant="body2" className={classes.text}>
                    {item}
                  </Typography>
                </li>
              )
            )}
          </ul>
        </Box>
      </Box>
      {pageData.pressTitles.length > 0 && (
        <Box className={classes.linksTextContainer}>
          <Typography variant="body2" className={classes.text}>
            Press Links
          </Typography>
          {pageData.pressTitles.map((title, index) => (
            <>
              <br />
              <a
                href={pageData.pressLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                {title}
              </a>
              <br />
            </>
          ))}
        </Box>
      )}
    </Box>
  ) : null;
};
