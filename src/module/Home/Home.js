import React, { useState } from "react";
import { Grid, Avatar, Box, ButtonBase, Divider, Switch } from "@mui/material";
import { IconMenu2, IconBell } from "@tabler/icons";
import SearchSection from "../../common/Searchbar/SearchSection";
import Logo from "../../assets/Images/Logo.svg";
import TranslateIcon from "@mui/icons-material/TranslateTwoTone";
import SensorsIcon from "@mui/icons-material/SensorsTwoTone";

import SpeedIcon from "@mui/icons-material/SpeedTwoTone";
import InsightsIcon from "@mui/icons-material/InsightsTwoTone";
import WifiTetheringErrorIcon from "@mui/icons-material/WifiTetheringErrorTwoTone";
import FilePresentIcon from "@mui/icons-material/FilePresentTwoTone";
import BarChartIcon from "@mui/icons-material/BarChartTwoTone";
import AccountBoxIcon from "@mui/icons-material/AccountBoxTwoTone";
import SupportAgentIcon from "@mui/icons-material/SupportAgentTwoTone";
import ChatIcon from "@mui/icons-material/ChatTwoTone";
import ViewKanbanIcon from "@mui/icons-material/ViewKanbanTwoTone";
import EmailIcon from "@mui/icons-material/EmailTwoTone";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "../../common/Profile/Profile";
import Layout from "./Layout";
import { useTheme } from "@mui/material/styles";
import useIsMobile from "../../hooks/useIsMobile";
// import useStyles from "./style";

const drawerWidth = "272px";

const List1 = [
  {
    id: 0,
    avatarIcon: <SpeedIcon />,
    message: "Default",
  },
  {
    id: 1,
    avatarIcon: <InsightsIcon />,
    message: "Analytics",
  },
];
const List2 = [
  {
    id: 0,
    avatarIcon: <WifiTetheringErrorIcon />,
    message: "Statistics",
  },
  {
    id: 1,
    avatarIcon: <FilePresentIcon />,
    message: "Data",
  },
  {
    id: 2,
    avatarIcon: <BarChartIcon />,
    message: "Charts",
  },
];
const List3 = [
  {
    id: 0,
    avatarIcon: <AccountBoxIcon />,
    message: "Users",
  },
  {
    id: 1,
    avatarIcon: <SupportAgentIcon />,
    message: "Customers",
  },
  {
    id: 2,
    avatarIcon: <ChatIcon />,
    message: "Chat",
  },
  {
    id: 3,
    avatarIcon: <ViewKanbanIcon />,
    message: "Kanban",
  },
  {
    id: 4,
    avatarIcon: <EmailIcon />,
    message: "Mail",
  },
  {
    id: 5,
    avatarIcon: <CardGiftcardIcon />,
    message: "E-commerce",
  },
];
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: "18px",
    paddingBottom: "20px",
    backgroundColor: theme.palette.primary.main,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  heading: {
    marginLeft: "25px",
    fontWeight: 500,
    marginTop: "22px",
  },
  headingContent: {
    marginTop: "15px",
    marginLeft: "28px",
  },
  headingHover: {
    "&:hover  ": {
      color: "rgb(26 42 225)",
    },
  },
  typographyContent: {
    marginLeft: "16px",
    marginTop: "-5px",
  },
  back: {
    backgroundColor: "rgb(227, 242, 253)",
    borderRadius: "16px",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },

  drawer: {
    width: drawerWidth,
    border: "none",
  },
  header: {
    border: "none",
    marginTop: "30px",
  },
  header2: {
    paddingTop: "10px",
    marginLeft: "-20px",
    marginTop: "80px",
  },

  drawerContent: {
    paddingTop: "13px",
    opacity: "60%",
  },
  content: {
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  logoContent: {
    marginLeft: "27px",
    width: "350px",
  },
  iconContent: {
    borderRadius: "20px",
    width: "30px",
    height: "30px",
    backgroundColor: "rgb(237 231 246)",
    color: "rgb(94, 53, 177)",
    "&:hover": {
      background: "rgb(94, 53, 177)",
      color: "#ffffff",
    },
  },
  icon1: {
    "&:hover": {
      background: "rgb(94, 53, 177)",
      color: "#ffffff",
    },
  },
  icon3: {
    "&:hover": {
      background: "rgb(30, 136, 229)",
      color: "#ffffff",
    },
  },

  icon4: {
    background: "rgb(94, 53, 177)",
    color: "rgb(94, 53, 177)",
    "&:hover": {
      background: "rgb(94, 53, 177)",
      color: "#ffffff",
    },
    backgroundFInal: {
      color: "#fff",
    },
  },
}));

const Home = ({ toggleTheme }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useIsMobile();

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(
    `${localStorage.getItem("mode") || "dark"}`
  );

  const handleChange = (e) => {
    setSelected(e.target.value);
    toggleTheme();
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        variant={isMobile ? "temporary" : "persistent"}
        PaperProps={{
          style: {
            maxWidth: "250px",
            border: "none",
            backgroundColor: theme.palette.custom.whiteBackground,
          },
        }}
        className={classes.drawer}
      >
        <List
          disablePadding
          className={(classes.drawer, classes.header)}
          style={{
            color: theme.palette.text.primary,
          }}
        >
          {isMobile ? (
            <Grid container item marginLeft="27px" width="350px">
              <img src={Logo} width="102px" alt="logo" />
            </Grid>
          ) : (
            <Toolbar />
          )}

          <Typography className={classes.heading} variant="subtitle1">
            Dashboard
          </Typography>
          {List1.map((item, index) => (
            <ListItem button key={item.id} className={classes.headingHover}>
              <Grid
                display="flex"
                alignContent="center"
                alignItems="center"
                className={classes.headingContent}
              >
                <Grid item>{item.avatarIcon}</Grid>
                <Grid item>
                  <Typography className={classes.typographyContent}>
                    {item.message}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Divider
          width="85%"
          variant="middle"
          className={classes.drawerContent}
        />
        <List
          disablePadding
          className={classes.drawer}
          style={{
            color: theme.palette.text.primary,
          }}
        >
          <Typography className={classes.heading} variant="subtitle1">
            Widget
          </Typography>
          {List2.map((item, index) => (
            <ListItem button key={item.id} className={classes.headingHover}>
              <Grid
                display="flex"
                alignContent="center"
                alignItems="center"
                className={classes.headingContent}
              >
                <Grid item>{item.avatarIcon}</Grid>
                <Grid item>
                  <Typography className={classes.typographyContent}>
                    {item.message}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Divider
          width="85%"
          variant="middle"
          className={classes.drawerContent}
        />

        <List
          disablePadding
          className={classes.drawer}
          style={{
            color: theme.palette.text.primary,
          }}
        >
          <Typography className={classes.heading} variant="subtitle1">
            Application
          </Typography>
          {List3.map((item, index) => (
            <ListItem button key={item.id} className={classes.headingHover}>
              <Grid
                display="flex"
                alignContent="center"
                alignItems="center"
                className={classes.headingContent}
              >
                <Grid item>{item.avatarIcon}</Grid>
                <Grid item>
                  <Typography className={classes.typographyContent}>
                    {item.message}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <AppBar
        position="fixed"
        elevation={0}
        className={classes.appBar}
        style={{
          backgroundColor: theme.palette.custom.whiteBackground,
        }}
      >
        <Grid alignItems="center" display="flex">
          <Grid
            container
            item
            display={{ xs: "none", md: "block" }}
            marginLeft="27px"
            width="350px"
          >
            <img src={Logo} width="102px" alt="logo" />
          </Grid>
          <Box item marginLeft="27px">
            <ButtonBase>
              <Avatar
                onClick={() => setOpen(!open)}
                variant="rounded"
                className={classes.iconContent}
                sx={{
                  background: "rgb(237 231 246)",
                  color: "rgb(94, 53, 177)",
                }}
              >
                <IconMenu2 stroke={1.2} size="1.2rem" />
              </Avatar>
            </ButtonBase>
          </Box>
          <Box item marginLeft="18px">
            <SearchSection />
          </Box>
          <Grid
            container
            justifyContent="right"
            alignContent="center"
            alignItems="center"
            display="flex"
            spacing={2.4}
            marginRight="45px"
          >
            <Grid item>
              <Switch onChange={handleChange} />
            </Grid>

            <Grid item display={{ xs: "none", md: "block" }}>
              <ButtonBase>
                <Avatar
                  variant="rounded"
                  className={classes.icon1}
                  sx={{
                    background: "rgb(237 231 246)",
                    color: "rgb(94, 53, 177)",
                  }}
                  color="inherit"
                >
                  <SensorsIcon stroke={1.5} size="1rem" />
                </Avatar>
              </ButtonBase>
            </Grid>
            <Grid item display={{ xs: "none", md: "block" }}>
              <ButtonBase
                display={{ xs: "none", md: "block" }}
                borderRadius="25px"
              >
                <Avatar
                  variant="rounded"
                  className={classes.icon3}
                  sx={{
                    background: "rgb(227 242 253)",
                    color: "rgb(30 136 229)",
                  }}
                  color="inherit"
                >
                  <TranslateIcon stroke={1.5} size="1.3rem" />
                </Avatar>
              </ButtonBase>
            </Grid>
            <Grid item display={{ xs: "none", md: "block" }}>
              <ButtonBase borderRadius="12px">
                <Avatar
                  variant="rounded"
                  className={classes.icon4}
                  sx={{
                    background: "rgb(237 231 246)",
                    color: "rgb(94, 53, 177)",
                  }}
                >
                  <IconBell stroke={1.5} size="1.3rem" />
                </Avatar>
              </ButtonBase>
            </Grid>
            <Grid item>
              <Profile />
            </Grid>
          </Grid>
        </Grid>
      </AppBar>

      <main>
        <Grid
          className={
            window.innerWidth > 800
              ? (classes.content,
                {
                  [classes.contentShift]: open,
                })
              : null
          }
        >
          <Layout />
        </Grid>
      </main>
    </>
  );
};

export default Home;
