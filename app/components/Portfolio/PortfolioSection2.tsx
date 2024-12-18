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
                    setIsVisible(true); 
                }
            },
            { threshold: 0.2 } 
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

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    flexWrap: "wrap",
                }}>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }} 
                        animate={isVisible ? { opacity: 1, width: "10%" } : {}} 
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Divider />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }} 
                        animate={isVisible ? { opacity: 1, y: 0 } : {}} 
                        transition={{ duration: 2, ease: "anticipate" }} 
                    >
                        <Typography 
                            sx={{ 
                                fontFamily: "serif", 
                                fontSize: {
                                    xl: 50,
                                    lg:50,
                                    md:50,
                                    sm:40,
                                    xs:40
                                }
                            }}
                        >
                            Categories
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }} 
                        animate={isVisible ? { opacity: 1, width: "10%" } : {}} 
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Divider />
                    </motion.div>

                </Box>

                {projectData.map((data, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }} 
                        animate={isVisible ? { opacity: 1, y: 0 } : {}} 
                        transition={{ duration: 1, delay: 0.2 * (i + 1) }} 
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
                                            width: {
                                                xl: "400px",
                                                lg: "400px",
                                                md: "350px",
                                                sm: "350px",
                                                xs: "300px"
                                            },
                                            height: {
                                                xl: "400px",
                                                lg: "400px",
                                                md: "350px",
                                                sm: "350px",
                                                xs: "300px"
                                            },
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
