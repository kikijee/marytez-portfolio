import { Container, Box, Typography } from "@mui/material"
import React from "react"

interface AboutProps {
    section: string,
    text: string;
    picture: string;
    reverse: boolean;
}

const AboutSection: React.FC<AboutProps> =({section,text,picture,reverse})=>{
    return(
        <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        flexWrap: "wrap",
                        minHeight: "100vh",
                        flexDirection: reverse ? "row-reverse" : ""
                    }}
                >
                    <Box maxWidth={"sm"}>
                        <Typography
                             sx={{
                                fontFamily: "serif",
                                fontSize: 40,
                            }}
                        >
                            {section}
                        </Typography>
                        <Typography
                             sx={{
                                fontFamily: "serif",
                                fontSize: 20,
                            }}
                        >
                            {text}
                        </Typography>
                    </Box>

                    { picture !== "" &&
                    <Box
                        component="img"
                        src={picture} // Replace with your image path
                        alt="Background Graphic"
                        sx={{
                            width: {
                                xs: '250px',
                                sm: '300px',
                                md: '350px',
                                lg: '400px',
                                xl: '450px'
                            }, // Adjust size as needed
                            height: "auto",
                        }}
                    />
                    }


                </Container >
    )
}

export default AboutSection