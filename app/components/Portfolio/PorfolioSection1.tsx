'use client';

import { motion } from "framer-motion";
import { Box, CssBaseline, Container, Divider, Typography } from "@mui/material";
import Header from "../Header"; // Assuming Header is a separate component
import { Colors } from "../../theme/colors"; // Assuming Colors is defined in your theme

const PortfolioSection1 = () => {
  return (

    <Box
      sx={{
        position: "relative",
        height: "100vh",
        bgcolor: Colors.background,
        overflow: "hidden", // Ensure content doesn't overflow
      }}
    >
      {/* Background Layer */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }} // Start fully transparent
        animate={{ opacity: 0.3 }} // Fade in
        transition={{ duration: 2 }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/images/port_cat/BeFunky-collage.jpg')`,
          backgroundSize: "auto 75%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          zIndex: 0, // Place it behind the content
          
        }}
      />

      {/* Content Layer */}
      <CssBaseline />
      <Header />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1, // Ensure it appears above the background
          position: "relative", // Required for zIndex to work
        }}
      >
        {/* Animated Content */}
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {/* Divider with Animation */}
          <motion.div
            initial={{ opacity: 0, width: 0 }} // Start with zero opacity and width
            animate={{ opacity: 1, width: "100%" }} // Animate to full width and opacity
            transition={{ duration: 2, delay: 0 }} // Delay for a staggered effect
          >
            <Divider sx={{ mb: 2, border: 1 }} />
          </motion.div>

          {/* Typography with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Start slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to aligned position
            transition={{ duration: 2, delay: 0 }} // Delay for staggered effect
          >
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: {
                  xs: 52,
                  sm: 54,
                  md: 56,
                  lg: 58,
                  xl: 60,
                },
              }}
            >
              Portfolio
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>

  );
};

export default PortfolioSection1;
