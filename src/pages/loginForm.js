import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
export default function LoginForm(props) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

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
          localStorage.setItem("isLoggedIn", true);
          props.changeMe(true);
        } else {
          alert("Password didnot match");
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
      <p>Login</p>
      <Grid container>
        <Grid item lg={8} className={beautify.mxAuto}>
          <form noValidate autoComplete="off" fullWidth={true}>
            <FormControl fullWidth={true}>
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                fullWidth={true}
                onChange={onEmailChange}
              />
              <FormHelperText id="my-helper-text" className={beautify.textRed}>
                {errors.email}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth={true}>
              <TextField
                id="standard-basic"
                label="Password"
                fullWidth={true}
                type="password"
                onChange={onPasswordChange}
              />
              <FormHelperText id="my-helper-text" className={beautify.textRed}>
                {errors.password}
              </FormHelperText>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={(beautify.mxAuto, "text-center")}
              onClick={login}
            >
              Login
            </Button>
            <p>Or,</p>
            <Button
              variant="contained"
              color="secondary"
              className={(beautify.mxAuto, "text-center")}
              onClick={() => props.clickMe(false)}
            >
              Register
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
