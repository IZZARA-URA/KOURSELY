import React from "react";

import { Grid, Box, Typography, Button, Card, CardMedia } from "@mui/material";

import Image from "../../assets/EndRole.png";

const EndRole = () => {
  return (
    <Grid
      item
      xs={12}
      position="relative"
      zIndex="100"
      sx={{
        backgroundColor: "#FFEBEF",
        height: {
          xs: "65vh",
          sm: "65vh",
          md: "45vh",
        },
        width: "100%",
      }}
    >
      <Box maxWidth="1300px" margin="auto" marginTop="4rem">
        <Grid
          // display="flex"
          justifyContent="space-around"
          sx={{
            // backgroundColor: "red",
            display: {
              sm: "flex",
              md: "flex",
            },
          }}
        >
          <Box>
            <Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "inherit",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-end",
                    zIndex: 10,
                    right: "-50px",
                    bottom: "-50px",
                  }}
                >
                  <svg height="100" width="100">
                    <circle r="50" cx="50" cy="50" fill="#FCD53A" />
                  </svg>
                </Box>

                <Card
                  sx={{
                    position: "relative",
                    background: "transparent",
                    boxShadow: "none",
                    zIndex: 100,
                  }}
                >
                  <CardMedia component="img" src={Image} />
                </Card>

                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "start",
                    zIndex: 10,
                    right: "75px",
                    bottom: "75px",
                  }}
                >
                  <svg height="150" width="150">
                    <circle r="75" cx="75" cy="75" fill="#1C5CFF" />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "4rem" }}>
            <Typography
              variant="h1"
              component="h2"
              fontWeight="bold"
              margin="2rem"
              position="relative"
              zIndex="100"
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
                textTransform: "none",
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
