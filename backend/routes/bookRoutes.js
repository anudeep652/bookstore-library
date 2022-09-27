import express from "express";
import { getAllBooks, registerABook } from "../controllers/bookController.js";
import { adminMiddleWare } from "../middleware/admin.js";
const router = express.Router();

router.route("/").get(getAllBooks).post(adminMiddleWare, registerABook);

export default router;
