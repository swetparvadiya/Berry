import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import { Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Stack } from "@mui/system";
import useStyles from "./style";
import { useTheme } from "@mui/material/styles";

const BodyNav = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.head}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.custom.whiteBackground }}
        elevation={0}
        className={classes.navbar}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.headMail}>
            Mail
          </Typography>
          <Stack justifyContent="flex-end">
            <Breadcrumbs
              display="flex"
              alignItems="center"
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Grid className={classes.icon}>
                <HomeIcon fontSize="small" />
              </Grid>
              <Link
                underline="hover"
                className={classes.icon}
                color="inherit"
                href="/"
              >
                Mail
              </Link>
            </Breadcrumbs>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BodyNav;
