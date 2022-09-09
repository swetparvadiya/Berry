import React from "react";
import { Grid } from "@mui/material";
import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import useStyles from "./style";

const BoxHover = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      alignItems="center"
      className={classes.headerContent}
    >
      <Grid item marginLeft="10px" marginRight="20px">
        <ArchiveTwoToneIcon />
      </Grid>
      <Grid item marginRight="20px">
        <EmailTwoToneIcon />
      </Grid>
      <Grid item marginRight="20px">
        <DeleteTwoToneIcon />
      </Grid>
      <Grid item marginRight="10px">
        <VisibilityOffTwoToneIcon />
      </Grid>
    </Grid>
  );
};

export default BoxHover;
