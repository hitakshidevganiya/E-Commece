import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Typography,
    TextField,
} from "@mui/material";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useLocation, useNavigate } from "react-router-dom";

import { IMAGE_URL } from "../../url/url";
import axios from "axios";

function CheckOut() {

    const navigate = useNavigate();

    const location = useLocation();





    const {
        cartItems,
        subtotal,
        discount,
        deliveryFee,
        finalTotal,
    } = location.state || {};


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
    });

    useEffect(() => {

        const savedData =
            localStorage.getItem("billingData");

        if (savedData) {

            setFormData(JSON.parse(savedData));
        }

    }, []);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;

        const updatedData = {

            ...formData,

            [name]: value,
        };

        setFormData(updatedData);

        localStorage.setItem(

            "billingData",

            JSON.stringify(updatedData)
        );

        setErrors({

            ...errors,

            [name]: "",
        });
    };


    const validateForm = () => {

        let newErrors = {};

        if (!formData.firstName) {
            newErrors.firstName =
                "First Name is required";
        }

        if (!formData.lastName) {
            newErrors.lastName =
                "Last Name is required";
        }

        if (!formData.email) {
            newErrors.email =
                "Email is required";
        }

        if (!formData.phone) {
            newErrors.phone =
                "Phone Number is required";
        }

        if (!formData.address) {
            newErrors.address =
                "Address is required";
        }

        if (!formData.city) {
            newErrors.city =
                "City is required";
        }

        if (!formData.postalCode) {
            newErrors.postalCode =
                "Postal Code is required";
        }


        setErrors(newErrors);

        return Object.keys(newErrors)
            .length === 0;
    };


    const handleProceed = async () => {

        const isValid = validateForm();

        if (!isValid) return;

        try {

            localStorage.setItem(
                "billingData",
                JSON.stringify(formData)
            );

            const response = await axios.post(

                "http://localhost:8080/api/v1/payment/createOrder",

                {
                    products: cartItems,
                    total: finalTotal
                }
            );

            window.location.href =
                response.data.approveUrl;

        } catch (error) {

            console.log(error);
        }
    };


    return (

        <div className="checkoutmain">

            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#F9F9F9",
                    py: 5,
                    paddingBottom: "180px"
                }}
            >

                <div className="container">

                    <Button
                        startIcon={
                            <KeyboardBackspaceIcon />
                        }
                        onClick={() =>
                            navigate("/cart")
                        }
                        sx={{
                            mb: 3,
                            color: "#000",
                            fontWeight: 600,
                        }}
                    >
                        Back To Cart
                    </Button>



                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 4,
                        }}
                    >
                        Checkout
                    </Typography>





                    <Grid container spacing={3}>





                        {/* LEFT SIDE */}
                        <Grid
                            size={{ xs: 12, md: 8 }}
                        >

                            <Card
                                sx={{
                                    p: 4,
                                    borderRadius: "20px",
                                }}
                            >

                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 3,
                                    }}
                                >
                                    Billing Details
                                </Typography>





                                <Grid
                                    container
                                    spacing={2}
                                >




                                    {/* FIRST NAME */}
                                    <Grid
                                        size={{
                                            xs: 12,
                                            sm: 6,
                                        }}
                                    >

                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="firstName"
                                            value={
                                                formData.firstName
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            error={
                                                !!errors.firstName
                                            }
                                            helperText={
                                                errors.firstName
                                            }
                                        />

                                    </Grid>






                                    {/* LAST NAME */}
                                    <Grid
                                        size={{
                                            xs: 12,
                                            sm: 6,
                                        }}
                                    >

                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="lastName"
                                            value={
                                                formData.lastName
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            error={
                                                !!errors.lastName
                                            }
                                            helperText={
                                                errors.lastName
                                            }
                                        />

                                    </Grid>






                                    {/* EMAIL */}
                                    <Grid
                                        size={{ xs: 12 }}
                                    >

                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            value={
                                                formData.email
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            error={
                                                !!errors.email
                                            }
                                            helperText={
                                                errors.email
                                            }
                                        />

                                    </Grid>






                                    {/* PHONE */}
                                    <Grid
                                        size={{ xs: 12 }}
                                    >

                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={
                                                formData.phone
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            error={
                                                !!errors.phone
                                            }
                                            helperText={
                                                errors.phone
                                            }
                                        />

                                    </Grid>






                                    {/* ADDRESS */}
                                    <Grid
                                        size={{ xs: 12 }}
                                    >

                                        <TextField
                                            fullWidth
                                            label="Address"
                                            name="address"
                                            value={
                                                formData.address
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            error={
                                                !!errors.address
                                            }
                                            helperText={
                                                errors.address
                                            }
                                        />

                                    </Grid>






                                    {/* CITY */}
                                    <Grid
                                        size={{
                                            xs: 12,
                                            sm: 6,
                                        }}
                                    >

                                        <TextField
                                            fullWidth
                                            label="City"
                                            name="city"
                                            value={
                                                formData.city
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            error={
                                                !!errors.city
                                            }
                                            helperText={
                                                errors.city
                                            }
                                        />

                                    </Grid>






                                    {/* POSTAL */}
                                    <Grid
                                        size={{
                                            xs: 12,
                                            sm: 6,
                                        }}
                                    >

                                        <TextField
                                            fullWidth
                                            label="Postal Code"
                                            name="postalCode"
                                            value={
                                                formData.postalCode
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            error={
                                                !!errors.postalCode
                                            }
                                            helperText={
                                                errors.postalCode
                                            }
                                        />

                                    </Grid>

                                </Grid>






                                {/* PAYMENT */}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        mt: 5,
                                        mb: 3,
                                    }}
                                >
                                    Payment Method
                                </Typography>





                                <Box
                                    sx={{
                                        border:
                                            "1px solid #E5E5E5",
                                        borderRadius:
                                            "12px",
                                        p: 3,
                                        display:
                                            "flex",
                                        justifyContent:
                                            "space-between",
                                        alignItems:
                                            "center",
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        PayPal Payment
                                    </Typography>





                                    <img
                                        src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                                        alt=""
                                        style={{
                                            width: "60px",
                                        }}
                                    />

                                </Box>






                                {/* BUTTON */}
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={
                                        handleProceed
                                    }
                                    sx={{
                                        mt: 4,
                                        py: 1.7,
                                        borderRadius:
                                            "12px",
                                        backgroundColor:
                                            "#000",
                                        fontWeight: 700,
                                    }}
                                >
                                    Proceed To Payment
                                </Button>

                            </Card>

                        </Grid>

                        {/* RIGHT SIDE */}
                        <Grid size={{ xs: 12, md: 4 }}>

                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: "20px",
                                }}
                            >

                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 3,
                                    }}
                                >
                                    Order Summary
                                </Typography>

                                {
                                    cartItems?.map((item) => (

                                        <Box
                                            key={item._id}
                                            sx={{
                                                display: "flex",
                                                gap: "15px",
                                                mb: 3,
                                            }}
                                        >

                                            <Box
                                                sx={{
                                                    width: "80px",
                                                    height: "80px",
                                                    backgroundColor: "#F0EEED",
                                                    borderRadius: "10px",
                                                    overflow: "hidden",
                                                }}
                                            >

                                                <img
                                                    src={`${IMAGE_URL}${item.image
                                                        ?.replace(/\\/g, "/")
                                                        ?.replace("public/", "")}`}
                                                    alt=""
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />

                                            </Box>

                                            <Box>

                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>

                                                <Typography>
                                                    Qty : {item.qty}
                                                </Typography>

                                                <Typography>
                                                    ₹
                                                    {item.price * item.qty}
                                                </Typography>

                                            </Box>

                                        </Box>
                                    ))
                                }

                                <Divider sx={{ my: 2 }} />

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 2,
                                    }}
                                >

                                    <Typography>
                                        Subtotal
                                    </Typography>

                                    <Typography>
                                        ₹{subtotal}
                                    </Typography>

                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 2,
                                    }}
                                >

                                    <Typography>
                                        Discount
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "red",
                                        }}
                                    >
                                        -₹{discount}
                                    </Typography>

                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mb: 2,
                                    }}
                                >

                                    <Typography>
                                        Delivery Fee
                                    </Typography>

                                    <Typography>
                                        ₹{deliveryFee}
                                    </Typography>

                                </Box>

                                <Divider sx={{ my: 2 }} />

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                        }}
                                    >
                                        Total
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                        }}
                                    >
                                        ₹{finalTotal}
                                    </Typography>

                                </Box>

                            </Card>

                        </Grid>


                    </Grid>

                </div>

            </Box>

        </div>
    );
}

export default CheckOut;