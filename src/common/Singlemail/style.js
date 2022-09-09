import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  head: {
    flexGrow: 1,
    marginTop: "28px",
    marginRight: "13px",
    borderradius: "8px",
    height: "100%",
    paddingBottom: "30px",
    backgroundColor: theme.palette.custom.buttonBackground,
    paddingLeft: "25px",
  },
  forTextContent: {
    color: theme.palette.text.primary,
  },

  headerContent: {
    color: theme.palette.custom.blackColor,
  },
  headMail: {
    flexGrow: 1,
    color: theme.palette.custom.blackColor,
    fontSize: "0.5px",
  },
  navbar: {
    borderradius: "9px",
    marginTop: "22px",
    marginLeft: "-10px",
    paddingTop: "17px",
    paddingRight: "15px",
  },
  discriptionContainer: {
    marginTop: "25px",
    marginLeft: "2px",
    justifyContent: "space-between",
    display: "flex",
    direction: "row",
    alignItems: "center",
  },
  icon2: { marginRight: "20px", color: theme.palette.text.primary },
  icon3: { marginRight: "68px", color: theme.palette.text.primary },
}));

export default useStyles;
