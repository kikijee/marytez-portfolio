import { Box, Container, CssBaseline, Typography, Divider, TextField } from "@mui/material"
import MenuDrawer from "../components/MenuDrawer"
import ConnectFooter from "../components/ConnectFooter"
import { Colors } from "../theme/colors"


const contact = () => {
    return (
        <>
            <Box sx={{ position: "relative", height: "100vh", p: 2 }}>
                <CssBaseline />

                <Box>
                    <Box sx={{ top: 16, left: 16 }}>
                        <Typography
                            sx={{
                                fontFamily: "serif",
                                fontSize: {
                                    xs: 22,
                                    sm: 24,
                                    md: 26,
                                    lg: 28,
                                    xl: 30
                                }
                            }}
                        >
                            Marytez Salas
                        </Typography>
                    </Box>
                    <MenuDrawer />
                </Box>

                <Container
                    maxWidth = "lg"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: {
                            xs: 20,
                            sm: 22,
                            md: 24,
                            lg: 26,
                            xl: 28
                        }
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
                    </Box>

                    <Box
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
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                        </Box>
                        <Box
                            sx = {{
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
                    </Box>

                </Container>
            </Box>

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
                <ConnectFooter />
            </Box>
        </>
    )
}

export default contact