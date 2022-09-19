import React, { useState } from "react";
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

export enum caseEnum {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

type prop = {
  formCase: string;
};

const theme = createTheme();

const Form = ({ formCase }: prop) => {
  const [emptyFieldsError, setEmptyFieldsError] = useState<boolean>(false);
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formCase === caseEnum.REGISTER) {
      if (!formFields.username || !formFields.email || !formFields.password) {
        setEmptyFieldsError(true);
      } else {
        console.log(formFields);
      }
    } else {
      if (!formFields.email || !formFields.password) {
        setEmptyFieldsError(true);
      } else {
        console.log(formFields);
      }
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {emptyFieldsError && (
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
                Please fill all the fields
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
                  <Link href="#" variant="body2">
                    {formCase === caseEnum.REGISTER
                      ? "Already have an account? Login "
                      : "Don't have an account? Sign up"}
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
