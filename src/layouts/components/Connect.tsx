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
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent className={classes.dialog}>
        <DialogContentText id="connect-dialog-description">
          <Grid container className={classes.item}>
            <Grid item>
              <PhoneIcon />
            </Grid>
            <Grid item>
              +97 1505518141 <br />
              +97 1504563640
            </Grid>
          </Grid>
          <Grid container className={classes.item}>
            <Grid item>
              <MailIcon />
            </Grid>
            <Grid item>ravisuri1@rediffmail.com</Grid>
          </Grid>
          <Grid container className={classes.item}>
            <Grid item>
              <LinkedInIcon />
            </Grid>
            <Grid item>RAVI SURI</Grid>
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
