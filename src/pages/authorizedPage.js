import { Button, Grid } from "@material-ui/core";
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
export default function Authorized(props) {
  const beautify = useStyles();
  return (
    <div className={beautify.root}>
      <Grid container>
        <Grid item lg={8} className={beautify.mxAuto}>
          <p>Welcome to authorized page</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.toggle(false)}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
