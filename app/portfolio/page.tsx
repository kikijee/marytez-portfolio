import { Box, CssBaseline, Typography } from "@mui/material"
import MenuDrawer from "../components/MenuDrawer"


const portfolio =()=>{
    return(
        <>
            <Box sx={{ position: "relative", height: "100vh", p: 2 }}>
                <CssBaseline />
                <MenuDrawer />

                <Box sx={{ position: "absolute", top: 16, left: 16 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "serif",
                            fontSize:{
                                xs:22,
                                sm:24,
                                md:26,
                                lg:28,
                                xl:30
                              }
                        }}
                    >
                        Marytez Salas
                    </Typography>

                </Box>
            </Box>
        </>
    )
}

export default portfolio