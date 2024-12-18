import { Box, CssBaseline, Typography, Container, Divider, Card, CardMedia } from "@mui/material"
import { Colors } from "@/app/theme/colors"
import ConnectFooter from "@/app/components/ConnectFooter"
import { projectData } from "@/public/data/data"
import Header from "@/app/components/Header"
import ProjectSection1 from "@/app/components/Project/ProjectSection1";

const ProjectPage = ({ params }: {
    params: {
        projectId: number
    }
}) => {


    return (
        <>
        <CssBaseline />
        <Header />
            <ProjectSection1 coverImage={projectData[params.projectId].coverImage} name={projectData[params.projectId].name}/>

            <Box sx={{ backgroundColor: Colors.background, }}>
                {projectData[params.projectId].projects.map((data, i) => (
                    data.name == "Planet 30XX" ? (
                        <Container
                            key={i}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 4,
                                flexWrap: "wrap",
                                mb: 20,
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: {
                                        xs: "100%",
                                        sm: "100%",
                                        md: "100%%"
                                    },
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
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={data}
                                        className="image"
                                        sx={{
                                            width: 'auto',
                                            height: '400px',
                                        }}
                                    />
                                </Card>
                            ))}

                        </Container>
                    )

                        : (
                            <Container
                                key={i}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 4,
                                    flexWrap: "wrap",
                                    mb: 20,
                                }}
                            >
                                <Box
                                    sx={{
                                        maxWidth: {
                                            xs: "100%",
                                            sm: "100%",
                                            md: "40%"
                                        },
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
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={data}
                                            className="image"
                                            sx={{
                                                width: 'auto',
                                                height: '400px',
                                            }}
                                        />
                                    </Card>
                                ))}

                            </Container>
                        )
                ))}
                <ConnectFooter />
            </Box>
        </>
    )
}

export default ProjectPage