import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import courseRoutes from "./routes/courseRoutes.js";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(morgan("dev"));

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World!" });
});

app.use(express.json());

app.use("/courses", courseRoutes);

export default app;
