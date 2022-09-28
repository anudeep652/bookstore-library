dotenv.config();
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { authorizeUser } from "./middleware/auth.js";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";
import { buyBook, rentBook } from "./controllers/userController.js";

//initializing express app
const app = express();
const PORT = process.env.PORT || 5000;

//middle wares
app.use(express.json());
app.use(cors());

//routes
app.use("/user/", userRoutes);
app.use("/book", bookRoutes);
app.post("/:bookName/buy", authorizeUser, buyBook);
app.post("/:bookName/rent", authorizeUser, rentBook);

//database connection
const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
connection();

app.listen(PORT, () => console.log(`Server is Listening on port ${PORT}`));
