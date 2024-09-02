import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"; 
import cors from "cors";
import { connectDB } from './config/db.js';
// import userRoutes from "../routes/userRoutes.js";
// import adminRoutes from "../routes/adminRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

// Middleware
app.use(express.json());
app.use(cookieParser());

// app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/admin", adminRoutes);


connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});