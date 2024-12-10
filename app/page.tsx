import React from "react";
import { Box, Typography, CssBaseline, Container, Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import ConnectFooter from "./components/ConnectFooter";
import { Colors } from "./theme/colors";
import Header from "./components/Header";
import { homeData } from "@/public/data/data";

export default function Home() {
  return (
    <>
      <Box sx={{ position: "relative", height: "100vh", p: 2 }}>
        <CssBaseline />

        <Header />

        <Container
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: {
              xs: 10,
              sm: 10,
              md: 6,
              lg: 8,
              xl: 20
            },
          }}
        >

          <Box>
            <Divider sx={{ width: "50%" }} />
            <Typography
              variant="h2"
              sx={{
                fontFamily: "serif",
                fontSize: {
                  xs: 30,
                  sm: 35,
                  md: 40,
                  lg: 45,
                  xl: 50
                }
              }}
            >
              {homeData.headerLine1}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "serif",
                fontSize: {
                  xs: 30,
                  sm: 35,
                  md: 40,
                  lg: 45,
                  xl: 50
                }
              }}
            >
              {homeData.headerLine2}
            </Typography>
            <Divider sx={{ width: "75%", mt: 1 }} />
          </Box>
          <Box
            component="img"
            src="/images/home_image.JPG" // Replace with your image path
            alt="Background Graphic"
            sx={{
              opacity: 0.3, // Makes the image blend into the background
              zIndex: -1, // Places the image behind the text
              width: {
                xs: '250px',
                sm: '300px',
                md: '350px',
                lg: '400px',
                xl: '450px'
              }, 
              height: "auto",
            }}
          />

        </Container>



      </Box>


      <Container
        maxWidth="md"
        sx={{
          position: "relative", // Make this container relative for positioning
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          minHeight: "50vh",
          bgcolor: "#232735",
          mb: 5,
          borderRadius: 10,
          padding:5
        }}
      >
        <Box
          component="img"
          src="/images/about/aboutpicture1.jpg" // Replace with your image path
          alt="Background Graphic"
          sx={{
            width: "400px",
            height: "auto"
          }}
        />
        <Box
          sx={{
            width:{
              xl:"50%",
              lg:"50%",
              md:"50%"
            }
          }}
        >
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: 30,
              mb: 3
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: 20,
            }}
          >
            {homeData.manifesto}
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: Colors.white,
              borderRadius: 10,
              px: 3,
              py: 1,
              mt: 4
            }}
            href="/about"
          >
            <Typography
              sx={{
                color: Colors.black,
                wordSpacing: 5,
                letterSpacing: 1
              }}
            >
              Read More
            </Typography>

          </Button>
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 'auto',
          backgroundColor: Colors.header_color,
          width: '100%',
        }}
      >
        <ConnectFooter />
      </Box>
    </>
  );
}
