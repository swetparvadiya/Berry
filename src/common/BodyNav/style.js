import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  head: {
    flexGrow: 1,
    marginLeft: "8px",
    marginRight: "13px",
  },
  headMail: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  navbar: {
    borderradius: "9px",
    marginTop: "22px",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.custom.homeColor,
  },
}));

export default useStyles;
