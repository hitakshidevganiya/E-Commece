import React from "react";
import '../../Css/header.css'
import { Box, Button, Grid, Typography, Card, CardContent, CardMedia, Rating, TextField, IconButton, } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6"
import 'swiper/css';
import 'swiper/css/pagination';


const brands = [
    "VERSACE",
    "ZARA",
    "GUCCI",
    "PRADA",
    "Calvin Klein",
];


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

const productsTop = [           
    {
        name: "Vertical Striped Shirt",
        price: 212,
        rating: 5.0,
        oldPrice: 232,
        discount: "-20%",
        image: "../../public/images/image 7 (2).png",
    },
    {
        name: "Courage Graphic T-Shirt",
        price: 145,
        rating: 4.0,
        image: "../../public/images/image 8 (2).png",
    },
    {
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        rating: 3.0,
        image: "../../public/images/image 9 (2).png",
    },
    {
        name: "Faded Skinny Jeans",
        price: 210,
        rating: 4.5,
        image: "../../public/images/image 10 (2).png",
    },
];

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

const testimonials = [
    {
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. Form casual wear to elegant dresses, evry piece l've bought has exceeded my expectations.",
    },
    {
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
];



function Home() {
    return (
        <div className="container">
            <main>
                <section className="hero-section">
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
                                    {brands.map((brand, i) => (
                                        <Typography key={i} className="brand-v">
                                            {brand}
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>

                        </Box>
                    </div>
                </section>


                <section className="newArrivals-section">
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
                </section>

                <section className="topSelling-section">
                    <Box className="arrivals">
                        <Typography className="maintitle">
                            TOP SELLING
                        </Typography>
                        <Grid container spacing={4} justifyContent="space-between">
                            {
                                productsTop.map((v, i) => (
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

                </section>

                <section className="style-section">
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
                </section>

                <section className="customer-section">
                    <Box sx={{ px: 4, py: 8 , mb:15}}  >
                        <Box className="custMain">
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 4,
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 800, textTransform: "uppercase" }}
                            >
                                Our Happy Customers
                            </Typography>

                            <Box className="swiper-nav">
                                <IconButton className="prev-btn"><FaArrowLeftLong /></IconButton>
                                <IconButton className="next-btn"><FaArrowRightLong /></IconButton>
                            </Box>

                        </Box>
                        </Box>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".next-btn",
                                prevEl: ".prev-btn",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                            }}
                        >

                            {testimonials.map((v, i) => (
                                <SwiperSlide key={i}  className="cardall">
                                    <Card
                                        sx={{
                                            borderRadius: "16px",
                                            boxShadow: "none",
                                            border: "1px solid #eee",
                                            height: "100%",
                                        }} 
                                       
                                    >
                                        <CardContent>
                                            <Box sx={{ display: "flex", mb: 1 }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon key={i} sx={{ color: "#f5a623" }} />
                                                ))}
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                                <Typography sx={{ fontWeight: 600, mr: 1 }}>
                                                    {v.name}
                                                </Typography>
                                                <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                            </Box>

                                            <Typography
                                                variant="body2"
                                                sx={{ color: "#555", lineHeight: 1.6 }}
                                            >
                                                {v.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </section>

                

            </main>
        </div>
    );
}

export default Home;