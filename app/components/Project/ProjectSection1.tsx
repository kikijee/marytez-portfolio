'use client';

import { motion } from "framer-motion";
import { Box, Container, Divider, Typography } from "@mui/material"
import { Colors } from "@/app/theme/colors";

const ProjectSection1 =({ coverImage, name }: {
    coverImage: string,
    name: string
}) => {
    return(
        <Box
                sx={{
                    position: "relative",
                    height: "100vh",
                    bgcolor: Colors.background,
                    overflow: "hidden", 
                }}>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 0.3 }} 
                    transition={{ duration: 2 }}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url('${coverImage}')`,
                        backgroundSize: "auto 75%",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundBlendMode: "overlay",
                        zIndex: 0, 

                    }}
                />
                
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        zIndex: 1, 
                        position: "relative", 
                    }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "100%" }} 
                            transition={{ duration: 2, delay: 0 }} 
                        >
                            <Divider sx={{ mb: 2, border: 1 }} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0 }} 
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
                                {name}
                            </Typography>
                        </motion.div>
                    </Box>
                </Container>
            </Box>
    )
}

export default ProjectSection1