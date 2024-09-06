// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const secret_key = process.env.SECRET_KEY;

// export const generateToken = (id) => {
//   return jwt.sign({id: id}, secret_key, { expiresIn: "1d" });
// };



// export const adminToken = (id) => {
//     return jwt.sign({id: id}, secret_key, {
//       expiresIn: "1d",
//     });
//   };

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); 

const secret_key = process.env.JWT_SECRET_KEY; 

export const generateToken = (id) => {
  try {
    if (!secret_key) {
      throw new Error('JWT_SECRET_KEY is not defined');
    }
    const token = jwt.sign({ id }, secret_key); 
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const adminToken = (id) => {
  try {
    if (!secret_key) {
      throw new Error('JWT_SECRET_KEY is not defined');
    }
    const token = jwt.sign({ id }, secret_key); 
    return token;
  } catch (error) {
    console.log(error);
  }
};
