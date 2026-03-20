import React from "react";
import '../Css/header.css'
import { Box, Button, TextField, Typography } from "@mui/material";

function AboutOffer() {
    return (
        <div className="container">
            <div className="aboutmain">
                <Box className="newsletter-container">
                    <Typography className="newsletter-title">
                        Stay upto date about our latest offers
                    </Typography>
                    <Box className="newsletter-form">
                        <TextField
                            placeholder="Enter your email address"
                            variant="outlined"
                            fullWidth
                            className="newsletter-input"
                        />

                        <Button className="newsletter-button">
                            Subscribe to Newsletter
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default AboutOffer;