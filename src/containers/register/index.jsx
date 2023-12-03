import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { tokens } from "../../app/theme";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset, selectAuth } from "../../features/auth/authSlice";
import { PropagateLoader } from "react-spinners";
import { useEffect } from "react";

const Register = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { admin, isLoading, isError, isSuccess, message } =
    useSelector(selectAuth);

  const handleFormSubmit = (values) => {
    dispatch(register(values));
  };


  useEffect(() => {
    if (isSuccess || admin) {
      navigate('/')
    }

    dispatch(reset())
  }, [admin, isError, isSuccess, message, navigate, dispatch])




  return (
    <Box m="20px">
      <Container component="main" maxWidth="xs">
        <Box m="20px" display="flex" justifyContent="center">
          <Header title="Register User" />
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>{" "}
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={registerSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="full-name"
                        name="name"
                        fullWidth
                        variant="filled"
                        id="name"
                        label="Full Name"
                        autoFocus
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        variant="filled"
                        fullWidth
                        id="username"
                        label="userName"
                        name="username"
                        autoComplete="username"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                        error={!!touched.username && !!errors.username}
                        helperText={touched.username && errors.username}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        variant="filled"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        variant="filled"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        variant="filled"
                        fullWidth
                        name="password_confirmation"
                        label="Password Confirmation"
                        type="password"
                        id="password_confirmation"
                        autoComplete="password_confirmation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password_confirmation}
                        error={
                          !!touched.password_confirmation &&
                          !!errors.password_confirmation
                        }
                        helperText={
                          touched.password_confirmation &&
                          errors.password_confirmation
                        }
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      my: 3,
                      p: 1,
                      backgroundColor: colors.blueAccent[700],
                      color: colors.grey[100],
                    }}
                  >
                      

                    {isLoading ? (
                      <PropagateLoader 
                      size={10}
                      cssOverride={{margin: '0.7rem auto'}}
                      color={colors.primary[100]} 
                      />
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link
                        style={{
                          color: colors.grey[100],
                          textDecoration: "none",
                        }}
                        to={"/login"}
                        variant="body2"
                      >
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

const registerSchema = yup.object().shape({
  name: yup.string().required("required"),
  username: yup.string().required("required"),
  email: yup.string().email().required("required"),
  password: yup.string().required("required"),
  password_confirmation: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export default Register;
