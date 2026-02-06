import express from "express";
import dotenv from "dotenv";

import cors from "cors";



import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import job from "./config/cron.js";
import QuizRoutes from "./routes/quiz.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


job.start()
app.use(cors());
app.use(express.json()); // allows us to accept JSON data in the req.body

// crud
app.use("/api/products", productRoutes);
// quiz app
app.use("/api/quiz", QuizRoutes)



app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
