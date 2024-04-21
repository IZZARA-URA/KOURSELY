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

const WhyChooseUs = () => {
  return (
    <Grid
      item
      xs={12}
      position="relative"
      zIndex="100"
      sx={{
        backgroundColor: "#E0E0E0",
        height: {
          xs: "100vh",
          sm: "40vh",
          md: "45vh",
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
            // position="relative"
            // zIndex="100"
          >
            Why Choose Us
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: { sm: "flex" }, justifyContent: "space-between" }}
          height="20vh"
          width="90vh"
          margin="auto"
        >
          <Grid item md={4} sm={12}>
            <Box
              height="25vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box margin="2rem">
                <Box>
                  <TipsAndUpdatesIcon
                    fontSize="large"
                    sx={{ marginBottom: "2rem" }}
                  />
                </Box>
                <Typography variant="h4" marginBottom="1.5rem">
                  Learn from anywhere
                </Typography>
                <Typography>
                  Ecolabs’s online learning platform empowers you to learn new
                  skills and accomplish real growth.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box
              height="25vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box margin="2rem">
                <Box>
                  <PeopleIcon fontSize="large" sx={{ marginBottom: "2rem" }} />
                </Box>
                <Typography variant="h4" marginBottom="1.5rem">
                  Courses taught by real experts
                </Typography>
                <Typography>
                  Our teachers are experts excited to share their wisdom,
                  experience, & trusted tools with you.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box
              height="25vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box margin="2rem">
                <Box>
                  <CastForEducationIcon
                    fontSize="large"
                    sx={{ marginBottom: "2rem" }}
                  />
                </Box>
                <Typography variant="h4" marginBottom="1.5rem">
                  Learn in-demand skills
                </Typography>
                <Typography>
                  Explore demanded skills, deepen existing passions, and get
                  lost in creativity.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyChooseUs;
