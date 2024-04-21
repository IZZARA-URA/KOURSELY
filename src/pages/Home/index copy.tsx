
import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"

import NavBar from '../../components/navbar'
import ImageHome from '../../assets/Home_Image.png'

const Home = () => {
    // RESPONSIVE 
    const isNonMobileScreens = useMediaQuery("(max-width: 770px)")

    // THEME
    const theme = useTheme()

  return (
    <Box>
      <NavBar />
      <Box 
        width="100%" 
        sx={{
          height: {
            xs: "45vh",
            sm: "50vh",
            md: "50vh",
            lg: "55vh",
            mobile: "50vh"
          },
          backgroundColor: "yellow"
        }}
      >
        <Box 
          sx={{ 
            position: "absolute", 
            zIndex:10,
          }}>
          <svg height="200" width="200">
            <circle r="145" cx="0" cy="0" fill="#FCD53A" />
          </svg>
        </Box>

        <Box 
          position="relative" 
          zIndex="100"  
          sx={{ 
            height: {
            xs: 400,
            sm: 600,
          },
          }}>

          <Box 
            display="flex" 
            justifyContent="space-around" 
            alignItems="center" 
            position="relative"
            zIndex="100"  
            width="100%"
          >
            <Box width={500} sx={{ paddingTop:"4rem"}}>
              <Box padding={5}>
                <Typography variant="h1" component="h2" fontSize={60} fontWeight="bold" >
                  Expore Live Creative Classes
                </Typography>
                <Typography variant="h5" component="h5" color="#7c7c7c" padding="1rem">
                  Choss from over 2,000+ courses on topics like user interface design, 
                  graphic design, font-end development, and mush more...
                </Typography>
              </Box>

              <Box 
                display="flex" 
                maxWidth={400}
                justifyContent="center"     
                alignItems="flex-start"
                gap={2}
                sx={{
                  position:"relative",
                  zIndex:"100" ,
                  width: {
                    xs: "100%", 
                    sm: "100%", 
                  },
                  margin: {
                    xs: "auto", 
                    sm: "auto", 
                  }
                }}
              >
                <Button 
                  sx={{ 
                    color: "#fff", 
                    backgroundColor: "#141414", 
                    fontWeight: "bold", 
                    padding: "1rem",
                    textDecoration: "none",
                    borderRadius:4,
                    width: {
                      xs: "35%",
                      sm: "100%",
                    },
                }}>
                  Get Started
                </Button>

                <Button
                  sx={{ 
                    color: "#141414", 
                    backgroundColor: "#F6F6F6", 
                    fontWeight: "bold", 
                    padding: "1rem",
                    textDecoration: "none",
                    border: "1px solid #141414",
                    borderRadius:4,
                    width: {
                      xs: "35%",
                      sm: "100%",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>


            {
              !isNonMobileScreens && (
                <Card 
                  sx={{
                    zIndex:100, 
                    background: "transparent",
                    boxShadow: "none",
                    paddingTop: "4rem",
                  }}>
                <CardMedia
                  component="img"
                  src={ImageHome}
                  />
                </Card>
              )
            }
          </Box>

          <Box sx={{
            position:"relative", 
            display:"flex", 
            justifyContent:"flex-end",
            // top: "-10vh",
            zIndex:10,
            top: {
              xs: "-15vh",
              sm: "-10vh",
            }
          }}>
            <svg height="250" width="400">
              <circle r="245" cx="300" cy="300" fill="#1C5CFF" />
            </svg>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex:"100",
          backgroundColor:"red",
          height: {
            xs: "62vh",
            sm: "70vh",
          },
        }}
      >
        
        <Box 
          sx={{ 
            // position:"relative",
            // zIndex:"100" ,
            // backgroundColor: "red",
            width: "100%", 
            height: "100%",
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            top: {
              // xs: "9vh",
              // sm: "5vh",
            }
          }}>

        </Box>
      </Box>
    </Box>
  )
}

export default Home
