import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

// console.log ("mongoURI:",process.env.MONGO_URI); 
const mongoURI = process.env.MONGO_URI;
export const connectDB = async () => {
  try {
        await mongoose.connect(mongoURI,{
        });
        console.log("MongoDB database Connected")
  } catch (error) {
    console.error("Error connecting to MongoDB :", error);
  }
};