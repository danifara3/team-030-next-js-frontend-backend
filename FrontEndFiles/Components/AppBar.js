import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  btn: {
    cursor: "pointer",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link href="./">
            <Typography variant="h6" className={classes.title}>
              Agro Test App
            </Typography>
          </Link>
          <Link href="/login">
            <Button className={classes.btn} color="inherit">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className={classes.btn} color="inherit">
              Register
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
