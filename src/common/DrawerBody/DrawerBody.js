import React from "react";
import Body from "../Body/Body";
import MailNav from "../Mailbox/MailNav";
import { Grid } from "@mui/material";
import useStyles from "./style";

const DrawerBody = () => {
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
        <MailNav />
      </Grid>
    </div>
  );
};

export default DrawerBody;
