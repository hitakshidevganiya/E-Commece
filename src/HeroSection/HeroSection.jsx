import React from "react"
import '../Css/header.css'
import { Box, Button, Grid, Typography } from "@mui/material";

const brands = [
    "VERSACE",
    "ZARA",
    "GUCCI",
    "PRADA",
    "Calvin Klein",
];

function HeroSection() {


    return (
        <div className="container">
            <div className="mainhero">
                <Box className="hero">
                    <Grid container>
                        <Grid xs={12} md={6} className="heroleft">
                            <Typography variant="h2" className="hero-title">
                                FIND CLOTHES THAT MATCHES YOUR STYLE
                            </Typography>

                            <Typography className="hero-subtitle">
                                Browse through our diverse range of meticulously crafted garments,
                                designed to bring out your individuality and cater to your sense
                                of style.
                            </Typography>

                            <Button variant="contained" className="hero-btn">
                                Shop Now
                            </Button>
                            <Box className="stats">
                                <Box>
                                    <Typography variant="h4">200+</Typography>
                                    <Typography variant="body2">International Brands</Typography>
                                </Box>

                                <Box>
                                    <Typography variant="h4">2,000+</Typography>
                                    <Typography variant="body2">High-Quality Products</Typography>
                                </Box>

                                <Box>
                                    <Typography variant="h4">30,000+</Typography>
                                    <Typography variant="body2">Happy Customers</Typography>
                                </Box>
                            </Box>
                            <Grid xs={12} md={6}>
                                <Box className="hero-image" />
                                <img src="../../../public/images/heroimg.png" alt="" className="heroimg" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>


            </div>
            <div className="brandmain">
                <Box className="brand-strip">
                    <Grid container>
                        <Box className="brand-container">
                            {brands.map((brand, index) => (
                                <Typography key={index} className="brand-item">
                                    {brand}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                </Box>
            </div>
        </div>
    )
}

export default HeroSection;
