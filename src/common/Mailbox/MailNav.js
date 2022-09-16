import React, { useEffect, useState } from "react";

import HeightIcon from "@mui/icons-material/Height";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Search from "../Searchbar/Search";
import MenuIcon from "@mui/icons-material/Menu";

import Toolbar from "@mui/material/Toolbar";

import AppBar from "@mui/material/AppBar";
import { Box, Grid, TableBody, TableCell } from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import LabelTwoToneIcon from "@mui/icons-material/LabelTwoTone";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TableContainer from "@material-ui/core/TableContainer";
import "../../App.css";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

import Profile1 from "../../assets/Images/profile1.png";
import Profile2 from "../../assets/Images/profile2.png";
import Profile3 from "../../assets/Images/profie3.png";

import {
  TableFooter,
  TablePagination,
  TableRow,
  Table,
} from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

import MailboxContainer from "./MailboxContainer";

import { Link } from "react-router-dom";
import BoxHover from "./BoxHover";
import useStyles from "./style";
import useIsMobile from "../../hooks/useIsMobile";

function createData(
  id,
  checkbox,
  start,
  label,
  profile,
  name,
  classification,
  time
) {
  return { id, checkbox, start, label, profile, name, classification, time };
}

const rows = [
  createData(
    "1",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelOutlinedIcon />,
    <img src={Profile1} width="50px" alt="profile1" />,
    "Josephine Diaz",
    "Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "29 Aug 22 15:16 PM"
  ),
  createData(
    "2",
    <Checkbox />,
    <StarTwoToneIcon style={{ color: "rgb(255 193 7)" }} />,
    <LabelTwoToneIcon style={{ color: "rgb(103 58 183)" }} />,
    <img src={Profile2} width="50px" alt="profile1" />,

    "Ian Powers",
    "Ulhojo dahiz izizokhu wibdaja joga sotecam tideme jawupon.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "22 Aug 22 05:17 PM"
  ),
  createData(
    "3",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelOutlinedIcon />,
    <img src={Profile3} width="50px" alt="profile1" />,

    "Fannie Walters",
    "Hi bit icuravpun vomfaske ubo.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "18 Aug 22 09:09 AM"
  ),
  createData(
    "4",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelTwoToneIcon style={{ color: "rgb(103 58 183)" }} />,
    <img src={Profile2} width="50px" alt="profile1" />,

    "Ian Powers",

    "Ramu wo duv jeamwe am caz wed hi rob hi hanara ne.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "09 Aug 22 15:17 AM"
  ),
  createData(
    "5",
    <Checkbox />,
    <StarTwoToneIcon style={{ color: "rgb(255 193 7)" }} />,
    <LabelOutlinedIcon />,
    <img src={Profile3} width="50px" alt="profile1" />,

    "Jeanette Gross",

    "Vosefpac wos kamfesen hozif ci kume dazjoz darkeh. Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "01 Aug 22 15:17 PM"
  ),
  createData(
    "6",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelTwoToneIcon style={{ color: "rgb(103 58 183)" }} />,
    <img src={Profile2} width="50px" alt="profile1" />,

    "Josephine Diaz",

    "Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "30 Sep 22 02:02 PM"
  ),
  createData(
    "7",
    <Checkbox />,
    <StarTwoToneIcon style={{ color: "rgb(255 193 7)" }} />,
    <LabelOutlinedIcon />,
    <img src={Profile3} width="50px" alt="profile1" />,

    "Ian Powers",
    "Ulhojo dahiz izizokhu wibdaja joga sotecam tideme jawupon.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "20 Sep 22 15:17 AM"
  ),
  createData(
    "8",
    <Checkbox />,
    <StarTwoToneIcon style={{ color: "rgb(255 193 7)" }} />,
    <LabelTwoToneIcon style={{ color: "rgb(103 58 183)" }} />,
    <img src={Profile2} width="50px" alt="profile1" />,

    "Josephine Diaz",
    "Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "19 Sep 22 00:00 PM"
  ),
  createData(
    "9",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelOutlinedIcon />,
    <img src={Profile3} width="50px" alt="profile1" />,

    "Ian Powers",
    "Ulhojo dahiz izizokhu wibdaja joga sotecam tideme jawupon.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "28 Aug 22 22:23 AM"
  ),
  createData(
    "10",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelOutlinedIcon />,
    <img src={Profile1} width="50px" alt="profile1" />,

    "Fannie Walters",
    "Hi bit icuravpun vomfaske ubo.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "27 Aug 22 15:17 PM"
  ),
  createData(
    "11",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelOutlinedIcon />,
    <img src={Profile1} width="50px" alt="profile1" />,

    "Ian Powers",

    "Ramu wo duv jeamwe am caz wed hi rob hi hanara ne.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "26 Aug 22 15:17 AM"
  ),
  createData(
    "12",
    <Checkbox />,
    <StarTwoToneIcon style={{ color: "rgb(255 193 7)" }} />,
    <LabelOutlinedIcon />,
    <img src={Profile1} width="50px" alt="profile1" />,

    "Jeanette Gross",

    "Vosefpac wos kamfesen hozif ci kume dazjoz darkeh. Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "25 Aug 22 15:17 PM"
  ),
  createData(
    "13",
    <Checkbox />,
    <StarBorderIcon />,
    <LabelOutlinedIcon />,
    <img src={Profile1} width="50px" alt="profile1" />,

    "Josephine Diaz",

    "Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "24 Aug 22 15:17 AM"
  ),
  createData(
    "14",
    <Checkbox />,
    <StarTwoToneIcon style={{ color: "rgb(255 193 7)" }} />,
    <LabelOutlinedIcon />,
    <img src={Profile1} width="50px" alt="profile1" />,

    "Ian Powers",
    "Ulhojo dahiz izizokhu wibdaja joga sotecam tideme jawupon.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.Jo anu ohowuj hat kumodlaj cednow jiasi baltiksu pas lavlu.",
    "28 Aug 22 15:17 PM"
  ),
];

const MailNav = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const [showActionId, setShowActionId] = useState(-1);
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    setPage,
    dataPage,
    rowsPerPage,
    page,
  } = MailboxContainer();

  const classes = useStyles();

  useEffect(() => {
    setPage(0);
  }, [dataPage]);

  return (
    <Grid className={isMobile ? classes.mainContent : null}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: theme.palette.custom.bodyBack }}
        className={classes.header}
      >
        <Toolbar>
          <Grid className={classes.appBarContent} container spacing={3}>
            <Grid item>
              <MenuIcon className={classes.menuContainer} />
            </Grid>
            <Grid item>
              <HeightIcon className={classes.menuContainer} />
            </Grid>

            <Grid item>
              <MoreHorizIcon className={classes.menuContainer} />
            </Grid>
          </Grid>
          <Grid className={classes.searchContainer} container>
            <Grid item display={{ xs: "none", xl: "block" }}>
              <Search />
            </Grid>
            <Grid item marginRight="-30px">
              <TableFooter>
                <TableRow>
                  <TablePagination
                    style={{ color: theme.palette.text.primary }}
                    className={classes.paginationContent}
                    rowsPerPageOptions={[]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid>
        <TableContainer>
          <Table className={classes.mainTableContent}>
            <TableBody className={classes.tableContainerContent}>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      key={row.id}
                      component={Link}
                      to="/home/email"
                      className={classes.rowContent}
                      onMouseEnter={() => {
                        setShowActionId(row.id);
                      }}
                      onMouseLeave={() => setShowActionId(-1)}
                    >
                      <TableCell className={classes.checkboxContent}>
                        {row.checkbox}
                      </TableCell>
                      <TableCell className={classes.starContent}>
                        {row.start}
                      </TableCell>
                      <TableCell className={classes.labelContent}>
                        {row.label}
                      </TableCell>
                      <TableCell width="1px" className={classes.profileContent}>
                        {row.profile}
                      </TableCell>
                      <TableCell className={classes.nameContent}>
                        {row.name}
                      </TableCell>
                      <TableCell className={classes.classificationContent}>
                        {row.classification}
                      </TableCell>
                      <TableCell>
                        {row.id === showActionId ? (
                          <Box marginLeft="-40px">
                            <BoxHover />
                          </Box>
                        ) : (
                          <Box
                            className={classes.timeContent}
                            alignItems="right"
                          >
                            {row.time}
                          </Box>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default MailNav;
