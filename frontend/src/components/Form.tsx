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
import { Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { caseEnum, initialStateType, registerType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { login, register, reset } from "../features/user/userSlice";
import { AppDispatch } from "../app/store";
import { RootState } from "../app/store";

type prop = {
  formCase: string;
};

const theme = createTheme();

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
    if (!isError && isSuccess && message === "") {
      navigate("/", { replace: true });
      dispatch(reset());
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
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
                      setEmptyFieldsError(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {emptyFieldsError ? errorMessage : message}
              </Alert>
            </Collapse>
          </>
        )}
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "grey" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {formCase === caseEnum.REGISTER ? "Sign up" : "Login"}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {formCase === "REGISTER" && (
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="username"
                      required
                      fullWidth
                      id="firstName"
                      label="Username"
                      autoFocus
                      value={formFields.username}
                      onChange={(e) =>
                        setFormFields({
                          ...formFields,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    type={"email"}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="off"
                    value={formFields.email}
                    onChange={(e) =>
                      setFormFields({
                        ...formFields,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                </Grid>
                {formCase === caseEnum.REGISTER && (
                  <Grid item xs={12}>
                    <TextField
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
                  </Grid>
                )}
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive information about  new books, marketing promotions and updates via email."
                  />
                </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {formCase === caseEnum.REGISTER ? "Sign up" : "Login"}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link>
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
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Form;
