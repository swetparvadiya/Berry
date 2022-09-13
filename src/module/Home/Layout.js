import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BodyNav from "../../common/BodyNav/BodyNav";
import DrawerBody from "../../common/DrawerBody/DrawerBody";
import EmailBody from "../../common/EmailBody/EmailBody";
import useStyles from "./style";
import { useTheme } from "@mui/material/styles";
import useIsMobile from "../../hooks/useIsMobile";

const Layout = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useIsMobile();

  return (
    <Grid
      className={isMobile ? classes.mainMobileContent : classes.mainContent}
      sx={{ backgroundColor: theme.palette.custom.bodyBack }}
    >
      <BodyNav />
      <Routes>
        <Route path="/home" element={<DrawerBody />} />
      </Routes>
      <Routes>
        <Route path="/home/email" element={<EmailBody />} />
      </Routes>
    </Grid>
  );
};

export default Layout;
