import React from "react";
import LoginContainer from "./LoginContainer";
import Logo from "../../assets/Images/Logo.svg";
import "../../assets/css/Login.css";
import Google from "../../assets/Images/social-google.svg";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import useStyles from "./style";

const Login = () => {
  const classes = useStyles();
  const {
    handleMouseDownPassword,
    handleChange,
    handleClickShowPassword,
    handleSubmit,
    formValues,
    showPassword,
    formErrors,
  } = LoginContainer();

  return (
    <Grid>
      <Grid>
        <Grid>
          <Container className={classes.back} component="main" maxWidth="xs">
            <Box>
              <CssBaseline />
              <Box className={classes.logo}>
                <Grid className={classes.logoContent}>
                  <img src={Logo} alt="logo" />
                </Grid>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  className={classes.headingContent}
                >
                  Hi, Welcome Back
                </Typography>
                <Typography
                  component="h1"
                  variant="subtitle1"
                  fontWeight="light"
                  className={classes.middleContent}
                >
                  Enter your credentials to continue
                </Typography>
                <Grid className={classes.buttonGoogle}>
                  <Button
                    fullWidth
                    size="large"
                    className={classes.buttonContent}
                  >
                    <Grid
                      container
                      className={classes.googleContent}
                      spacing={2}
                    >
                      <Grid item marginTop="3px">
                        <img src={Google} alt="google" />
                      </Grid>
                      <Grid item marginTop="3px">
                        <Typography color="text.primary">
                          Sign in with Google
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <Button
                      variant="outlined"
                      sx={{
                        margin: "20px",
                        paddingY: "5px",
                        paddingX: "70px",
                      }}
                      disableRipple
                      borderradius="2px"
                      disabled
                    >
                      OR
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box className={classes.emailContent}>
                    <Typography variant="subtitle1">
                      Sign in with Email address
                    </Typography>
                  </Box>
                </Grid>
                <Box noValidate marginTop="2px">
                  <Grid>
                    <form>
                      <FormControl fullWidth sx={{ mb: "25px" }}>
                        <InputLabel name="email" type="text">
                          Email Address / Username
                        </InputLabel>
                        <OutlinedInput
                          name="email"
                          id="outlined-adornment-email-login"
                          value={formValues.email}
                          required
                          onChange={handleChange}
                          label="Email Address / Username"
                        />
                        <Typography color="red">{formErrors.email}</Typography>
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel
                          name="password"
                          type="password"
                          htmlFor="outlined-adornment-password-login"
                        >
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password-login"
                          name="password"
                          value={formValues.password}
                          onChange={handleChange}
                          required
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                size="large"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                        <Typography marginBottom="2px" color="red">
                          {formErrors.password}
                        </Typography>
                      </FormControl>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <FormControlLabel
                          control={<Checkbox name="checked" />}
                          label="Remember me"
                        />
                        <Typography
                          variant="subtitle1"
                          className={classes.signInColor}
                          textDecoration="none"
                          fontWeight="500"
                        >
                          Forgot Password?
                        </Typography>
                      </Stack>
                      <Box className={classes.signinContent}>
                        <Grid>
                          <Button
                            className={classes.signInColor}
                            disableElevation
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            onClick={handleSubmit}
                            color="info"
                          >
                            <Typography className={classes.signButtonContent}>
                              Sign in
                            </Typography>
                          </Button>
                        </Grid>
                      </Box>
                    </form>
                  </Grid>

                  <Grid marginTop="25px">
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      xs={12}
                    >
                      <Typography variant="subtitle1" marginY="15px">
                        Don't have an account?
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
