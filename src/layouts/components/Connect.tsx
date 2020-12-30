import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `rgba(87, 87, 87, 0.6)`,
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
  item: {
    padding: 20,
    color: theme.palette.common.white,
  },
  dialog: {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
  },
  anchor: {
    textDecoration: "none",
  },
}));

export function Connect(props) {
  const { open, handleClose } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="connect-dialog-title"
      aria-describedby="connect-dialog-description"
      className={classes.root}
      PaperProps={{
        className: classes.paper,
      }}
    >
      <DialogTitle id="connect-dialog-title">
        <Grid container justify="space-between" alignItems="flex-start">
          <Typography variant="h5" className={classes.item}>
            Connect with Me
          </Typography>

          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon htmlColor="#fff" />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent className={classes.dialog}>
        <DialogContentText id="connect-dialog-description">
          <Grid container spacing={2} className={classes.item}>
            <Grid item>
              <PhoneIcon />
            </Grid>
            <Grid item>
              <a className={classes.anchor} href="tel:+971505518141">
                +97 1505518141
              </a>
              <br />
              <a className={classes.anchor} href="tel:+971504563640">
                +97 1504563640
              </a>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.item}>
            <Grid item>
              <MailIcon />
            </Grid>
            <Grid item>
              <a
                className={classes.anchor}
                href="mailto:ravisuri1@rediffmail.com"
              >
                ravisuri1@rediffmail.com
              </a>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.item}>
            <Grid item>
              <LinkedInIcon />
            </Grid>
            <Grid item>
              <a
                className={classes.anchor}
                href="https://www.linkedin.com/in/ravi-suri-0aa30021"
              >
                RAVI SURI
              </a>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}
