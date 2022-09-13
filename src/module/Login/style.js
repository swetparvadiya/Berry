import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  buttonGoogle: {
    marginTop: "30px",
    marginBottom: "20px",
    backgroundColor: theme.palette.custom.buttonBackground,
    width: "100%",
  },

  signButtonContent: {
    color: theme.palette.custom.whiteBackground,
    textTransform: "capitalize",
  },
  headingContent: {
    paddingTop: "25px",
    color: theme.palette.custom.labelBUtton,
  },
  back: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "15px",
  },
  logo: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoContent: {
    color: theme.palette.custom.textColor,
    marginTop: "20px",
  },
  middleContent: {
    paddingTop: "10px",
    color: "GrayText",
  },
  googleContent: {
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    color: theme.palette.custom.googleButton,
    textTransform: "capitalize",
  },
  signinContent: {
    marginTop: "20px",
  },
  emailContent: {
    marginBottom: "20px",
  },
  signInColor: {
    color: theme.palette.custom.labelBUtton,
  },
}));

export default useStyles;
