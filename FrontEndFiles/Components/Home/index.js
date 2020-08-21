import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
    margin: 50,
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    margin: 10,
    padding: "10px 20px",
    color: "white",
    backgroundImage:
      "-webkit-gradient(linear,left top,right top,from(#0e304c),to(#2bb7da))",
    backgroundImage: "linear-gradient(90deg, #0e304c, #2bb7da)",
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Welcome to Agro Test App
        </Typography>

        <Link href="/login">
          <Button className={classes.btn}>GET STARTED</Button>
        </Link>
      </Paper>
    </>
  );
};

export default Index;
