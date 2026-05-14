import React from "react";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useNavigate } from "react-router-dom";

function Success() {

    const navigate = useNavigate();

    return (

        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#F9F9F9",
            }}
        >

            <CheckCircleIcon
                sx={{
                    fontSize: "100px",
                    color: "green",
                }}
            />





            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    mt: 2,
                }}
            >
                Payment Successful
            </Typography>





            <Typography
                sx={{
                    mt: 2,
                    color: "#666",
                }}
            >
                Thank you for your order
            </Typography>





            <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                    mt: 4,
                    backgroundColor: "#000",
                    borderRadius: "10px",
                    px: 4,
                }}
            >
                Go To Home
            </Button>

        </Box>
    );
}

export default Success;