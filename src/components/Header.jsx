import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import HeadsetTwoToneIcon from "@mui/icons-material/HeadsetTwoTone";

const Header = () => {
  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <HeadsetTwoToneIcon />
        <Typography sx={{ ml: 2 }} variant="h6" component="h1">
          Music Share
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
