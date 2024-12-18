import { Box, CssBaseline, Typography, Container, Divider, Card, CardMedia, CardActionArea } from "@mui/material";
import ConnectFooter from "../components/ConnectFooter";
import { projectData } from "@/public/data/data";
import Header from "../components/Header";
import { Colors } from "../theme/colors";
import PortfolioSection1 from "../components/Portfolio/PorfolioSection1";
import PortfolioSection2 from "../components/Portfolio/PortfolioSection2";



const Portfolio = () => {
    return (
        <>
            <PortfolioSection1/>

            <PortfolioSection2/>

            <ConnectFooter/>
        </>
    );
};

export default Portfolio;
