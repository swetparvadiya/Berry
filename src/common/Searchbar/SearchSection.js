import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  ButtonBase,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { IconAdjustmentsHorizontal, IconSearch } from "@tabler/icons";
import { shouldForwardProp } from "@mui/system";

const OutlineInputStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 482,
  paddingLeft: 16,
  paddingRight: 16,
  borderradius: "10px",
  backgroundColor: "rgb(250 250 250)",
  "& input": {
    background: "transparent !important",
    paddingLeft: "4px !important",
  },
  [theme.breakpoints.down("lg")]: {
    width: 250,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 4,
    background: "gray",
  },
}));

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(
  ({ theme }) => ({
    background: "rgb(237 231 246)",
    color: "rgb(94, 53, 177)",
    "&:hover": {
      background: "rgb(94, 53, 177)",
      color: "#ffffff",
    },
  })
);

const SearchSection = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <OutlineInputStyle
          id="input-search-header"
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <IconSearch
                stroke={1.5}
                size="1rem"
                color={theme.palette.grey[500]}
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <ButtonBase>
                <HeaderAvatarStyle
                  variant="rounded"
                  sx={{ borderradius: "10px" }}
                >
                  <IconAdjustmentsHorizontal stroke={1.5} size="1.4rem" />
                </HeaderAvatarStyle>
              </ButtonBase>
            </InputAdornment>
          }
          aria-describedby="search-helper-text"
          inputProps={{ "aria-label": "weight" }}
        />
      </Box>
    </>
  );
};

export default SearchSection;
