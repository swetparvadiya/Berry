import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    display: "flex",
    direction: "row",
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
