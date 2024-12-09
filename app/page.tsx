import React from "react";
import { Box, Typography, CssBaseline, Container } from "@mui/material";
import Divider from '@mui/material/Divider';
import MenuDrawer from "./components/MenuDrawer";
import ConnectFooter from "./components/ConnectFooter";
import { Colors } from "./theme/colors";

export default function Home() {
  return (
    <>
      <Box sx={{ position: "relative", height: "100vh", p: 2 }}>
        <CssBaseline />
        
        <Box>
          <Box sx={{ top: 16, left: 16 }}>
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize:{
                  xs:22,
                  sm:24,
                  md:26,
                  lg:28,
                  xl:30
                }
              }}
            >
              Marytez Salas
            </Typography>
          </Box>
          <MenuDrawer />
        </Box>


        <Container
          maxWidth="md"
          sx={{
            position: "relative", // Make this container relative for positioning
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: {
              xs:2,
              sm:4,
              md:6,
              lg:8,
              xl:20
            },
          }}
        >

          <Box>
            <Divider sx={{width:"50%"}}/>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "serif",
                fontSize:{
                  xs:26,
                  sm:28,
                  md:30,
                  lg:32,
                  xl:34
                }
              }}
            >
              Stinky is the name,
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "serif",
                fontSize:{
                  xs:26,
                  sm:28,
                  md:30,
                  lg:32,
                  xl:34
                }
              }}
            >
              art is the passion
            </Typography>
            <Divider sx={{width:"75%",mt:1}}/>
          </Box>
          <Box
            component="img"
            src="/images/home_image.JPG" // Replace with your image path
            alt="Background Graphic"
            sx={{
              opacity: 0.3, // Makes the image blend into the background
              zIndex: -1, // Places the image behind the text
              width: {
                  xs:'250px',
                  sm:'300px',
                  md:'350px',
                  lg:'400px',
                  xl:'450px'
              }, // Adjust size as needed
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
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            height: "50vh",
            mt: {
              xs:0,
              sm:2,
              md:4,
              lg:6,
              xl:0
            },
            mb: {
              xs:0,
              sm:2,
              md:4,
              lg:6,
              xl:8
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily:"serif",
                fontSize:30,
              }}
            >
              MANIFESTO
            </Typography>
            <Divider sx={{maxWidth:"75%"}}/>
          </Box>
          <Box
            sx={{
              maxWidth:"50%"
            }}
          >
            <Typography
              sx={{
                fontFamily:"serif",
                fontSize:20
              }}
            >
              Lorem ipsum odor amet, consectetuer adipiscing elit. 
              Ipsum maecenas himenaeos phasellus nascetur eu dictumst 
              sociosqu mi sollicitudin. Parturient massa ante libero, 
              eleifend conubia convallis. Nec morbi tellus non lorem; 
              fermentum taciti. Egestas purus placerat ornare neque pulvinar.
            </Typography>
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
