import React from "react";

import {
  Grid,
  Button,
  Box,
  TextField,
  Input,
  FormControl,
  Typography,
  useTheme,
} from "@mui/material";

const Footer = () => {
  const textStyle = {
    "&.MuiTextField-root": {
      "& .MuiInputLabel-outlined": {
        color: "white",
      },
      "& .MuiInputBase-inputSizeSmall": {
        color: "white",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "& .MuiFormHelperText-contained": {
        color: "white",
        margin: "1rem",
      },
    },
  };

  return (
    <Grid
      item
      xs={12}
      zIndex="100"
      sx={{
        backgroundColor: "#fff",
        height: "80vh",
      }}
    >
      <Box
        maxWidth="1200px"
        margin="auto"
        marginTop="10rem"
        // sx={{ position: "absolute", top: "50%", left: "50%" }}
      >
        <Box
          sx={{
            backgroundColor: "#150B3D",
            width: "100%",
            height: "45vh",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            position:"relative"
          }}
        >
          <Box
            textAlign="center"
            sx={{ position: "absolute", top: "30%", left: "25%" }}
          >
            <Typography
              variant="h1"
              component="h2"
              fontWeight="bold"
              color="white"
            >
              Get the best sent to your
              <br />
              inbox, every month
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margon: "auto",
                marginTop: "4rem"
              }}
            >
              <TextField
                label="Email"
                sx={textStyle}
                style={{ width: "40vh", marginRight: "4rem" }}
              />
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#1C5CFF",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  padding: "1rem",
                  gab: "1rem",
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
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
