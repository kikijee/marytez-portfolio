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
          maxWidth="lg"
          sx={{
            position: "relative", // Make this container relative for positioning
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: 20,
          }}
        >

          <Box>
            <Divider sx={{width:"50%"}}/>
            <Typography
              variant="h2"
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
              Stinky is the name,
            </Typography>
            <Typography
              variant="h2"
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
              width: "500px", // Adjust size as needed
              height: "auto",
            }}
          />

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
