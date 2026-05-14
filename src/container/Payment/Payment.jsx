import React from "react";

import {
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Payment() {

    const navigate = useNavigate();

    const location = useLocation();





    const {
        subtotal,
        discount,
        deliveryFee,
        finalTotal,
    } = location.state || {};





    const handlePayment = () => {

        alert("Payment Successful");

        navigate("/success");
    };





    return (

        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#F9F9F9",
                py: 5,
            }}
        >

            <div className="container">

                <Button
                    startIcon={<KeyboardBackspaceIcon />}
                    onClick={() => navigate(-1)}
                    sx={{
                        mb: 3,
                        color: "#000",
                        fontWeight: 600,
                        textTransform: "capitalize",
                    }}
                >
                    Back
                </Button>





                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 4,
                    }}
                >
                    Payment
                </Typography>





                <Grid container spacing={3}>





                    {/* LEFT SIDE */}
                    <Grid size={{ xs: 12, md: 8 }}>

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
                                Select Payment Method
                            </Typography>





                            <Box
                                sx={{
                                    border: "1px solid #E5E5E5",
                                    borderRadius: "15px",
                                    p: 3,
                                    mb: 3,
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    alignItems: "center",
                                }}
                            >

                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    PayPal
                                </Typography>





                                <img
                                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                                    alt=""
                                    style={{
                                        width: "70px",
                                    }}
                                />

                            </Box>





                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handlePayment}
                                sx={{
                                    py: 1.7,
                                    borderRadius: "12px",
                                    backgroundColor: "#000",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    textTransform: "capitalize",
                                }}
                            >
                                Pay ₹{finalTotal}
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
                                Payment Summary
                            </Typography>





                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
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
                                    justifyContent:
                                        "space-between",
                                    mb: 2,
                                }}
                            >

                                <Typography>
                                    Discount
                                </Typography>

                                <Typography color="error">
                                    -₹{discount}
                                </Typography>

                            </Box>





                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
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
                                    justifyContent:
                                        "space-between",
                                }}
                            >

                                <Typography
                                    variant="h6"
                                    fontWeight={700}
                                >
                                    Total
                                </Typography>





                                <Typography
                                    variant="h6"
                                    fontWeight={700}
                                >
                                    ₹{finalTotal}
                                </Typography>

                            </Box>

                        </Card>

                    </Grid>

                </Grid>

            </div>

        </Box>
    );
}

export default Payment;