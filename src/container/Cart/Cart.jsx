import React, { useState } from "react";
import { Box, Button, Card, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { HiArrowLongRight } from "react-icons/hi2";
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';

const cartItems = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        size: "Large",
        color: "White",
        price: 145,
        img: "../../public/images/image 8 (3).png",
    },
    {
        id: 2,
        name: "Checkered Shirt",
        size: "Medium",
        color: "Red",
        price: 180,
        img: "../../public/images/image 9.png",
    },
    {
        id: 3,
        name: "Skinny Fit Jeans",
        size: "Large",
        color: "Blue",
        price: 240,
        img: "../../public/images/image 8.png",
    }
];

function Cart() {
    const [qty, setQty] = useState(1);

    return (
        <div className="container">
            <div className="cartmain">
                <Box className="cart-page">

                    {/* Breadcrumb */}
                    {/* <Typography className="breadcrumb">
                    Home &nbsp;&gt;&nbsp; Cart
                </Typography> */}

                    {/* Title */}
                    <Typography variant="h3" className="cart-title">
                        YOUR CART
                    </Typography>

                    <Grid container spacing={{xs:1, md:3}}>

                        {/* LEFT SIDE */}
                        <Grid size={{xs:12,sm:8}} > 
                            <Card className="cart-card">

                                {cartItems.map((item, index) => (
                                    <Box key={item.id}>
                                        <Box className="cart-item">

                                            {/* LEFT */}
                                            <Box className="item-left">
                                                <img src={item.img} alt="" className="item-img" />

                                                <Box>
                                                    <Typography className="item-title">
                                                        {item.name}
                                                    </Typography>

                                                    <Typography className="item-sub">
                                                        Size: {item.size}
                                                    </Typography>

                                                    <Typography className="item-sub">
                                                        Color: {item.color}
                                                    </Typography>

                                                    <Typography className="price">
                                                        ${item.price}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            {/* RIGHT */}
                                            <Box className="item-right">
                                                <IconButton color="error">
                                                    <DeleteOutlineIcon />
                                                </IconButton>

                                                <Box className="qty-box"  >
                                                    <IconButton >
                                                        <Remove />
                                                    </IconButton>
                                                    <Typography>1</Typography>
                                                    <IconButton>
                                                        <Add />
                                                    </IconButton>
                                                </Box>
                                            </Box>

                                        </Box>

                                        {index !== cartItems.length - 1 && <Divider />}
                                    </Box>
                                ))}

                            </Card>
                        </Grid>

                        {/* RIGHT SIDE */}
                        <Grid size={{xs: 12, sm:4}}>
                            <Card className="summary-card">

                                <Typography className="summary-title">
                                    Order Summary
                                </Typography>

                                <Box className="row">
                                    <Typography className="subname">Subtotal</Typography>
                                    <Typography className="subtotal">$565</Typography>
                                </Box>

                                <Box className="row">
                                    <Typography className="subname">Discount (-20%)</Typography>
                                    <Typography className="discountcart">-$113</Typography>
                                </Box>

                                <Box className="row">
                                    <Typography className="subname">Delivery Fee</Typography>
                                    <Typography className="subtotal">$15</Typography>
                                </Box>

                                <Divider className="dividercss" />

                                <Box className="row total">
                                    <Typography className="totalname">Total</Typography>
                                    <Typography className="totaldoo">$467</Typography>
                                </Box>

                                {/* Promo */}
                                <Box className="promo">
                                    <TextField
                                        size="small"
                                        placeholder="Add promo code"
                                        fullWidth
                                        className="promocode"
                                    />
                                    <Button className="apply-btn">
                                        Apply
                                    </Button>
                                </Box>

                                {/* Checkout */}
                                <Button className="checkout-btn" fullWidth>
                                    Go to Checkout <HiArrowLongRight className="arrRight" />
                                </Button>

                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Cart;