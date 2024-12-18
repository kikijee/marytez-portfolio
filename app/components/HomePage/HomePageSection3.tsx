"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Colors } from "../../theme/colors"; 
import { aboutData } from "@/public/data/data";

const HomePageSection3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      },
      { threshold: 0.5 } 
    );

    const target = document.getElementById("about-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <Box
      id="about-section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        minHeight: "100vh",
        bgcolor:Colors.background
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
          padding: 5,
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          sx={{
            width: {
              xl: "400px",
              lg: "400px",
              md: "400px",
              sm: "350px",
              xs: "300px",
            },
            height: "auto",
            borderRadius: 0,
          }}
        >
          <img
            src={aboutData.descriptionPic} 
            alt="Background Graphic"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "inherit",
            }}
          />
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          sx={{
            width: {
              xl: "50%",
              lg: "50%",
              md: "50%",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: 30,
              mb: 3,
              color: Colors.black,
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              fontFamily: "serif",
              fontSize: 20,
              color: Colors.black,
            }}
          >
            {aboutData.description}
          </Typography>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: Colors.white,
                borderRadius: 10,
                px: 3,
                py: 1,
                mt: 4,
              }}
              href="/about"
            >
              <Typography
                sx={{
                  color: Colors.black,
                  wordSpacing: 5,
                  letterSpacing: 1,
                }}
              >
                Read More
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePageSection3;
