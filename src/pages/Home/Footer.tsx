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
        height: {
          xs: "85vh",
          sm: "85vh",
          md: "85vh",
        },
      }}
    >
      <Box maxWidth="1200px" margin="auto" marginTop="10rem">
        <Box
          sx={{
            backgroundColor: "#150B3D",
            width: "100%",
            height: "45vh",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box textAlign="center">
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
                marginTop: "2rem",
              }}
            >
              <TextField
                label="Email"
                sx={textStyle}
                style={{ width: "30vh", marginRight: "1rem" }}
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
                    xs: "80px",
                    sm: "150px",
                    md: "150px",
                  },
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
