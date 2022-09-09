import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Body from "../Body/Body";
import { Grid } from "@mui/material";
import SingleMail from "../Singlemail/SingleMail";
import useStyles from "./styles";

const EmailBody = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <Grid
        className={classes.bodyContent}
        sx={{ display: { xs: "none", xl: "block" } }}
      >
        <Body />
      </Grid>
      <Grid className={classes.mailContent}>
        <SingleMail />
      </Grid>
    </div>
  );
};

export default EmailBody;
