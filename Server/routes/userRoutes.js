import express from 'express';
import bcrypt from "bcrypt";
import { generateToken } from './utils/Token.js';
import User from '../models/userModel.js';
import Review from '../models/reviewModel.js';
import Movie from '../models/movieModel.js';


const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }
        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            return res.status(400).json({ message: "user already exist" });
        }

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const newUser = new User({ name, email, password: hashedPassword});
        await newUser.save();

        const token = generateToken(newUser._id);

        res.cookie("token", token); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


    
export default router;
