import React from "react";

import { Grid, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      item
      xs={12}
      position="relative"
      zIndex="100"
      sx={{
        backgroundColor: "blue",
        height: "80vh",
      }}
    >
      Footer
    </Grid>
  );
};

export default Footer;
