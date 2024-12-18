import React from "react";
import { Box, CssBaseline } from "@mui/material";
import ConnectFooter from "./components/ConnectFooter";
import { Colors } from "./theme/colors";
import Header from "./components/Header";
import HomePageSection1 from "./components/HomePage/HomePageSection1";
import HomePageSection3 from "./components/HomePage/HomePageSection3";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />
        


      <HomePageSection1/>


      {/* <HomePageSection2/> */}

      <HomePageSection3/>



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
