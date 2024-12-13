import React from "react";
import { Box, Typography, CssBaseline, Container, Button, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import ConnectFooter from "./components/ConnectFooter";
import { Colors } from "./theme/colors";
import Header from "./components/Header";
import { homeData, aboutData } from "@/public/data/data";
import ExampleSection from "./components/ExampleSection";

export default function Home() {
  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <CssBaseline />

        <Header />

        <Container
          sx={{
            display: "flex",
            flexDirection:{
              xl:"row",
              lg:"row",
              md:"row",
              sm:"column",
              xs:"column"
            },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4, // No additional gap
            padding: 0, // Remove default padding
            minHeight: "100vh"
          }}
        >

          <Box>
            <Divider sx={{ width: "50%" }} />
            <Typography
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
              zIndex: -1, // Places the image behind the text
              width: {
                xs: '300px',
                sm: '350px',
                md: '400px',
                lg: '550px',
                xl: '600px'
              },
              height: "auto",
            }}
          />

        </Container>



      </Box>

      <ExampleSection/>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          minHeight: "100vh",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            bgcolor: "#FFEBDB",
            borderRadius: 0,
            padding: 5
          }}
        >
          <Box
            component="img"
            src="/images/port_cat/kiki.JPEG" 
            alt="Background Graphic"
            sx={{
              width: {
                xl:"400px",
                lg:"400px",
                md:"400px",
                sm:"350px",
                xs:"300px"
              },
              height: "auto",
              borderRadius: 0,
            }}
          />
          <Box
            sx={{
              width: {
                xl: "50%",
                lg: "50%",
                md: "50%"
              }
            }}
          >
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: 30,
                mb: 3,
                color: Colors.black
              }}
            >
              About Me
            </Typography>
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: 20,
                color: Colors.black
              }}
            >
              {aboutData.description}
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
      </Box>



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
