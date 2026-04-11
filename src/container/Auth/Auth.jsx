import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";


function Auth() {

    const [showPassword, setShowPassword] = useState(false);

    // ✅ Validation Schema
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .min(6, "Minimum 6 characters")
            .required("Password is required"),
        cpassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Confirm password is required"),
        terms: Yup.boolean().oneOf([true], "Accept terms & conditions")
    });

    // ✅ Formik Setup
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
            terms: false
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Registered Data:", values);
        }
    });

    return (
        <div className="container">
            <div className="authmain">
                <Grid container sx={{ minHeight: "100vh" }}>

                {/* LEFT SIDE */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        background: "#e3f2fd",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 4
                    }}
                >
                    <Box textAlign="center">
                        <Typography variant="h4" fontWeight="bold">
                            Join Our Community 🚀
                        </Typography>
                        <Typography mt={2}>
                            Create your account and start your journey
                        </Typography>
                    </Box>
                </Grid>

                {/* RIGHT SIDE */}
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <Paper elevation={4} sx={{ p: 4, width: "100%", maxWidth: 400 }}>

                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                Register
                            </Typography>

                            <form onSubmit={formik.handleSubmit}>

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

                                {/* Confirm Password */}
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    name="cpassword"
                                    type="password"
                                    margin="normal"
                                    value={formik.values.cpassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
                                    helperText={formik.touched.cpassword && formik.errors.cpassword}
                                />

                                {/* Terms */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="terms"
                                            checked={formik.values.terms}
                                            onChange={formik.handleChange}
                                        />
                                    }
                                    label="I agree to Terms & Conditions"
                                />
                                {formik.touched.terms && formik.errors.terms && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.terms}
                                    </Typography>
                                )}

                                {/* Submit */}
                                <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    sx={{ mt: 2 }}
                                >
                                    Register
                                </Button>

                            </form>

                            <Typography mt={3} textAlign="center">
                                Already have an account?{" "}
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    Login
                                </span>
                            </Typography>

                        </Paper>
                    </Box>
                </Grid>

            </Grid>
            </div>
            </div>
    );
}

export default Auth;