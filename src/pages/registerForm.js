import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  textRed: {
    color: "red",
  },
  card: {
    backgroundColor: "#F8F8F8",
  },
  title: {
    fontSize: 14,
  },
}));

export default function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [errors, setErrors] = useState("");

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  function onCpasswordChange(e) {
    setCpassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (validate()) {
      // Save data to localStorage if valid
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("isLoggedIn", false);
      setEmail("");
      setPassword("");
      setCpassword("");
      props.clickMe(true);
    }
  }

  function validate() {
    let isValid = true;
    let err = {};

    if (!email) {
      isValid = false;
      err["email"] = "Please insert your email";
    }

    if (typeof email !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(email)) {
        isValid = false;
        err["email"] = "Please enter valid email address.";
      }
    }

    if (password) {
      let pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
      if (!pattern.test(password)) {
        isValid = false;
        err["password"] =
          "Password must be at least 8 characters long and include at least a number and an alphabet";
      }
    }

    if (!password) {
      isValid = false;
      err["password"] = "Please insert your password";
    }

    if (!cPassword) {
      isValid = false;
      err["cpassword"] = "Please confirm your password";
    }

    if (password !== cPassword) {
      isValid = false;
      err["password"] = "Password did not match";
      err["cpassword"] = "Password did not match";
    }

    setErrors(err);
    return isValid;
  }

  const beautify = useStyles();
  return (
    <div className={beautify.root}>
      <Grid container>
        <Grid item lg={8} className={beautify.mxAuto}>
          <Card
            className={(beautify.root, beautify.card)}
            variant="outlined"
            p={2}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                color="textSecondary"
                gutterBottom
              >
                Register
              </Typography>
              <form noValidate autoComplete="off" fullWidth={true}>
                <FormControl fullWidth={true}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    fullWidth={true}
                    onChange={onEmailChange}
                    value={email}
                  />

                  {errors.email ? (
                    <Alert severity="error">{errors.email}</Alert>
                  ) : (
                    ""
                  )}
                </FormControl>

                <FormControl fullWidth={true}>
                  <TextField
                    id="standard-basic"
                    label="Password"
                    fullWidth={true}
                    type="password"
                    onChange={onPasswordChange}
                    value={password}
                  />

                  {errors.password ? (
                    <Alert severity="error">{errors.password}</Alert>
                  ) : (
                    ""
                  )}
                </FormControl>
                <FormControl fullWidth={true}>
                  <TextField
                    id="standard-basic"
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    value={cPassword}
                    onChange={onCpasswordChange}
                  />

                  {errors.cpassword ? (
                    <Alert severity="error">{errors.cpassword}</Alert>
                  ) : (
                    ""
                  )}
                </FormControl>
                <FormControl className="w-100">
                  <Button
                    variant="contained"
                    color="primary"
                    className={"w-100 mt-2"}
                    onClick={onSubmit}
                  >
                    Register
                  </Button>
                  <p className={(beautify.title, "text-center my-2 py-0")}>
                    OR
                  </p>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={"w-100"}
                    onClick={() => props.clickMe(true)}
                  >
                    Login
                  </Button>
                </FormControl>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
