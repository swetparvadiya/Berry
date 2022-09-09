import { makeStyles } from "@mui/styles";

const drawerWidth = "268px";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: "18px",
    paddingBottom: "20px",
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
      background: "rgb(237 231 246)",
      color: "rgb(71 29 157)",
      backgroundColor: "rgb(237 231 246)",
    },
  },
  typographyContent: {
    marginLeft: "16px",
    marginTop: "-5px",
  },
  back: {
    backgroundColor: "rgb(227, 242, 253)",
    borderradius: "16px",
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
    borderradius: "20px",
    width: "40px",
    height: "40px",
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
  mainContent: {
    marginTop: "92px",
    paddingTop: "1px",
    borderradius: "10px",
    marginLeft: "-15px",
  },
}));

export default useStyles;
