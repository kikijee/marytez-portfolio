import { Box, CssBaseline, Typography, Container, Divider, Card, CardMedia, CardActionArea } from "@mui/material";
import MenuDrawer from "../components/MenuDrawer";
import ConnectFooter from "../components/ConnectFooter";
import { Colors } from "../theme/colors";
import { projectData } from "@/public/data/data";



const Portfolio = () => {
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
                                    xl: 30,
                                },
                            }}
                        >
                            Marytez Salas
                        </Typography>
                    </Box>
                    <MenuDrawer />
                </Box>

                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Box>
                        <Divider />
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
                            Portfolio
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    flexWrap: "wrap",
                    mb: 20
                }}
            >
                {projectData.map((data, i) => (
                    <Box key={i} sx={{ marginBottom: 2 }}>
                        <Card
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: 3,
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
                                    borderRadius: 3,
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
                                    borderRadius: "5px",
                                    textAlign: "center",
                                    fontFamily: 'monospace',
                                }}
                            >
                                {data.name}
                            </Typography>
                            </CardActionArea>
                        </Card>
                    </Box>
                ))}

            </Container>

            <Box
                component="footer"
                sx={{
                    py: 2,
                    px: 2,
                    mt: "auto",
                    backgroundColor: Colors.header_color,
                    width: "100%",
                }}
            >
                <ConnectFooter />
            </Box>
        </>
    );
};

export default Portfolio;
