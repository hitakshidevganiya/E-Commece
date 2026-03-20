import React from "react";
import '../Css/header.css'
import { Box, Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";


const products = [
    {
        name: "Vertical Striped Shirt",
        price: 212,
        rating: 5.0,
        oldPrice: 232,
        discount: "-20%",
        image: "../../public/images/image 7 (1).png",
    },
    {
        name: "Courage Graphic T-Shirt",
        price: 145,
        rating: 4.0,
        image: "../../public/images/image 8 (1).png",
    },
    {
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        rating: 3.0,
        image: "../../public/images/image 9 (1).png",
    },
    {
        name: "Faded Skinny Jeans",
        price: 210,
        rating: 4.5,
        image: "../../public/images/image 10 (1).png",
    },
];

function TopSelling() {
    return (
        <div className="conatiner">
            <div className="mainarrival">
                <Box className="arrivals">
                    <Typography className="maintitle">
                        TOP SELLING
                    </Typography>
                    <Grid container spacing={4} justifyContent="space-between">
                        {
                            products.map((v, i) => (
                                <Grid xs={12} sm={6} md={3} key={i}>
                                    <Card className="card">
                                        <CardMedia
                                            component="img"
                                            image={v.image}
                                            alt={v.name}
                                            className="image"
                                        />

                                        <CardContent className="content">
                                            <Typography className="productName">
                                                {v.name}
                                            </Typography>
                                            <Box className="rating">
                                                <Rating
                                                    value={v.rating}
                                                    precision={0.5}
                                                // size="small"
                                                />
                                                <Typography className="ratingText">
                                                    {v.rating}/5
                                                </Typography>
                                            </Box>
                                            <Box className="priceRow">
                                                <Typography className="price">
                                                    ${v.price}
                                                </Typography>

                                                {v.oldPrice && (
                                                    <>
                                                        <Typography className="oldPrice">
                                                            ${v.oldPrice}
                                                        </Typography>

                                                        <span className="discount">
                                                            {v.discount}
                                                        </span>
                                                    </>
                                                )}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }

                    </Grid>
                    <Box className="btnn">
                        <Button variant="outlined" className="btnView">
                            View All
                        </Button>
                    </Box>
                </Box>

            </div>
        </div>
    );
}


export default TopSelling;