import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { authorizeUser } from "./middleware/auth.js";
import userRoutes from "./routes/user.js";
dotenv.config();

//initializing express app
const app = express();
const PORT = process.env.PORT || 5000;

//middle wares
app.use(express.json());

//routes
app.use("/user/", userRoutes);
app.get("/protected", authorizeUser, (req, res) => res.send(req.user));

//database connection
const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/book-store");
};
connection();

app.listen(PORT, () => console.log(`Server is Listening on port ${PORT}`));
