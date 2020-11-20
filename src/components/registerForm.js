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
  textRed: {
    color: "red",
  },
}));
export default function RegisterForm() {
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
    // if (validate()) {
    //   alert("valid");
    // } else {
    //   alert("invalid");
    // }

    validate();
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
          <form noValidate autoComplete="off" fullWidth>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Email"
                fullWidth
                onChange={onEmailChange}
                value={email}
              />
              <FormHelperText id="my-helper-text" className={beautify.textRed}>
                {errors.email}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Password"
                fullWidth
                type="password"
                onChange={onPasswordChange}
                value={password}
              />
              <FormHelperText id="my-helper-text" className={beautify.textRed}>
                {errors.password}
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Confirm Password"
                type="password"
                fullWidth
                value={cPassword}
                onChange={onCpasswordChange}
              />
              <FormHelperText id="my-helper-text" className={beautify.textRed}>
                {errors.cpassword}
              </FormHelperText>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={(beautify.mxAuto, "text-center")}
              onClick={onSubmit}
            >
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
