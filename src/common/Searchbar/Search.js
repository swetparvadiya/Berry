import React from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: "rgb(250 250 250)",
    borderRadius: "10px",
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <FormControl className={classes.search}>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Search Mail"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default Search;
