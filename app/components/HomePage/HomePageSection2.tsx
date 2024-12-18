'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";
import { homeData } from "@/public/data/data";

function HomePageSection2() {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const target = document.getElementById("fade-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <Box
      id="fade-section"
      sx={{
        minHeight: "100vh",
        bgcolor: "#3f2121",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Typography 1 with Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Starting state: invisible and slightly below
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when visible
          transition={{ duration: 1 }} // Duration of animation
        >
          <Typography sx={{ fontFamily: "serif", fontSize: 30 }}>
            {homeData.exampleWorkDescription}
          </Typography>
        </motion.div>

        {/* Typography 2 with Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }} // Add delay for staggered effect
        >
          <Typography sx={{ fontFamily: "serif", fontSize: 40 }}>
            {homeData.exampleWorkTitle}
          </Typography>
        </motion.div>

        {/* Divider with Fade-In */}
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
      </Stack>
    </Box>
  );
}

export default HomePageSection2;
