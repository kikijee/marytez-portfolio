import { Box, CssBaseline, Typography } from "@mui/material"
import Header from "../components/Header"
import ConnectFooter from "../components/ConnectFooter"



const about = () => {
    return (
        <>
            <Box sx={{ position: "relative", height: "100vh", p: 2 }}>
                <CssBaseline />
                <Header/>
            </Box>
            <ConnectFooter/>
        </>
    )
}

export default about