import React from "react";

import { Grid, Box, Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <Box maxWidth="1300px" margin="auto" marginTop="8rem">
      <Grid
        item
        xs={12}
        position="relative"
        zIndex="100"
        margin="auto"
        sx={{
          backgroundColor: "pink ",
          height: {
            xs: "185vh",
            sm: "170vh",
            md: "85vh",
          },
          width: "1300px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h2"
            fontWeight="bold"
            display="flex"
            justifyContent="start"
            alignItems="start"
            height="15vh"
            width="100%"
          >
            What our students say about us
          </Typography>
        </Grid>

        <Grid md={12} sm={6} sx={{ backgroundColor: "red"}}>
          Coruosal
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
