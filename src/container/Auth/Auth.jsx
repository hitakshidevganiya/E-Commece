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
import { useForgotPassMutation, useGetAllUserQuery, useLoginMutation, useRegisterMutation, useResetPassMutation, useVerifyMutation } from "../../Redux/Api/auth.api";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { number, object, string } from "yup";



function Auth(props) {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // const [isLoading, error, data] = useGetAllUserQuery();
    const [register] = useRegisterMutation();
    const [verify] = useVerifyMutation();
    const [login] = useLoginMutation();
    // const [forgotPass] = useForgotPassMutation();
    // const [resetPass] = useResetPassMutation();

    // const { types } = useParams();

    // console.log(types);


    const [type, setType] = useState("Sign Up");
    const [otp, setOtp] = useState('Sign Up');

    let initState = {}, authSchema = {};

    if (type === 'Sign Up') {
        initState = {
            name: '',
            email: '',
            password: ''
        }
        authSchema = {
            name: string().required(),
            email: string().email().required(),
            password: string().required()
        }
    } else if (type === 'Verify OTP') {
        initState = {
            otp: null
        }
        authSchema = {
            otp: number().required()
        }
    } else if (type === 'Log In') {

        initState = {
            email: '',
            password: ''
        }
        authSchema = {
            email: string().email().required(),
            password: string().required()
        }
    } else if (type === 'Forgot Pass') {
        initState = {
            email: ''
        }
        authSchema = {
            email: string().email().required()
        }
    } else if (type === 'Reset Pass') {
        initState = {
            password: ''
        }
        authSchema = {
            password: string().required()
        }
    }

    console.log("schema", initState, authSchema)


    // const validationSchema = object({
    //     name: string().required(),
    //     email: string().email().required(),
    //     password: string().required()
    // });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initState,
        validationSchema: object(authSchema),
        onSubmit: async (values, { resetForm }) => {
            console.log("ok")
            console.log(values);

            if (type === 'Sign Up') {
                localStorage.setItem("email", values.email)
                register(values);
                setType('Verify OTP')

            } else if (type === 'Verify OTP') {
                console.log("verify", values)
                verify({ email: localStorage.getItem("email"), otp: values.otp });
                if (otp === 'Reset Pass') {
                    setType('Reset Pass')
                } else {
                    setType('Log In')
                }
            } else if (type === 'Log In') {
                const res = await login(values);
                navigate('/');
            }


            resetForm();
        }
    });

    const { errors } = formik;
    console.log("errors", errors)

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
                    xs={12}
                    sm={6}
                    md={5}
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

                            {
                                type === 'Sign Up' || type === 'Log In' ?
                                    <>
                                        {
                                            type === 'Sign Up' &&

                                            < TextField
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

                                        }
                                        {
                                            type === 'Sign Up' || type === 'Log In' ?
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
                                                /> : ''
                                        }
                                        {
                                            type === 'Sign Up' || type === 'Log In' ?
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
                                                /> : ''
                                        }


                                    </> :
                                    <>
                                        {
                                            type === 'Verify OTP' &&
                                            <TextField
                                                fullWidth
                                                label="Enter OTP"
                                                name="otp"
                                                margin="normal"
                                                value={formik.values.otp}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.otp && Boolean(formik.errors.otp)}
                                                helperText={formik.touched.otp && formik.errors.otp}
                                            />
                                        }
                                    </>

                            }

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, py: 1.5 }}
                                style={{ backgroundColor: "black", textTransform: "capitalize" }}
                            >
                                {type}
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

                            {
                                type === 'Sign Up' ?
                                    <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                                        Already have an account? <a href="#" onClick={() => setType('Log In')}>Log In</a>
                                    </Typography> :
                                    <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                                        Create your account? <a href="#" onClick={() => setType('Sign Up')}>Sign Up</a>
                                    </Typography>
                            }



                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>

    );
};

export default Auth;