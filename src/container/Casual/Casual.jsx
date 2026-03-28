import { Box, Button, Card, CardContent, CardMedia, Chip, colors, Divider, Grid, Slide, Slider, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import usePagination from "@mui/material/usePagination";
// import '../../Css/header.css'
import React from "react";

const products = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        price: 145,
        image: "../../public/images/image 8 (3).png",
    },
    {
        id: 2,
        name: "Polo with Tipping Details",
        price: 180,
        image: "../../public/images/image 9 (3).png",
    },
    {
        id: 3,
        name: "Black Striped T-shirt",
        price: 120,
        image: "../../public/images/image 10 (3).png",
    },
    {
        id: 4,
        name: "Skinny Fit Jeans",
        price: 240,
        image: "../../public/images/image 8.png",
    },
    {
        id: 5,
        name: "Checkered Shirt",
        price: 180,
        image: "../../public/images/image 9.png",
    },
    {
        id: 6,
        name: "Sleeve striped T-Shirt",
        price: 130,
        image: "../../public/images/image 10.png",
    },
    {
        id: 7,
        name: "Vertical Striped shirt",
        price: 212,
        image: "../../public/images/image 7 (2).png",
    },
    {
        id: 8,
        name: "Courage Graphic T-shirt",
        price: 145,
        image: "../../public/images/image 8 (2).png",
    },
    {
        id: 9,
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        image: "../../public/images/image 9 (2).png",
    }
];

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 10,
    display: 'flex',
});

function Casual() {

    const { items } = usePagination({
        count: 10,
    });

    const colors = ["green", "red", "yellow", "orange", "lightblue", "blue", "purple", "pink", "white", "black"];
    const size = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
    return (
        <div className="container">
            <div className="casualmain">
                {/* <Box className="main_container">
                    <Grid container spacing={2}>
                        <Grid xs={12} md={3}>
                            <Box className="sidebar">
                                <Typography variant="h6">Filters</Typography>

                                <Box className='filter-section'>
                                    <Typography>T-Shirts</Typography>
                                    <Typography>Shorts</Typography>
                                    <Typography>Shirts</Typography>
                                    <Typography>Hoodie</Typography>
                                    <Typography>Jeans</Typography>
                                </Box>

                                <Box className='filter-section'>
                                    <Typography>Price</Typography>
                                    <Slider defaultValue={[50, 200]} min={0} max={300} />
                                </Box>

                                <Box className='filter-section'>
                                    <Typography>colors</Typography>
                                    <Box className="color-container">
                                        {
                                            colors.map((v,i) => (
                                                <span key={i} className="color-dot" style={{background:v}}></span>
                                            ))
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box> */}
<Divider />
                <Box sx={{ display: "flex", p: 3 }}>
                    <Grid container spacing={1} >
                        <Grid size={3}>
                            <Box
                                sx={{
                                    width: 260,
                                    bgcolor: "#fff",
                                    p: 2,
                                    borderRadius: 3,
                                    mr: 3,
                                    border: 1,
                                    borderColor: 'gray'
                                }}
                            >
                                <Typography variant="subtitle2" mb={2} sx={{ fontSize: 19, fontWeight: 'bold' }}>
                                    Filters
                                </Typography>

                                <Divider />

                                <Box sx={{ color: 'gray', mb: 2, mt: 2 }} >
                                    <Typography mt={1}>T-Shirts</Typography>
                                    <Typography mt={1}>Shorts</Typography>
                                    <Typography mt={1}>Shirts</Typography>
                                    <Typography mt={1}>Hoodie</Typography>
                                    <Typography mt={1}>Jeans</Typography>
                                </Box>

                                <Divider />

                                <Typography variant="subtitle2" mt={3} sx={{ fontSize: 19, fontWeight: 'bold' }}>Price</Typography>
                                <Slider defaultValue={[50, 200]} valueLabelDisplay="auto" sx={{ color: 'black' }} />

                                <Divider sx={{ mt: 2 }} />

                                <Typography variant="subtitle2" mt={3} sx={{ fontSize: 19, fontWeight: 'bold' }}>
                                    Colors
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1 }}>
                                    {colors.map((v) => (
                                        <Box
                                            key={v}
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                borderRadius: "50%",
                                                bgcolor: v,
                                                cursor: "pointer",
                                            }}
                                        />
                                    ))}
                                </Box>

                                <Divider sx={{ mt: 3 }} />

                                <Typography variant="subtitle2" mt={3} sx={{ fontSize: 19, fontWeight: 'bold' }}>
                                    Size
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                                    {size.map((v) => (
                                        <Chip key={v} label={v} clickable />
                                    ))}
                                </Box>

                                <Divider sx={{ mt: 3 }} />

                                <Typography variant="subtitle2" mt={3} sx={{ fontSize: 19, fontWeight: 'bold' }}>
                                    Dress Style
                                </Typography>

                                <Box sx={{ color: 'gray' }} >
                                    <Typography mt={1}>Casual</Typography>
                                    <Typography mt={1}>Formal</Typography>
                                    <Typography mt={1}>Party</Typography>
                                    <Typography mt={1}>Gym</Typography>
                                </Box>


                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3, borderRadius: 5, background: 'black' }}

                                >
                                    Apply Filter
                                </Button>
                            </Box>
                        </Grid>

                        <Grid size={9}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" mb={2}>
                                    Casual
                                </Typography>

                                <Grid container spacing={3}>
                                    {products.map((product) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                            <Card sx={{ borderRadius: 3, width: 300, height: 350 }}>
                                                <CardMedia
                                                    component="img"
                                                    height="250"
                                                    image={product.image}
                                                />
                                                <CardContent>
                                                    <Typography variant="subtitle1">
                                                        {product.name}
                                                    </Typography>
                                                    <Typography variant="h6" mt={1}>
                                                        ${product.price}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <nav>
                                <List>
                                    {items.map(({ page, type, selected, ...item }, index) => {
                                        let children = null;

                                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                                            children = '…';
                                        } else if (type === 'page') {
                                            children = (
                                                <button
                                                    type="button"
                                                    style={{
                                                        fontW0eight: selected ? 'bold' : undefined,
                                                        padding:5,
                                                        backgroundColor:'white'
                                                    }}
                                                    {...item}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        } else {
                                            children = (
                                                <button type="button" {...item}
                                                style={{padding:5, backgroundColor:'white'}}>
                                                    {type}
                                                </button>
                                            );
                                        }

                                        return <li key={index} style={{padding:'10px'}}>{children}</li>;
                                    })}
                                </List>
                            </nav>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Casual;