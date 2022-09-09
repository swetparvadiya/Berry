import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { Button, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Profile1 from "../../assets/Images/profile1.png";
import StarBorderTwoToneIcon from "@mui/icons-material/StarBorderTwoTone";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import CoronavirusTwoToneIcon from "@mui/icons-material/CoronavirusTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ReplyTwoToneIcon from "@mui/icons-material/ReplyTwoTone";
import ForwardIcon from "@mui/icons-material/Forward";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";

const SingleMail = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.head}>
      <AppBar
        position="static"
        style={{ backgroundColor: theme.palette.custom.buttonBackground }}
        elevation={0}
        className={classes.navbar}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Link to="/home" className={classes.forTextContent}>
                <ArrowBackIosIcon fontSize="3px" />
              </Link>
            </Grid>
            <Grid color="#000000" item>
              <img src={Profile1} alt="profile1" width="35px" />
            </Grid>

            <Grid item>
              <Typography className={classes.headMail}>
                <Typography
                  className={classes.forTextContent}
                  fontWeight="bold"
                  variant="body2"
                >
                  Garrett Williams
                </Typography>
                <Typography
                  fontWeight="light"
                  variant="caption"
                  className={classes.forTextContent}
                >
                  From: gi@company.com
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item display={{ xs: "none", md: "block" }}>
            <Grid color="black" alignItems="center" width="40px">
              <Typography className={classes.forTextContent}>4 sep</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box>
        <Box container className={classes.discriptionContainer}>
          <Box item xs={12}>
            <Typography
              fontSize="22px"
              fontWeight="bold"
              alignContent="center"
              className={classes.forTextContent}
            >
              Wak butowi uvsa doci vojormim mitin dodpat negti azolop citof.
            </Typography>
          </Box>
          <Box container display="flex" direction="row" xs={12}>
            <Grid item>
              <StarBorderTwoToneIcon className={classes.icon2} />
            </Grid>
            <Grid item>
              <LabelImportantTwoToneIcon className={classes.icon2} />
            </Grid>
            <Grid item>
              <CoronavirusTwoToneIcon className={classes.icon2} />
            </Grid>
            <Grid item>
              <MoreHorizTwoToneIcon className={classes.icon3} />
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box marginTop="42px">
        <Typography className={classes.forTextContent}>
          Dear Garrett Williams,
        </Typography>
      </Box>
      <Box marginTop="42px">
        <Typography typography="subtitle1" className={classes.forTextContent}>
          Cogo jic tupat ov logjortiz kal tig zocpabik wocseku denit laleblez
          wup ok faaluho fe zep. Lilufa uhzo bajolvo gobivimer han so dazeus
          fiwoel na gobajabi ri cenerpe. Muljub umole legaji nan iwsoj zok ivu
          miv nontu ekulit wu ralup ijjudo.
        </Typography>
      </Box>
      <Box marginTop="20px">
        <Typography className={classes.forTextContent}>
          Kind Regards,
          <br /> Carolyn Flores
        </Typography>
      </Box>

      <Box
        display="flex"
        marginTop="15px"
        container
        alignItems="center"
        alignContent="center"
        className={classes.forTextContent}
      >
        <Grid>
          <AttachmentIcon style={{ color: "gray" }} />
        </Grid>
        <Grid item marginLeft="5px" fontWeight="500">
          0 Attachments
        </Grid>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          backgroundColor="#260"
          startIcon={<ReplyTwoToneIcon />}
          padding="2"
        >
          Send
        </Button>
        <Button variant="outlined" startIcon={<ForwardIcon />}>
          Forward
        </Button>
      </Stack>
    </Box>
  );
};

export default SingleMail;
