import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Navbar from "../components/Navbar";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Dashboard = () => {
  return (
    <>
      <Navbar />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            marginBottom: "3em",
            maxWidth: 900,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  alt="complex"
                  src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  $19.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
};

export default Dashboard;
