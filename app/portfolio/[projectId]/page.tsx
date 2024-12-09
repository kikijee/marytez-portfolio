import { Box, CssBaseline, Typography, Container, Divider, Card, CardMedia } from "@mui/material"
import { Colors } from "@/app/theme/colors"
import ConnectFooter from "@/app/components/ConnectFooter"
import { projectData } from "@/public/data/data"
import Header from "@/app/components/Header"

const ProjectPage = ({ params }: {
    params: {
        projectId: number
    }
}) => {


    return (
        <>
            <Box sx={{ position: "relative", height: "100vh", p: 2 }}>
                <CssBaseline />
                <Header/>
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
                            {projectData[params.projectId].name}
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {projectData[params.projectId].projects.map((data, i) => (
                <Container
                    key={i}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        flexWrap: "wrap",
                        mb: 20
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
                            {data.name}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "serif",
                                fontSize: 20,
                            }}
                        >
                            {data.description}
                        </Typography>
                    </Box>
                    {projectData[params.projectId].projects[i].images.map((data, i) => (
                        <Card
                            key={i}
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: 3,
                                padding: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={data}
                                className="image"
                                sx={{
                                    width: '400px',
                                    height: '400px',
                                    borderRadius: 3,
                                }}
                            />
                        </Card>
                    ))}

                </Container>
            ))}
            <ConnectFooter/>
        </>
    )
}

export default ProjectPage