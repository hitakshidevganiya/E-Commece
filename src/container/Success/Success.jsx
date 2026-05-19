import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Success = () => {

    const location = useLocation();

    useEffect(() => {

        const saveOrder = async () => {

            try {

                const query =
                    new URLSearchParams(location.search);

                const token = query.get("token");

                console.log("TOKEN :", token);

                if (!token) {

                    alert("Token Not Found");

                    return;
                }

                const billingData =
                    JSON.parse(
                        localStorage.getItem("billingData")
                    );

                const cartItems =
                    JSON.parse(
                        localStorage.getItem("cartItems")
                    );

                const finalTotal =
                    localStorage.getItem("finalTotal");

                const response = await axios.post(

                    "http://localhost:8080/api/v1/payment/capturePayment",

                    {
                        orderId: token,

                        products:
                            cartItems.map(
                                (item) => item._id
                            ),

                        total: finalTotal,

                        billingData
                    }
                );

                console.log(response.data);

                alert("Order Saved Successfully");

            } catch (error) {

                console.log(error);

                alert("Payment Capture Failed");
            }
        };

        saveOrder();

    }, []);

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "100px"
            }}
        >
            <h1>Payment Successful ✅</h1>
        </div>
    );
};

export default Success;