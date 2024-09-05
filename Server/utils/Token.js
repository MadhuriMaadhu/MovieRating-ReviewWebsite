import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret_key = process.env.SECRET_KEY;

export const generateToken = (id) => {
  try {
      var token = jwt.sign({ id: id}, process.env.JWT_SECRET_KEY);
      return token;
  } catch (error) {
      console.log(error);
    }
};


export const adminToken = (id) => {
  try {
      var token = jwt.sign({ id: id}, process.env.JWT_SECRET_KEY);
      return token;
  } catch (error) {
      console.log(error);
    }
};
