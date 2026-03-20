import React from "react";
import '../Css/header.css'
import { Box, Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";


const products = [
    {
        name: "T-shirt with Tape Details",
        price: 120,
        rating: 4.5,
        image: "../../public/images/image 7.png",
    },
    {
        name: "Skinny Fit Jeans",
        price: 240,
        oldPrice: 260,
        discount: "-20%",
        rating: 3.5,
        image: "../../public/images/image 8.png",
    },
    {
        name: "Checkered Shirt",
        price: 180,
        rating: 4.5,
        image: "../../public/images/image 9.png",
    },
    {
        name: "Sleeve Striped T-shirt",
        price: 130,
        oldPrice: 160,
        discount: "-30%",
        rating: 4.5,
        image: "../../public/images/image 10.png",
    },
];

function NewArrive() {
    return (
        <div className="conatiner">
            <div className="mainarrival">
                <Box className="arrivals">
                    <Typography className="maintitle">
                        NEW ARRIVALS
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
                    <Box className="buttonWrapper">
                        <Button variant="outlined" className="viewBtn">
                            View All
                        </Button>
                    </Box>
                </Box>

            </div>
        </div>
    );
}


export default NewArrive;