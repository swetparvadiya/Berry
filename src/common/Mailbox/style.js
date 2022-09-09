import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "40px",
    marginLeft: "-20px",
  },
  head: {
    flexGrow: 1,
    overflowX: "auto",
  },
  mainTableContent: {
    marginTop: "20px",
    borderradius: "10px",
  },
  tableContainerContent: {
    backgroundColor: theme.palette.custom.buttonBackground,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  rowContent: {
    textDecoration: "none",
  },
  checkboxContent: {
    maxWidth: "20px",
  },
  starContent: {
    maxWidth: "5px",
  },
  labelContent: {
    maxWidth: "15px",
  },

  nameContent: {
    minWidth: "100px",
    whiteSpace: "nowrap",
  },
  classificationContent: {
    minWidth: "100px",
    maxWidth: "900px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  timeContent: {
    marginRight: "10px",
    whiteSpace: "nowrap",
  },
  hoverContent: {
    height: "100%",
    backgroundColor: "white",
  },
  appBarContent: {
    display: "flex",
    direction: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "black",
  },
  paginationContent: {
    color: theme.palette.text.primary,
  },
  menuContainer: {
    fontSize: 23,
    color: theme.palette.custom.menuCOlor,
  },
  searchContainer: {
    color: "black",
    direction: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
  },
  headerContent: {
    alignContent: "center",
    backgroundColor: theme.palette.custom.whiteBackground,
    borderradius: "8px",
    width: "100%",
    height: "50px",
  },
}));

export default useStyles;
