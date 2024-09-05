import express from "express";
import { adminSignup, adminLogin, adminLogout } from "../../controllers/adminController.js";

const router = express.Router();

router.post("/signup", adminSignup);
router.post("/login", adminLogin);
router.post("/logout", adminLogout);

router.put('/update', (req, res) => {
    res.send('Update route');
});

router.delete('/delete', (req, res) => {
    res.send('Delete route');
});

router.get('/userList', (req, res) => {
    res.send('User list');
});

export default router;
