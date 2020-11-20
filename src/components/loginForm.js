import { Button, FormControl, Grid, TextField } from "@material-ui/core";
import React from "react";
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
                type="email"
                fullWidth
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                label="Password"
                fullWidth
                type="password"
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={(beautify.mxAuto, "text-center")}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
