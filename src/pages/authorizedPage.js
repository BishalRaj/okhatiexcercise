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
  text: {
    fontSize: "30px",
  },
}));
export default function Authorized(props) {
  const beautify = useStyles();
  return (
    <div className={beautify.root}>
      <Grid container>
        <Grid item lg={12} className={beautify.mxAuto}>
          <p className={beautify.text}>
            Welcome to authorized page
            <Button
              variant="contained"
              color="secondary"
              onClick={() => props.toggle(false)}
              className="mx-2"
            >
              Logout
            </Button>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
