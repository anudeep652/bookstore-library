import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Collapse, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { caseEnum, registerType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { login, register, reset } from "../features/user/userSlice";
import { AppDispatch } from "../app/store";
import { RootState } from "../app/store";
import { fontWeight } from "@mui/system";

type prop = {
  formCase: string;
};

const theme = createTheme({
  typography: {
    h1: {
      "@media (max-width:600px)": {
        fontSize: "2.5em",
        padding: "0 auto",
      },
    },
    h3: {
      "@media (max-width:600px)": {
        marginLeft: "15px",
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
  const { isError, message, isSuccess } = useSelector(
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

        console.log(formFields);
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
    setErrorMessage("");
    if (!isError && isSuccess && message === "") {
      navigate("/", { replace: true });
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
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://thumbs.dreamstime.com/b/open-book-profit-icons-above-close-up-hd-video-big-concept-221172255.jpg)",
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
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
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
                    color: "#24FF00",
                  }}
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
                    >
                      {emptyFieldsError ? errorMessage : message}
                    </Alert>
                  </Collapse>
                </>
              )}
              <Avatar sx={{ m: 1, bgcolor: "#3be31f" }}>
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
                {formCase === "REGISTER" && (
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#16A000",
                    ":hover": { backgroundColor: "#16A000" },
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
                    <Link href="#" variant="body2">
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
