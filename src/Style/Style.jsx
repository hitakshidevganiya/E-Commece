import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const category = [
    {
        title: "Casual",
        image: "../../../public/images/image 11.png"
    },
    {
        title: "Formal",
        image: "../../../public/images/image 13.png"
    },
    {
        title: "Party",
        image: "../../../public/images/image 12.png"
    },
    {
        title: "Gym",
        image: "../../../public/images/image 14.png"
    }
]


function Style() {
    return (
        <div className="container">
            <div className="mainstyle">
                <Box
                    sx={{
                        backgroundColor: "#f2f2f2",
                        borderRadius: "20px",
                        padding: { xs: 2, md: 8 },
                        maxWidth: "1518px",
                        margin: "80px auto",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 800,
                            textAlign: "center",
                            fontSize: 52,
                            mb: 6,
                        }}>
                        BROWSE BY DRESS STYLE
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            category.map((v, i) => (
                                <Grid xs={12} sm={6} key={i}>
                                    <Card
                                        sx={{
                                            borderRadius: "16px",
                                            overflow: "hidden",
                                            position: "relative",
                                            height: { xs: 180, md: 290 },
                                            cursor: "pointer",
                                            justifyContent: "space-between"

                                        }}
                                    >

                                        <CardMedia
                                            component="img"
                                            image={v.image}
                                            alt={v.title}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                
                                            }}
                                        />

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                position: "absolute",
                                                top: 16,
                                                left: 16,
                                                color: "#000",
                                                fontWeight: 600,
                                                backgroundColor: "rgba(255,255,255,0.7)",
                                                padding: "4px 10px",
                                                borderRadius: "8px",
                                            }}
                                        >
                                            {v.title}
                                        </Typography>

                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Style