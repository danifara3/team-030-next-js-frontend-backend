import React from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
import SnackBar from "../SnackBar";
import { withRouter } from "next/router";

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
function Login(props) {
  const classes = useStyles();
  const [view, setView] = React.useState("first");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [msg, setMsg] = React.useState("");
  const [type, setType] = React.useState("error");
  const [SnackBarOpen, setSnackBarOpen] = React.useState(false);

  const onSubmit = async (type) => {
    console.log(type);
    console.log({ email, password });

    const data = { email, password };

    if (type === "farmer") {
      try {
        const res = await axios.post("/api/farmer/login", data);
        console.log(res.data);
        if (res.data.success) {
          setMsg(res.data.msg);
          setType("success");
          setSnackBarOpen(true);
          localStorage.setItem("AUTH_00000", JSON.stringify(res.data.data));
          props.router.push("/profile");
          return reset();
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
    if (type === "consumer") {
      try {
        const res = await axios.post("/api/consumer/login", data);
        console.log(res.data);
        if (res.data.success) {
          setMsg(res.data.msg);
          setType("success");
          setSnackBarOpen(true);
          localStorage.setItem("AUTH_00000", JSON.stringify(res.data.data));
          props.router.push("/profile");
          return reset();
        }

        setMsg(res.data.msg);
        setType("error");
        setSnackBarOpen(true);
      } catch (e) {
        console.log(e);
        setMsg("Connection Error");
        setType("error");
        setSnackBarOpen(true);
      }
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
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
          {view === "first" && "Login"}
          {view === "farmer" && "Farmer Login"}
          {view === "consumer" && "Consumer Login"}
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
                    Login as
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
                    Login as
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
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit("farmer");
            }}
          >
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                reset();
                setView("first");
              }}
            >
              back
            </Button>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              size="small"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              size="small"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <MLink href="#" variant="body2">
                  Forgot password?
                </MLink>
              </Grid>
              <Grid item>
                <Link href="/register">
                  <MLink href="#" variant="body2">
                    {"Dont have an account? Register"}
                  </MLink>
                </Link>
              </Grid>
            </Grid>
          </form>
        )}

        {view === "consumer" && (
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit("consumer");
            }}
          >
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                reset();
                setView("first");
              }}
            >
              back
            </Button>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              size="small"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              size="small"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <MLink href="#" variant="body2">
                  Forgot password?
                </MLink>
              </Grid>
              <Grid item>
                <Link href="/register">
                  <MLink href="#" variant="body2">
                    {"Dont have an account? Register"}
                  </MLink>
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default withRouter(Login);
