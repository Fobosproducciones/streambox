import React, { useState } from "react";
import "../styles/Navbarstyles.css";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
  offset: theme.mixins.toolbar,
}));

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleSignOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary" elevation="0">
        <Toolbar>
          <IconButton edge="start" aria-label="logo">
            <LiveTvOutlinedIcon color="primary" />
          </IconButton>

          <Typography variant="h6" className={classes.title} id="glitch">
            StreamBox
          </Typography>

          <a href="public\Streambox.pdf" download>
            <Button
              variant="outlined"
              className="pdfbutton"
              color="primary"
              size="small"
              onClick={handleClick}
            >
              PDF Doc
            </Button>
          </a>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Your download will start soon!
            </Alert>
          </Snackbar>
          <Button onClick={handleSignOut} variant="text" color="primary">
            <CancelPresentationOutlinedIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
