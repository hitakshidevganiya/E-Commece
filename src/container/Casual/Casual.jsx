import { Box, Button, Card, CardContent, CardMedia, Chip, colors, Divider, Grid, Rating, Slide, Slider, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import usePagination from "@mui/material/usePagination";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import CheckIcon from "@mui/icons-material/Check";
// import '../../Css/header.css'
import React, { useState } from "react";

const products = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        price: 145,
        image: "../../public/images/image 8 (3).png",
        rating: 3.5,

    },
    {
        id: 2,
        name: "Polo with Tipping Details",
        price: 180,
        image: "../../public/images/image 9 (3).png",
        rating: 4.5,

    },
    {
        id: 3,
        name: "Black Striped T-shirt",
        price: 120,
        image: "../../public/images/image 10 (3).png",
        rating: 5.0,
        discount: "-30%"
    },
    {
        id: 4,
        name: "Skinny Fit Jeans",
        price: 240,
        image: "../../public/images/image 8.png",
        rating: 3.5,
        discount: "-20%"
    },
    {
        id: 5,
        name: "Checkered Shirt",
        price: 180,
        image: "../../public/images/image 9.png",
        rating: 4.5,

    },
    {
        id: 6,
        name: "Sleeve striped T-Shirt",
        price: 130,
        image: "../../public/images/image 10.png",
        rating: 4.5,
        discount: "-30%"
    },
    {
        id: 7,
        name: "Vertical Striped shirt",
        price: 212,
        image: "../../public/images/image 7 (2).png",
        rating: 5.0,
        discount: "-20%"
    },
    {
        id: 8,
        name: "Courage Graphic T-shirt",
        price: 145,
        image: "../../public/images/image 8 (2).png",
        rating: 4.0,

    },
    {
        id: 9,
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        image: "../../public/images/image 9 (2).png",
        rating: 3.0,

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

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const colors = ["#00C12B", "red", "#F5DD06", "#F57906", "#06CAF5", "blue", "#7D06F5", "#F506A4", "white", "black"];
    const size = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
    return (
        <div className="container">
            <div className="casualmain">
                {/* <Divider /> */}
                <Box sx={{
                    display: "flex", p: 3, 
                    // "@media (max-width:1400px)": {
                    //     p: 2,
                    // },
                }}>
                    <Grid container spacing={3} >
                        <Grid size={{xs: 6,sm:4,md:4,lg:3}}>
                            <Box className="slider">
                                <Typography variant="subtitle2" className="filtername" sx={{ fontWeight: 'bold' }}>
                                    Filters
                                </Typography>


                                <Divider />

                                <Box sx={{ color: 'gray', my: 2 }} >
                                    <Typography className="filterdata" mt={1}>T-Shirts</Typography>
                                    <Typography className="filterdata" mt={1}>Shorts</Typography>
                                    <Typography className="filterdata" mt={1}>Shirts</Typography>
                                    <Typography className="filterdata" mt={1}>Hoodie</Typography>
                                    <Typography className="filterdata" mt={1}>Jeans</Typography>
                                </Box>

                                <Divider />

                                <Typography variant="subtitle2" className="filtername" sx={{ fontWeight: 'bold', mt: 3 }}>Price</Typography>
                                <Slider defaultValue={[50, 200]} valueLabelDisplay="auto" sx={{ color: 'black' }} />

                                <Divider sx={{ mt: 2 }} />

                                <Typography variant="subtitle2" className="filtername" sx={{ mt: 3, fontWeight: 'bold' }}>
                                    Colors
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 1 }}>
                                    {colors.map((v) => (
                                        <Box
                                            key={v}
                                            onClick={() => setSelectedColor(v)}
                                            sx={{
                                                borderRadius: "50%",
                                                bgcolor: v,
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                border: "1px solid #d6d6d6"
                                            }}
                                            className="colorsss"
                                        >
                                            {selectedColor === v && (
                                                <CheckIcon
                                                    sx={{
                                                        color: v === "white" ? "black" : "white",
                                                        fontSize: 17,

                                                    }}
                                                />
                                            )}
                                        </Box>
                                    ))}
                                </Box>

                                <Divider sx={{ mt: 3 }} />

                                <Typography variant="subtitle2" className="filtername" sx={{ mt: 3, fontWeight: 'bold' }}>
                                    Size
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.1, mt: 1 }}>
                                    {size.map((v) => (
                                        <Chip
                                            key={v}
                                            label={v}
                                            clickable
                                            onClick={() => setSelectedSize(v)}
                                            sx={{
                                                bgcolor: selectedSize === v ? "black" : "#ebebeb",
                                                color: selectedSize === v ? "white" : "black",
                                                // border: "1px solid black",
                                                "&:hover": {
                                                    bgcolor: selectedSize === v ? "black" : "#f5f5f5",
                                                },
                                            }}
                                            className="sizeeeee"
                                        />
                                    ))}
                                </Box>

                                <Divider sx={{ mt: 3 }} />

                                <Typography variant="subtitle2" className="filtername" sx={{ mt: 3, fontWeight: 'bold' }}>
                                    Dress Style
                                </Typography>

                                <Box sx={{ color: 'gray' }} >
                                    <Typography className="filterdata" mt={1}>Casual</Typography>
                                    <Typography className="filterdata" mt={1}>Formal</Typography>
                                    <Typography className="filterdata" mt={1}>Party</Typography>
                                    <Typography className="filterdata" mt={1}>Gym</Typography>
                                </Box>


                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3, borderRadius: 5, background: 'black' }}
                                    style={{ textTransform: 'capitalize' }}

                                >
                                    Apply Filter
                                </Button>
                            </Box>
                        </Grid>

                        <Grid size={{xs: 6,sm:8,md:8,lg:9}}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" mb={2} style={{ fontWeight: "bold" }}>
                                    Casual
                                </Typography>

                                <Grid container spacing={4}>
                                    {products.map((product) => (
                                        // <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                        //     <Card sx={{ borderRadius: 3, width: 300, height: 350 }}>
                                        //         <CardMedia
                                        //             component="img"
                                        //             height="250"
                                        //             image={product.image}

                                        //         />
                                        //         <CardContent>
                                        //             <Typography variant="subtitle1">
                                        //                 {product.name}
                                        //             </Typography>
                                        //             <Typography variant="h6" mt={1}>
                                        //                 ${product.price}
                                        //             </Typography>
                                        //         </CardContent>
                                        //     </Card>
                                        // </Grid>
                                        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }} key={product.id}>

                                            <Card
                                                sx={{
                                                    // p: 1.5,
                                                    boxShadow: "none",
                                                    // border: "1px solid #eee", 
                                                    borderRadius: 3,
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    "&:hover": {
                                                        transform: "translateY(-4px)",
                                                    },
                                                }}
                                            >
                                                {/* Image */}
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                    className="probox"
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        image={product.image}
                                                        
                                                        className="proimg"
                                                    />
                                                </Box>

                                                <CardContent sx={{ p: 1 }}>

                                                    {/* Product Name */}
                                                    <Typography fontWeight="600" className="pronamee">
                                                        {product.name}
                                                    </Typography>


                                                    <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                                                        <Rating value={product.rating} precision={0.5} size="small" />
                                                        <Typography fontSize={14} color="gray">
                                                            {product.rating}/5
                                                        </Typography>
                                                    </Box>

                                                    {/* Price Section */}
                                                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                                                        <Typography fontWeight="bold" fontSize={21}>
                                                            ${product.price}
                                                        </Typography>

                                                        {/* Old Price */}
                                                        <Typography
                                                            sx={{
                                                                textDecoration: "line-through",
                                                                color: "gray",
                                                                fontSize: 20,
                                                            }}
                                                        >
                                                            ${product.price + 40}
                                                        </Typography>

                                                        {/* Discount */}
                                                        <Box
                                                            sx={{
                                                                background: product.discount ? "#ffe5e5" : "transparent",
                                                                color: product.discount ? "red" : "transparent",
                                                                fontSize: 11,
                                                                px: 1.3,
                                                                py: 0.5,
                                                                borderRadius: 3,
                                                            }}
                                                        >
                                                            {product.discount}
                                                        </Box>
                                                    </Box>

                                                </CardContent>
                                            </Card>

                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            <Divider sx={{ mt: 4 }} />

                            <nav style={{ width: "100%" }}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mt: 3,
                                        flexWrap: "wrap",
                                        gap: 2,
                                    }}
                                    className="navbox"
                                >

                                    <Box>
                                        {items
                                            .filter((item) => item.type === "previous")
                                            .map(({ type, ...item }, index) => (
                                                <Button
                                                    key={index}
                                                    {...item}
                                                    variant="outlined"
                                                    sx={{
                                                        borderRadius: 2,
                                                        textTransform: "capitalize",
                                                        fontSize: 13,
                                                        px: 2,
                                                        borderColor: "#ccc",
                                                        color: "black",
                                                    }}
                                                >
                                                    <FaLongArrowAltLeft style={{ fontSize: '15px', marginRight: "5px", alignItems: "center" }} />

                                                    Prev
                                                </Button>
                                            ))}
                                    </Box>


                                    <List
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {items
                                            .filter((item) => item.type !== "previous" && item.type !== "next")
                                            .map(({ page, type, selected, ...item }, index) => {

                                                if (type === "start-ellipsis" || type === "end-ellipsis") {
                                                    return (
                                                        <li key={index}>
                                                            <Typography sx={{ px: 1 }}>…</Typography>
                                                        </li>
                                                    );
                                                }

                                                return (
                                                    <li key={index}>
                                                        <Button
                                                            {...item}
                                                            sx={{
                                                                minWidth: 35,
                                                                height: 35,
                                                                borderRadius: 2,
                                                                fontSize: 14,
                                                                fontWeight: selected ? "bold" : "normal",
                                                                backgroundColor: selected ? "#e6e6e6" : "white",
                                                                color: "gray",
                                                                "&:hover": {
                                                                    backgroundColor: selected ? "#d1d0d0" : "#f5f5f5",
                                                                },
                                                            }}
                                                        >
                                                            {page}
                                                        </Button>
                                                    </li>
                                                );
                                            })}
                                    </List>

                                    {/* 🔹 Next Button (Right) */}
                                    <Box>
                                        {items
                                            .filter((item) => item.type === "next")
                                            .map(({ type, ...item }, index) => (
                                                <Button
                                                    key={index}
                                                    {...item}
                                                    variant="outlined"
                                                    sx={{
                                                        borderRadius: 2,
                                                        textTransform: "capitalize",
                                                        fontSize: 13,
                                                        px: 2,
                                                        borderColor: "#ccc",
                                                        color: "black",
                                                    }}
                                                >
                                                    Next
                                                    <FaLongArrowAltRight style={{ fontSize: '15px', marginLeft: "5px" }} />
                                                </Button>
                                            ))}
                                    </Box>

                                </Box>
                            </nav>
                        </Grid>
                    </Grid>
                </Box >
            </div >
        </div >
    )
}

export default Casual;