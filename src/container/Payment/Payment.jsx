import React from "react";

import {
    Box,
    Card,
    Typography
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

import {
    PayPalButtons
} from "@paypal/react-paypal-js";
import { useCreateOrderMutation } from "../../Redux/Api/order.api";

const Payment = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [addOrder] = useCreateOrderMutation();

    const {

        cartItems,

        subtotal,

        discount,

        deliveryFee,

        finalTotal,

        billingData

    } = location.state || {};



    return (

        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#F9F9F9",
                py: 5
            }}
        >

            <div className="container">

                <Card
                    sx={{
                        maxWidth: "700px",
                        margin: "auto",
                        padding: "30px",
                        borderRadius: "20px"
                    }}
                >

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 3
                        }}
                    >
                        Complete Payment
                    </Typography>



                    {/* USER DETAILS */}

                    <Typography sx={{ mb: 1 }}>
                        Name :
                        {" "}
                        {billingData?.firstName}
                        {" "}
                        {billingData?.lastName}
                    </Typography>

                    <Typography sx={{ mb: 1 }}>
                        Email :
                        {" "}
                        {billingData?.email}
                    </Typography>

                    <Typography sx={{ mb: 1 }}>
                        Phone :
                        {" "}
                        {billingData?.phone}
                    </Typography>

                    <Typography sx={{ mb: 3 }}>
                        Address :
                        {" "}
                        {billingData?.address}
                    </Typography>



                    {/* PRODUCTS */}

                    {
                        cartItems?.map((item) => (

                            <Box
                                key={item._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 2
                                }}
                            >

                                <Typography>
                                    {item.name}
                                </Typography>

                                <Typography>
                                    ₹{item.price * item.qty}
                                </Typography>

                            </Box>
                        ))
                    }

                    <hr />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 2
                        }}
                    >

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700
                            }}
                        >
                            Total
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700
                            }}
                        >
                            ₹{finalTotal}
                        </Typography>

                    </Box>



                    {/* PAYPAL BUTTON */}

                    <Box sx={{ mt: 4 }}>

                        <PayPalButtons

                            createOrder={async () => {

                                try {

                                    const response =
                                        await axios.post(

                                            "http://localhost:8080/api/v1/payment/createOrder",

                                            {
                                                products: cartItems,
                                                total: finalTotal
                                            }
                                        );

                                    return response.data.orderId;

                                } catch (error) {

                                    console.log(error);
                                }
                            }}



                            onApprove={async (data) => {

                                try {

                                    // PAYMENT CAPTURE
                                    const response =
                                        await axios.post(

                                            "http://localhost:8080/api/v1/payment/capturePayment",

                                            {

                                                orderId: data.orderID,

                                                products: cartItems,

                                                total: finalTotal,

                                                billingData
                                            }
                                        );



                                    // SAVE ORDER IN DATABASE
                                    const orderData = {

                                        products: cartItems.map((item) => item._id),

                                        paymentId:
                                            response.data.capture.id,

                                        payerId:
                                            response.data.capture.payer
                                                .payer_id,

                                        amount: finalTotal,

                                        status: "completed",

                                        billingData
                                    };



                                    await addOrder(orderData);



                                    alert("Payment Successful");



                                    navigate("/success");

                                } catch (error) {

                                    console.log(error);

                                    alert("Payment Failed");
                                }
                            }}



                            onError={(err) => {

                                console.log(err);

                                alert("Payment Failed");
                            }}

                        />

                    </Box>

                </Card>

            </div>

        </Box>
    );
};

export default Payment;