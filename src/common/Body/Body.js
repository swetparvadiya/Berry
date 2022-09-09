import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/StarTwoTone";
import LabelImportantIcon from "@mui/icons-material/LabelImportantTwoTone";
import EmailIcon from "@mui/icons-material/EmailTwoTone";
import SendIcon from "@mui/icons-material/SendTwoTone";
import MoveToInboxIcon from "@mui/icons-material/MoveToInboxTwoTone";
import DraftsIcon from "@mui/icons-material/DraftsTwoTone";
import CoronavirusIcon from "@mui/icons-material/CoronavirusTwoTone";
import DeleteForeverIcon from "@mui/icons-material/DeleteForeverTwoTone";
import ControlPointIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@material-ui/core";
import useStyles from "./style";

const List1 = [
  {
    id: 0,
    message: "All Mail",
    avatarIcon: <EmailIcon />,
  },
  {
    id: 1,
    message: "Inbox",
    avatarIcon: <MoveToInboxIcon />,
  },
  {
    id: 2,
    message: "Sent",
    avatarIcon: <SendIcon />,
  },
  {
    id: 3,
    message: "Draft",
    avatarIcon: <DraftsIcon />,
  },
  {
    id: 4,
    message: "Spam",
    avatarIcon: <CoronavirusIcon />,
  },
  {
    id: 5,
    message: "Trash",
    avatarIcon: <DeleteForeverIcon />,
  },
];
const List2 = [
  {
    id: 0,
    message: "Starred",
    avatarIcon: <StarIcon />,
  },
  {
    id: 1,
    message: "important",
    avatarIcon: <LabelImportantIcon />,
  },
];

const Body = () => {
  const [open] = useState(true);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header} open={open}>
        <Grid className={classes.bodyContent}>
          <List>
            <Grid>
              <Button
                className={classes.buttonContent}
                color="error"
                variant="contained"
              >
                <ControlPointIcon className={classes.buttonContentColor} />
                <Typography className={classes.buttonContentColor}>
                  &nbsp;&nbsp; compose
                </Typography>
              </Button>
            </Grid>
            <Grid className={classes.boxContent}>
              {List1.map((item, index) => (
                <ListItem button key={item.id} className={classes.headingHover}>
                  <Grid className={classes.headingContent}>
                    <Grid item>{item.avatarIcon}</Grid>
                    <Grid item>
                      <Grid className={classes.typographyContent}>
                        <Typography>{item.message}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </Grid>
          </List>
          <Divider />
          <List disablePadding>
            <Grid className={classes.boxContent2}>
              <Typography className={classes.heading} variant="subtitle1">
                Filter
              </Typography>
              {List2.map((item, index) => (
                <ListItem button key={item.id} className={classes.headingHover}>
                  <Grid className={classes.headingContent}>
                    <Grid item>{item.avatarIcon}</Grid>
                    <Grid item>
                      <Grid className={classes.typographyContent}>
                        {item.message}
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </Grid>
          </List>
        </Grid>
      </Box>
    </>
  );
};

export default Body;
