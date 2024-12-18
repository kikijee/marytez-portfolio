'use client';

import { motion } from "framer-motion";
import { Box, Container, Divider, Typography, Card, CardActionArea, CardMedia } from "@mui/material";
import { projectData } from "@/public/data/data"; // Assuming projectData is imported
import { Colors } from "../../theme/colors";
import { useEffect, useState } from "react";

const PortfolioSection2 = () => {
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

        const target = document.getElementById("portfolio-section");
        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);
    return (
        <Box sx={{ bgcolor: Colors.background }}>
            <Container
                id="portfolio-section"
                maxWidth="xl"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    flexWrap: "wrap",
                    minHeight: "100vh",
                }}
            >
                {/* Title with divider animations */}

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    flexWrap: "wrap",
                }}>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }} // Start with zero width
                        animate={isVisible ? { opacity: 1, width: "10%" } : {}} // Animate to full width
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Divider />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }} // Starting state
                        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Trigger animation
                        transition={{ duration: 2, ease: "anticipate" }} // Smooth transition
                    >
                        <Typography sx={{ fontFamily: "serif", fontSize: 50 }}>
                            Categories
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }} // Start with zero width
                        animate={isVisible ? { opacity: 1, width: "10%" } : {}} // Animate to full width
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Divider />
                    </motion.div>

                </Box>

                {/* Category Cards */}
                {projectData.map((data, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
                        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and aligned
                        transition={{ duration: 1, delay: 0.2 * (i + 1) }} // Staggered delay based on index
                    >
                        <Box sx={{ marginBottom: 2 }}>
                            <Card
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    bgcolor: Colors.background,
                                    padding: 2,
                                    minWidth: 200,
                                    textAlign: "center",
                                    "&:hover .image": {
                                        filter: "blur(5px)",
                                        transform: "scale(1.1)",
                                        cursor: 'pointer',
                                    },
                                    "&:hover .title": {
                                        opacity: 1,
                                        transform: "translate(-50%, -50%) scale(1)",
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <CardActionArea href={`portfolio/${i}`}>
                                    <CardMedia
                                        component="img"
                                        image={data.coverImage}
                                        alt={data.name}
                                        className="image"
                                        sx={{
                                            transition: "filter 0.3s ease, transform 0.3s ease",
                                            width: '400px',
                                            height: '400px',
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        className="title"
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%) scale(0.9)",
                                            transition: "opacity 0.3s ease, transform 0.3s ease",
                                            opacity: 0,
                                            color: "#fff",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            padding: "10px 20px",
                                            textAlign: "center",
                                            fontFamily: 'monospace',
                                        }}
                                    >
                                        {data.name}
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </motion.div>
                ))}
            </Container>
        </Box>
    );
};

export default PortfolioSection2;
