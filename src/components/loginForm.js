import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
export default function LoginForm() {
  const [lemail, setLemail] = useState("");
  const [lpassword, setlPassword] = useState("");
  const [errors, setErrors] = useState("");

  function onEmailChange(e) {
    setLemail(e.target.value);
  }

  function onlPasswordChange(e) {
    setlPassword(e.target.value);
  }

  function login() {
    if (validate()) {
      let em = localStorage.getItem("email");
      let pwd = localStorage.getItem("password");
      if (em === lemail) {
        if (pwd === lpassword) {
          alert("Welcome");
        } else {
          alert("lPassword didnot match");
        }
      } else {
        alert("Invalid User");
      }
    }
  }

  function validate() {
    let isValid = true;
    let err = {};

    if (!lemail) {
      isValid = false;
      err["lemail"] = "Please insert your lemail";
    }

    if (!lpassword) {
      isValid = false;
      err["lpassword"] = "Please insert your lpassword";
    }

    setErrors(err);
    return isValid;
  }

  const beautify = useStyles();
  return (
    <div className={beautify.root}>
      <Grid container>
        <Grid item lg={8} className={beautify.mxAuto}>
          <form noValidate autoComplete="off" fullWidth={true}>
            <FormControl fullWidth={true}>
              <TextField
                id="standard-basic"
                label="Email"
                type="lemail"
                fullWidth={true}
                onChange={onEmailChange}
              />
              <FormHelperText id="my-helper-text" className={beautify.textRed}>
                {errors.lemail}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth={true}>
              <TextField
                id="standard-basic"
                label="lPassword"
                fullWidth={true}
                type="lpassword"
                onChange={onlPasswordChange}
              />
              <FormHelperText id="my-helper-text" className={beautify.textRed}>
                {errors.lpassword}
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
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
