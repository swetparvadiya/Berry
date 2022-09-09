import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e3f2fd",
    },
    secondary: {
      main: "#ffffff",
    },
    custom: {
      main: "rgb(237 231 246)",
      mainBackground: "rgb(237 231 246)",
      whiteBackground: "#ffffff",
      googleButton: "#000000",
      hoverColor: "rgb(94, 53, 177)",
      translateButton: "rgb(227 242 253)",
      translateButtonHover: "rgb(30, 136, 229)",
      composeButton: "rgb(33 150 243)",
      starButton: "rgb(255 193 7)",
      starButtonBackground: "rgb(251 233 177)",
      labelBUtton: "rgb(103 58 183)",
      labelBUttonBackground: "rgb(206 192 230)",
      buttonBackground: "rgb(250 250 250)",
      blackColor: "#000000",
      redColor: "#ff0000",
      headerHover: "rgb(71 29 157)",
      homeColor: "rgb(94, 53, 177)",
      menuCOlor: "rgb(104 111 116)",
      BodyColor: "rgb(227, 242, 253)",
      hoverContent: "rgb(227, 242, 253)",
      bodyBack: "#e3f2fd",
    },
    text: {
      primary: "rgb(50 50 50)",
    },
    error: {
      main: "rgb(33 150 243)",
    },
    info: {
      main: "rgb(103 58 183)",
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(26 34 63)",
    },
    secondary: {
      main: "rgb(33 41 70)",
    },
    custom: {
      main: "#1b2531",
      mainBackground: "#1b2531",
      whiteBackground: "rgb(33 41 70)",
      googleButton: "rgb(62 68 93)",
      hoverColor: "rgb(94, 53, 177)",
      translateButton: "#1b2531",
      translateButtonHover: "rgb(30, 136, 229)",
      composeButton: "#1b2531",
      starButton: "rgb(255 193 7)",
      starButtonBackground: "rgb(251 233 177)",
      labelBUtton: "rgb(103 58 183)",
      labelBUttonBackground: "rgb(206 192 230)",
      buttonBackground: "#1b2531",
      blackColor: "#1b2531",
      redColor: "#ff0000",
      headerHover: "rgb(71 29 157)",
      homeColor: "rgb(94, 53, 177)",
      menuCOlor: "rgb(237 231 246)",
      hoverContent: "rgb(17 25 54)",
      bodyBack: "rgb(26 34 63)",
    },
    text: {
      primary: "rgb(189 200 240)",
    },
    error: {
      main: "rgb(33 150 243)",
    },
    info: {
      main: "rgb(103 58 183)",
    },
  },
});
