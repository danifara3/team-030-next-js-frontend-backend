import React from "react";
import { withRouter } from "next/router";

import MLink from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CircularProgress from "@material-ui/core/CircularProgress";

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
    padding: 60,
    width: "100%",
    textAlign: "center",
    margin: 30,
  },
  title: {
    textAlign: "center",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const [AUTH, setAUTH] = React.useState(null);
  const [thisIsLoading, setThisIsloading] = React.useState(true);

  const onLogout = () => {
    localStorage.removeItem("AUTH_00000");
    props.router.push("/login");
  };

  React.useEffect(() => {
    const token = localStorage.getItem("AUTH_00000");
    if (token) {
      setAUTH(JSON.parse(token));
    } else {
      props.router.push("/login");
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={10} className={classes.paper}>
        {AUTH ? (
          <>
            <Typography variant="h5" component="h2" className={classes.title}>
              Welcome {AUTH.name}
            </Typography>

            <Typography color="textSecondary" gutterBottom>
              You registeration was a a success!
            </Typography>

            <Typography color="textSecondary" gutterBottom>
              You registeration was a{" "}
              {AUTH.address ? <b>Consumer</b> : <b>Farmer</b>}
            </Typography>

            <Button coolor="primary" variant="contained" onClick={onLogout}>
              LOGOUT
            </Button>
          </>
        ) : (
          <CircularProgress disableShrink />
        )}
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Profile);
