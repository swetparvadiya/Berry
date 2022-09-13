import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
    paddingLeft: "15px",
    paddingTop: "15px",
    color: theme.palette.text.primary,
  },
  header: {
    backgroundColor: theme.palette.custom.buttonBackground,
    width: "352px",
    borderRadius: "8px",
    alignContent: "left",
    marginLeft: "10px",
    marginTop: "28px",
  },
  buttonContent: {
    width: "100%",
    height: "48px",
    textTransform: "none",
  },
  buttonContentColor: {
    color: theme.palette.custom.whiteBackground,
  },
  headingContent: {
    marginTop: "7px",
    marginLeft: "3px",
    display: "flex",
    color: theme.palette.text.primary,
  },
  headingHover: {
    height: "50px",
    display: "flex",
    alignContent: "center",
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.custom.hoverColor,
    },
  },
  typographyContent: {
    marginLeft: "17px",
    marginTop: "3px",
  },
  boxContent: {
    border: "none",
    marginTop: "31px",
  },
  boxContent2: {
    border: "none",
    marginTop: "11px",
  },
  bodyContent: {
    paddingTop: "20px",
    paddingRight: "27px",
    paddingLeft: "26px",
    paddingBottom: "20px",
  },
}));

export default useStyles;
