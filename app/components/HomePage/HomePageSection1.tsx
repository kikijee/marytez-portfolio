'use client';

import { motion } from "framer-motion";
import { Container, Box, Typography, Divider } from "@mui/material";
import { contactData, homeData } from "@/public/data/data";
import { Colors } from "../../theme/colors";

const HomePageSection1 = () => {

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: Colors.background }}>
      <Container
        id="home-section"
        sx={{
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4, // Spacing between elements
          padding: 0, // Remove default padding
          minHeight: "100vh",
        }}
      >
        {/* Animated Text Section */}
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Starting state
            animate={{ opacity: 1, y: 0 }} // Trigger animation
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: {
                  xs: 30,
                  sm: 35,
                  md: 40,
                  lg: 45,
                  xl: 50,
                },
              }}
            >
              {homeData.headerLine1}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: {
                  xs: 30,
                  sm: 35,
                  md: 40,
                  lg: 45,
                  xl: 50,
                },
              }}
            >
              {homeData.headerLine2}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, width: 0 }} // Start with zero width
            animate={{ opacity: 1, width: "75%" }} // Animate to full width
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Divider
              sx={{
                mt: 1,
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
          <Typography
             sx={{
              fontFamily: "serif",
              fontSize: {
                xs: 22,
                sm: 24,
                md: 26,
                lg: 28,
                xl: 30,
              },
            }}
          >
            {contactData.email}
          </Typography>
          </motion.div>
        </Box>

        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start scaled down and invisible
          animate={{ opacity: 1, scale: 1 }} // Animate when visible
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Box
            component="img"
            src={homeData.homePicture} // Replace with your image path
            alt="Background Graphic"
            sx={{
              zIndex: -1, // Places the image behind the text
              width: {
                xs: "300px",
                sm: "350px",
                md: "400px",
                lg: "550px",
                xl: "600px",
              },
              height: "auto",
            }}
          />
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePageSection1;
