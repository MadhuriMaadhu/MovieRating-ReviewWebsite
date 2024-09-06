import express from 'express';
import userAuth from '../../middlewares/userAuth.js';
import { userSignup, userLogin, userLogout, userProfile, checkUser, userList} from '../../controllers/userController.js';


const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/logout",userAuth, userLogout);

router.get("/profile", userAuth, userProfile);
router.put("/update");
router.delete("/delete");

router.get("/userList", userList);
router.get("/check-user", userAuth, checkUser);

export default router;