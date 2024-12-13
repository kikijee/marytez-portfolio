import { Box, Typography } from "@mui/material"
import MenuDrawer from "./MenuDrawer"
import { generalData } from "@/public/data/data"

const Header =()=> {
    return (
        <Box>
          <Box sx={{ top: 16, left: 16 }}>
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize:{
                  xs:22,
                  sm:24,
                  md:26,
                  lg:28,
                  xl:30
                },
                ml:3
              }}
            >
              {generalData.name}
            </Typography>
          </Box>
          <MenuDrawer />
        </Box>
    )
}

export default Header