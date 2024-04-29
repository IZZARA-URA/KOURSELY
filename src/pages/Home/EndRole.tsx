import React from "react";

import { Grid, Box, Typography, Button, Card, CardMedia } from "@mui/material";

import ImageHome from "../../assets/Home_Image.png";

const EndRole = () => {
  return (
    <Grid
      item
      xs={12}
      position="relative"
      zIndex="100"
      sx={{
        backgroundColor: "#FFEBEF",
        height: "60vh",
        width: "100%",
      }}
    >
      <Box maxWidth="1300px" margin="auto" marginTop="4rem">
        <Grid display="flex" justifyContent="space-around">
          <Box>
            {" "}
            <Card
              sx={{
                zIndex: 100,
                background: "transparent",
                boxShadow: "none",
                // paddingTop: "4rem",
              }}
            >
              <CardMedia component="img" src={ImageHome} />
            </Card>
          </Box>
          <Box>
            <Typography
              variant="h1"
              component="h2"
              fontWeight="bold"
              margin="2rem"
            >
              Talented and Highly
              <br />
              Qualified Tutors
            </Typography>
            <Typography variant="h6" margin="2rem 4rem 4rem 2rem">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text{" "}
              <br />
              ever since the 1500s, when an unknown printer took a galley <br />
            </Typography>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#141414",
                fontWeight: "bold",
                padding: "1rem",
                marginLeft: "2rem",
                textDecoration: "none",
                borderRadius: 4,
                width: {
                  xs: "120px",
                },
                // maxWidth:"700px"
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default EndRole;
