import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { authorizeUser } from "./middleware/auth.js";
import userRoutes from "./routes/user.js";
dotenv.config();
import cors from "cors";

//initializing express app
const app = express();
const PORT = process.env.PORT || 5000;

//middle wares
app.use(express.json());
app.use(cors());

//routes
app.use("/user/", userRoutes);
app.get("/protected", authorizeUser, (req, res) => res.send(req.user));

//database connection
const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
connection();

app.listen(PORT, () => console.log(`Server is Listening on port ${PORT}`));
