import { Box, Typography } from "@mui/material"
import MenuDrawer from "./MenuDrawer"
import { generalData } from "@/public/data/data"
import { Colors } from "../theme/colors"

const Header =()=> {
    return (
        <Box sx = {{bgcolor:Colors.background}}>
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
                pl:3,
                pt:2
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