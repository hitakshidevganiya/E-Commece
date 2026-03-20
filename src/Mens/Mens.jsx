import React, { useState } from "react";
import Header from "../Header/Header";
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { Box, Button, Card, CardMedia, Grid, IconButton, Rating, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const images = [
    "../../../public/images/image 2.png",
    "../../../public/images/image 5.png",
    "../../../public/images/image 6.png"
];

function Mens() {

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [size, setSize] = useState("Large");
    const [qty, setQty] = useState(1);
    return (
        <>

            <div className="container">
                <div className="mainmen">
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

                                <Box sx={{mt:3}}>
                                    <Typography>
                                        Select Colors
                                    </Typography>
                                    <Box sx={{display: 'flex', gap:2, mt:1}}>
                                        <Box sx={{width:30, height:30, borderRadius:'50%', bgcolor: "#4b5320"}} />
                                        <Box sx={{width:30, height:30, borderRadius:'50%', bgcolor: "#2f4f4f"}} />
                                        <Box sx={{width:30, height:30, borderRadius:'50%', bgcolor: "#1c1c3c"}} />
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
                </div>
            </div>
        </>
    )
}


export default Mens;