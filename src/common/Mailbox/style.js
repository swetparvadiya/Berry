import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "40px",
    marginLeft: "-20px",
  },
  mainContent: {
    marginLeft: "10px",
  },
  head: {
    flexGrow: 1,
    overflowX: "auto",
  },
  mainTableContent: {
    marginTop: "20px",
    borderRadius: "10px",
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
    marginTop: "-20px",
    maxWidth: "15px",
  },
  starContent: {
    maxWidth: "2px",
  },
  labelContent: {
    maxWidth: "5px",
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
    borderRadius: "8px",
    width: "100%",
    height: "50px",
  },
}));

export default useStyles;
