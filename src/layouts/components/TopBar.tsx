import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  Hidden,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Connect } from "./Connect";
import CloseIcon from "@material-ui/icons/Close";
import { pathName } from "../../properties/properties";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 64,
    height: "100%",
  },
  appbar: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 20,
    paddingBottom: 20,
    backdropFilter: `blur(30px)`,
    WebkitBackdropFilter: `blur(30px)`,
    opacity: 0.9,
  },
  title: {
    fontWeight: 300,
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
    // paddingLeft: 30,
  },
  navbar: {
    padding: 0,
    paddingTop: 10,
  },
  button: {
    // paddingLeft: 30,
    // paddingRight: 30,
    textTransform: "uppercase",
  },
  buttonText: {
    fontFamily: "Poppins",
    color: theme.palette.primary.contrastText,
  },
  menu: {
    color: theme.palette.primary.contrastText,
    fontSize: 30,
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    backdropFilter: `blur(30px)`,
    WebkitBackdropFilter: `blur(30px)`,
    opacity: 0.8,
  },
  toolbar: theme.mixins.toolbar,
  close: {
    paddingTop: 20,
    paddingRight: 10,
  },
}));

const navbarItems = [
  {
    name: "About",
    path: pathName + "/about",
  },
  {
    name: "Landmark Deals",
    path: pathName + "/landmark-deals",
  },
  {
    name: "Thought Leadership",
    path: pathName + "/thought-leadership",
  },
  {
    name: "Passion for Sustainability",
    path: pathName + "/sustainability",
  },
  {
    name: "Impact on Society",
    path: pathName + "/peace",
  },
  {
    name: "Awards",
    path: pathName + "/awards",
  },
  {
    name: "Gallery",
    path: pathName + "/gallery",
  },
];

export function TopBar(props) {
  const classes = useStyles();
  const { location } = props;
  const [open, setOpen] = useState(false);

  const [connect, setConnect] = useState(false);
  function handleConnectClose() {
    setConnect(false);
  }

  const toggleDrawer = (open) => (event) => {
    if (event) {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
    }

    setOpen(open);
  };

  const isAbout = location.pathname.includes("/about");
  const isLM = location.pathname === "/landmark-deals";
  const isTL = location.pathname === "/thought-leadership";
  const isSust = location.pathname.includes("/sustainability");
  const isPeace = location.pathname.includes("/peace");
  const isAwards = location.pathname === "/awards";
  const isGallery = location.pathname === "/gallery";
  const isConnect = connect;

  const bold = [isAbout, isLM, isTL, isSust, isPeace, isAwards, isGallery];

  return (
    <AppBar position="fixed" className={classes.appbar} elevation={5}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={4}>
            <Button
              color="inherit"
              className={classes.button}
              href={pathName + "/home"}
            >
              <Typography variant="h3" className={classes.title}>
                RAVI SURI
              </Typography>
            </Button>
          </Grid>
          <Hidden smDown>
            <Grid item xs={8}>
              <Grid
                container
                justify="flex-start"
                alignItems="center"
                className={classes.navbar}
              >
                <Grid item xs={1}>
                  <Grid container justify="flex-start" alignItems="center">
                    <Button
                      color="inherit"
                      className={classes.button}
                      href={pathName + "/about"}
                    >
                      <Typography
                        variant="body1"
                        className={classes.buttonText}
                        style={
                          isAbout ? { fontWeight: 800 } : { fontWeight: 300 }
                        }
                      >
                        About
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container justify="center" alignItems="center">
                    <Button
                      color="inherit"
                      className={classes.button}
                      href={pathName + "/landmark-deals"}
                    >
                      <Typography
                        variant="body1"
                        className={classes.buttonText}
                        style={isLM ? { fontWeight: 800 } : { fontWeight: 300 }}
                      >
                        Landmark Deals
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <Button
                      color="inherit"
                      className={classes.button}
                      href={pathName + "/thought-leadership"}
                    >
                      <Typography
                        variant="body1"
                        className={classes.buttonText}
                        style={isTL ? { fontWeight: 800 } : { fontWeight: 300 }}
                      >
                        Thought Leadership
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <Button
                      color="inherit"
                      className={classes.button}
                      href={pathName + "/sustainability"}
                    >
                      <Typography
                        variant="body1"
                        className={classes.buttonText}
                        style={
                          isSust ? { fontWeight: 800 } : { fontWeight: 300 }
                        }
                      >
                        Passion for Sustainability
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                justify="flex-start"
                alignItems="center"
                className={classes.navbar}
              >
                <Grid item xs={3}>
                  <Grid container justify="flex-start" alignItems="center">
                    <Button
                      color="inherit"
                      className={classes.button}
                      href={pathName + "/peace"}
                    >
                      <Typography
                        variant="body1"
                        className={classes.buttonText}
                        style={
                          isPeace ? { fontWeight: 800 } : { fontWeight: 300 }
                        }
                      >
                        Impact on Society
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify="flex-start" alignItems="center">
                    <Button
                      color="inherit"
                      className={classes.button}
                      href={pathName + "/awards"}
                    >
                      <Typography
                        variant="body1"
                        className={classes.buttonText}
                        style={
                          isAwards ? { fontWeight: 800 } : { fontWeight: 300 }
                        }
                      >
                        Awards
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    color="inherit"
                    className={classes.button}
                    href={pathName + "/gallery"}
                  >
                    <Typography
                      variant="body1"
                      className={classes.buttonText}
                      style={
                        isGallery ? { fontWeight: 800 } : { fontWeight: 300 }
                      }
                    >
                      Gallery
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify="center" alignItems="center">
                    <Button
                      color="inherit"
                      className={classes.button}
                      onClick={() => setConnect(true)}
                    >
                      <Typography
                        variant="body1"
                        className={classes.buttonText}
                        style={
                          isConnect ? { fontWeight: 800 } : { fontWeight: 300 }
                        }
                      >
                        Connect
                      </Typography>
                    </Button>
                  </Grid>
                  <Connect open={connect} handleClose={handleConnectClose} />
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={2}>
              <Grid container justify="flex-end">
                {!open && (
                  <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon className={classes.menu} />
                  </IconButton>
                )}

                <SwipeableDrawer
                  anchor="right"
                  elevation={2}
                  open={open}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                  classes={{ paper: classes.paper }}
                  variant="temporary"
                >
                  <Grid container justify="flex-end" className={classes.close}>
                    <IconButton
                      aria-label="close"
                      onClick={toggleDrawer(false)}
                    >
                      <CloseIcon className={classes.menu} />
                    </IconButton>
                  </Grid>

                  {/* <div className={classes.toolbar} /> */}
                  <List>
                    {navbarItems.map((item, index) => (
                      <ListItem
                        button
                        onClick={() => (window.location.href = item.path)}
                      >
                        <ListItemText>
                          <Typography
                            variant="body1"
                            className={classes.buttonText}
                            style={
                              bold[index]
                                ? { fontWeight: 800 }
                                : { fontWeight: 300 }
                            }
                          >
                            {item.name}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                    <ListItem button onClick={() => setConnect(true)}>
                      <ListItemText>
                        <Typography
                          variant="body1"
                          className={classes.buttonText}
                          style={
                            isConnect
                              ? { fontWeight: 800 }
                              : { fontWeight: 300 }
                          }
                        >
                          Connect
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <Connect open={connect} handleClose={handleConnectClose} />
                  </List>
                </SwipeableDrawer>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
