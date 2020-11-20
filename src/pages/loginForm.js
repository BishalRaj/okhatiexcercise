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
  btn: {
    width: "50%",
  },
  title: {
    fontSize: 14,
  },
  card: {
    backgroundColor: "#F8F8F8",
  },
}));
export default function LoginForm(props) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  // Handling Inputs on change
  function onEmailChange(e) {
    setemail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function login(e) {
    e.preventDefault();
    if (validate()) {
      let em = localStorage.getItem("email");
      let pwd = localStorage.getItem("password");
      if (em === email) {
        if (pwd === password) {
          // Update User LoggedIn status
          // In local storage
          localStorage.setItem("isLoggedIn", true);
          // In state
          props.changeMe(true);
        } else {
          localStorage.setItem("isLoggedIn", false);
          alert("Password did not match");
        }
      } else {
        // props.changeMe(false);
        alert("Invalid User");
      }
    }
  }

  function validate() {
    let isValid = true;
    let err = {};

    if (!email) {
      isValid = false;
      err["email"] = "Please insert your email";
    }

    if (!password) {
      isValid = false;
      err["password"] = "Please insert your password";
    }

    setErrors(err);
    return isValid;
  }

  const beautify = useStyles();
  return (
    <div className={beautify.root}>
      <Grid container className="align-items-center justify-content-center">
        <Grid item lg={8} className={(beautify.mxAuto, "w-100")}>
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
                Login
              </Typography>
              <form noValidate autoComplete="off" fullWidth={true}>
                <FormControl fullWidth={true}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    type="email"
                    fullWidth={true}
                    onChange={onEmailChange}
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
                  />

                  {errors.password ? (
                    <Alert severity="error">{errors.password}</Alert>
                  ) : (
                    ""
                  )}
                </FormControl>

                <FormControl className="w-100">
                  <Button
                    variant="contained"
                    color="primary"
                    className={"w-100 mt-2"}
                    onClick={login}
                  >
                    Login
                  </Button>
                  <p className={(beautify.title, "text-center my-2 py-0")}>
                    OR
                  </p>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={"w-100"}
                    onClick={() => props.clickMe(false)}
                  >
                    Register
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
