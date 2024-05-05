import React from "react";

import {
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Image from "../../assets/image.png";
import Avatar from "../../assets/Avatar.png";

const FeaturedCourses = () => {
  return (
    <Grid
      item
      xs={12}
      position="relative"
      zIndex="100"
      sx={{
        // backgroundColor: "pink  ",
        height: {
          xs: "185vh",
          sm: "170vh",
          md: "85vh",
        },
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h1"
          component="h2"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="15vh"
          width="100%"
        >
          Featured Courses
        </Typography>
        <Typography
          variant="h6"
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="0 3rem 0 3rem"
        >
          Provide most popular courses that your want to join and lets start the
          course for the most simply way in here
        </Typography>

        <Grid
          item
          display="flex"
          gap="1rem"
          sx={{
            display: { md: "flex" },
            justifyContent: "space-between",
            marginTop: "4rem",
          }}
          maxWidth="1300px"
          margin="auto"
        >
          {/* CARD 1 */}
          <Grid item lg={4} md={8} sm={8} xs={10} margin="auto">
            <Box margin="1rem">
              <Card
                sx={{
                  zIndex: 100,
                  background: "transparent",
                  boxShadow: "none",
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  height: {
                    // xs:""
                    md: "40vh",
                    lg: "42vh",
                  },
                  width: {
                    // md:"60wh"
                  },
                }}
              >
                <CardMedia component="img" src={Image} />

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  margin="2rem 2rem 0.5rem 2rem"
                >
                  The Complete Copywriting
                </Typography>
                <Typography
                  variant="caption"
                  margin="2rem 2rem 0.5rem 2rem"
                  color="blue"
                >
                  17 Lesson
                </Typography>
                <Typography
                  variant="h6"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  margin="1rem 2rem 0 2rem"
                >
                  Provide most popular courses that your want to join and lets
                  start the course for the most simply way in here
                </Typography>
                <Box sx={{ padding: "1rem 2rem" }} display="flex">
                  <img src={Avatar} />
                  <Typography
                    justifyContent="start"
                    textAlign="start"
                    margin="0.5rem 1rem 0 0.5rem"
                  >
                    By Albert Flores
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>

          {/* CARD 2 */}
          <Grid item lg={4} md={8} sm={8} xs={10} margin="auto">
            <Box margin="1rem">
              <Card
                sx={{
                  zIndex: 100,
                  background: "transparent",
                  boxShadow: "none",
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  height: {
                    // xs:""
                    md: "40vh",
                    lg: "42vh",
                  },
                  width: {
                    // md:"60wh"
                  },
                }}
              >
                <CardMedia component="img" src={Image} />

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  margin="2rem 2rem 0.5rem 2rem"
                >
                  The Complete Copywriting
                </Typography>
                <Typography
                  variant="caption"
                  margin="2rem 2rem 0.5rem 2rem"
                  color="blue"
                >
                  17 Lesson
                </Typography>
                <Typography
                  variant="h6"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  margin="1rem 2rem 0 2rem"
                >
                  Provide most popular courses that your want to join and lets
                  start the course for the most simply way in here
                </Typography>
                <Box sx={{ padding: "1rem 2rem" }} display="flex">
                  <img src={Avatar} />
                  <Typography
                    justifyContent="start"
                    textAlign="start"
                    margin="0.5rem 1rem 0 0.5rem"
                  >
                    By Albert Flores
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>

          {/* CARD 3 */}
          <Grid item lg={4} md={8} sm={8} xs={10} margin="auto">
            <Box margin="1rem">
              <Card
                sx={{
                  zIndex: 100,
                  background: "transparent",
                  boxShadow: "none",
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  height: {
                    // xs:""
                    md: "40vh",
                    lg: "42vh",
                  },
                  width: {
                    // md:"60wh"
                  },
                }}
              >
                <CardMedia component="img" src={Image} />

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  margin="2rem 2rem 0.5rem 2rem"
                >
                  The Complete Copywriting
                </Typography>
                <Typography
                  variant="caption"
                  margin="2rem 2rem 0.5rem 2rem"
                  color="blue"
                >
                  17 Lesson
                </Typography>
                <Typography
                  variant="h6"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  margin="1rem 2rem 0 2rem"
                >
                  Provide most popular courses that your want to join and lets
                  start the course for the most simply way in here
                </Typography>
                <Box sx={{ padding: "1rem 2rem" }} display="flex">
                  <img src={Avatar} />
                  <Typography
                    justifyContent="start"
                    textAlign="start"
                    margin="0.5rem 1rem 0 0.5rem"
                  >
                    By Albert Flores
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-around"
          marginTop="4rem"
        >
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#141414",
              fontWeight: "bold",
              padding: "1rem",
              margin: "auto",
              borderRadius: 4,
              textDecoration: "none",
              textTransform: "none",
              width: {
                xs: "150px",
                sm: "150px",
                md: "150px",
              },
              // maxWidth:"700px"
            }}
          >
            View All Coures
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeaturedCourses;
