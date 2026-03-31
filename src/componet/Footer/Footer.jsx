import React from "react";
// import '../../Css/header.css'
import { Box, Grid } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <div className="container">
            <div className="mainfoot">
                <Box className="footer" >

                    <Grid container spacing={4} className="foooooter" >
                        <Grid xs={12} md={4}>
                            <Typography className="footerlogo">SHOP.CO</Typography>
                            <Typography className="desc">
                                We have clothes that suits your style and which you’re proud to
                                wear. From women to men.
                            </Typography>

                            <Box className="socials">
                                <IconButton><TwitterIcon /></IconButton>
                                <IconButton><FacebookIcon /></IconButton>
                                <IconButton><InstagramIcon /></IconButton>
                                <IconButton><GitHubIcon /></IconButton>
                            </Box>
                        </Grid>

                        <Grid xs={6} md={2}>
                            <Typography className="title">COMPANY</Typography>
                            <ul className="footerli">
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </ul>
                        </Grid>

                        <Grid xs={6} md={2}>
                            <Typography className="title">HELP</Typography>
                            <ul className="footerli">
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </Grid>

                        <Grid xs={6} md={2}>
                            <Typography className="title">FAQ</Typography>
                            <ul className="footerli">
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payments</li>
                            </ul>
                        </Grid>

                        <Grid xs={6} md={2} >
                            <Typography className="title">RESOURCES</Typography>
                            <ul className="footerli">
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>Youtube Playlist</li>
                            </ul>
                        </Grid>
                    </Grid>

                    <Box className="footer-bottom">
                        <Typography>
                            Shop.co © 2000-2023, All Rights Reserved
                        </Typography>

                        <Box className="payments">
                            <a href="#" className="allbrand">
                                <img src="../../public/images/Visa.png" alt="" />
                            </a>
                            <a href="#" className="allbrand master"><img src="../../public/images/Mastercard (1).png" alt="" /></a>
                            <a href="#" className="allbrand"><img src="../../public/images/Paypal.png" alt="" /></a>
                            <a href="#" className="allbrand"><img src="../../public/images/Pay.png" alt="" /></a>
                            <a href="#" className="allbrand"><img src="../../public/images/G Pay.png" alt="" /></a>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Footer;