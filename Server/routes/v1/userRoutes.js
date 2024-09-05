import express from 'express';
import userAuth from '../../middlewares/userAuth';
import { userSignup, userLogin, userLogout, userProfile, checkUser } from '../../controllers/userController';


const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/logout",userAuth, userLogout);

router.get("/profile", userAuth, userProfile);
router.put("/update");
router.delete("/delete");

router.get("/userList");
router.get("/check-user", userAuth, checkUser);

module.exports = { userRouter: router };