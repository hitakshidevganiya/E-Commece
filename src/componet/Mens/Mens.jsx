import React, { useState } from "react";
import Header from "../Header/Header";
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { Avatar, Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Rating, Tab, Tabs, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const images = [
    "../../../public/images/image 2.png",
    "../../../public/images/image 5.png",
    "../../../public/images/image 6.png"
];

const reviews = [
    {
        name: "Samantha D.",
        rating: 4.5,
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: "August 14, 2023"
    },
    {
        name: "Alex M.",
        rating: 4,
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        date: "August 15, 2023"
    },
    {
        name: "Ethan R.",
        rating: 3.5,
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        date: "August 16, 2023"
    },
    {
        name: "Olivia P.",
        rating: 4,
        text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        date: "August 17, 2023"
    },
    {
        name: "Liam K.",
        rating: 4,
        text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        date: "August 18, 2023"
    },
    {
        name: "Ava H.",
        rating: 4.5,
        text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        date: "August 19, 2023"
    },

];

const products = [
    {
        name: "Polo with Contrast Trims",
        price: 212,
        oldPrice: 242,
        discount: "-20%",
        rating: 4.0,
        image: "../../public/images/image 7 (3).png",
    },
    {
        name: "Gradient Graphic T-shirt",
        price: 145,

        rating: 3.5,
        image: "../../public/images/image 8 (3).png",
    },
    {
        name: "Polo with Tipping Details",
        price: 180,
        rating: 4.5,
        image: "../../public/images/image 9 (3).png",
    },
    {
        name: "Black Striped T-shirt",
        price: 130,
        oldPrice: 150,
        discount: "-30%",
        rating: 5.0,
        image: "../../public/images/image 10 (3).png",
    },
];

function Mens() {

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [size, setSize] = useState("Large");
    const [qty, setQty] = useState(1);
    return (
        <>

            <div className="container">
                <div className="mainmen">
                    <main>
                        <section className="men-product">
                            <Box sx={{ p: 4 }}>
                                <Grid container spacing={4}>
                                    <Grid xs={12} md={6}>
                                        <Grid container>
                                            <Grid xs={3}>
                                                {images.map((v, i) => (
                                                    <Card
                                                        key={i}
                                                        onClick={() => setSelectedImage(v)}
                                                        sx={{ mb: 2, cursor: "pointer" }}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            image={v}
                                                            alt="thumb"
                                                        />
                                                    </Card>
                                                ))}
                                            </Grid>
                                        </Grid>
                                        <Grid xs={9}>
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    image={selectedImage}
                                                    alt="product"
                                                />
                                            </Card>
                                        </Grid>
                                    </Grid>


                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                                            ONE LIFE GRAPHIC T-SHIRT
                                        </Typography>

                                        <Box display="flex" alignItems="center" gap={1} mb={2}>
                                            <Rating value={4.5} precision={0.5} readOnly />
                                            <Typography>4.5/5</Typography>
                                        </Box>

                                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                                            <Typography variant="h5" fontWeight="bold">
                                                $260
                                            </Typography>
                                            <Typography
                                                sx={{ textDecoration: "line-through", color: "gray" }}
                                            >
                                                $300
                                            </Typography>
                                            <Typography color="error">-40%</Typography>
                                        </Box>

                                        <Typography color="text.secondary" mb={3}>
                                            This graphic t-shirt is perfect for any occasion. Crafted from a soft
                                            and breathable fabric.
                                        </Typography>

                                        <Box sx={{ mt: 3 }}>
                                            <Typography>
                                                Select Colors
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                                                <Box sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: "#4b5320" }} />
                                                <Box sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: "#2f4f4f" }} />
                                                <Box sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: "#1c1c3c" }} />
                                            </Box>
                                        </Box>

                                        {/* Size Selection */}
                                        <Typography mb={1}>Choose Size</Typography>
                                        <ToggleButtonGroup
                                            value={size}
                                            exclusive
                                            onChange={(e, val) => val && setSize(val)}
                                            sx={{ mb: 3 }}
                                        >
                                            {["Small", "Medium", "Large", "X-Large"].map((s) => (
                                                <ToggleButton key={s} value={s}>
                                                    {s}
                                                </ToggleButton>
                                            ))}
                                        </ToggleButtonGroup>

                                        {/* Quantity */}
                                        <Box display="flex" alignItems="center" gap={2} mb={3}>
                                            <IconButton onClick={() => setQty(Math.max(1, qty - 1))}>
                                                <Remove />
                                            </IconButton>
                                            <Typography>{qty}</Typography>
                                            <IconButton onClick={() => setQty(qty + 1)}>
                                                <Add />
                                            </IconButton>
                                        </Box>

                                        {/* Add to Cart */}
                                        <Button
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            sx={{
                                                borderRadius: "30px",
                                                py: 1.5,
                                                fontWeight: "bold"
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </section>

                        <section className="allReviews">
                            <Box sx={{ p: 4 }}>
                                {/* Tabs */}
                                <Tabs value={1} centered>
                                    <Tab label="Product Details" />
                                    <Tab label="Rating & Reviews" />
                                    <Tab label="FAQs" />
                                </Tabs>

                                {/* Header */}
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    mt={4}
                                    mb={2}
                                >
                                    <Typography variant="h6" fontWeight="bold">
                                        All Reviews (451)
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        sx={{ borderRadius: "20px", textTransform: "none" }}
                                    >
                                        Write a Review
                                    </Button>
                                </Box>
                                <Grid container spacing={3}>
                                    {reviews.map((v, i) => (
                                        <Grid xs={12} md={6} key={i}>
                                            <Card sx={{ borderRadius: "16px" }}>
                                                <CardContent>
                                                    <Rating value={v.rating} precision={0.5} readOnly />

                                                    <Box display="flex" alignItems="center" mt={1} mb={1}>
                                                        <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
                                                            {v.name[0]}
                                                        </Avatar>
                                                        <Typography fontWeight="bold">{v.name}</Typography>
                                                    </Box>

                                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                                        {v.text}
                                                    </Typography>

                                                    <Typography variant="caption" color="text.secondary">
                                                        Posted on {v.date}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Box textAlign="center" mt={4}>
                                    <Button
                                        variant="outlined"
                                        sx={{ borderRadius: "30px", px: 4, textTransform: "none" }}
                                    >
                                        Load More Reviews
                                    </Button>
                                </Box>
                            </Box>
                        </section>

                        <section className="likeProduct">
                            <Box className="product" sx={{mb:20}}>
                                <Typography className="maintitle">
                                    You might also like
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

                            </Box>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}


export default Mens;