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

import Design from "../../assets/Design.png";
import Development from "../../assets/Development.png";
import Marketing from "../../assets/Marketing.png";
import PersonalDevelopment from "../../assets/PersonalDevelopment.png";

import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PeopleIcon from "@mui/icons-material/People";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

const CoursesCategories = () => {
  return (
    <Grid
      item
      xs={12}
      position="relative"
      zIndex="100"
      sx={{
        // backgroundColor: "red",
        height: {
          xs: "100vh",
          sm: "100vh",
          md: "55vh",
        },
      }}
    >
      <Grid item xs={12} width="100wh">
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
            Courses categories
          </Typography>
          <Typography
            variant="h6"
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="0 3rem 0 3rem"
          >
            Provide most popular courses that your want to join and lets start
            the course for the most simply way in here
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: { md: "flex" },
            justifyContent: "center",
            margin: "auto",
            // marginTop: "4rem",
            
          }}
          height="20vh"
          width="90vh"
          margin="auto"
        >
          <Grid item lg={6} display="flex">
            <Grid item lg={6} xs={12}>
              <Box
                // height="25vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: {
                    xs: "35vh",
                    md: "35vh",
                  },
                }}
              >
                <Box margin="1rem">
                  <Card
                    sx={{
                      zIndex: 100,
                      background: "transparent",
                      boxShadow: "none",
                      paddingTop: "4rem",
                      marginBottom: "1rem",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia component="img" src={Design} />
                  </Card>
                  <Typography variant="h4">Design</Typography>
                  <Typography variant="caption">Course: 18</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={6} xs={12}>
              <Box
                height="25vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: {
                    xs: "35vh",
                    md: "35vh",
                  },
                }}
              >
                <Box margin="1rem">
                  <Card
                    sx={{
                      zIndex: 100,
                      background: "transparent",
                      boxShadow: "none",
                      paddingTop: "4rem",
                      marginBottom: "1rem",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia component="img" src={Development} />
                  </Card>
                  <Typography variant="h4">Development</Typography>
                  <Typography variant="caption">Course: 18</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid item lg={6} display="flex">
            <Grid item lg={6} xs={12}>
              <Box
                height="35vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: {
                    xs: "35vh",
                    md: "35vh",
                  },
                }}
              >
                <Box margin="1rem">
                  <Card
                    sx={{
                      zIndex: 100,
                      background: "transparent",
                      boxShadow: "none",
                      paddingTop: "4rem",
                      marginBottom: "1rem",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia component="img" src={Marketing} />
                  </Card>
                  <Typography variant="h4">Marketing</Typography>
                  <Typography variant="caption">Course: 18</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={6} xs={12}>
              <Box
                height="25vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: {
                    xs: "35vh",
                    md: "35vh",
                  },
                }}
              >
                <Box margin="1rem">
                  <Card
                    sx={{
                      zIndex: 100,
                      background: "transparent",
                      boxShadow: "none",
                      paddingTop: "4rem",
                      marginBottom: "1rem",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia component="img" src={PersonalDevelopment} />
                  </Card>
                  <Typography  sx={{ fontSize: {xs: "16px",md:"20px"}}}>Personal Development</Typography>
                  <Typography variant="caption">Course: 18</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoursesCategories;
