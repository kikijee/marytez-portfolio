import { Box, CssBaseline, Typography, Container } from "@mui/material"
import Header from "../components/Header"
import ConnectFooter from "../components/ConnectFooter"
import { aboutData } from "@/public/data/data"
import { Colors } from "../theme/colors"
import AboutSection from "../components/About/AboutSection"




const about = () => {
    return (
        <>
            <Box sx={{ position: "relative", minHeight: "100vh", bgcolor:Colors.background }}>

                <CssBaseline />

                <Header />
                <Box sx={{mt:{xs:10,sm:10,md:0,lg:0,xl:0}}}/>
                <AboutSection section="About Me" text={aboutData.description} picture={aboutData.descriptionPic} reverse={false}/>
                <AboutSection section="Educational Background" text={aboutData.schooling} picture={aboutData.schoolingPic} reverse={true}/>
                <AboutSection section="Passions and Goals" text={aboutData.passion_goals} picture={""} reverse={false}/>

            </Box >

            <ConnectFooter />
        </>
    )
}

export default about