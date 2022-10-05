import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Collapse, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { caseEnum, registerType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { login, register, reset } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";
import { RootState } from "../app/store";
import { logout } from "../features/user/userSlice";

type prop = {
  formCase: string;
};

const theme = createTheme({
  typography: {
    h1: {
      "@media (max-width:600px)": {
        fontSize: "2em",
        padding: "0 auto",
      },
    },
    h3: {
      "@media (max-width:600px)": {
        fontSize: "1.3em !important",
        marginLeft: "25px",
      },
    },
  },
});

const Form = ({ formCase }: prop) => {
  const [emptyFieldsError, setEmptyFieldsError] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<registerType>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let [errorMessage, setErrorMessage] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isError, message, isSuccess, email, username } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(reset());

    if (formCase === caseEnum.REGISTER) {
      if (
        !formFields.username ||
        !formFields.email ||
        !formFields.password ||
        !formFields.confirmPassword
      ) {
        setErrorMessage("Please fill all the fields");
        setEmptyFieldsError(true);
      } else {
        if (formFields.password === formFields.confirmPassword) {
          setEmptyFieldsError(false);
          dispatch(register(formFields));
        } else {
          setErrorMessage("Passwords doesn't match");
          setEmptyFieldsError(true);
        }

        // console.log(formFields);
      }
    } else {
      if (!formFields.email || !formFields.password) {
        setErrorMessage("Please fill all the fields");

        setEmptyFieldsError(true);
      } else {
        setEmptyFieldsError(false);
        dispatch(login(formFields));
      }
    }
  };

  useEffect(() => {
    setEmptyFieldsError(false);
    dispatch(logout());
    setErrorMessage("");
    if (!isError && isSuccess && message === "") {
      navigate("/");
      dispatch(reset());
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          component="main"
          sx={{
            height: "70vh",
            width: "70vw",
            textAlign: "center",
            margin: "6em auto",

            display: "flex",
            fontFamily: "Josefin Sans",
            // fontWeight: "",
          }}
          className="responsive-width"
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            component={Paper}
            className="responsive-container"
            elevation={3}
            square
          >
            <Grid container>
              <Grid item xs md={12}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "3.5em",
                    padding: 4,
                    fontWeight: 500,
                    paddingBottom: 1,
                    fontFamily: "Josefin Sans",
                    // color: "#24FF00",
                  }}
                  className="text-indigo-600"
                >
                  Bookstore Library
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography
                  variant="h3"
                  style={{ fontSize: "1.5rem", fontFamily: "Josefin Sans" }}
                >
                  The only bookstore you need!
                </Typography>
              </Grid>
            </Grid>

            <Box
              sx={{
                my: 4,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {(emptyFieldsError || isError) && (
                <>
                  <Collapse in={true}>
                    <Alert
                      severity="error"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            dispatch(reset());
                            setEmptyFieldsError(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2, width: "450px" }}
                      className="error-alert"
                    >
                      {emptyFieldsError ? errorMessage : message}
                    </Alert>
                  </Collapse>
                </>
              )}
              <Avatar sx={{ m: 1, bgcolor: "#4f46e5;" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {formCase === caseEnum.REGISTER ? "Sign up" : "Login"}
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                {formCase === caseEnum.REGISTER && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="off"
                    autoFocus={formCase === caseEnum.REGISTER}
                    value={formFields.username}
                    onChange={(e) =>
                      setFormFields({
                        ...formFields,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                )}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  autoFocus={formCase !== caseEnum.REGISTER}
                  value={formFields.email}
                  onChange={(e) =>
                    setFormFields({
                      ...formFields,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={formFields.password}
                  onChange={(e) =>
                    setFormFields({
                      ...formFields,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {formCase === caseEnum.REGISTER && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    autoComplete="off"
                    value={formFields.confirmPassword}
                    onChange={(e) =>
                      setFormFields({
                        ...formFields,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "rgb(79 ,70 ,229)",
                    ":active": {
                      backgroundColor: "rgb(79 ,70 ,229)",
                    },
                    ":hover": {
                      backgroundColor: "rgb(79 ,70 ,229)",
                    },
                  }}
                >
                  {formCase === caseEnum.REGISTER ? "Sign up" : "Login"}
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                    <Link href="#" variant="body2" sx={{ marginLeft: "1px" }}>
                      Forgot password?
                    </Link>
                  </Grid> */}
                  <Grid item>
                    <Link variant="body2">
                      <RouterLink
                        to={
                          formCase === caseEnum.REGISTER
                            ? "/user/login"
                            : "/user/register"
                        }
                      >
                        {formCase === caseEnum.REGISTER
                          ? "Already have an account? Login "
                          : "Don't have an account? Sign up"}
                      </RouterLink>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Form;
