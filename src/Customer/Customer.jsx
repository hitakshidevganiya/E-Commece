import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';


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



function Customer() {
    return (
        <div className="container">
            <Box className="maincustomer" sx={{ padding: "50px" }}>

                {/* Heading */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold">
                        OUR HAPPY CUSTOMERS
                    </Typography>

                    {/* Arrows (UI only) */}
                    <Box>
                        ← →
                    </Box>
                </Box>

                {/* Cards */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "auto",
                    }}
                >

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    ></Swiper>
                    {testimonials.map((v, i) => (
                        <SwiperSlide>
                            <Card
                                key={i}
                                sx={{
                                    minWidth: 300,
                                    borderRadius: "16px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                }}
                            >

                                <CardContent>

                                    {/* Stars */}
                                    <Box sx={{ display: "flex", color: "#f5a623", mb: 1 }}>
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} fontSize="small" />
                                        ))}
                                    </Box>

                                    {/* Name */}
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Typography fontWeight="bold">{v.name}</Typography>
                                        <CheckCircleIcon
                                            sx={{ color: "green", fontSize: 18, ml: 1 }}
                                        />
                                    </Box>

                                    {/* Text */}
                                    <Typography variant="body2" color="text.secondary">
                                        "{v.text}"
                                    </Typography>
                                </CardContent>
                            </Card></SwiperSlide>

                    ))}
                </Box>
            </Box>
        </div>
    )
}

export default Customer;