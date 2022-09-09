import { useState } from "react";
import { createTheme } from "@material-ui/core/styles";

const MailboxContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const [dataPage, setDataPage] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = createTheme({});
  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleClose(e);
      },
    },
  };

  return {
    handleClose,
    handleChangeRowsPerPage,
    handleOpen,
    MailboxContainer,
    handleChangePage,
    dataPage,
    setPage,
    rowsPerPage,
    page,
    anchorEl,
    open,
    setDataPage,
  };
};

export default MailboxContainer;
