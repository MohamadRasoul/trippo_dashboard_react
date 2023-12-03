import Header from "../../components/Header";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { tokens } from "../../app/theme";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, reset } from "../../features/auth/authSlice";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { admin, isLoading, isError, isSuccess, message } =
    useSelector(selectAuth);

  const handleFormSubmit = (values) => {
    dispatch(login(values));
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
          <Header title="Login User" />
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
            LogIn
          </Typography>

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={loginSchema}
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
                  <TextField
                    margin="normal"
                    variant="filled"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    error={!!touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                  />
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
                  <FormControlLabel
                    control={<Checkbox value="remember" color="secondary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      p:1,
                      backgroundColor: colors.blueAccent[700],
                      color: colors.grey[100],
                    }}
                  >
                    Sign In
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link
                        style={{
                          color: colors.grey[100],
                          textDecoration: "none",
                        }}
                        to={"/register"}
                        variant="body2"
                      >
                        {"Don't have an account? Sign Up"}
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

const loginSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});

const initialValues = {
  username: "",
  password: "",
};

export default Login;
