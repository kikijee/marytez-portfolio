import { Box, CssBaseline, Typography } from "@mui/material"
import MenuDrawer from "../components/MenuDrawer"


const contact = () => {
    return (
        <>
            <Box sx={{ position: "relative", height: "100vh", p: 2 }}>
                <CssBaseline />
                <MenuDrawer />

                <Box sx={{ position: "absolute", top: 16, left: 16 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "serif",
                        }}
                    >
                        Marytez Salas
                    </Typography>

                </Box>
            </Box>
        </>
    )
}

export default contact