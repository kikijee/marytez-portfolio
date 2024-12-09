import { Box, Container, IconButton, Typography, Divider } from "@mui/material";
import { LinkedIn, Instagram, Opacity, } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Colors } from "../theme/colors";
import TikTokIcon from "./TikTokIcon";

const ConnectFooter = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 2,
                mt: 'auto',
                backgroundColor: Colors.header_color,
                width: '100%',
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    justifyContent: "space-between", // Space out the child Boxes
                    alignItems: "center", // Vertically align the children
                    flexWrap: "wrap", // Wrap on smaller screens
                    gap: 2, // Add spacing between items
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontFamily: "serif",
                            fontSize: 30,
                            color: Colors.black
                        }}
                    >
                        Lets collaborate
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "serif",
                            fontSize: 30,
                            color: Colors.black
                        }}
                    >
                        and create!
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: Colors.black,
                            borderRadius: 10,
                            px: 3,
                            py: 1,
                            mt: 4
                        }}
                        href="/contact"
                    >
                        <Typography
                            sx={{
                                color: Colors.white,
                                wordSpacing: 5,
                                letterSpacing: 1
                            }}
                        >
                            GET IN TOUCH
                        </Typography>
                    </Button>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: Colors.black,
                            wordSpacing: 5,
                            letterSpacing: 1,
                            fontFamily: "serif",
                            fontSize: 20
                        }}
                    >
                        Socials
                    </Typography>
                    <IconButton href={'https://www.linkedin.com/in/christian-manibusan-885005259/'}><LinkedIn sx={{ fontSize: 35, color: Colors.black }} /></IconButton>
                    <IconButton href={'https://www.instagram.com/christian_manibusan/?hl=en'}><Instagram sx={{ fontSize: 35, color: Colors.black }} /></IconButton>
                    <IconButton href={'https://www.instagram.com/christian_manibusan/?hl=en'}><TikTokIcon size={35} /></IconButton>
                </Box>
            </Container>
            <Container
                maxWidth="md"
                sx={{
                    mt: 3
                }}
            >
                <Divider sx={{ bgcolor: Colors.black }} />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between", // Space out the child Boxes
                        alignItems: "center", // Vertically align the children
                        flexWrap: "wrap", // Wrap on smaller screens
                        gap: 2, // Add spacing between items 
                        mt: 3
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "serif",
                            color: Colors.black
                        }}
                    >
                        Marytez Salas
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "serif",
                            color: Colors.black,
                            opacity: 0.5
                        }}
                    >
                        © 2024 All rights reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default ConnectFooter;