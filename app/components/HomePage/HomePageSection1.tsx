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
          gap: 4, 
          padding: 0, 
          minHeight: "100vh",
        }}
      >

        <Box>
          <motion.div
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
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
            initial={{ opacity: 0, width: 0 }} 
            animate={{ opacity: 1, width: "75%" }} 
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Box
            component="img"
            src={homeData.homePicture} 
            alt="Background Graphic"
            sx={{
              zIndex: -1, 
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
