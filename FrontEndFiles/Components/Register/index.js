import React from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import MLink from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import { withRouter } from "next/router";

import FarmerReg from "./component/FarmerReg";
import ConsumerReg from "./component/ConsumerReg";
import SnackBar from "../SnackBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MLink color="inherit" href="https://material-ui.com/">
        Our Team
      </MLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mycards: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  card: {
    minWidth: 275,
    margin: 40,
  },

  title: {
    fontSize: 14,
  },
}));

const onSubmit = (e) => e.preventDefault;

function Register(props) {
  const classes = useStyles();
  const [view, setView] = React.useState("first");

  const [msg, setMsg] = React.useState("");
  const [type, setType] = React.useState("error");
  const [SnackBarOpen, setSnackBarOpen] = React.useState(false);

  const [reset, setReset] = React.useState(false);

  const onSubmit = async (value) => {
    if (value.type === "consumer") {
      const data = {
        name: value.name,
        email: value.email,
        password: value.password,
        phone: value.phone,
        address: value.address,
      };

      try {
        const res = await axios.post("/api/consumer/register", data);
        console.log(res.data);
        if (res.data.success) {
          setMsg(res.data.msg);
          setType("success");
          setSnackBarOpen(true);
          localStorage.setItem("AUTH_00000", JSON.stringify(res.data.data));
          props.router.push("/profile");
          return setReset(true);
        }

        setMsg(res.data.msg);
        setType("error");
        return setSnackBarOpen(true);
      } catch (e) {
        console.log(e);
        setMsg("Connection Error");
        setType("error");
        setSnackBarOpen(true);
        return;
      }
    }

    if (value.type === "farmer") {
      const data = {
        name: value.name,
        email: value.email,
        password: value.password,
        phone: value.phone,
        farmAddress: value.farmAddress,
        farmName: value.farmName,
      };
      try {
        const res = await axios.post("/api/farmer/register", data);
        if (res.data.success) {
          setMsg(res.data.msg);
          setType("success");
          setSnackBarOpen(true);
          localStorage.setItem("AUTH_00000", JSON.stringify(res.data.data));
          props.router.push("/profile");
          return setReset(true);
        }

        setMsg(res.data.msg);
        setType("error");
        return setSnackBarOpen(true);
      } catch (e) {
        console.log(e);
        setMsg("Connection Error");
        setType("error");
        setSnackBarOpen(true);
        return;
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {SnackBarOpen && (
        <SnackBar
          message={msg}
          handleClose={() => setSnackBarOpen(false)}
          type={type}
        />
      )}

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {view === "first" && "Register"}
          {view === "farmer" && "Farmer Register"}
          {view === "consumer" && "Consumer Register"}
        </Typography>

        {view === "first" && (
          <>
            <div className={classes.mycards}>
              <Card elevation={10} className={classes.card}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Register as
                  </Typography>

                  <Typography variant="h5" component="h2">
                    Farmer
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => setView("farmer")}>
                    Continue
                  </Button>
                </CardActions>
              </Card>

              <Card elevation={10} className={classes.card}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Register as
                  </Typography>

                  <Typography variant="h5" component="h2">
                    Consumer
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => setView("consumer")}>
                    Continue
                  </Button>
                </CardActions>
              </Card>
            </div>
          </>
        )}

        {view === "farmer" && (
          <FarmerReg
            onSubmit={onSubmit}
            setView={setView}
            reset={reset}
            setReset={setReset}
          />
        )}

        {view === "consumer" && (
          <ConsumerReg
            onSubmit={onSubmit}
            setView={setView}
            reset={reset}
            setReset={setReset}
          />
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withRouter(Register);
