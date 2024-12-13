import { Box, CssBaseline, Typography, Container } from "@mui/material"
import Header from "../components/Header"
import ConnectFooter from "../components/ConnectFooter"
import { aboutData } from "@/public/data/data"




const about = () => {
    return (
        <>
            <Box sx={{ position: "relative", minHeight: "100vh", p: 2 }}>

                <CssBaseline />

                <Header />
                
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        flexWrap: "wrap",
                        mb: 10,
                        mt: 10
                    }}
                >
                    <Box maxWidth={"sm"}>
                        <Typography
                             sx={{
                                fontFamily: "serif",
                                fontSize: 40,
                            }}
                        >
                            About Me
                        </Typography>
                        <Typography
                             sx={{
                                fontFamily: "serif",
                                fontSize: 20,
                            }}
                        >
                            {aboutData.description}
                        </Typography>
                    </Box>
                    
                    <Box
                        component="img"
                        src="/images/port_cat/kiki.JPEG" // Replace with your image path
                        alt="Background Graphic"
                        sx={{
                            opacity: 0.3, // Makes the image blend into the background
                            zIndex: -1, // Places the image behind the text
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


                </Container >
            </Box >

            <ConnectFooter />
        </>
    )
}

export default about