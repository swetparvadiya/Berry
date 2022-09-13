import React from "react";
import { Box, Grid } from "@mui/material";
import "./App.css";
import Login from "./module/Login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./module/Home/Home";
import { ThemeProvider } from "@mui/material/styles";

import useThemeSelector from "./hooks/useThemeSelector";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    height: "850px",
    paddingTop: "50px",
  },
}));

function App() {
  const [theme, toggleTheme] = useThemeSelector();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Routes style={{ backgroundColor: "secondary" }}>
        <Route
          path="/"
          element={
            <Box backgroundColor="primary.main" className={classes.mainContent}>
              <Login />
            </Box>
          }
        />
        <Route
          path="/*"
          element={
            <Box backgroundColor="secondary.main">
              <Home toggleTheme={toggleTheme} />
            </Box>
          }
        />
        <Route exact path="/hello" element={<Box>hello</Box>} />
      </Routes>
    </ThemeProvider>

    // <>hy</>
  );
}

export default App;
