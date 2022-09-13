import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    display: "flex",
    direction: "row",
    marginTop: "4px",
    paddingRight: "15px",
  },
  bodyContent: {
    marginRight: "29px",
  },
  mailContent: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
}));

export default useStyles;
