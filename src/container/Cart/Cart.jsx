import React, { useState } from "react";
import { Box, Button, Card, Divider, Grid, IconButton, InputBase, TextField, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { HiArrowLongRight } from "react-icons/hi2";
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { useAddCartMutation, useDeleteCartMutation, useGetAllCartQuery, useUpdateCartMutation } from "../../Redux/Api/cart.api";
import { FiTag } from "react-icons/fi";
import { IMAGE_URL } from "../../url/url";



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

    const { data, isLoading, isError } = useGetAllCartQuery();

    const [updateCart] = useUpdateCartMutation();
    const [deleteCart] = useDeleteCartMutation();

    const cartItems = data?.data || [];

    console.log("cart", cartItems);

    if (isLoading) return <h2>Loading...</h2>;

    const handleQty = async (id, qty) => {

        if (qty < 1) return;

        try {

            await updateCart({
                _id: id,
                qty
            }).unwrap();

        } catch (error) {
            console.log(error);
        }
    };
    const handleRemove = async (id) => {

        try {

            await deleteCart(id).unwrap();

        } catch (error) {
            console.log(error);
        }
    };

    const subtotal = cartItems.reduce((sum, item) => {
        return sum + (Number(item.price) * Number(item.qty));
    }, 0);

    const discount = subtotal * 0.2;

    const deliveryFee = subtotal > 0 ? 15 : 0;

    const finalTotal = subtotal - discount + deliveryFee;


    return (

        <div className="cartmain">
            <Box className="cart-page">
                <div className="container">

                    <Typography variant="h3" className="cart-title">
                        YOUR CART
                    </Typography>

                    <Grid container spacing={{ xs: 1, md: 3 }}>

                        <Grid size={{ xs: 12, sm: 8 }} >
                            <Card className="cart-card">

                                {cartItems.map((item, index) => (
                                    // console.log(item)

                                    <Box key={item._id}>
                                        <Box className="cart-item">

                                            <Box
                                                className="item-left"
                                            >
                                                <Box

                                                    sx={{
                                                        backgroundColor: "#F0EEED",
                                                        borderRadius: "12px",
                                                        width: "130px",
                                                        height: "130px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        overflow: "hidden",
                                                    }}

                                                >
                                                    <img src={`${IMAGE_URL}images/product_img/${item.image}`}
                                                        alt=""
                                                        className="item-img"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "contain",
                                                            mixBlendMode: "multiply"
                                                        }}
                                                    />
                                                </Box>

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

                                            <Box className="item-right">
                                                <IconButton
                                                    color="error"
                                                    onClick={() => handleRemove(item._id)}
                                                >
                                                    <DeleteOutlineIcon />
                                                </IconButton>

                                                <Box className="qty-box"  >
                                                    <IconButton
                                                        onClick={() => handleQty(item._id, item.qty - 1)}
                                                    >
                                                        <Remove />
                                                    </IconButton>
                                                    <Typography>{item.qty}</Typography>
                                                    <IconButton
                                                        onClick={() => handleQty(item._id, item.qty + 1)}
                                                    >
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

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Card className="summary-card">

                                <Typography className="summary-title">
                                    Order Summary
                                </Typography>

                                <Box className="row">
                                    <Typography className="subname">Subtotal</Typography>
                                    <Typography className="subtotal"> ₹{subtotal}</Typography>
                                </Box>

                                <Box className="row">
                                    <Typography className="subname">Discount (-20%)</Typography>
                                    <Typography className="discountcart"> -₹{discount}</Typography>
                                </Box>

                                <Box className="row">
                                    <Typography className="subname">Delivery Fee</Typography>
                                    <Typography className="subtotal"> ₹{deliveryFee}</Typography>
                                </Box>

                                <Divider className="dividercss" />

                                <Box className="row total">
                                    <Typography className="totalname">Total</Typography>
                                    <Typography className="totaldoo"> ₹{finalTotal}</Typography>
                                </Box>

                                <Box className="promo">
                                    <Box className="promo-input">

                                        <FiTag className="promo-icon" />

                                        <InputBase
                                            placeholder="Add promo code"
                                            className="promocode"
                                            fullWidth
                                        />

                                    </Box>
                                    <Button className="apply-btn">
                                        Apply
                                    </Button>
                                </Box>


                                <Button className="checkout-btn" fullWidth>
                                    Go to Checkout <HiArrowLongRight className="arrRight" />
                                </Button>
                            </Card>
                        </Grid>

                    </Grid>
                </div>
            </Box>

        </div>
    );
}

export default Cart;