import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret_key = process.env.SECRET_KEY;

export const generateToken = (id) => {
  return jwt.sign({ id: id }, secret_key, { expiresIn: "1d" });
};
export const adminToken = (admin) => {
    return jwt.sign({ data: admin.name }, secret_key, {
      expiresIn: "1d",
    });
};
