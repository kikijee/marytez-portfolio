import { Box, Container, CssBaseline, Typography, Divider } from "@mui/material"
import ConnectFooter from "../components/ConnectFooter"
import { Colors } from "../theme/colors"
import Header from "../components/Header"
import { contactData } from "@/public/data/data"


const contact = () => {
    return (
        <>
            <Box sx={{ position: "relative", minHeight: "100vh", bgcolor: Colors.background }}>
                <CssBaseline />

                <Header />

                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: {
                                xs: "100%",
                                sm: "100%",
                                md: "40%"
                            }
                        }}
                    >
                        <Divider sx={{ maxWidth: "75%" }} />
                        <Typography
                            sx={{
                                fontFamily: "serif",
                                fontSize: 40,
                            }}
                        >
                            Contact Me
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "serif",
                                fontSize: 20,
                            }}
                        >
                            If you have any questions, require a budget or
                            want information about a project, get in contact
                            with me.
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "serif",
                                fontSize: 20,
                                mt:2
                            }}
                        >
                            {contactData.email}
                        </Typography>
                    </Box>

                    {/* <Box
                        sx={{
                            maxWidth: {
                                xs: "100%",
                                sm: "100%",
                                md: "40%"
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "serif",
                                fontSize: 30
                            }}
                        >
                            Leave me a message
                        </Typography>
                        <Box
                            sx={{
                                position: "relative", // Make this container relative for positioning
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: 2,
                                mt: 1
                            }}
                        >
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                        </Box>
                        <Box
                            sx={{
                                mt: 2
                            }}
                        >
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Message"
                                multiline
                                rows={4}
                                maxRows={4}
                                fullWidth
                            />
                        </Box>
                    </Box> */}

                </Container>
            </Box>


            <ConnectFooter />
        </>
    )
}

export default contact