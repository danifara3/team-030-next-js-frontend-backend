import React from "react";
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

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const onSubmit = (e) => e.preventDefault;

export default function FarmerReg(props) {
  const classes = useStyles();
  const { setView, reset, setReset } = props;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [farmAddress, setFarmAddress] = React.useState("");
  const [farmName, setFarmName] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      name,
      email,
      password,
      phone,
      farmAddress,
      farmName,
      type: "farmer",
    });
  };

  const onReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setFarmAddress("");
    setFarmName("");
  };

  React.useEffect(() => {
    if (reset) {
      console.log(55555);
      onReset();
      setReset(false);
    }
  }, [reset]);

  return (
    <form className={classes.form} noValidate onSubmit={onSubmit}>
      <Button variant="outlined" size="small" onClick={() => setView("first")}>
        back
      </Button>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        variant="outlined"
        size="small"
        margin="normal"
        required
        fullWidth
        name="Phone"
        label="Phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        label="Farm Name"
        value={farmName}
        onChange={(e) => setFarmName(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        label="Farm Address"
        value={farmAddress}
        onChange={(e) => setFarmAddress(e.target.value)}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Register
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/login">
            <MLink href="#" variant="body2">
              {"Already? have an account? Login"}
            </MLink>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}
