import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    Paper,
    IconButton,
    InputAdornment,
    Divider
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "../../Redux/Api/auth.api";

function Auth () {
    const [showPassword, setShowPassword] = useState(false);

    const [ register, { isLoading } ] = useRegisterMutation();

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Minimum 6 characters")
            .required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            console.log("Register Data:", values);

            register(values);

            resetForm();
        }
    });

    return (


        <div id="autehPag">
            <Divider />

            <Grid container sx={{ marginTop: 10 }} height="100%">


                {/* Left Side Image */}
                <Grid size={6}
                    height="100%">
                    <Box width="100%" height="100%">
                        <img src="../public/images/programming-amico.png" alt="" height='100%' style={{ backgroundColor: "#e9e9e9 ", width: "100%", objectFit: "contain" }} />
                    </Box>
                </Grid>

                {/* Right Side Form */}
                <Grid
                    item
                    // xs={12}
                    // sm={6}
                    // md={5}
                    size={6}
                    component={Paper}
                    elevation={6}
                    square
                    height="100%"
                    sx={{ boxShadow: 0 }}

                >
                    <Box
                        sx={{
                            width: "60%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            margin: "0 auto"

                        }}
                    >

                        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center", mt: 7 }}>
                            Create an account
                        </Typography>

                        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 5, width: "100%" }}>

                            {/* Name */}
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                margin="normal"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />

                            {/* Email */}
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                margin="normal"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                            {/* Password */}
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                margin="normal"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, py: 1.5 }}
                                style={{ backgroundColor: "black", textTransform: "capitalize" }}
                            >
                                Sign Up
                            </Button>

                            <Typography variant="body2" style={{ textAlign: "center", marginTop: " 25px", color: "gray" }}>
                                <Divider>Or</Divider>
                            </Typography>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, py: 1.5 }}
                                style={{ backgroundColor: "white", textTransform: "capitalize", color: "black", boxShadow: "none", border: "1px solid gray" }}
                            >
                                <FcGoogle className="googelicon" />
                                Continue with Google
                            </Button>

                            <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                                Already have an account? <a href="#">Sign In</a>
                            </Typography>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>

    );
};

export default Auth;